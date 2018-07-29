function attachEvents() {
    const URL="https://baas.kinvey.com/appdata/kid_HJmp9YwV7/biggestCatches";
    const USERNAME = "pesho";
    const PASS = "pesho";
    const base64 = btoa(USERNAME+":"+PASS);
    const authentication = {
        "Content-type":"application/json",
        "Authorization":"Basic " + base64
    };

    $(".add").on("click",addCatch);
    $(".load").on("click",loadCatch);


    function addCatch() {
        let captureTime = parseInt($("#addForm .captureTime").val());
        let bait = $("#addForm .bait").val();
        let location = $("#addForm .location").val();
        let species = $("#addForm .species").val();
        let weight = parseFloat($("#addForm .weight").val());
        let angler = $("#addForm .angler").val();

        $.ajax({
            url:URL,
            method: "POST",
            headers: authentication,
            data: JSON.stringify({captureTime:captureTime, bait:bait, location:location, species:species, weight:weight, angler:angler})
        })
            .then(saveCatch)
            .catch(handleError);

        function saveCatch() {
            //console.log("saved catch");
        }
    }

    function loadCatch() {
        $.ajax({
            url:URL,
            method: "GET",
            headers: authentication,
        })
            .then(loadData)
            .catch(handleError);

        function loadData(catches) {
            let container = $("#catches");
            container.empty();

            for(let catche of catches){
                let id = catche["_id"];
                let captureTime = catche.captureTime;
                let bait = catche.bait;
                let location = catche.location;
                let species = catche.species;
                let weight = catche.weight;
                let angler = catche.angler;

                container.append(`<div class="catch" data-id="${id}">
                                    <label>Angler</label>
                                    <input type="text" class="angler" value="${angler}"/>
                                    <label>Weight</label>
                                    <input type="number" class="weight" value="${weight}"/>
                                    <label>Species</label>
                                    <input type="text" class="species" value="${species}"/>
                                    <label>Location</label>
                                    <input type="text" class="location" value="${location}"/>
                                    <label>Bait</label>
                                    <input type="text" class="bait" value="${bait}"/>
                                    <label>Capture Time</label>
                                    <input type="number" class="captureTime" value="${captureTime}"/>
                                    <button class="update">Update</button>
                                    <button class="delete">Delete</button>
                                </div>`);

            }

            $(".delete").on("click",deleteCatch);
            $(".update").on("click",updateCatch);


        }
    }

    function deleteCatch() {
        let container = $(this).parent();
        let id = $(this).parent().attr("data-id");

        $.ajax({
            url:URL + "/" + id,
            method: "DELETE",
            headers: authentication,
        })
            .then(deleteData)
            .catch(handleError);

        function deleteData() {
            container.remove();
            //console.log("deleted catch");
        }
    }

    function updateCatch() {
        let container = $(this).parent();
        let id = container.attr("data-id");

        let captureTime = parseInt(container.find(".captureTime").val());
        let bait = container.find(".bait").val();
        let location = container.find(".location").val();
        let species = container.find(".species").val();
        let weight = parseFloat(container.find(".weight").val());
        let angler = container.find(".angler").val();

        $.ajax({
            url:URL + "/" + id,
            method: "PUT",
            headers: authentication,
            data: JSON.stringify({captureTime:captureTime, bait:bait, location:location, species:species, weight:weight, angler:angler})
        })
            .then(updateData)
            .catch(handleError);

        function updateData() {
            console.log("updated");
        }
    }



    function handleError() {
        console.log("error");
    }
}