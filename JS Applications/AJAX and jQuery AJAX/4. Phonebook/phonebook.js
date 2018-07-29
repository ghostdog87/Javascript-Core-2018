function attachEvents() {
    $("#btnLoad").on("click",loadList);

    $("#btnCreate").on("click",function () {
        let person = $("#person").val();
        let phone = $("#phone").val();

        if (person.trim() !== "" && phone.trim() !== "") {
            let url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;
            let request = {
                url: url,
                method: "POST",
                data: JSON.stringify({person, phone}),
                success: createNumbers,
                error: handleError
            };
            $.ajax(request);

            $("#person").val("");
            $("#phone").val("");
        }
    });

    function loadList(){
        let url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;
        let request = {
            url: url,
            method: "GET",
            success: getNumbers,
            error: handleError
        };
        $.ajax(request);
    }

    function getNumbers(message) {
        let list = $("#phonebook");
        list.empty();

        for(let mes in message){
            let person = message[mes].person;
            let phone = message[mes].phone;
            let item = $(`<li>`).text(`${person}: ${phone} `);
            let button = $("<button>").text("[Delete]").on("click",function () {
                let url = `https://phonebook-nakov.firebaseio.com/phonebook/${mes}.json`;
                let request = {
                    url: url,
                    method: "DELETE",
                    success: deleteNumbers,
                    error: handleError
                };
                $.ajax(request);
                item.remove();
            });

            item.append(button);
            list.append(item);

        }
    }

    function createNumbers() {
        loadList();
        console.log("created");
    }

    function deleteNumbers(numbers) {
        //loadList();
        console.log("deleted");
    }

    function handleError(message) {
        console.log(message);
    }

}
