import { createStore } from 'vuex';

const store = createStore({
    state: {
        isAuthenticated: false,
    },
    mutations: {
        setAuthentication(state, status) {
            state.isAuthenticated = status;
        },
    },
    actions: {
        login({ commit }) {
            commit('setAuthentication', true);
        },
        logout({ commit }) {
            commit('setAuthentication', false);
        },
    },
    getters: {
        isAuthenticated: (state) => state.isAuthenticated,
    },
});

export default store;
