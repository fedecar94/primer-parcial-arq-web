<template>
  <v-row align='center' justify='center'>
    <v-col cols='12' md='6' sm='8'>
      <v-card class='py-4 d-flex justify-center'>
        <h1>Parametrización de vencimientos de puntos</h1>
      </v-card>
      <v-card>
        <v-data-table
          :headers='headers'
          :items='parametros'
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
            v-slot:item.inicio='{ item }'
          >
            {{ item.inicio.toLocaleString() }}
          </template>
          <template
            v-slot:item.fin='{ item }'
          >
            {{ item.fin.toLocaleString() }}
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
  name: 'Parametro',
  data() {
    return {
      loading: false,
      search: '',
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'inicio de validez', value: 'inicio' },
        { text: 'fin de validez', value: 'fin' },
        { text: 'duración del puntaje', value: 'duracion' },
        { text: 'Acciones', value: '_acc' }
      ],
      parametros: []
    }
  },
  mounted() {
    this.getParametros()
  },
  methods: {
    getParametros() {
      this.loading = true;
      fetch('http://localhost:8000/api/vencimiento/')
        .then(response => response.json())
        .then(data => {
          this.parametros = data.map(item => {
            item.inicio = new Date(item.inicio_validez)
            item.fin = new Date(item.fin_validez)
            return item
          })
        }).finally(() => {
        this.loading = false
        })
    }
  }
}
</script>
