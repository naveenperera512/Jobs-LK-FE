<template>
  <div>
    <template v-if="!$auth.loggedIn">
      <div>
        <Client />
      </div>
    </template>
    <template
      v-if="$auth.loggedIn && $auth.user.is_admin === 1 "
    >
      <div>
        <Admin />
      </div>
    </template>
    <template
      v-if="$auth.loggedIn && $auth.user.is_admin === 0 "
    >
      <div>
        <Employee />
      </div>
    </template>
  </div>
</template>

<script>
import Admin from '../admin'
import Client from '../client'
import Employee from '../employeer'

export default {
  components: {
    Client,
    Employee,
    Admin
  },
  layout: 'auth',
  methods: {}
}
</script>
