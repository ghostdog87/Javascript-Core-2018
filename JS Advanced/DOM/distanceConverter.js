function attachEventsListeners() {
    document.getElementById("convert").addEventListener("click", function () {
        let dist = document.getElementById("inputUnits").value;
        let ans = Number(document.getElementById("inputDistance").value);
        let meters = 0;

        switch(dist){
            case "km": meters = ans * 1000;
                break;
            case "m": meters = ans;
                break;
            case "cm": meters = ans * 0.01;
                break;
            case "mm": meters = ans * 0.001;
                break;
            case "mi": meters = ans * 1609.34;
                break;
            case "yrd": meters = ans * 0.9144;
                break;
            case "ft": meters = ans * 0.3048;
                break;
            case "in": meters = ans * 0.0254;
                break;
        }

        let newDist = document.getElementById("outputUnits").value;

        let result =  0;

        switch(newDist){
            case "km": result = meters / 1000;
                break;
            case "m": result = meters;
                break;
            case "cm": result = meters / 0.01;
                break;
            case "mm": result = meters / 0.001;
                break;
            case "mi": result = meters / 1609.34;
                break;
            case "yrd": result = meters / 0.9144;
                break;
            case "ft": result = meters / 0.3048;
                break;
            case "in": result = meters / 0.0254;
                break;
        }

        document.getElementById("outputDistance").value = result;

    });

}
