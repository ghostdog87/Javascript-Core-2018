function attachEvents() {
    $("#refresh").on("click",function () {
        let url = `https://messenger-test-67063.firebaseio.com/messenger.json`;
        let request = {
            url: url,
            success: handleSuccess,
            error: handleError
        };
        $.ajax(request);


        function handleSuccess(message) {
            let textarea = $("#messages");
            textarea.empty();

            for(let mes in message){
                let name = message[mes].author;
                let content = message[mes].content;
                textarea.append(`${name}: ${content}\n`);
            }
        }

        function handleError(message) {
            let textarea = $("#messages");
            textarea.append(`Error: ${message}`);
        }
    });

    $("#submit").on("click",function () {
        let author = $("#author").val();
        let content = $("#content").val();
        let timestamp = Date.now();

        if(author.trim() !== "" && content.trim() !== ""){
            let url = `https://messenger-test-67063.firebaseio.com/messenger.json`;
            let request = {
                url: url,
                method: "POST",
                data: JSON.stringify({author,content,timestamp}),
                success: handleSuccess,
                error: handleError
            };
            $.ajax(request);
        }

        function handleSuccess(message) {
            let textarea = $("#messages");
            textarea.append(`${author}: ${content}\n`);
        }

        function handleError(message) {
            let textarea = $("#messages");
            textarea.append(`Error: ${message}`);
        }



    });
}
