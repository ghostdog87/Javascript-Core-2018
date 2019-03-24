$(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        let template = $("#cat-template").html();
        let compiled = Handlebars.compile(template);
        let rendered = compiled({
            cats: window.cats
        });
        $("#allCats").html(rendered);
        $(".btn-primary").on("click",toggleInfo);
    }

    function toggleInfo() {
        $(this).next().toggle();

        if($(this).text()==="Show status code"){
            $(this).text("Hide status code");
        }
        else{
            $(this).text("Show status code");
        }
    }

});
