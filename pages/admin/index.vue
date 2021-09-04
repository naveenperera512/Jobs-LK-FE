<template v-if="$auth.loggedIn && $auth.user.is_admin === 1 ">
  <div class="row">
    <b-col
      md="1"
    />
    <b-col
      md="10"
    >
      <div>
        <div class="card mt-5">
          <div class="card-body pb-1">
         <h4 class="header-title mb-3" />
            <b-card no-body class="shadow-none border-0">
              <b-tabs
                pills
                card
                vertical
                nav-class="bg-white p-0"
                active-tab-class="pt-1"
                nav-wrapper-class="col-sm-3"
                content-class="pt-0"
              >
                <b-tab title="Add Category" active title-item-class="mb-2">
                  <b-card-text>
                    <AddCategory />
                  </b-card-text>
                </b-tab>
                <b-tab title="Add JobType" title-item-class="mb-2">
                  <b-card-text>
                    <AddJobType />
                  </b-card-text>
                </b-tab>
                <b-tab title="Vacancy Edit" title-item-class="mb-2">
                  <b-card-text>
                    <Vacancy />
                  </b-card-text>
                </b-tab>
                <b-tab title="User Management">
                  <b-card-text>
                    <UseManage/>
                  </b-card-text>
                </b-tab>
                <b-tab title="Settings">
                  <b-card-text>
                    <Settings />
                  </b-card-text>
                </b-tab>
                <b-tab title="Logout" @click="logout">
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
      </div>
    </b-col>
    <b-col
      md="1"
    />
  </div>
</template>
<script>
import AddCategory from './add-category'
import Vacancy from './vacancy'
import AddJobType from './add-jobtype/index'
import Settings from './settings/index'
import UseManage from './add-jobtype/test'
export default {

  components: {
    AddCategory,
    AddJobType,
    Settings,
    Vacancy,
    UseManage
  },
  layout: 'auth',
  methods: {
    async logout () {
      try {
        await this.$auth.logout()
        this.$router.replace({ path: '/user' })
      } catch (error) {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors
        }
      }
    }
  }
}
</script>
