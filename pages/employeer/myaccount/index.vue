<template>
  <div class="row">
    <b-col
      md="2"
    />
    <b-col
      md="8"
    >
      <div>
        <div class="card">
          <div class="card-body pb-1">
            <h4 class="header-title mb-3">
              My Profile
            </h4><h4 class="header-title mb-3" />
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
                <b-tab title="Vacancy List" title-item-class="mb-2">
                  <b-card-text>Text</b-card-text>
                </b-tab>
                <b-tab title="Settings">
                  <b-card-text>
                    <Settings />
                  </b-card-text>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
      </div>
    </b-col>
    <b-col
      md="2"
    />
  </div>
</template>
<script>
import Settings from './settings/index'
export default {

  components: {
    Settings
  },
  layout: 'auth',
  methods: {}
}
</script>
