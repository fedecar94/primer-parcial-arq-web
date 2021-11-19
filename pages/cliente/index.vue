<template>
  <v-row align='center' justify='center'>
    <v-col cols='12' md='6' sm='8'>
      <v-card class='py-4 d-flex justify-center'>
        <h1>Administración de datos del cliente</h1>
      </v-card>
      <v-card>
        <v-data-table
          :headers='headers'
          :items='clientes'
          :loading='loading'
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
            v-slot:item.nro_documento='{ item }'
          >
            {{ item.tipo_documento }} {{ item.nro_documento }}
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <p>Email: {{item.email}}</p>
              <p>Nacionalidad: {{item.nacionalidad}}</p>
              <p>nacimiento: {{item.nacimiento.getDate()}}/{{item.nacimiento.getMonth()}}/{{item.nacimiento.getFullYear()}}</p>
            </td>
          </template>
          <template
            v-slot:item._acc='{ item }'
          >
            <v-btn icon
                   :to='"/cliente/" + item.id'>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon
                    @click='assertDelete(item.id)'>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color='primary'
            nuxt
            to='/cliente/add'
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
  name: 'Cliente',
  data() {
    return {
      loading: false,
      search: '',
      expanded: [],
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Apellido/Nombre', value: 'fullname' },
        { text: 'Documento', value: 'nro_documento' },
        { text: 'Acciones', value: '_acc' },
        { text: '', value: 'data-table-expand' },
      ],
      clientes: [],
    }
  },
  mounted() {
    this.getClientes()
  },
  methods: {
    getClientes() {
      this.loading = true;
      fetch('http://localhost:8000/api/cliente/')
        .then(response => response.json())
        .then(data => {
          this.clientes = data.map(item => {
            item.nacimiento = new Date(item.fecha_nacimiento)
            item.fullname = `${item.apellidos}, ${item.nombres}`
            return item
          })
        }).finally(() => {
        this.loading = false
        })
    },
    assertDelete(clienteId) {
      if (confirm("Está seguro?")) {
        this.deleteData(clienteId)
      } else {
        console.debug('no se borrara!')
      }
    },
    deleteData(clienteId) {
      this.loading = true
      fetch(`http://localhost:8000/api/cliente/${clienteId}/`, {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        redirect: "follow",
        referrerPolicy: "no-referrer"
      }).then(data => {
        if (data.status > 399) {
          alert('Verifique los datos por favor')
        } else {
          console.debug(data)
        }
      }).finally(() => {
        this.loading = false
        this.getClientes()
      })
    }
  }
}
</script>
