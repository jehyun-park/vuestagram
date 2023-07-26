<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">글쓰기</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <!-- <p>{{ likes }} {{ age }} {{ 내이름 }}</p> -->

  <!-- commit() -> mutations 부탁
  dispatch() -> actios 부탁 -->

  <!-- <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기버튼</button> -->

  <!-- <h4>ㅎㅇ 내 이름은 {{ $store.state.name }} 나이는 {{ $store.state.age }}</h4>
  <button @click="$store.commit('이름변경')">버튼</button>
  <button @click="$store.commit('나이변경')">버튼</button>
  <button @click="$store.commit('agePlus', 5)">age++</button> -->

  <MidContainer
    :image="image"
    :게시글="게시글"
    :step="step"
    @write="작성한글 = $event"
  />

  <button @click="more">더보기</button>

  <!-- <p>{{ now2 }} {{ 카운터 }}</p>
  <button @click="카운터++">버튼</button> -->

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- <div v-if="step == 0">내용0</div>
  <div v-if="step == 1">내용1</div>
  <div v-if="step == 2">내용2</div>
  <button @click="step = 0">버튼0</button>
  <button @click="step = 1">버튼1</button>
  <button @click="step = 2">버튼2</button> -->
</template>

<script>
import postdata from './assets/postdata.js';
import MidContainer from './components/MidContainer.vue';
import axios from 'axios';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'App',

  data() {
    return {
      step: 3,
      게시글: postdata,
      moreCnt: 0,
      image: '',
      작성한글: '',
      선택한필터: '',
      카운터: 0,
    };
  },
  mounted() {
    this.emitter.on('박스클릭', (a) => {
      this.선택한필터 = a;
    });
  },
  components: {
    MidContainer,
  },
  computed: {
    name() {
      return this.$store.state.name;
    },
    ...mapState(['name', 'age', 'likes']),
    ...mapState({ 내이름: 'name' }),
  },

  methods: {
    ...mapMutations(['setMore', '좋아요', '증가']),

    // now() {
    //   return new Date();
    // },
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.moreCnt}.json`)
        .then((res) => {
          this.게시글.push(res.data);
          this.moreCnt++;
          console.log(this.moreCnt);
        })
        .catch(() => {
          console.log('get요청 실패');
        });
    },
    upload(e) {
      let 파일 = e.target.files;
      console.log(파일);
      let url = URL.createObjectURL(파일[0]);
      console.log(url);
      this.image = url;
      this.step++;
    },
    publish() {
      var 내게시글 = {
        name: 'Kim Hyun',
        userImage: 'https://picsum.photos/100?random=3',
        postImage: this.image,
        likes: 36,
        date: 'May 15',
        liked: false,
        content: this.작성한글,
        filter: this.선택한필터,
      };
      this.게시글.unshift(내게시글); // unshift: 왼쪽의 array에 자료 집어넣어줌
      this.step = 0;
    },
  },
};
</script>

<style>
@import 'style.css';
</style>
