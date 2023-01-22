<template>
  <v-container>
      <!-- <hamburger-menu-button></hamburger-menu-button> -->
     
         
      




    <div class="container-fluid" style="background-color: black">
      <div class="row align-items-center">
        <div class="col-4 col-sm-3 order-2 d-block d-sm-none">
          <!-- <Slide :isOpen="this.open"> </Slide> -->
          <button class="button-coll hamburger" @click="menuOpen = !menuOpen" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"  aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation">
            <font-awesome-icon :icon="['fas', 'bars']" />
          </button>
        </div>
        <div v-for="movie in movies" :key="movie" class="col-12 col-sm-1 order-1" style="display: inline-block">
          <img contain :src="movie.image" class="logo" style="width: 50%" />
        </div>
        <div class="col-8 col-sm-3 order-3 pt-2 pb-2">
          <div class="input-group search-btn has-search">
            <button class="btn" type="button" style="border-radius: unset; background-color: white" >
              <font-awesome-icon :icon="['fas', 'search']" />
            </button>
            <input type="text" class="form-control" placeholder="Search" style="border-radius: unset"/>
          </div>
        </div>
        <hamburger-menu :class="{menuOpen}">
        <nav class="col-8 order-3 navbar navbar-expand-sm navbar-background"  style="display: inline-block; color: white">
          <div  class="top-icon toggleTopMenu collapse navbar-collapse"  :class="{ 'dropdown-after': menuOpen }"  id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto navigation main-item menu">
              <li class="nav-item">
                <router-link class="menu-style nav-link text-white active"  to="/" >НАЧАЛО</router-link>
              </li>
              <li class="nav-item">
                <router-link  class="menu-style nav-link text-white"  to="/account-management">АБОНАМЕНТИ</router-link>
              </li>
              <li class="nav-item">
                <router-link class="menu-style nav-link text-white" to="/">КОНТАКТИ</router-link>
              </li>
            </ul>
          </div>
        </nav>
        </hamburger-menu>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div v-for="c in 6" :key="c" cols="4" class="col-12 col-sm-4 col-md-3 col-lg-2 mt-2 mb-2">
          <div v-for="movie in movies" :key="movie" class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img contain :src="movie.image1" style="width: 100%; height: 100%" />
              </div>
              <div class="flip-card-back d-flex flex-row" style="height: 300px">
                <h1 class="menu-style mt-2">{{ movie.name }}</h1>
                <p class="menu-style">{{ movie.name2 }}</p>
                <p class="menu-style">{{ movie.name3 }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="js">
// import { Slide } from "@acelords/vue-burger-menu";




import { defineComponent } from "vue";


import { hamburgerMenu, hamburgerMenuButton } from '@profesia/vue-hamburger-menu-component';

export default defineComponent({
  name: "App",
  props: {
    movies: Array,
    active:{
      type: Boolean,
      required:true,
      default:false
     }
  },
  data() {
    return {
      menuOpen: false,   
    };
  },

  methods: {
    goToHome() {
      this.$router.push("/");
    },
     openMenu() {
      this.open = true;
    },
  },
  components: {
        hamburgerMenuButton,
        hamburgerMenu,
    },
  created() {
    hamburgerMenuComponent.changeOnBreakPoint = 'sm'
},

});
</script>

 <style scoped>
.dropdown {
  margin-top: -20px;
  height: 0px;
  background-color: lightgreen;
  transition: height 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.dropdown-after {
  height: calc(100vh - 50px);
  transition: height 0.2s ease;
}
.flip-card {
  background-color: transparent;
  width: 100%;
  height: 300px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
}
.form-control {
  white-space: nowrap;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}

#app {
  background-color: #1b2a3f;
}

.message-body {
  padding: 0;
  max-height: 10em;
  overflow: hidden;
  transition: 0.3s ease all;
}
.arrow-white:hover {
  display: none;
  color: transparent;
}
.is-closed .message-body {
  max-height: 0;
}
.message-content {
  padding: 20px;
}

@media (min-width: 761px) {
  .show-on-desktop {
    width: 50px;
    height: 50px;
  }
}
@media (max-width: 760px) {
  .show-on-mobile {
    width: 40px;
    height: 40px;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .logo {
      display: block;
      height: 70px !important;
      width: 70px !important;
      margin: 0 auto;
    }
  }
}
</style>