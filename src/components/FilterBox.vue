<template>
  <div
    @click="fire"
    :class="filter + ` filter-item`"
    :style="`background-image:url(${image})`"
  >
    <slot></slot>
  </div>
</template>

<!-- v-for="a in filters"
:key="a"
:class="`${a} filter-item`" -->

<!-- mitt로 데이터 전송하는법
1.this.emitter.emit()로 발사하고
2.this.emitter.on으로 수신 (mounted안에)-->
<script>
export default {
  props: {
    image: String,
    filter: String,
  },
  methods: {
    fire() {
      this.emitter.emit('박스클릭', this.filter); //다른 컴포넌트로 이벤트 쏴줌
      // console.log(this.filter);
    },
  },
};
</script>
<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
