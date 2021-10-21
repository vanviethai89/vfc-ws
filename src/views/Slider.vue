<template>
    <div>
        <v-slider
                v-model="value"
                label="Bạn"
                :thumb-color="red"
                thumb-label="always"
        ></v-slider>

        <v-range-slider
                max="5"
                min="-5"
                label="Bạn"
                thumb-label="always"
        ></v-range-slider>
    </div>
</template>

<script>
  export default {
    name: 'Slider',
    mounted () {
      [
        {
          'question': '.KHQNKLWÒLFÍQQKÏ"'
        }
      ]
    }
  }
</script>

<style scoped>

</style>
