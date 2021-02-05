<template>
  <div class="categories">
    <div class="category"
        v-for="cat in categories" 
        :key="cat.id"
        @click="setCategoryJokes(cat)">
      {{ cat }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesPage',
    data () {
      return {
      }
    },
  computed: {
    iamChuckNorris () {
      return this.$store.getters.iamChuckNorris
    },
    categories () {
      return this.$store.getters.categories
    } 
  },
  methods: {
    getCategories: function () {
      this.$store.dispatch('getCategories')
    },
    setCategoryJokes: function (category) {
      this.$store.commit('setSelectedCategory', category)
      this.$store.dispatch('getRandomJokesByCategory', category)
      this.$router.push(`/filterbycategory`)
    }
  },
  mounted () {
    this.getCategories()
  }
}

</script>

<style lang="scss" scoped>
.categories{
  margin: 20px 0;
}
.category{
  display: block;
  padding: 15px 20px;
  margin-bottom: 5px;
  text-transform: uppercase;
  background-color: seagreen ;
  color: #fff;
  cursor: pointer;

  i{
    float: right;
    font-size: 16px;
    margin-top: -4px;
  }
}
</style>
