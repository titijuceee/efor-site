class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".site-header__menu-icon")
    this.menuContent = document.querySelector(".site-header__menu-content")
    this.siteHeader = document.querySelector(".site-header")
    this.menuItem = document.querySelectorAll(".primary-nav__item")
    this.events()
  }

  events() {
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    this.menuItem.forEach(el => el.addEventListener("click", () => this.hideTheMenu()))
  }

  toggleTheMenu() {
    this.menuContent.classList.toggle("site-header__menu-content--is-visible")
    this.siteHeader.classList.toggle("site-header--is-expanded")
    this.menuIcon.classList.toggle("site-header__menu-icon--close-x")
  }
  hideTheMenu() {
    this.menuContent.classList.remove("site-header__menu-content--is-visible")
    this.siteHeader.classList.remove("site-header--is-expanded")
    this.menuIcon.classList.remove("site-header__menu-icon--close-x")
  }
}

export default MobileMenu