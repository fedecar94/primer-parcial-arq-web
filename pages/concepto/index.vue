<template>
  <v-row align='center' justify='center'>
    <v-col cols='12' md='6' sm='8'>
      <v-card class='py-4 d-flex justify-center'>
        <h1>Administración de conceptos de uso de puntos</h1>
      </v-card>
      <v-card>
        <v-data-table
          :headers='headers'
          :items='conceptos'
          :items-per-page='5'
          :search="search"
          class='elevation-1'
        >
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label='filtrar'
              class="mx-4"
            ></v-text-field>
          </template>
          <template
            v-slot:item._acc='{ item }'
          >
            <v-btn icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color='primary'
            nuxt
            to='/inspire'
          >
            Agregar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Concepto',
  data() {
    return {
      loading: false,
      search: '',
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'descripción de concepto', value: 'descripcion' },
        { text: 'puntos requeridos', value: 'puntos_requerido' },
        { text: 'Acciones', value: '_acc' }
      ],
      conceptos: []
    }
  },
  mounted() {
    this.getConceptos()
  },
  methods: {
    getConceptos() {
      this.loading = true;
      fetch('http://localhost:8000/api/concepto/')
        .then(response => response.json())
        .then(data => {
          this.conceptos = data
        }).finally(() => {
        this.loading = false
        })
    }
  }
}
</script>
