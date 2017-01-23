class BusAlert extends Alert {
    render() {
        return `
      <tr>
        <td>${this.route_name}</td>
        <td>${this.renderCurrentMessage()}</td>
        <td>${this.renderAdvisoryMessage()}</td>
        <td>${this.renderDetourMessage()}</td>
      </tr>
`;
    }
}