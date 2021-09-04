<template>
  <nuxt-link :to="'vacancies/' + id">
    <div class="title">
      <p>{{ title }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'title',
  props: ['title', 'id']
}
</script>

<style>
.joke {
  padding: 1rem;
  border: 1px dotted #ccc;
  margin: 1rem 0;
}
</style>
