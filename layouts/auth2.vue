<script>
/**
 * Auth-layout
 */
export default {
  data () {
    return {

    }
  }
}
</script>

<template>
  <div>
    <duv>
      <nav class="navbar navbar-expand-lg navbar-light bg-info ">
        <div v-if="!$auth.loggedIn" class="container-fluid">
          <button
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
            class="navbar-toggler"
            data-bs-target="#navbarScroll"
            data-bs-toggle="collapse"
            type="button"
          >
            <span class="navbar-toggler-icon text-white" />
          </button>
          <a class="navbar-brand text-white bx-bold" href="#"><h2>JOBS LK User</h2></a>
          <div class="d-flex justify-content-end">
            <a class="p-2 mt-2 mr-3 text-white" href="auth/login">
              <h5 class="collapse navbar-collapse">
                <img class="mr-1 mt-n1" height="30" src="~/assets/images/users/user.png" width="30">
                <span>Login</span>
              </h5>
            </a>

            <div class="p-2">
              <div id="navbarScroll" class="collapse navbar-collapse">
                <nuxt-link :to="{ path: '/auth/login'}">
                  <button class="btn btn-warning" type="button">
                    POST YOUR AD
                  </button>
                </nuxt-link>
              </div>
              <a
                aria-controls="navbarScroll"
                class=" navbar-toggler"
                data-bs-toggle="collapse"
                href="auth/login"
                type="button"
              >
                <img class="mr-1 mt-n1" height="30" src="~/assets/images/users/user.png" width="30">
              </a>
            </div>
          </div>
        </div>
      </nav>
    </duv>
    <div style="min-height: 70vh">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>
