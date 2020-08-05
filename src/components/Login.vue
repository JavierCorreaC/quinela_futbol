<template>
  <v-app id="backGND">
    <v-card color="rgba(255, 255, 255, 0.75)">
      <v-toolbar color="rgba(255, 255, 255, 0)" dense>
        <v-toolbar-title>Futbol Quinela</v-toolbar-title>
        <v-spacer></v-spacer>

        <router-link to="/" style="text-decoration: none; color: inherit;">
          <v-btn outlined color="success">
            <v-icon left>mdi-account-circle-outline</v-icon>regístrate
          </v-btn>
        </router-link>
      </v-toolbar>
    </v-card>

    <v-container>
      <v-row align="center" justify="center">
        <v-col align="center" justify="center" cols="12" lg="4" md="6" sm="8">
          <v-card color="rgba(255, 255, 255, 0.75)" rounded="lg">
            <br />
            <h2>Iniciar sesión</h2>
            <v-form style="font-weight: bold;">
              <v-container>
                <v-text-field
                  type="email"
                  color="success"
                  label="Correo electrónico"
                  prepend-icon="mdi-email"
                ></v-text-field>
                <v-text-field
                  type="password"
                  color="success"
                  label="Contraseña"
                  prepend-icon="mdi-lock"
                ></v-text-field>

                <router-link to="/quinelas" style="text-decoration: none; color: inherit;">
                  <v-btn color="success">empieza a jugar</v-btn>
                </router-link>

                <br />
                <br />
                <hr />
                <v-container>
                  <h5>Recupera tu contraseña</h5>
                </v-container>

                <v-container>
                  <h5>¿Aún no tienes cuenta?</h5>
                  <router-link to="/" style="text-decoration: none; color: inherit;">
                    <h5 style="text-decoration: underline">Regístrate aquí</h5>
                  </router-link>
                </v-container>
              </v-container>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {},
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