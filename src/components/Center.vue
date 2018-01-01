<template>
  <div class="layout">
    <Layout>
      <Sider class="aside" width="80">
        <Layout>
          <Header>
            <div class="logo-wrap"><img class="logo" src="../assets/logo.png"/></div>
          </Header>
          <Content>
            <AppNav></AppNav>
          </Content>
          <Footer>
            <div class="user-wrap opacity"><Icon type="person"></Icon></div>
          </Footer>
        </Layout>
      </Sider>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="0" v-model="isCollapsed" width="300" class="sub-aside">
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
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
          Content
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import AppNav from 'components/Nav'

  export default {
    name: 'Center',
    components: {
      AppNav
    },
    data () {
      return {
        isCollapsed: false
      }
    },
    computed: {
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      collapsedSider () {
        this.$refs.side1.toggleCollapse();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .menu-icon{
    transition: all .3s;
  }
  .rotate-icon{
    transform: rotate(-90deg);
  }
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
