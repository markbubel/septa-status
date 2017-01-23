class Service {
    getAllStatus(giveback) {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4) {
                const data = JSON.parse(this.responseText);
                const result = [];
                for (var d of data) {
                    if (this.route_id.includes("rr_")) {
                        const newRRAlert = Object.assign(new RegionalRailAlert(), d);
                        result.push(newRRAlert);
                    }
                    else {
                        const newBusAlert = Object.assign(new BusAlert(), d);
                        result.push(newBusAlert);
                    }
                    giveback(result);
                }
            }
            xhttp.open("GET", "/septa/all-status", true);
            xhttp.send();
        }
    }
}