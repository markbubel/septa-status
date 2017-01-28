class BusAlert extends Alert {
    constructor() {
        this.element = document.createElement('div');
        this.element.textContent = this.current_message;
        this.element.addEventListener('click', this.getDetails.bind(this));
}

getDetails() {
    console.log(this);
}

render() {
    return this.element;
}
}