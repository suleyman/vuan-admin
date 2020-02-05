<template>
  <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
    <a-menu-item key="1">
      <router-link :to="{ name: 'dashboard'}">
        <a-icon type="home" />
        <span>Home</span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="2">
      <router-link :to="{ name: 'users' }">
        <a-icon type="user" />
        <span>Users</span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="3">
      <router-link :to="{ name: 'about' }">
        <a-icon type="upload" />
        <span>About</span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>