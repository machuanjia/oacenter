<template>
  <Sider ref="side" hide-trigger collapsible :collapsed-width="0"  width="300"
         class="sub-aside">
    <div class="sub-aside-content">
      <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
        <MenuItem name="1-1">
          <Icon type="ios-navigate"></Icon>
          <span>Option 1</span>
        </MenuItem>
        <MenuItem name="1-2">
          <Icon type="search"></Icon>
          <span>Option 2</span>
        </MenuItem>
        <MenuItem name="1-3">
          <Icon type="settings"></Icon>
          <span>Option 3</span>
        </MenuItem>
      </Menu>
    </div>
  </Sider>
</template>
<script>
  export default {
    name: 'DashboardToc',
    computed: {
      menuitemClasses() {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      toggleCollapsed(flag){
        this.isCollapsed = flag;
        this.$refs.side.toggleCollapse();
      }
    }
  }
</script>
<style scoped>
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
