function createBook(wrapper,name,author,isbn) {
    let generator = (function (){
        let id = 1;
        return function (wrapper,name,author,isbn) {
            let wrap = $(wrapper);
            let bookID = $(`<div id=book${id}></div>`);
            let title = $(`<p class="title">${name}</p>`);
            let auth = $(`<p class="author">${author}</p>`);
            let isb = $(`<p class="isbn">${isbn}</p>`);
            let select = $(`<button>Select</button>`);
            let deselect = $(`<button>Deselect</button>`);

            bookID.append(title);
            bookID.append(auth);
            bookID.append(isb);
            bookID.append(select);
            bookID.append(deselect);
            wrap.append(bookID);

            select.on("click",function () {
                this.parentNode.style.border = "2px solid blue";
            });
            deselect.on("click",function () {
                this.parentNode.style.border = "none";
            });
            id++;
        }

    }());
    generator(wrapper,name,author,isbn);
}
