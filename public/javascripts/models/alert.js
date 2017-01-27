class Alert {
    isGoodService() {
        if (this.current_message === "") {
            return true;
        }
    }

    renderMessage(msg, isLast) {
        if(msg === '') return '';
        return `${msg}${isLast ? '' : '<br />'}`;
    }
}