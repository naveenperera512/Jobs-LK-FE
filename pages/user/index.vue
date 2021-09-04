<template>
  <div>
    <div class="row bg-info mb-5">
      <b-col
        md="1"
      />
      <b-col
        md="10"
      >
        <div>
          <div class="">
            <div class="mt-5 mb-3 ">
              <div class="form-row d-flex justify-content-center">
                <b-form-group class="col-md-3 text-white " label="Select Job Category" label-for="inputState">
                  <select class="form-control ">
                    <option>
                      Please select an option
                    </option>
                    <option v-for="(category, index) in categories" :key="index">
                      {{ category.name }}
                    </option>
                  </select>
                </b-form-group>
                <b-form-group class="col-md-3 text-white" label="Select Job Type" label-for="inputState">
                  <select class="form-control">
                    <option>
                      Please select an option
                    </option>
                    <option v-for="(jobtype, index) in jobtypes" :key="index">
                      {{ jobtype.name }}
                    </option>
                  </select>
                </b-form-group>
                <b-form-group class="col-md-3 text-white" label="Select District" label-for="inputState">
                  <select class="form-control">
                    <option>
                      Please select an option
                    </option>
                    <option v-for="(district, index) in districts" :key="index">
                      {{ district.name }}
                    </option>
                  </select>
                </b-form-group>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col
        md="1"
      />
    </div>

    <div class="row">
      <b-col
        md="2"
      />
      <b-col
        md="8"
      >
        <div>
          <b-form v-for="(vacancy, index) in vacancies" :key="index" :per-page="perPage" :current-page="beta.current_page"  >
          <div class="card mt-2">
            <div class="card-body pb-1">
              <div class="row">
                <div class="col-md-7">
                  <div class="ml-2">
                    <h4 class="bx-bold">
                      {{ vacancy.title }}
                    </h4>
                  </div>
                  <div class="ml-3">
                    <p>{{ vacancy.employee_name }}</p>
                  </div>
                </div>
                <div class="col-md-2 mt-3">
                  <p>{{ vacancy.district.name }} , {{ vacancy.cities.name }}</p>
                </div>
                <div class="col-md-3 ">
                  <div class="d-flex justify-content-end">
                    {{ vacancy.created_at }}
                  </div>
                  <div class="d-flex justify-content-end mr-3 mt-2">
                    <div class="alert alert-primary" role="alert">
                      {{ vacancy.jobs.name }}
                    </div>
                    <nuxt-link :to="{name: 'user-vacancy' , params: { vacancy: vacancy.id } }">
                      <h1>{{ vacancy.id }}</h1>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </b-form>
        </div>
        <span class="text-muted">Showing {{ beta.from }} to {{beta.to}} of {{beta.total}} entries</span>

      </b-col>
      <b-col
        md="2"
      />
    </div>
  </div>
</template>
<script>
export default {

  components: {},
  props: {
    vacancy: {
      type: Object,
      default: null
    }
  },
  layout: 'auth2',
  data () {
    return {
      perPage: 10,
      vacancies: {},
      categories: {},
      jobtypes: {},
      districts: {},
      beta: {}
    }
  },

  created () {
    this.getVacancyList()
    this.getDistrictList()
    this.getCategorytList()
    this.getJobTypeList()
  },

  methods: {
    getVacancyList () {
      try {
        this.$axios.get('api/vacancies')
          .then((response) => {
            this.vacancies = (response.data).data
            this.beta = (response.data).meta
          })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    },

    getCategorytList () {
      try {
        this.$axios.get('api/categories')
          .then((response) => {
            this.categories = (response.data).data
          })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    },
    getJobTypeList () {
      try {
        this.$axios.get('api/jobTypes')
          .then((response) => {
            this.jobtypes = (response.data).data
          })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    },
    getDistrictList () {
      try {
        this.$axios.get('api/districts')
          .then((response) => {
            this.districts = (response.data).data
          })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }
  }
}
</script>
