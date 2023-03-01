import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    cart: []
  },
  getters: {
    PRODUCTS (state) {
      return state.products
    },
    CART (state) {
      return state.cart
    }
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    SET_CART: (state, payload) => {
      if (payload.valueQuantity === 0) {
        alert('Увеличьте кол-во товара')
      } else {
        payload.product.quantity = payload.valueQuantity
        if (state.cart.length === 0) {
          state.cart.push(payload.product)
        } else {
          const res = state.cart.findIndex((e) => e.article === payload.product.article)
          if (res !== -1) {
            state.cart[res].quantity += payload.product.quantity
          } else {
            state.cart.push(payload.product)
          }
        }
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API ({ commit }) {
      return axios('http://localhost:3000/products', {
        method: 'GET'
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    },
    ADD_TO_CART ({ commit }, payload) {
      commit('SET_CART', payload)
    },
    DELETE_FROM_CART ({ commit }, index) {
      commit('REMOVE_FROM_CART', index)
    }
  },
  modules: {
  }
})
