<template>
  <v-row align='center' justify='center'>
    <v-col cols='12' md='6' sm='8'>
      <v-card class='py-4 d-flex justify-center'>
        <h1>Uso de puntos</h1>
      </v-card>
      <v-card>
        <v-data-table
          :expanded.sync='expanded'
          :headers='headers'
          :items='usos'
          :items-per-page='5'
          :single-expand='true'
          class='elevation-1'
          item-key='id'
          :search="search"
          show-expand
        >
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label='filtrar'
              class="mx-4"
            ></v-text-field>
          </template>
          <template
            v-slot:item.fecha='{ item }'
          >
            {{ item.fecha.toLocaleString() }}
          </template>
          <template v-slot:expanded-item='{ headers, item }'>
            <td :colspan='headers.length'>
              <v-data-table
                :headers='puntos_headers'
                :items='item.detalles'
                :items-per-page='500'
                class='elevation-3 my-4'
                hide-default-footer
                item-key='id'
              ></v-data-table>
            </td>
          </template>
          <template
            v-slot:item._acc='{ item }'
          >
            <v-btn icon>
              <v-icon>mdi-eye-settings</v-icon>
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
  name: 'Bolsa',
  data() {
    return {
      search: '',
      expanded: [],
      puntos_headers: [
        { text: 'ID', value: 'id' },
        { text: 'puntaje utilizado', value: 'p_utilizado' },
        { text: 'Bolsa ID', value: 'bolsa.id' }
      ],
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Cliente ID', value: 'cliente.id' },
        { text: 'Puntaje utilizado', value: 'p_utilizado' },
        { text: 'Fecha', value: 'fecha' },
        { text: 'Concepto de uso de punto', value: 'concepto.descripcion' },
        { text: '', value: 'data-table-expand' }
      ],
      usos: []
    }
  },
  mounted() {
    this.getUsos()
  },
  methods: {
    getUsos() {
      this.loading = true
      fetch('http://localhost:8000/api/uso/')
        .then(response => response.json())
        .then(data => {
          this.usos = data.map(item => {
            item.fecha = new Date(item.fecha)
            return item
          })
        }).finally(() => {
        this.loading = false
        })
    }
  }
}
</script>
