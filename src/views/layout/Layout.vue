<template>
    <div class="app-wrapper">
        <div class="drawer-bg">
            <sidebar class="sidebar-container"></sidebar>
            <div class="mian-container">
                <nav-bar/>
                <tag-view/>
                <app-main/>
            </div>
        </div>
    </div>
</template>

<script>
// import { Navbar, Sidebar, AppMain, TagsView } from './components'
import AppMain from './components/AppMain'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar/index'
import TagView from './components/TagView'
export default {
    created(){
    },
    components:{
        AppMain,
        NavBar,
        Sidebar,
        TagView
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import '~@/styles/maxin.scss';
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
