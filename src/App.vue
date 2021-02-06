<template>
  <div id="app" class="VueApp page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button white-letter" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span v-if="randomJokes && randomJokes.value" class="white-letter">RANDOM JOKE: {{randomJokes.value}}</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-list>
          <md-list-item>
            <b-button class="menu-button home-button" block variant="primary" >
              <li>
                <router-link to="/" tag="li"> 
                  <md-icon>move_to_inbox</md-icon>
                  Home 
                </router-link>
              </li>
            </b-button>
          </md-list-item>

          <md-list-item>
            <b-button class="menu-button" block variant="primary" >
              <li>
                <router-link to="/categories" tag="li">
                  <md-icon>list</md-icon>
                  Categories
                </router-link>
              </li>
            </b-button>
          </md-list-item>

          <md-list-item>
            <b-button class="menu-button" block variant="primary" >
              <li>
                <router-link to="/search" tag="li">
                  <md-icon>search</md-icon>
                  Search by text
                </router-link>
              </li>
            </b-button>
          </md-list-item>

          <md-list-item>
            <b-button class="menu-button" block variant="primary" >
              <li>
                <router-link to="/about" tag="li">
                  <md-icon>info</md-icon>
                  About
                </router-link>
              </li>
            </b-button>
          </md-list-item>
          
          <md-list-item>
            <ShareNetwork
            network="email"
            title="Chuck Norris Joke"
            url=""
            :description= "randomJokes.value"
            quote="Did you like the joke?"
          >
           <li>
            <b-button class="menu-button" block variant="primary" >
                  <md-icon>share</md-icon>
                  Share header joke
            </b-button>
           </li>
          </ShareNetwork>
            
          </md-list-item>

        </md-list>
      </md-app-drawer>

      <md-app-content>
        <div v-show="isLoading">
          <md-progress-spinner :md-diameter="30" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
            Loading ...
          <md-progress-spinner class="md-accent" :md-diameter="30" md-mode="indeterminate"></md-progress-spinner>
        </div>
        <div class="main">      
          <transition name="fade" mode="out-in">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </div>      
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
  }
  .md-progress-spinner {
    background-color: seagreen;
    margin: 24px;
  }
  .md-progress-spinner svg path { 
    background-color: seagreen;
    stroke: seagreen; 
    }
  .page-container {
    height: 100vh;
  }
  .md-primary {
    background-color: seagreen;
  }
  .md-app {
    height: 100%;
    width: 100%;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    background-color: white;
  }
  .white-letter {
    color: #fff;
  }
  .router-link {
    text-decoration: 'none';
    color: black;
    cursor: pointer;
  }
  .li a {
    text-decoration: none;
    color: seagreen;
    cursor: pointer;
  }
  .md-app-drawer {
    background-color: seagreen;
    color: #fff
  }
  .md-list-item {
    cursor: pointer;
  }
  .menu-button {
    background-color: rgb(2, 110, 49);
    color: #fff;
    border: 1px solid rgb(2, 110, 49);
  }
  .home-button {
    margin-top: 60px;
  }
</style>

<script>
export default {
  name: 'app',
  data: () => ({
    menuVisible: false
  }),
  computed: {
    isLoading () {
      return this.$store.getters.isLoading
    },
    iamChuckNorris () {
      return this.$store.getters.iamChuckNorris
    },
    randomJokes () {
      return this.$store.getters.randomJokes
    }
  },
   created () {

  },
  methods: {
    generateJokes: function () {
      this.$store.dispatch('getRandomJokes')
    }
  },
  mounted () {
    this.$store.commit('setTabActive', 'random')
    this.generateJokes()
    window.setInterval(() => {
      this.generateJokes()
    }, 30000)
  }
}
</script>
