<template>
  <div>
    <div class="search">
      <md-field class="search-text">
      <label class="search-label">Type to search here!</label>
      <md-input v-model="searchText"></md-input>
      <md-button class="md-primary search-btn" @click="searchJokes">
        <md-icon>search</md-icon>
          Search
      </md-button>
    </md-field>        
    </div>

    <div class="chucklist" v-if="searchCount > 0">
      <div class="chuck" 
        v-for="chuck in searchList" 
        :key="chuck.id"
        >
        <md-card > 
            <md-card-header>
                <div class="md-title">Joke</div>
                <div class="md-subhead">Chuck Norris fact:</div>
            </md-card-header>

            <md-card-content>
                {{ chuck.value }}
            </md-card-content>
            <md-card-actions>
              <ShareNetwork
                network="email"
                title="Chuck Norris Joke"
                url=""
                :description= "chuck.value"
                quote="Did you like the joke?"
              >
                <md-button class="md-icon-button">
                  <md-icon>share</md-icon>
                </md-button>
              </ShareNetwork>
            </md-card-actions>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchPage',
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    searchJokes: function () {
      this.$store.dispatch('searchJokes', this.searchText)
    },
  },
  computed: {
    searchResultJokes () {
      return this.$store.getters.searchResultJokes
    },
    searchList: function () {
      return this.searchResultJokes.result
    },
    searchCount: function () {
      return this.searchResultJokes.total
    }
  },
}

</script>

<style lang="scss" scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.search{
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-label{
    padding-left: 20px;
  }
  &-text{
    width: 100%;
    padding: 12px;
    outline: none;
    border: 1px solid seagreen;
  }
  &-btn{ 
    border: 1px solid seagreen;
    background-color: seagreen;
    color: #fff;
  }
}
.chucklist{
  margin: 20px 0;
}
</style>
