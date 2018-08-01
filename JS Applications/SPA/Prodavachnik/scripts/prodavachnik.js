function startApp() {
    const APP_KEY = "kid_ByiS2woNm";
    const APP_SECRET = "5fe2e76cba54404fab9643f7d1be7471";
    const BASE_URL = "https://baas.kinvey.com/";
    const greet = $("#loggedInUser");
    $("#loadingBox").css({"width":"300px"});
    $("#infoBox").css({"width":"300px"});

    function changeView() {
        if(localStorage.getItem("authtoken") !== null){
            $("#linkHome").show();
            $("#linkLogin").hide();
            $("#linkRegister").hide();
            $("#linkListAds").show();
            $("#linkCreateAd").show();
            $("#linkLogout").show();
        }
        else{
            $("#linkHome").show();
            $("#linkLogin").show();
            $("#linkRegister").show();
            $("#linkListAds").hide();
            $("#linkCreateAd").hide();
            $("#linkLogout").hide();
        }
    }
    function showView(view) {
        $("section").hide();
        greetings();
        switch (view) {
            case "home": $("#viewHome").show();
                break;
            case "login": $("#viewLogin").show();
                break;
            case "register": $("#viewRegister").show();
                break;
            case "ads":
                $("#viewAds").show();
                listAds();
                break;
            case "createAds":
                $("#viewCreateAd").show();
                break;
            case "editAds":
                $("#viewEditAd").show();
                break;
        }
    }

    changeView();
    showView("home");

    // List all sections
    $("#linkHome").on("click",()=>showView("home"));
    $("#linkLogin").on("click",()=>showView("login"));
    $("#linkRegister").on("click",()=>showView("register"));
    $("#linkListAds").on("click",()=>showView("ads"));
    $("#linkCreateAd").on("click",()=>showView("createAds"));
    $("#linkLogout").on("click",logout);

    // List all events
    $("#buttonLoginUser").on("click",login);
    $("#buttonRegisterUser").on("click",register);
    $("#buttonCreateAd").on("click",createAds);
    $("#buttonEditAd").on("click",editAds);

    function greetings() {
        if(localStorage.getItem("authtoken") !== null){
            greet.css("display","inline");
            greet.text(`Welcome ${localStorage.getItem("username")} !`);
        }
        else{
            greet.css("display","none");
            $("#loggedInUser").text("");
        }
    }

    function checkAuthorization(auth){
        if(auth==="basic"){
            return "Basic " + btoa(APP_KEY + ":" + APP_SECRET);
        }
        if(auth==="kinvey"){
            return "Kinvey " + localStorage.getItem("authtoken");
        }
    }
    function request(method,module,url,auth) {
        return {
            url: BASE_URL + module + "/" + APP_KEY + "/" + url,
            method: method,
            headers:{
                "Authorization": checkAuthorization(auth)
            }
        };
    }
    function getData(module,url,auth){
        return $.ajax(request("GET",module,url,auth));
    }
    function postData(module,url,data,auth){
       let req = request("POST",module,url,auth);
       req.data = data;
       return $.ajax(req);
    }
    function putData(module,url,data,auth){
        let req = request("PUT",module,url,auth);
        req.data = data;
        return $.ajax(req);
    }
    function deleteData(module,url,auth){
        return $.ajax(request("DELETE",module,url,auth));
    }
    function saveLocalStorage(data){
        localStorage.setItem("username",data.username);
        localStorage.setItem("id",data._id);
        localStorage.setItem("authtoken",data._kmd.authtoken);
    }

    async function login() {
        let form = $("#formLogin");
        let username = form.find("input[name='username']").val();
        let password = form.find("input[name='passwd']").val();

        try{
            saveLocalStorage(await postData('user','login',{username,password},'basic'));
            changeView();
            showView("ads");
            showInfo("You are logged in!");
        }
        catch (err) {
            handleError(err);
        }
    }
    async function register() {
        let form = $("#formRegister");
        let username = form.find("input[name='username']").val();
        let password = form.find("input[name='passwd']").val();

        try{
            saveLocalStorage(await postData('user','',{username,password},'basic'));
            changeView();
            showView("ads");
            showInfo("You are register!");
        }
        catch (err) {
            handleError(err);
        }
    }
    async function logout() {
        try{
            await postData('user','_logout','','kinvey');
            localStorage.clear();
            changeView();
            showView("home");
            showInfo("You are logged out!");
        }
        catch (err) {
            handleError(err);
        }
    }
    async function listAds() {
        try{
            let data = await getData('appdata','posts','kinvey');
            let container = $("#ads table");
            container.empty();

            if(data.length > 0){
                let table = $("<table>");
                let headers = `<tr>
                    <th>Title</th>
                    <th>Publisher</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Date Published</th>
                </tr>`;

                table.append(headers);

                for(let item of data){
                    let row = $("<tr></tr>");
                    let ad = `<td>${item.title}</td>
                                    <td>${item.publisher}</td>
                                    <td>${item.description}</td>
                                    <td>${item.price}</td>
                                    <td>${item.date}</td>`;
                    row.append(ad);
                    if(item._acl.creator === localStorage.getItem("id")){
                        let buttons = $("<td>");
                        let deleteBt = $(`<a href="#">[Delete]</a>`).on("click",()=>deleteAd(item._id));
                        let editBt = $(`<a href="#">[Edit]</a>`).on("click",()=>editAdView(item));
                        buttons.append(deleteBt).append(editBt);
                        row.append(buttons);
                    }

                    table.append(row);
                }

                container.append(table);
            }
            else{
                container.append("<span>No advertisement available!</span>");
            }
        }
        catch (err) {
            handleError(err);
        }
    }
    async function createAds() {
        let form = $("#formCreateAd");
        let title = form.find("input[name=title]").val();
        let description = form.find("textarea[name=description]").val();
        let date = form.find("input[name=datePublished]").val();
        let price = Number(form.find("input[name=price]").val());
        let publisher = localStorage.getItem("username");

        try{
            await postData('appdata','posts',{price,date,publisher,description,title},'kinvey');
            changeView();
            showView("ads");
            showInfo("Post was created!");
        }
        catch (err) {
            handleError(err);
        }
    }
    async function deleteAd(id){
        try {
            await deleteData("appdata",'posts/' + id,"kinvey");
            showView("ads");
            showInfo("Post was deleted!");
        }
        catch (err) {
            handleError(err);
        }

    }
    async function editAds() {
        let form = $("#formEditAd");
        let id = form.find("input[name=id]").val();
        let title = form.find("input[name=title]").val();
        let description = form.find("textarea[name=description]").val();
        let date = form.find("input[name=datePublished]").val();
        let price = Number(form.find("input[name=price]").val());
        let publisher = localStorage.getItem("username");

        try{
            await putData('appdata','posts/' + id,{price,date,publisher,description,title},'kinvey');
            changeView();
            showView("ads");
            showInfo("Post was edited!");
        }
        catch (err) {
            handleError(err);
        }
    }
    function editAdView(item){
        showView("editAds");

        let form = $("#formEditAd");
        form.find("input[name=id]").val(item._id);
        form.find("input[name=publisher]").val(item.publisher);
        form.find("input[name=title]").val(item.title);
        form.find("textarea[name=description]").val(item.description);
        form.find("input[name=datePublished]").val(item.date);
        form.find("input[name=price]").val(item.price);
    }

    $("#infoBox, #errorBox").on('click', function() {
        $(this).fadeOut()
    });

    function handleError(err){
        let errorBox = $("#errorBox");
        errorBox.text(err);
        errorBox.show();
    }
    function showInfo(info){
        let infoBox = $("#infoBox");
        infoBox.text(info);
        infoBox.show();
        infoBox.fadeOut(2000);
    }

    // Attach AJAX "loading" event listener
    $(document).on({

        ajaxStart: function() { $("#loadingBox").show() },
        ajaxStop: function() { $("#loadingBox").fadeOut()}
    })
}