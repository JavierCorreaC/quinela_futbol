<template>
  <v-list>
    <v-list-item-group v-model="selectedItem">
      <v-list-item
        :disabled="disabledItem[index]"
        v-for="(item,index) in drawerItems"
        :key="index"
        link
        @click.stop="drawer = !drawer"
        @click="drawerRedir(index)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      disabledItem: [],
      selectedItem: 0,
      drawer: null,
      drawerItems: [
        { title: "MIS QUINELAS", icon: "mdi-trophy" },
        { title: "MIS PRONOSTICOS", icon: "mdi-soccer" },
        { title: "SURVIVAL (proximamente)", icon: "mdi-shield-half-full" },
      ],
    };
  },
  methods: {
    selectionList() {
      switch (this.$router.currentRoute.path) {
        case "/quinelas":
          this.selectedItem = 0;
          this.disabledItem = [true, false, false];
          break;
        case "/pronosticos":
          this.selectedItem = 1;
          this.disabledItem = [false, true, false];
          break;
        case "/survival":
          this.selectedItem = 2;
          this.disabledItem = [false, false, true];
          break;
      }
    },
    drawerRedir(index) {
      switch (index) {
        case 0:
          if (this.$router.currentRoute.path != "/quinelas") {
            this.$router.push({ path: "/quinelas" });
          }
          break;
        case 1:
          if (this.$router.currentRoute.path != "/pronosticos") {
            this.$router.push({ path: "/pronosticos" });
          }
          break;
        case 2:
          if (this.$router.currentRoute.path != "/survival") {
            this.$router.push({ path: "/survival" });
          }
          break;
        default:
          break;
      }
      return this.selectedItem;
    },
  },
  mounted() {
    this.selectionList();
  },
};
</script>