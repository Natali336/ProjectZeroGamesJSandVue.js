<template>
  <v-container>
    <div>
      <HamburgerMenuComponent :movies="positions"></HamburgerMenuComponent>
      <!-- <Sidebar></Sidebar> -->
     

    </div>
  </v-container>
</template>


<script>




// import hamburgerMenuComponent from "./hamburgerMenuComponent.vue";
// import sidebar from "./components/Sidebar.vue";
import { defineComponent } from "vue";


export default defineComponent({
  name: "AccountManagement",
  props: {
    msg: String,
  },
  data() {
    return {
      positions: [
        {
          image: "assets/images/logo.jpg",
          image1: "assets/images/1.jpg",
          name: "Jon Doe",
          name2: "Architect engineer",
          name3: "We love that guy",
         
        },
        
      ],
      // menuOpen: false,
    };
  },

  // props:{
  //    active:{
  //     type: Boolean,
  //     required:true,
  //     default:false
  //    }
  // },
 
  // components: { sidebar },
  methods: {
    goToHome() {
      this.$router.push("/");
    },

    // toggleActive(){
    //   this.active = !this.active
    
    // }
  },
});
</script>
