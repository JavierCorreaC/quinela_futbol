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
        <h1 style="color:white">Mis Pronósticos</h1>

        <!-- Partido -->
        <v-row>
          <v-col cols="12" lg="4" md="4" sm="4">
            <!-- Fecha -->
            <v-row no-gutters>
              <v-col cols="6" lg="6" md="6" sm="6">
                <v-row no-gutters align="center" justify="center">
                  <v-col cols="12" lg="1" md="1" sm="1">
                    <v-icon color="white" small>mdi-clock-time-two-outline</v-icon>
                  </v-col>
                  <v-col cols="12" lg="11" md="11" sm="11">
                    <h5 style="margin-bottom:-3px;color:white">AGO 01/19:00 PM</h5>
                  </v-col>
                </v-row>
              </v-col>

              <!-- Estadio -->
              <v-col cols="6" lg="6" md="6" sm="6">
                <v-row no-gutters align="center" justify="center">
                  <v-col cols="12" lg="1" md="1" sm="1">
                    <v-icon color="white" small>mdi-soccer</v-icon>
                  </v-col>
                  <v-col cols="12" lg="11" md="11" sm="11">
                    <h5 style="margin-bottom:-3px;color:white">ESTADIO NOMBRE</h5>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <!-- Equipos -->
            <v-card style="border-radius: 20px 20px 0px 0px;">
              <!-- Nombres -->
              <v-row no-gutters align="center" justify="center">
                <v-col align="center" justify="center" cols="6" lg="6" md="6" sm="6">
                  <h4 style="margin-top:20px;margin-bottom:20px">LOCAL</h4>
                </v-col>
                <v-col align="center" justify="center" cols="6" lg="6" md="6" sm="6">
                  <h4 style="margin-top:20px;margin-bottom:20px">VISITANTE</h4>
                </v-col>
              </v-row>

              <!-- Escudos -->
              <v-row no-gutters align="center" justify="center">
                <v-col align="center" justify="center" cols="1" lg="1" md="1" sm="1">
                  <v-text-field color="success" dense></v-text-field>
                </v-col>
                <v-col align="center" justify="center" cols="4" lg="4" md="4" sm="4">
                  <v-img
                    src="https://image.flaticon.com/icons/svg/53/53255.svg"
                    height="100px"
                    width="100px"
                  ></v-img>
                </v-col>
                <v-col align="center" justify="center" cols="2" lg="2" md="2" sm="2">
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn fab small color="success" dark v-bind="attrs" v-on="on">
                        <v-icon>mdi-calendar</v-icon>
                      </v-btn>
                    </template>
                    <v-card>Resultados</v-card>
                  </v-menu>
                </v-col>
                <v-col align="center" justify="center" cols="4" lg="4" md="4" sm="4">
                  <v-img
                    src="https://image.flaticon.com/icons/svg/53/53255.svg"
                    height="100px"
                    width="100px"
                  ></v-img>
                </v-col>
                <v-col align="center" justify="center" cols="1" lg="1" md="1" sm="1">
                  <v-text-field color="success" dense></v-text-field>
                </v-col>
              </v-row>
              <v-container></v-container>
            </v-card>
            <!-- Ganador -->
            <v-bottom-navigation
              style="background:none;"
              height="65"
              :value="activeBtn"
              grow
              color="white"
            >
              <v-btn
                style="border-radius: 0px 0px 0px 20px;"
                :color="teamColor[0]"
                @click="teamSelectA()"
              >
                <span>Local</span>
                <v-icon large>{{teamCheck[0]}}</v-icon>
              </v-btn>

              <v-btn :color="teamColor[1]" @click="teamSelectB()">
                <span>Empate</span>
                <v-icon large>{{teamCheck[1]}}</v-icon>
              </v-btn>

              <v-btn
                style="border-radius: 0px 0px 20px 0px;"
                :color="teamColor[2]"
                @click="teamSelectC()"
              >
                <span>Visitante</span>
                <v-icon large>{{teamCheck[2]}}</v-icon>
              </v-btn>
            </v-bottom-navigation>
          </v-col>
        </v-row>

        <!-- btn enviar -->
        <v-row align="center" justify="center">
          <v-btn color="success">enviar pronóstico</v-btn>
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
  data() {
    return {
      drawer: null,
      activeBtn: 1,
      teamColor: [
        "rgba(255, 255, 255, .65)",
        "rgba(255, 255, 255, .65)",
        "rgba(255, 255, 255, .65)",
      ],
      teamCheck: [
        "mdi-circle-outline",
        "mdi-circle-outline",
        "mdi-circle-outline",
      ],
    };
  },
  methods: {
    teamSelectA() {
      this.teamColor = [
        "success",
        "rgba(255, 255, 255, .65)",
        "rgba(255, 255, 255, .65)",
      ];
      this.teamCheck = [
        "mdi-checkbox-marked-circle",
        "mdi-circle-outline",
        "mdi-circle-outline",
      ];
    },
    teamSelectB() {
      this.teamColor = [
        "rgba(255, 255, 255, .65)",
        "success",
        "rgba(255, 255, 255, .65)",
      ];
      this.teamCheck = [
        "mdi-circle-outline",
        "mdi-checkbox-marked-circle",
        "mdi-circle-outline",
      ];
    },
    teamSelectC() {
      this.teamColor = [
        "rgba(255, 255, 255, .65)",
        "rgba(255, 255, 255, .65)",
        "success",
      ];
      this.teamCheck = [
        "mdi-circle-outline",
        "mdi-circle-outline",
        "mdi-checkbox-marked-circle",
      ];
    },
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
</style>