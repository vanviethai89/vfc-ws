<template>
  <v-container>
    <MyGame :img="img"></MyGame>
  </v-container>
</template>

<script>
  import MyGame from '@/components/game/Game.vue';
  export default {
    name: "Game",
    components: {
      MyGame
    },
    data() {
      return {
        listGame: {
          1: 'game/97b91708d3b71ae943a6.jpg',
          2: 'game/cad459659dda54840dcb.jpg',
          3: 'game/ce243095f42a3d74643b.jpg',
          4: 'game/f9950f24cb9b02c55b8a.jpg',
          5: 'game/211cebad2f12e64cbf03.jpg',
          6: 'game/74f85f499bf652a80be7.jpg',
        }
      }
    },
    computed: {
      img() {
        return this.listGame[this.$route.params.gameNumber]
      }
    }
  }
</script>

<style scoped>

</style>
