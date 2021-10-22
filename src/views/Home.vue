<template>
  <v-container>
<!--    <p><router-link :to="{name: 'nhan-dien-khac-biet'}">Nhận diện khác biệt</router-link></p>-->
<!--    <p><router-link :to="{name: 'moi-quan-he-giua-bo-va-me'}">Mối quan hệ bố mẹ</router-link></p>-->
<!--    <p><router-link :to="{name: 'moi-quan-he-giua-toi-va-bo-me'}">Mối quan giữa bạn và bố mẹ</router-link></p>-->

    <div class="game game1" style="background-image: url(game/74f85f499bf652a80be7.jpg);">
      <div class="p1" @click="hide">1</div>
      <div class="p2" @click="hide">2</div>
      <div class="p3" @click="hide">3</div>
      <div class="p4" @click="hide">4</div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      hideList: {}
    }
  },

  components: {
  },
  methods: {
    hide(event) {
      event.currentTarget.classList.add('hidden');
      // this.hideList[num] = true;
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
