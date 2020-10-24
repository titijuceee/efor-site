class PageLoader {
    constructor() {
        this.pageLoader = document.querySelector(".loader")
        this.events()
    }

    events() {
        window.addEventListener("load", () => this.hideLoader())
    }

    hideLoader() {
        this.pageLoader.style.display = 'none'
    }

}

export default PageLoader