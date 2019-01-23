<template>
  <el-scrollbar warp-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :desfault-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item v-for="(route,index) in permission_routers" :key="index" :item="route" :base-path="route.path"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";
export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters(["sidebar", "permission_routers"]),
    isCollapse() {
      return this.sidebar.opened;
    }
  },
  created() {
    console.log(this.permission_routers)
  }
};
</script>

<style>
</style>
