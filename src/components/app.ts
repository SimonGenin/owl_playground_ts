import { Component, useState, tags } from "@odoo/owl";

const TEMPLATE = tags.xml/*xml*/ `
    <div t-name="App" class="bg-blue-200 m-8 p-4 rounded" t-on-click="update">Hello <t t-esc="state.text"/>
        
    </div>
`;

export class App extends Component {
  static template = TEMPLATE;
  state = useState({ text: "Owl" });
  update() {
    this.state.text = this.state.text === "Owl" ? "World" : "Owl";
  }
}
