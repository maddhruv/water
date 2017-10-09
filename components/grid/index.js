const ZComponent = require('zcomponent')

class Grid extends ZComponent {
  set size(value) {
    this.value = value
  }
  get shadow() {
    return `
    <style>
    :host {
      margin-right: auto;
      margin-left: auto;
      padding-right: 15px;
      padding-left: 15px;
      width: 100%;
    }
    </style>
    <slot></slot>
    `
  }
}

class GridCol extends ZComponent {
  constructor() {
    super()
    var col, size;
  }
  set size(col) {
    this.col = col
    //this.size = col.slice(3);
    console.log(this.col.slice(3) * 100 / 12);
    var shadow = document.querySelector('grid-col')
    shadow.innerHTML += `<style>grid-col { width: ${this.col.slice(3)*100/12} }</style>`;
  }

  async _gridSettings(value) {
    this._settings = value;
  }

  get shadow() {
    return `
    <style>
    :host{
      position: relative;
      width: 100%;
      min-height: 1px;
      padding-right: 15px;
      padding-left: 15px;
    }
    </style>
    <slot></slot>
    `
  }
}

window.customElements.define('my-grid', Grid);
window.customElements.define('grid-col', GridCol);
