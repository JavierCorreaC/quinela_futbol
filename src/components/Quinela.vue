<template>
  <v-app
    style="background-image: url('https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;"
  >
    <!-- NavBar -->
    <v-row no-gutters>
      <v-col align="center" cols="1" lg="1" md="1" sm="1">
        <v-card class @click.stop="drawer = !drawer">
          <v-toolbar color="success">
            <v-row align="center" justify="center">
              <v-icon large dark>mdi-menu</v-icon>
            </v-row>
          </v-toolbar>
        </v-card>
      </v-col>
      <v-col align="center" cols="11" lg="11" md="11" sm="11">
        <Navbar />
      </v-col>
    </v-row>

    <!-- Navigation Drawer -->
    <v-sheet
      color="rgba(0, 0, 0, 0.5)"
      height="100%"
      class="overflow-hidden"
      style="position: relative;"
    >
      <!-- Contenido -->
      <v-container>
        <h1 style="color:white">Nombre Quinela</h1>
      </v-container>

      <v-navigation-drawer dark v-model="drawer" absolute temporary>
        <MenuList />
      </v-navigation-drawer>
    </v-sheet>
  </v-app>
</template>

<script>
import Navbar from "./Navbar";
import MenuList from "./MenuList";
export default {
  data() {
    return {
      drawer: null,
    };
  },
  methods: {},
  components: {
    Navbar,
    MenuList,
  },
};
</script>