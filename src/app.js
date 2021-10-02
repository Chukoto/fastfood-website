class IndexView {
  constructor() {
    window.addEventListener('hashchange', (e) =>
      this.onRouteChange(e)
    );
    this.slot = document.querySelector('#slot');

    const hashLocation = window.location.hash.substr(1);
    this.loadContent(hashLocation);
  }

  onRouteChange(e) {
    const hashLocation = window.location.hash.substring(1);
    this.loadContent(hashLocation);
  }

  loadContent(uri) {
    const contentUri = `${uri}.html`;
    fetch(contentUri)
      .then((r) => r.text())
      .then((content) => this.updateSlot(content));
  }

  updateSlot(content) {
    this.slot.innerHTML = content;
  }
}

new IndexView();
