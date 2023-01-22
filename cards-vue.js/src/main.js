import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import "vue-material-design-icons/styles.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(faPhone);
library.add(faSearch);
library.add(faBars);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app');



