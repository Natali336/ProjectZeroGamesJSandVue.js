<template>
    <router-link :to="to" class="link" :class="{active:isActive}">
        <i class="icon" :class="icon" />
        <span v-if='!collapsed'>
             <slot />
        </span>       
    </router-link>
</template>


<script lang="js">
import { defineComponent } from '@vue/composition-api'
import {computed} from 'vue'
import {vueRoute} from 'vue-router'
import {collapsed} from './state'

export default defineComponent({
    props:{
        to:{type: String,required:true},
        icon:{type: String,required:true}
    },
    setup(props) {
        const route = useRoute()
        const isActive = computed(() => route.path === props.to)
        return{isActive, collapsed}
        
    },
})
</script>
<style scoped>
.link{
    display: flex;
    align-items:center;
    cursor:pointer;
    position:relative;
    border-radius:0.25em;
    height:1.5em;
    color:white;
    text-decoration:none;
}
.link:hover{
    background-color: aqua;
}
.link.active{
    background-color: aquamarine;
}
.link .icon{
    flex-shrink: 0;
    width:25px;
    margin-right:25px;
}
</style>
