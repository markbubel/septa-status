class BusAlert extends Alert {
    render() {
        return `
<div data-example-id="simple-table" class="bs-example">
  <table class="table">
    <caption>Bus Status</caption>
    <thead>
      <tr>
        <th>Route #</th>
        <th>Alerts</th>
        <th>Detours</th>
        <th>Advisories</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${this.route_name}</td>
        <td>${this.renderCurrentMessage()}</td>
        <td>${this.renderAdvisoryMessage()}</td>
        <td>${this.renderDetourMessage()}</td>
      </tr>
`;
    }
}