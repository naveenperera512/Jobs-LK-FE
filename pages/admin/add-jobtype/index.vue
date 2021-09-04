<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="row mb-2">
          <div class="col-sm-12">
            <div class="float-sm-right">
              <nuxt-link class="btn btn-danger mb-2" to="/admin/add-jobtype/add">
                <i class="mdi mdi-plus-circle mr-1" /> Add Products
              </nuxt-link>
            </div>
          </div><!-- end col-->
        </div>
        <div class="row mb-2">
          <!-- Search -->
          <div class="col-sm-12 col-md-6">
            <div id="tickets-table_filter" class="dataTables_filter ">
              <label class="d-inline-flex align-items-center">
                Search:
                <b-form-input
                  v-model="filter"
                  class="form-control form-control-sm ml-2"
                  placeholder="Search..."
                  type="search"
                />
              </label>
            </div>
          </div>
          <!-- End search -->
        </div>
        {{ beta }}
        <!-- Table -->
        <div class="table-responsive mb-0">
          <b-table
            :current-page="currentPage"
            :fields="fields"
            :filter="filter"
            :filter-included-fields="filterOn"
            :items="jobytpes"
            :per-page="perPage"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            class="card"
            responsive="sm"
            table-class="table table-centered w-100"
            thead-tr-class="bg-light"
            @filtered="onFiltered"
          >
            <template #cell(id)="data">
              <p class="m-0 d-inline-block align-middle">
                {{ data.item.id }}
              </p>
            </template>
            <template #cell(name)="data">
              <p class="m-0 d-inline-block align-middle">
                {{ data.item.name }}
              </p>
            </template>
            <template #cell(action)>
              <ul class="list-inline table-action m-0">
                <li class="list-inline-item">
                  <NuxtLink to="/admin/add-jobtype/update">
                    Edit
                  </NuxtLink>
                </li>
              </ul>
            </template>
          </b-table>
        </div>
        <div class="row">
          <div class="col">
            <!-- Display sessions -->
            <div class="d-flex justify-content-between">
              <div class="d-flex justify-content-center p-2">
                <div
                  id="tickets-table_length"
                  class="dataTables_length"
                >
                  <label class="d-inline-flex align-items-center">
                    Display&nbsp;
                    <b-form-select
                      v-model="perPage"
                      size="sm"
                      :options="pageOptions"
                    />&nbsp;Sessions
                  </label>
                </div>
              </div>

            </div>
            <div class="dataTables_paginate paging_simple_numbers float-right">
              <ul class="pagination pagination-rounded">
                <!-- pagination -->
                <b-pagination v-model="currentPage" :total-rows="beta.total" :per-page="perPage" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      jobytpes: {},
      beta: {},
      title: 'Products List',
      items: [],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [3, 5, 10, 100],
      filter: null,
      filterOn: [],
      sortBy: 'age',
      sortDesc: false,
      fields: [{
        key: 'id',
        lable: 'ID'
      },
      {
        key: 'name',
        label: 'Name'
      },
      'action'
      ]
    }
  },
  created () {
    this.getProductList()
  },
  methods: {
    getProductList () {
      this.$axios.get('api/admin/job_types')
        .then((response) => {
          this.jobytpes = (response.data).data
          this.beta = (response.data).meta
          console.log(this.jobytpes)
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    }
  }
}
</script>
