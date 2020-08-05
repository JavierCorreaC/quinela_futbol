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
        <h1 style="color:white">Nueva Quinela</h1>

        <!-- Crear Quinela -->
        <v-row>
          <v-col>
            <v-form>
              <v-row>
                <v-col cols="12" lg="9" md="9" sm="9">
                  <h4 style="color:white">NOMBRE</h4>
                  <v-text-field
                    dark
                    color="success"
                    placeholder="Ponle nombre a tu quinela"
                    clearable
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="3" md="3" sm="3">
                  <h4 style="color:white">FOTO</h4>
                  <v-row>
                    <v-col align="center" justify="center">
                      <v-avatar color="green" size="125">
                        <v-icon x-large>mdi-account-question</v-icon>
                      </v-avatar>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col align="center" justify="center">
                      <v-btn color="white" outlined rounded>Sube una foto</v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

              <v-container>
                <hr />
              </v-container>

              <v-row v-if="shareLink==false" align="center" justify="center">
                <v-btn color="success" @click="shareLink=true">Crear una quinela</v-btn>
              </v-row>
            </v-form>

            <!-- Compartir link -->
            <div v-if="shareLink==true">
              <h4 style="color:white" class="text-center">COMPARTE EL LINK</h4>
              <v-row align="center" justify="center">
                <v-col cols="10" lg="4" md="6" sm="8">
                  <v-text-field dark color="success" :value="shareCode" readonly></v-text-field>
                </v-col>
                <v-col cols="1" lg="1" md="1" sm="1">
                  <v-btn icon color="white">
                    <v-icon>mdi-content-copy</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <v-row align="center" justify="center">
                <router-link to="/nombre_quinela" style="text-decoration: none; color: inherit;">
                  <v-btn color="white" outlined>ve a tu torneo</v-btn>
                </router-link>
              </v-row>
            </div>
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
  name: "nueva_quinelas",
  data() {
    return {
      drawer: null,
      shareLink: false,
      shareCode: "FutbolQuinela//invitacion/quinela/1A2B3C",
    };
  },
  methods: {},
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
</style>