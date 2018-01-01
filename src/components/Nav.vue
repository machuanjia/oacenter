<template>
  <Sider class="aside" width="80">
    <Layout>
      <Header>
        <div class="logo-wrap"><img class="logo" src="../assets/logo.png"/></div>
      </Header>
      <Content>
        <ul class="nav">
          <li v-for="item in navs">

            <router-link :to="item.url" class="opacity">
              <i :class="item.icon"></i>
            </router-link>
          </li>
        </ul>
      </Content>
      <Footer>
        <div class="user-wrap opacity"><Icon type="person"></Icon></div>
      </Footer>
    </Layout>
  </Sider>


</template>
<script>
  export default {
    name: 'AppNav',
    data() {
      return {
        navs:[{
          icon:'fa fa-tachometer',
          name:'空间',
          key:'dashboard',
          url:'/'
        },{
          icon:'fa fa-commenting-o',
          name:'消息',
          key:'message',
          url:'/'
        },{
          icon:'fa fa-tasks',
          name:'项目',
          key:'project',
          url:'/'
        },{
          icon:'fa fa-calendar-check-o',
          name:'日程',
          key:'schedule',
          url:'/'
        },{
          icon:'fa fa-folder-o',
          name:'云盘',
          key:'disk',
          url:'/'
        },{
          icon:'fa fa-file-word-o',
          name:'简报',
          key:'brief',
          url:'/'
        }]
      }
    },
    methods:{

    },
    beforeCreate: function () {
    },
    created: function () {
    },
    beforeMount: function () {
    },
    mounted: function () {
    }
  }
</script>
