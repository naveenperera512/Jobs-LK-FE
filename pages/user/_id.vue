<template>
  <div>
    <div class="row mb-5">
      <b-col
        md="3"
      />
      <b-col
        md="6"
      >
        <div class="row">
          <div class="col-lg-8">
            <div class="row mb-3">
              <div>
                <div class="p-2 mb-lg-0 ml-5">
                  <div>
                    <nuxt-link to="/user" class="btn bg-info ml-2">
                      Back
                    </nuxt-link>
                  </div>
                  <table class="table table-borderless table-sm mb-0">
                    <tbody>
                    <tr>
                      <th scope="row">
                        Employeer:
                      </th>
                      <td>{{  }} dfdf</td>
                    </tr>
                    <th scope="row">
                      id:
                    </th>
                    <td>{{  }} 1</td>
                    </tbody>
                  </table>
                </div>
                </div>
              </div>
            </div>
        </div>
      </b-col>
      <b-col
        md="3"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  // props: [],
  layout: 'auth',
  data () {
    return {
      // perPage: 10,
      // vacancies: {},
      // categories: {},
      // jobtypes: {},
      // districts: {},
      // beta: {}
    }
  }

  // created () {
  //   this.getVacancyList()
  //   this.getDistrictList()
  //   this.getCategorytList()
  //   this.getJobTypeList()
  // },
  //
  // methods: {
  //   getVacancyList () {
  //     try {
  //       this.$axios.get('api/vacancies/')
  //         .then((response) => {
  //           this.vacancies = (response.data).data
  //           this.beta = (response.data).meta
  //         })
  //     } catch (error) {
  //       // eslint-disable-next-line no-console
  //       console.log(error)
  //     }
  //   },
  //
  //   getCategorytList () {
  //     try {
  //       this.$axios.get(`api/categories${this.$route.params.vacancy}`)
  //         .then((response) => {
  //           this.categories = (response.data).data
  //         })
  //     } catch (error) {
  //       // eslint-disable-next-line no-console
  //       console.log(error)
  //     }
  //   },
  //   getJobTypeList () {
  //     try {
  //       this.$axios.get('api/jobTypes')
  //         .then((response) => {
  //           this.jobtypes = (response.data).data
  //         })
  //     } catch (error) {
  //       // eslint-disable-next-line no-console
  //       console.log(error)
  //     }
  //   },
  //   getDistrictList () {
  //     try {
  //       this.$axios.get('api/districts')
  //         .then((response) => {
  //           this.districts = (response.data).data
  //         })
  //     } catch (error) {
  //       // eslint-disable-next-line no-console
  //       console.log(error)
  //     }
  //   }
  // }
}
</script>
