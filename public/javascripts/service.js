class Service {
    createRegionalRailAlerts(data) {
        let result = [];
        for(const d of data) {
            if(d.route_id.includes('rr_route')) {
                const alert = Object.assign(new RegionalRailAlert(), d);
                result.push(alert);
            }
        }
        return result;
    }

    createBusAlerts(data) {
        let result = [];
        for(const d of data) {
            if(d.route_id.includes('bus_route')) {
                const alert = Object.assign(new BusAlert(), d);
                result.push(alert);
            }
        }
        return result;
    }

    getAllStatus(type, giveback) {
        const self = this;
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4) {
                const data = JSON.parse(this.responseText);
                let result = [];
                if(type === 'regional-rail') result = self.createRegionalRailAlerts(data);
                else if(type === 'bus') result = self.createBusAlerts(data);
                giveback(result);
            }
        }
        xhttp.open("GET", "/septa/all-status", true);
        xhttp.send();
    }
}