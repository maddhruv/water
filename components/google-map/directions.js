class GoogleMapDirections extends HTMLElement {
  constructor () {
    super()
    this._settings = {}
    this._settings['width'] = '600px'
    this._settings['height'] = '450px'
    this._settings['zoom'] = '16'
    this._settings['maptype'] = 'roadmap'
  }

  set width (value) {
    this._iframeSettings('width', value)
  }

  set height (value) {
    this._iframeSettings('height', value)
  }

  set origin (value) {
    this._iframeSettings('origin', value)
  }

  set destination (value) {
    this._iframeSettings('destination', value)
  }

  set zoom (value) {
    this._iframeSettings('zoom', value)
  }

  set maptype (value) {
    this._iframeSettings('maptype', value)
  }

  async _iframeSettings (key, value) {
    this._settings[key] = value
    this._update()
  }

  async _update () {
    var i = document.createElement('iframe')
    var link = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyAAje2eJQ38r_NpjFNqI6ULt3EXcyccEek&origin=${this._settings.origin}&destination=${this._settings.destination}&zoom=${this._settings.zoom}&maptype=${this._settings.maptype}`
    i.setAttribute('src', link)
    i.style.width = this._settings.width
    i.style.height = this._settings.height
    i.setAttribute('frameborder', '0')
    i.setAttribute('allowfullscreen', '1')
    if (this.timeout) clearTimeout(this.timeout)
    this.timeout = setTimeout(async() => {
      this.innerHTML = ''
      this.appendChild(i)
    }, 0)
  }

  get shadow () {
    return `
    <style>
    :host {
      margin: 0 0 0 0;
      padding: 0 0 0 0;
    }
    </style>
    <slot></slot>
    `
  }
}

window.customElements.define('google-map-dir', GoogleMapDirections)
