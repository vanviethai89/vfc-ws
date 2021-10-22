<template>
  <div class="game game1" :style="`background-image: url(${img});`">
    <div class="p1" @click="hide">1</div>
    <div class="p2" @click="hide">2</div>
    <div class="p3" @click="hide">3</div>
    <div class="p4" @click="hide">4</div>
  </div>
</template>

<script>
  export default {
    name: "Game",
    props: {
      img: {type: String, default: ''}
    },
    methods: {
      hide(event) {
        event.currentTarget.classList.add('hidden');
      }
    }
  }
</script>

<style scoped>
  .game {
    width: 500px;
    height: 500px;
    border: solid 1px #ddd;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: auto;
  }
  .game > div {
    width: 250px;
    height: 250px;
    position: absolute;
    background-color: #fff;
    border: solid 1px #ddd;
    text-align: center;
    line-height: 250px;
    font-size: 25px;
    font-weight: 700;
    cursor: pointer;
  }

  .game > div:hover {
    background-color: #ddd;
  }

  .game > div.p2 {
    right: 0px;
    top: 0;
  }

  .game > div.p3 {
    bottom: 0px;
  }

  .game > div.p3 {
    bottom: 0px;
    left: 0;
  }

  .game > div.p4 {
    bottom: 0px;
    right: 0px;
  }

  .hidden {
    display: none;
  }
</style>
