import '../styles/styles.css'
import 'lazysizes'
import PageLoader from './modules/PageLoader'
import MobileMenu from './modules/MobileMenu'

new PageLoader();
new MobileMenu();

if (module.hot) {
  module.hot.accept()
}