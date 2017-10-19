class YouTube extends HTMLElement {
  constructor () {
    super()
    this._settings = {}
    this._settings['width'] = '560px'
    this._settings['height'] = '315px'
    this._settings['autoplay'] = '0'
  }

  set width (value) {
    this._iframeSettings('width', value)
  }

  set height (value) {
    this._iframeSettings('height', value)
  }

  set autoplay (value) {
    this._iframeSettings('autoplay', value)
  }

  set src (value) {
    this._iframeSettings('src', value)
  }

  async _iframeSettings (key, value) {
    this._settings[key] = value
    this._update()
  }

  async _update () {
    var i = document.createElement('iframe')
    var link = `https://www.youtube.com/embed/${this._settings.src.slice(-11)}?autoplay=${this._settings.autoplay}`
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

window.customElements.define('youtube-embed', YouTube)
