function addSticker(){
   let title = $(".title").eq(0).val();
   let content = $(".content").eq(0).val();

   if(title !== "" && content !== ""){
      $("#sticker-list").append(`
        <li class="note-content">
        <a class="button">x</a>
        <h2>${title}</h2>
        <hr>
        <p>${content}</p>
        </li>`);
      $(".title").eq(0).val("");
      $(".content").eq(0).val("");

       $( ".button" ).on( "click", function() {
           $(this).parent().remove();
       });
   }
}