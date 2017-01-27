class BusAlert extends Alert {
    render() {
        return `
      <div class="col-md-1 ${this.isGoodService() ? 'bg-success' : 'bg-danger'}" style="margin:1px; padding-top:2px padding-bottom:2px;">
        ${this.route_name}
      </div>
`;
    }
}