class App {
    constructor() {
        new Service().getAllStatus(alerts=>{
            this.singleAlertList = new SingleAlertList(alerts);
            this.render();
        });
    }
    render() {
        document.getElementById("septa-app").innerHTML = this.singleAlertList.render();
    }
}