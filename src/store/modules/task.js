import {
  getUncompletedTasks,
  pickTask,
  getTaskOpList
} from '@/api/uncompleted-view';

const state = {
  uncompletedTasks: [],
  selectedUncompletedTask: null
};

const mutations = {
  SET_UNCOMPLETED_TASKS: (state, tasks) => {
    state.uncompletedTasks = tasks;
  },
  SET_SELECTED_UNCOMPLETED_TASK: (state, task) => {
    state.selectedUncompletedTask = task;
  },
  SET_TASK_STATUS: (state, id) => {
    let task = state.uncompletedTasks.find(t => t.ObjectID === id);
    task.receive_state = !task.receive_state;
  },
  SORT_TASK_BY_DATE_ASC: state => {
    state.uncompletedTasks.sort((t1, t2) => {
      return t1.creationdate - t2.creationdate;
    });
  },
  SORT_TASK_BY_DATE_DESC: state => {
    state.uncompletedTasks.sort((t1, t2) => {
      return t2.creationdate - t1.creationdate;
    });
  },
  SORT_TASK_BY_NOT_RECEIVE: state => {
    state.uncompletedTasks.sort((t1, t2) => {
      let i = t1.receive_state ? 1 : 0;
      let j = t2.receive_state ? 1 : 0;
      return i - j;
    });
  },
  SORT_TASK_BY_RECEIVED: state => {
    state.uncompletedTasks.sort((t1, t2) => {
      let i = t1.receive_state ? 1 : 0;
      let j = t2.receive_state ? 1 : 0;
      return j - i;
    });
  }
};

const actions = {
  getUncompletedTasks({ commit }) {
    return new Promise((resolve, reject) => {
      getUncompletedTasks()
        .then(response => {
          const { data } = response;
          commit('SET_UNCOMPLETED_TASKS', data.data);
          commit('SORT_TASK_BY_DATE_DESC');
          commit('SORT_TASK_BY_NOT_RECEIVE');
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  pickTask({ commit }, taskInfo) {
    const { id, option } = taskInfo;
    return new Promise((resolve, reject) => {
      pickTask(id, option)
        .then(() => {
          commit('SET_TASK_STATUS', id);
          resolve();
        })
        .catch(error => reject(error));
    });
  },
  getTaskOpList(context, id) {
    return new Promise((resolve, reject) => {
      getTaskOpList(id)
        .then(response => {
          resolve(response);
        })
        .catch(error => reject(error));
    });
  },
  sortTaskByDateAsc({ commit }) {
    commit('SORT_TASK_BY_DATE_ASC');
  },
  sortTaskByDateDesc({ commit }) {
    commit('SORT_TASK_BY_DATE_DESC');
  },
  sortTaskByNotReceive({ commit }) {
    commit('SORT_TASK_BY_NOT_RECEIVE');
  },
  sortTaskByReceived({ commit }) {
    commit('SORT_TASK_BY_RECEIVED');
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
