class Alert {
    isGoodService() {
        return this.advisory_message === "" && this.current_message === "" && this.detour_message === "";
    }

    renderMessage(msg, isLast) {
        if(msg === '') return '';
        return `${msg}${isLast ? '' : '<br />'}`;
    }
}