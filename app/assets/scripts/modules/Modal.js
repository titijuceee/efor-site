class Modal {
  constructor() {
    this.injectHTML()
    this.modal = document.querySelector(".modal")
    this.closeIcon = document.querySelector(".modal__close")
    this.events()
  }

  events() {
    // listen for close click
    this.closeIcon.addEventListener("click", () => this.closeTheModal())

    // pushes any key
    document.addEventListener("keyup", e => this.keyPressHandler(e))
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeTheModal()
    }
  }

  openTheModal() {
    this.modal.classList.add("modal--is-visible")
  }

  closeTheModal() {
    this.modal.classList.remove("modal--is-visible")
  }

  injectHTML() {
    document.body.insertAdjacentHTML('beforeend', `
    <div class="modal">
      <div class="modal__inner">
        <h2 class="headline headline--centered">Impresszum</h2>
        <div class="wrapper wrapper--narrow">
          <table>
            <tbody>
                <tr>
                    <td><strong>Cégnév:</strong></td>
                    <td>EFOR Fémtechnikai Kft.</td>
                </tr>
                <tr>
                    <td><strong>Székhely/Telephely cím:</strong></td>
                    <td><address>2117 Isaszeg, Gyöngyharmat utca 5. </address></td>
                </tr>
                <tr>
                    <td><strong>Telefonszám:</strong></td>
                    <td><a href="tel:+36204363225">+36-20-436-3225</a></td>
                </tr>
                <tr>
                  <td><strong>E-mail:</strong></td>
                  <td><a href="mailto:eforkft@gmail.com">eforkft@gmail.com</a></td>
              </tr>
                <tr>
                    <td><strong>A céget bejegyző hatóság:</strong></td>
                    <td>Budapest Környéki Törvényszék Cégbírósága</td>
                </tr>
                <tr>
                    <td><strong>Cégjegyzékszám:</strong></td>
                    <td>13-09-205300</td>
                </tr>
                <tr>
                  <td><strong>Adószám:</strong></td>
                  <td>27921256-2-13</td>
              </tr>
                <tr>
                    <td>
                        <strong>Tárhelyszolgáltató:</strong>
                    </td>
                    <td>
                        <a href="https://rackhost.hu">Rackhost Zrt.</a>
                        <address>6722 Szeged Tisza Lajos körút 41.</address>
                        +36/1-445-1200.,
                        <a href="mailto:info@rackhost.hu">info@rackhost.hu</a>
                    </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="modal__close">X</div>
    </div>
    `)
  }
}

export default Modal