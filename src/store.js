import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      name: 'kim',
      age: 20,
      likes: 50,
      likeClick: false,
      more: {},
    };
  },
  mutations: {
    setMore(state, data) {
      state.more = data;
    },
    좋아요(state) {
      if (state.likeClick == false) {
        state.likes++;
        state.likeClick = true;
      } else {
        state.likes--;
        state.likeClick = false;
      }
    },
  },
  //ajax 하는곳
  actions: {
    getData(context) {
      axios.get(`https://codingapple1.github.io/vue/more0.json`).then((a) => {
        console.log(a.data);
        context.commit('setMore', a.data);
      });
    },
  },
});

export default store;
