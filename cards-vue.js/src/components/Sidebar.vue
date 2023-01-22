<template>
    <h1>
        <span v-if="collapsed"></span>
        <span v-else>Vue Sidebar</span>
    </h1>
    <SideBarLink to="/">НАЧАЛО</SideBarLink>
    <SideBarLink to="/">АБОНАМЕНТИ</SideBarLink>
    <SideBarLink to="/">КОНТАКТИ</SideBarLink>
    
    <div class="sidebar" :style="{width:sidebarWidth}">
        <span class="collapse-icon" :class="{'rotate-180':collapsed}"  @click="toggleSidebar">
            <i class="fas fa-angle-double-left"></i>
        </span>
    </div>
</template>

<script lang="js">
import {collapsed, toggleSidebar, sidebarWidth} from "./components/state.js";
import { defineComponent } from "@vue/composition-api";
import sideBarLink from "./components/sideBarLink";

export default defineComponent({
    props:{},
    components:{sideBarLink},
    setup() {
        return{collapsed, toggleSidebar, sidebarWidth}
    },
})
</script>

<style scoped>
.sidebar{
    color:white;
    background-color: lightgrey;
    float:left;
    position:fixed;
    z-index:1;
    top:0;
    left:0;
    bottom:0;
    padding:0.5em;
    transition:0.3s ease;
    display: flex;
    flex-direction:column;
}
.collapse-icon{
    position:absolute;
    bottom:0;
    padding:0.75em;
    color:white;
    transition:0.2s linear;
}
.rotate-180{
    transform:rotate(180deg);
    transition:0.2s linear;
}

</style>
