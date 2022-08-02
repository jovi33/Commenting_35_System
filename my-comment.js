/* eslint-disable require-jsdoc */
class MyComment extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = html`<h1></h1>`;
  }
}

customElements.define('my-comment', MyComment);
