<template>
  <div>
    <v-row justify="center">

      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" class="ma-2" dark v-bind="attrs" v-on="on" >5F</v-btn>
        </template>
        <v-card>
          <v-card-title>Confirm execute mission at 5F?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="dialog = false">Yes</v-btn>
            <v-btn color="primary" @click="dialog = false">No</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialog2" max-width="500px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" class="ma-2" dark v-bind="attrs" v-on="on" >6F</v-btn>
        </template>
        <v-card>
          <v-card-title>Confirm execute mission at 6F?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="dialog2 = false">Yes</v-btn>
            <v-btn color="primary" @click="dialog2 = false">No</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        dialog2: false
      }
    },

    sockets: {
    connect() {
      this.connection = true;
    },
    disconnect() {
      this.connection = false;
    }
  },
  
  }
</script>