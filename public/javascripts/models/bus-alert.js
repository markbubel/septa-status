class BusAlert extends Alert {
    render() {
        return `
      <tr>
        <td>${this.route_name}</td>
        <td>${this.renderMessage(this.current_message, false)}</td>
        <td>${this.renderMessage(this.advisory_message, false)}</td>
        <td>${this.renderMessage(this.detour_message, true)}</td>
      </tr>
`;
    }
}