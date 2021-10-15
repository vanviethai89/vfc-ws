<template>
  <v-app>
    <v-app-bar
            app
            color="primary"
            dark
    >
      <v-container>
        <v-row>
          <v-col></v-col>
          <v-col style="text-align: right;">

          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>


  </v-app>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'App',
    components: {

    },
    data: () => ({

    }),
    computed: {

    },
    methods: {

    }
  };
</script>
