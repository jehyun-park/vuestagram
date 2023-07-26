<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="?" />
    <div class="post-header">
      <div class="profile" :style="`background-image:url(${image})`"></div>
      <span class="profile-name">{{ follower }}</span>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'MyPage',
  setup() {
    let follower = ref([]);

    onMounted(() => {
      axios.get('/follower.json').then((a) => {
        follower.value = a.data;
      });
    });

    return { follower };
  },

  data() {
    return {};
  },
};
</script>
<style></style>
