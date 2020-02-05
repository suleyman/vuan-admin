<template>
  <div class="login">
    <div class="login__form">
      <a-row>
        <a-input placeholder="Username" v-model="username" ref="userNameInput"  size="large">
          <a-icon slot="prefix" type="user" />
        </a-input>
      </a-row>
      <a-row>
        <a-input-password placeholder="Password" size="large" v-model="password">
          <a-icon slot="prefix" type="lock" />
        </a-input-password>
      </a-row>
      <a-row>
        <a-button type="primary" @click="login()" :loading="loading">Login</a-button>
        {{ IS_AUTHENTICATED }}
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  data () {
    return {
      username: null,
      password: null,
      loading: false
    }
  },
  created () {
    if (this.$store.getters['auth/IS_AUTHENTICATED'])
      this.$router.push({ name: 'dashboard' })
  },
  computed: {
    ...mapGetters({
      'IS_AUTHENTICATED': 'auth/IS_AUTHENTICATED'
    })
  },
  methods: {
    login () {
      this.loading = true;
      this.$store.dispatch('auth/login', {
        username: this.username,
        password: this.password
      }).then(() => {
        this.loading = false;
        this.$message.success('Successfully logged in', 2.5)
        this.$router.push({ name: 'dashboard' })
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.login {
  background: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &__form {
    border-radius: 4px;
    padding: 50px;
    box-shadow: 0px 0px 25px 1px rgba($color: #000000, $alpha: 0.10);
    .ant-row {
      margin-top: 10px
    }
  }
}
</style>