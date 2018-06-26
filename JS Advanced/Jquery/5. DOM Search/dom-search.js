function domSearch(content,sensitivity) {

    let container = $(content);
    container.addClass('items-control');

    container.append(`<div class="add-controls"></div>`);

    $(".add-controls").eq(0)
        .append(`<label>Enter text: </label>`)
        .append(`<a class="button" style="display: inline-block">Add</a>`);
    $("label").eq(0).append(`<input>`);

    container.append(`<div class="search-controls"></div>`);

    $(".search-controls").eq(0).append(`<label>Search: </label>`);
    $("label").eq(1).append(`<input>`);

    container.append(`<div class="result-controls"></div>`);
    $(".result-controls").eq(0).append(`<ul class="items-list"></ul>`);

    let add = $(".button").eq(0);

    add.on('click', function () {
        let newItemText = $('.add-controls input').val();
        let newItem = $('<li class="list-item">')
            .append($('<a class="button">X</a>')
                .on('click', function () {
                    $(this).parent().remove();
                }))
            .append($(`<strong>${newItemText}</strong>`));

        let list = $('.items-list').eq(0);
        newItem.appendTo(list);
    });

    let searchBox = $('input').eq(1);

    searchBox.on("change",function () {
        let list = $('strong');
        for(let item of list){
            let search = $(this).val();
            let itemText = item.textContent;

            if(sensitivity === false){
                itemText = item.textContent.toLowerCase();
                search = search.toLowerCase();
            }

            if((itemText.indexOf(search) === -1)){
                $(item).parent().css("display","none");
            }
            else{
                $(item).parent().css("display","block");
            }
        }
    })
}
