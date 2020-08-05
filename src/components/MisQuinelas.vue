<template>
  <v-app id="backGND">
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
        <h1 style="color:white">Mis Quinelas</h1>

        <!-- Crear quinela -->
        <v-row align="end" justify="end">
          <router-link to="nueva_quinela" style="text-decoration: none; color: inherit;">
            <v-btn outlined color="white">
              <v-icon left>mdi-plus</v-icon>crear una quinela
            </v-btn>
          </router-link>
        </v-row>

        <!-- Quinelas -->
        <v-row>
          <v-col align="center" justify="center" cols="12" lg="3" md="4" sm="6">
            <router-link to="/nombre_quinela" style="text-decoration: none; color: inherit;">
              <v-hover v-slot:default="{ hover }">
                <v-card id="cardStyle" @click="sample()" :elevation="hover ? 12 : 2" rounded="xl">
                  <v-container>
                    <v-row align="center" justify="center">
                      <v-avatar color="green" size="150">
                        <v-icon x-large>mdi-account-question</v-icon>
                      </v-avatar>
                    </v-row>
                  </v-container>
                  <v-container>
                    <h3>NUEVO TORNEO</h3>
                    <p>Administrador</p>
                  </v-container>
                </v-card>
              </v-hover>
            </router-link>
          </v-col>
        </v-row>
      </v-container>

      <!-- Navigation Drawer List -->
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
  name: "mis_quinelas",
  data() {
    return {
      drawer: null,
    };
  },
  methods: {
    sample() {},
  },
  components: {
    Navbar,
    MenuList,
  },
};
</script>

<style>
#backGND {
  background-image: url("../assets/the-ball-488700_1920.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
#cardStyle {
  background: rgba(255, 255, 255, 1);
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.25) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(255, 255, 255, 1)),
    color-stop(100%, rgba(255, 255, 255, 0.25))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.25) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.25) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.25) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.25) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff', GradientType=0 );
}
</style>