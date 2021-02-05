import axios from 'axios'
let basePath = `https://api.chucknorris.io/`
let CNDb = `https://api.icndb.com/`

const defaultJokeObj = {
  'category': null,
  'id': '',
  'url': '',
  'value': ''
}

export const state = {
  loading: false,
  categories: [],
  selectedCategory: '',
  randomJokes: defaultJokeObj,
  randomJokesByCategory: defaultJokeObj,
  randomListOfJokes: [],
  searchResultJokes: {total: 0, result: []},
}

export const getters = {
  isLoading: (state) => {
    return state.loading
  },
  categories: (state) => {
    return state.categories
  },
  selectedCategory: (state) => {
    return state.selectedCategory
  },
  randomListOfJokes: (state) => {
    return state.randomListOfJokes
  },
  randomJokes: (state) => {
    return state.randomJokes
  },
  randomJokesByCategory: (state) => {
    return state.randomJokesByCategory
  },
  searchResultJokes: (state) => {
    return state.searchResultJokes
  },
}

export const mutations = {
  setLoading (state, value) {
    state.loading = value
  },
  setCategories (state, value) {
    state.categories = value
  },
  setSelectedCategory (state, value) {
    state.selectedCategory = value
  },
  setRandomListOfJokes (state, value) {
    state.randomListOfJokes = value
  },
  setRandomJokes (state, value) {
    state.randomJokes = value
  },
  setRandomJokesByCategory (state, value) {
    state.randomJokesByCategory = value
  },
  setSearchResultJokes (state, value) {
    state.searchResultJokes = value
  },
}

export const actions = {
  getRandomListOfJokes ({commit}) {
    console.log('calling action getRandomListOfJokes()')
    commit('setLoading', true)
    axios.get(`${CNDb}jokes/random/50`)
      .then(function (response) {
        console.log('response ', response)
        commit('setLoading', false)
        commit('setRandomListOfJokes', response.data.value)
      })
      .catch(function (error) {
        console.log('Error: ', error)
        commit('setLoading', false)
      });
  },
  getRandomJokes ({commit}) {
    console.log('calling action getRandomJokes()')
    commit('setLoading', true)
    let timeStamp = new Date().getTime()
    axios.get(`${basePath}jokes/random?timestamp=${timeStamp}/10`)
      .then(function (response) {
        console.log('response ', response)
        commit('setLoading', false)
        commit('setRandomJokes', response.data)
      })
      .catch(function (error) {
        console.log('Error: ', error)
        commit('setLoading', false)
      });
  },
  getRandomJokesByCategory ({commit}, category) {
    console.log('calling action getRandomJokesByCategory()')
    commit('setLoading', true)
    axios.get(`${CNDb}jokes/random?limitTo=${category}`)
      .then(function (response) {
        console.log('response ', response)
        commit('setLoading', false)
        commit('setRandomJokesByCategory', response.data)
      })
      .catch(function (error) {
        console.log('Error: ', error)
        commit('setLoading', false)
      });
  },
  getCategories ({commit}) {
    console.log('calling action getCategories()')
    commit('setLoading', true)
    axios.get(`${CNDb}categories`)
      .then(function (response) {
        console.log('response ', response)
        commit('setLoading', false)
        commit('setCategories', response.data.value)
      })
      .catch(function (error) {
        console.log('Error: ', error)
        commit('setLoading', false)
      });
  },
  searchJokes ({commit}, keyword) {
    console.log('calling action searchJokes()')
    commit('setLoading', true)
    let timeStamp = new Date().getTime()
    axios.get(`${basePath}jokes/search?query=${keyword}&timestamp=${timeStamp}`)
      .then(function (response) {
        console.log('response ', response)
        commit('setLoading', false)
        commit('setSearchResultJokes', response.data)
      })
      .catch(function (error) {
        console.log('Error: ', error)
        commit('setLoading', false)
      });
  }
  
}
