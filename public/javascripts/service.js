class Service {
    getAllStatus(giveback) {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if(this.readyState === 4) {
                const data = JSON.parse(this.responseText);
                const result = [];
                for (const d of data) {
                    const singleAlert = Object.assign(new SingleAlert(), d);
                    console.log(singleAlert);
                    result.push(singleAlert); 
                }
                giveback(result);
            }
        }
        xhttp.open("GET", "/septa/all-status", true);
        xhttp.send();
    }
}