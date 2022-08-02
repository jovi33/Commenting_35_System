/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
class ReusableComment extends HTMLElement {
  // connectedCallback() is called when our element gets added to the DOM.
  // eslint-disable-next-line require-jsdoc
  connectedCallback() {
    const template = document.getElementById('template-form');

    //  This function will create a copy of the template’s content and prepare it to be inserted into another document (or document fragment)
    // Using document.importNode allows us to reuse instances of the same template content in multiple locations.
    const node = document.importNode(template.content, true);

    document.body.appendChild(node);
  }
}
window.customElements.define('reusable-comment', ReusableComment);
