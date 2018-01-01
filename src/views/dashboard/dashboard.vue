<template>
  <Layout class="layout-row">
    <DashboardToc ref="toc"></DashboardToc>
    <DashboardMain @toggleToc="toggleToc"></DashboardMain>
  </Layout>
</template>
<script>
import DashboardToc from './toc.vue'
import DashboardMain from './main.vue'
  export default {
    name: 'Dashboard',
    components:{
      DashboardToc,
      DashboardMain
    },
    methods:{
      toggleToc(flag){
        var toc = this.$refs.toc;
        toc.toggleCollapsed(flag)
      }
    }
  }
</script>
