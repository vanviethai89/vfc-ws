<template>
  <v-container>
    <p><router-link :to="{name: 'nhan-dien-khac-biet'}">Nhận diện khác biệt</router-link></p>
    <p><router-link :to="{name: 'moi-quan-he-giua-bo-va-me'}">Mối quan hệ bố mẹ</router-link></p>
    <p><router-link :to="{name: 'moi-quan-he-giua-toi-va-bo-me'}">Mối quan giữa bạn và bố mẹ</router-link></p>
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  components: {
  }
}
</script>
