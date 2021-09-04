<template>
  <div>
    <div class="row">
      <div class="col-12">
            <div class="row mb-2">
              <div class="col-sm-12">
                <div class="float-sm-right">
                  <nuxt-link to="/admin/add-category/add" class="btn btn-danger mb-2">
                    <i class="mdi mdi-plus-circle mr-1" /> Add Products
                  </nuxt-link>
                </div>
              </div><!-- end col-->
            </div>
            <div class="row mb-2">
<!--              <div class="col-sm-12 col-md-6">-->
<!--                <div id="tickets-table_length" class="dataTables_length">-->
<!--                  <label class="d-inline-flex align-items-center">-->
<!--                    Display&nbsp;-->
<!--                    <b-form-select v-model="perPage" size="sm" :options="pageOptions" />&nbsp;customers-->
<!--                  </label>-->
<!--                </div>-->
<!--              </div>-->
              <!-- Search -->
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_filter" class="dataTables_filter ">
                  <label class="d-inline-flex align-items-center">
                    Search:
                    <b-form-input v-model="filter" type="search" placeholder="Search..." class="form-control form-control-sm ml-2" />
                  </label>
                </div>
              </div>
              <!-- End search -->
            </div>
            <!-- Table -->
            <div class="table-responsive mb-0">
              <b-table
                class="card"
                table-class="table table-centered w-100"
                thead-tr-class="bg-light"
                :items="product_list"
                :fields="fields"
                responsive="sm"
                :per-page="perPage"
                :current-page="currentPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :filter="filter"
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
              >
                <template #cell(name)="data">
                  <p class="m-0 d-inline-block align-middle">
                    {{ data.item.name }}
                  </p>
                </template>
                <template #cell(description)="data">
                  <p class="m-0 d-inline-block align-middle">
                    {{ data.item.description }}
                  </p>
                </template>
                <template #cell(action)>
                  <ul class="list-inline table-action m-0">
                    <li class="list-inline-item">
                      <a href="javascript:void(0);" class="action-icon">
                        <i class="mdi mdi-eye" /></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0);" class="action-icon">
                        <i class="mdi mdi-square-edit-outline" /></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0);" class="action-icon">
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
                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" />
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
        key: 'name',
        label: 'Name'
      },
      {
        key: 'description',
        label: 'Description'
      },
      'action'
      ]
    }
  },
  mounted () {
    // Set the initial number of items
    this.totalRows = this.items.length
  },
  created () {
    this.getProductList()
  },
  methods: {
    getProductList () {
      this.$axios.get('api/admin/categories')
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
