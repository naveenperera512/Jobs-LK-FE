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
                        <div class="col-sm-12 col-md-6">
                          <div id="tickets-table_length" class="dataTables_length">
                            <label class="d-inline-flex align-items-center">
                              Display&nbsp;
                              <b-form-select v-model="perPage" size="sm" :options="pageOptions" />&nbsp;customers
                            </label>
                          </div>
                        </div>
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
        <!-- Table -->
        <div class="table-responsive mb-0">
          <b-table
            :current-page="currentPage"
            :fields="fields"
            :filter="filter"
            :filter-included-fields="filterOn"
            :items="product_list"
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
            <template #cell(status)="data">
              <span
                :class="{'badge-soft-danger': data.item.status === 'Deactive'}"
                class="badge badge-soft-success"
              >{{ data.item.status }}</span>
            </template>
            <template #cell(action)>
              <ul class="list-inline table-action m-0">
                <li class="list-inline-item">
                  <a class="action-icon" href="javascript:void(0);">
                    <i class="mdi mdi-eye" /></a>
                </li>
                <li class="list-inline-item">
                  <a class="action-icon" href="javascript:void(0);">
                    <i class="mdi mdi-square-edit-outline" /></a>
                </li>
                <li class="list-inline-item">
                  <a class="action-icon" href="javascript:void(0);">
                    <i class="mdi mdi-delete" /></a>
                </li>
              </ul>
            </template>
          </b-table>
        </div>
        <div class="row">
          <div class="col">
            <div class="dataTables_paginate paging_simple_numbers float-right">
              <ul class="pagination pagination-rounded">
                <!-- pagination -->
                <b-pagination v-model="currentPage" :per-page="perPage" :total-rows="rows" />
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
      product_list: [],
      title: 'Products List',
      items: [],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
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
  mounted () {
    //       initial number of items
    this.totalRows = this.items.length
  },
  created () {
    this.getProductList()
  },
  methods: {
    getProductList () {
      this.$axios.get('api/admin/job_types')
        .then((response) => {
          this.product_list = (response.data).data
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    },
    /**
     * Search the table data with search input
     */
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  }
}
</script>
