import { getToken, setToken, removeToken } from '@/utils/auth';
import { login, logoff, getUserInfo } from '@/api/login';

const state = {
  token: getToken(),
  name: '', //用户名
  id: 0, //用户ID
  role: '', //所属角色
  group: '' //所属组
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_ID: (state, id) => {
    state.id = id;
  },
  SET_ROLE: (state, role) => {
    state.role = role;
  },
  SET_GROUP: (state, group) => {
    state.group = group;
  }
};

const actions = {
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then(response => {
          const { data } = response;
          commit('SET_TOKEN', data.token);
          commit('SET_NAME', username);
          setToken(data.token);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  getUserInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo(state.token)
        .then(response => {
          const { data } = response;
          if (!data) {
            reject('Get user info failed!');
          }
          const { id, role, group } = data;
          commit('SET_ID', id);
          commit('SET_ROLE', role);
          commit('SET_GROUP', group);
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  logoff({ commit, state }) {
    return new Promise((resolve, reject) => {
      logoff(state.token)
        .then(() => {
          commit('SET_TOKEN', '');
          commit('SET_NAME', '');
          commit('SET_ID', 0);
          commit('SET_ROLE', '');
          commit('SET_GROUP', '');
          removeToken();
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

const getters = {
  token: state => state.token
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
