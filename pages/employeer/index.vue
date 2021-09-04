<template v-if="$auth.loggedIn && $auth.user.is_admin === 0 ">
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
                  <select id="inputState" class="form-control ">
                    <option >
                      Please select an option
                    </option>
                    <option v-for="(category, index) in categories.data" :key="index">
                      {{ category.name }}
                    </option>
                  </select>
                </b-form-group>
                <b-form-group class="col-md-3 text-white" label="Select Job Type" label-for="inputState">
                  <select id="inputState" class="form-control">
                    <option >
                      Please select an option
                    </option>
                    <option v-for="(jobtype, index) in jobtypes.data" :key="index">
                      {{ jobtype.name }}
                    </option>
                  </select>
                </b-form-group>
                <b-form-group class="col-md-3 text-white" label="Select District" label-for="inputState">
                  <select id="inputState" class="form-control">
                    <option >
                      Please select an option
                    </option>
                    <option v-for="(district, index) in districts.data" :key="index">
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
        <div v-for="(product, index) in product_list.data" :key="index">
          <div class="card mt-2">
            <div class="card-body pb-1">
              <div class="row">
                <div class="col-md-7">
                  <div class="ml-2">
                    <h4 class="bx-bold">
                      {{ product.title }}
                    </h4>
                  </div>
                  <div class="ml-3">
                    <p>{{ product.employee_name }}</p>
                  </div>
                </div>
                <div class="col-md-2 mt-3">
                  <p>{{ product.district.name }} , {{ product.cities.name }}</p>
                </div>
                <div class="col-md-3 ">
                  <div class="d-flex justify-content-end">
                    {{ product.created_at }}
                  </div>
                  <div class="d-flex justify-content-end mr-3 mt-2">
                    <div class="alert alert-primary" role="alert">
                      {{ product.jobs.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--        <div v-for="(pages, index) in product_list.meta" :key="index" class="d-flex align-items-center justify-content-center justify-content-sm-start" cols="12" sm="6">-->
        <!--          <span class="text-muted">Showing {{ pages.from }} to {{pages.to}} of {{pages.total}} entries</span>-->
        <!--        </div>-->
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
  layout: 'auth',
  data () {
    return {
      product_list: {},
      categories: {},
      jobtypes: {},
      districts: {}
    }
  },
  created () {
    this.getProductList()
    this.getDistrictList()
    this.getCategorytList()
    this.getJobTypeList()
  },

  methods: {
    getProductList () {
      try {
        this.$axios.get('api/vacancies')
          .then((response) => {
            this.product_list = (response.data)
            // console.log(this.product_list)
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
            this.categories = (response.data)
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
            this.jobtypes = (response.data)
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
            this.districts = (response.data)
          })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }
  }
}
</script>
