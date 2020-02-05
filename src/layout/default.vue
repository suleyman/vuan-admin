<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo">
        Vuan
      </div>
      <Navigation />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="()=> collapsed = !collapsed" />
      </a-layout-header>
      <a-breadcrumb :style="{ margin: '24px 16px 0px 16px', padding: '24px', background: '#fff'}">
        <a-breadcrumb-item v-if="$router.currentRoute.name != 'dashboard'">
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <router-link :to="{ name: $router.currentRoute.name }">{{ $router.currentRoute.meta.title }}</router-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Navigation from '@/components/layout/navigation.vue'
  export default {
    components: {
      Navigation
    },
    data() {
      return {
        collapsed: false,
      };
    },
  };
</script>
<style>
  #components-layout-demo-custom-trigger {
    min-height: 100vh;
  }
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
    text-align: center;
    line-height: 32px;
    color: #fff;
    font-weight: bold;
  }
</style>