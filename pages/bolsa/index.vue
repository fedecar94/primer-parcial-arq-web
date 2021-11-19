<template>
  <v-row align='center' justify='center'>
    <v-col cols='12' md='6' sm='8'>
      <v-card class='py-4 d-flex justify-center'>
        <h1>Bolsa de puntos</h1>
      </v-card>
      <v-card>
        <v-data-table
          :headers='headers'
          :items='bolsas'
          :single-expand="true"
          :expanded.sync="expanded"
          :items-per-page='5'
          item-key="id"
          show-expand
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
            v-slot:item.vencimiento='{ item }'
          >
            {{ item.vencimiento.toLocaleString() }}
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <p>Puntos asignados: {{item.p_asignado}}</p>
              <p>Puntos utilizados: {{item.p_utilizado}}</p>
              <p>Asignacion: {{ item.asignacion.toLocaleString() }}</p>
            </td>
          </template>
        </v-data-table>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color='primary'
            nuxt
            to='/bolsa/add'
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
      loading: false,
      search: '',
      expanded: [],
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'cliente', value: 'fullname' },
        { text: 'caducidad de puntaje', value: 'vencimiento' },
        { text: 'saldo de puntos', value: 'saldo' },
        { text: 'monto de la operación', value: 'monto' }
      ],
      bolsas: []
    }
  },
  mounted() {
    this.getBolsas()
  },
  methods: {
    getBolsas() {
      this.loading = true;
      fetch('http://localhost:8000/api/bolsa/')
        .then(response => response.json())
        .then(data => {
          this.bolsas = data.map(item => {
            item.asignacion = new Date(item.asignacion)
            item.vencimiento = new Date(item.vencimiento)
            item.fullname = `${item.cliente_obj.apellidos}, ${item.cliente_obj.nombres}`
            return item
          })
        }).finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
