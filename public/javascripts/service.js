class Service {
    getAllStatus(giveback) {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if(this.readyState === 4) {
                const data = JSON.parse(this.responseText);
                const result = [];
                for (var d of data) {
                    const newAlert = Object.assign(new Alert(), d);
                    result.push(newAlert); 
                }
                giveback(result);
            }
        }
        xhttp.open("GET", "/septa/all-status", true);
        xhttp.send();
    }
}