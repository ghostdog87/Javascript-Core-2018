function attachEvents() {
    $("#btnLoadTowns").on("click",loadTowns);

    function loadTowns() {
        let towns = $("#towns").val().split(", ").map(e=>({name:e}));
        let template = $("#towns-template").html();
        let compiled = Handlebars.compile(template);
        let rendered = compiled({
            towns: towns
        });

        $("#root").html(rendered);
    }
}