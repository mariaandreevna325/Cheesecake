import { createStore } from 'vuex';

const store = createStore({
    state: {
        isAuthenticated: false,
    },
    mutations: {
        setAuthenticated(state, isAuthenticated) {
            state.isAuthenticated = isAuthenticated;
        },
    },
    actions: {
        login({ commit }, payload) {
            return new Promise((resolve, reject) => {
                if (payload.email === 'user@example.ru' && payload.password === 'password') {
                    commit('setAuthenticated', true);
                    resolve();
                } else {
                    reject('Неверный email или пароль');
                }
            });
        },
        logout({ commit }) {
            commit('setAuthenticated', false);
        },
    },
});

export default store;
