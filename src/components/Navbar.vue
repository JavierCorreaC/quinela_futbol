<template>
  <v-card color="rgba(255, 255, 255, .75)">
    <v-toolbar color="rgba(255, 255, 255, 0)">
      <v-toolbar-title>Futbol Quinela</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on">mdi-chevron-down</v-icon>
          <v-card-title v-bind="attrs" v-on="on">Nombre</v-card-title>
          <v-avatar color="green" size="50" v-bind="attrs" v-on="on">
            <v-icon>mdi-account-question</v-icon>
          </v-avatar>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in profileItems"
            :key="index"
            @click="profileRedir(index)"
          >
            <v-icon>{{item.icon}}</v-icon>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      profileItems: [
        { title: "Mi Perfil", icon: "mdi-account-outline" },
        { title: "Cerrar Sesión", icon: "mdi-account-arrow-left-outline" },
      ],
    };
  },
  methods: {
    profileRedir(index) {
      if (index == 0) {
        if (this.$router.currentRoute.path != "/") {
          this.$router.push({ path: "/" });
        }
      } else {
        if (this.$router.currentRoute.path != "/") {
          this.$router.push({ path: "/" });
        }
      }
    },
  },
};
</script>