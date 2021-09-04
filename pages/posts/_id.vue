<template>
  <div>
    <h1>{{ category.id }}</h1>
    <p>{{ category.slug }}</p>
  </div>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const post = await $axios.$get('/api/categories/1')
    const category = post.data
    // return { category }
    console.log(category)
  }
}
</script>
