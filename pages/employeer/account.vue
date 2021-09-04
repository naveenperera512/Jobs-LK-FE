<template>
  <div>
    <h1>My Account</h1>

    <button @click="logout">
      <h2>Logout</h2>
    </button>
  </div>
</template>

<script>
export default {
  components: {},
  layout: 'auth',
  asyncData ({ $auth, redirect }) {
    if (!$auth.loggedIn) {
      redirect('/')
    }
  },
  methods: {
    async logout () {
      try {
        await this.$auth.logout()

        this.$router.replace({ path: '/auth/login' })
      } catch (error) {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors
        }
      }
    }
  }
}
</script>
