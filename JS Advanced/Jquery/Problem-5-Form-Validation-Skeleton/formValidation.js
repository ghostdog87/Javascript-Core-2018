function validate() {
    $('#submit').on("click",function (ev) {
        ev.preventDefault();
        checkValidate();
    });

    let company = $('#company');
    let companyInfo = $('#companyInfo');

    company.on('change', function(){
        if (company.is(':checked')) {
            companyInfo.css('display','block');
        } else{
            companyInfo.css('display','none');
        }
    });

    function checkValidate() {
        const userRegex = /^[A-Za-z0-9]{3,20}$/g;
        const passRegex = /^[A-Za-z0-9_]{5,15}$/g;
        const emailRegex = /^\S*(@){1}\S*(\.){1}\S*$/g;


        let valid = $("#valid");
        valid.css("display","none");


        let username = $("#username");
        let password1 = $("#password");
        let password2 = $("#confirm-password");
        let email = $("#email");
        let companyNum = $("#companyNumber");
        let flag = true;

        if(!username.val().match(userRegex)){
            username.css("border-color", "red");
            flag = false;
        }
        else{
            username.css("border-color", "");
        }
        if(!password1.val().match(passRegex) || password1.val() !== password2.val()){
            password1.css("border-color", "red");
            password2.css("border-color", "red");
            flag = false;
        }
        else{
            password1.css("border-color", "");
            password2.css("border-color", "");
        }

        if(!email.val().match(emailRegex)){
            email.css("border-color", "red");
            flag = false;
        }
        else{
            email.css("border-color", "");
        }

        if($('#company').prop("checked")){
            if(Number(companyNum.val()) < 1000 || Number(companyNum.val()) > 9999){
                companyNum.css("border-color", "red");
                flag = false;
            }
            else{
                companyNum.css("border-color", "");
            }
        }

        if(flag){
            valid.css("display","block");
        }



    }

}
