<template>
  <Layout>
    <Header :style="{padding: 0}" class="layout-header-bar">
      <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round"
            size="24"></Icon>
    </Header>
    <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
      Content
    </Content>
  </Layout>
</template>
<script>
  export default {
    name: 'DashboardMain',
    data() {
      return {
        isCollapsed: false
      }
    },
    computed: {
      rotateIcon() {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      }
    },
    methods: {
      collapsedSider() {
        this.isCollapsed = !this.isCollapsed;
        this.$emit('toggleToc' ,this.isCollapsed);
      }
    }
  }
</script>
<style scoped="">
  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .menu-icon {
    transition: all .3s;
  }

  .rotate-icon {
    transform: rotate(-90deg);
  }
</style>
