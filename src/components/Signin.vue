<template>
  <v-app id="backGND">
    <v-card color="rgba(255, 255, 255, .75)">
      <v-toolbar color="rgba(255, 255, 255, 0)" dense>
        <v-toolbar-title>Futbol Quinela</v-toolbar-title>
        <v-spacer></v-spacer>

        <router-link to="/login" style="text-decoration: none; color: inherit;">
          <v-btn outlined color="success">
            <v-icon left>mdi-account-outline</v-icon>iniciar sesión
          </v-btn>
        </router-link>
      </v-toolbar>
    </v-card>

    <v-container>
      <v-row align="center" justify="center">
        <v-col align="center" justify="center" cols="12" lg="4" md="6" sm="8">
          <v-card color="rgba(255, 255, 255, .75)" rounded="lg">
            <br />
            <h2>Regístrate Aquí</h2>
            <v-form style="font-weight: bold;">
              <v-container>
                <v-text-field dense color="success" label="Nombre completo"></v-text-field>
                <v-text-field dense type="email" color="success" label="Correo electrónico"></v-text-field>
                <v-text-field dense type="text" color="success" label="Confirma tu correo"></v-text-field>
                <v-text-field dense type="password" color="success" label="Contraseña"></v-text-field>
                <v-text-field dense type="password" color="success" label="Confirma tu contraseña"></v-text-field>
                <v-text-field dense type="date" color="success" label="Fecha de nacimiento"></v-text-field>
                <v-select dense color="success" :items="sexItems" label="Sexo"></v-select>
                <v-select dense color="success" :items="EdoItems" label="Estado de la república"></v-select>
                <v-select dense color="success" label="¿Cómo te enteraste de nosotros?"></v-select>

                <router-link to="/quinelas" style="text-decoration: none; color: inherit;">
                  <v-btn color="success">registrarse</v-btn>
                </router-link>
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
  name: "signin",
  data() {
    return {
      sexItems: ["Hombre", "Mujer", "Otro"],
      EdoItems: [
        "Aguascalientes",
        "Baja California",
        "Baja California Sur",
        "Campeche",
        "Chiapas",
        "Chihuahua",
        "Coahuila de Zaragoza",
        "Colima",
        "Ciudad de México",
        "Durango",
        "Guanajuato",
        "Guerrero",
        "Hidalgo",
        "Jalisco",
        "Mexico",
        "Michoacan de Ocampo",
        "Morelos",
        "Nayarit",
        "Nuevo Leon",
        "Oaxaca",
        "Puebla",
        "Queretaro de Arteaga",
        "Quintana Roo",
        "San Luis Potosi",
        "Sinaloa",
        "Sonora",
        "Tabasco",
        "Tamaulipas",
        "Tlaxcala",
        "Veracruz-Llave",
        "Yucatan",
        "Zacatecas",
      ],
    };
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