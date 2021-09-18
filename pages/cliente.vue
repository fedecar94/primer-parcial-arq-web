<template>
  <v-row align='center' justify='center'>
    <v-col cols='12' md='6' sm='8'>
      <v-card class='py-4 d-flex justify-center'>
        <h1>Administración de datos del cliente</h1>
      </v-card>
      <v-card>
        <v-data-table
          :headers='headers'
          :items='desserts'
          :single-expand="true"
          :expanded.sync="expanded"
          :items-per-page='5'
          item-key="id"
          show-expand
          class='elevation-1'
        >
          <template
            v-slot:item.apellido='{ item }'
          >
            {{ item.apellido }}, {{ item.nombre }}
          </template>
          <template
            v-slot:item.documento='{ item }'
          >
            {{ item.tipo_doc }} {{ item.documento }}
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
  name: 'Cliente',
  data() {
    return {
      expanded: [],
      puntos_headers: [
        { text: 'ID', value: 'id' },
        { text: 'Apellido/Nombre', value: 'apellido' },
        { text: 'bolsa', value: 'bolsa' }
      ],
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Apellido/Nombre', value: 'apellido' },
        { text: 'Documento', value: 'documento' },
        { text: 'Acciones', value: '_acc' },
        { text: '', value: 'data-table-expand' },
      ],
      desserts: [
        {
          id: Math.floor(Math.random() * 3000),
          nombre: 'Jhonny',
          apellido: 'Test',
          documento: Math.floor(Math.random() * 8000000),
          tipo_doc: 'CIP',
          nacionalidad: 'Paraguayo/a',
          email: 'test@email.com',
          nacimiento: new Date((Math.random() * 10000000000) + 1200000000000)
        },
        {
          id: Math.floor(Math.random() * 3000),
          nombre: 'Jhonny',
          apellido: 'Test',
          documento: Math.floor(Math.random() * 8000000),
          tipo_doc: 'CIP',
          nacionalidad: 'Paraguayo/a',
          email: 'test@email.com',
          nacimiento: new Date((Math.random() * 10000000000) + 1200000000000)
        },
        {
          id: Math.floor(Math.random() * 3000),
          nombre: 'Jhonny',
          apellido: 'Test',
          documento: Math.floor(Math.random() * 8000000),
          tipo_doc: 'CIP',
          nacionalidad: 'Paraguayo/a',
          email: 'test@email.com',
          nacimiento: new Date((Math.random() * 10000000000) + 1200000000000)
        },
        {
          id: Math.floor(Math.random() * 3000),
          nombre: 'Jhonny',
          apellido: 'Test',
          documento: Math.floor(Math.random() * 8000000),
          tipo_doc: 'CIP',
          nacionalidad: 'Paraguayo/a',
          email: 'test@email.com',
          nacimiento: new Date((Math.random() * 10000000000) + 1200000000000)
        },
        {
          id: Math.floor(Math.random() * 3000),
          nombre: 'Jhonny',
          apellido: 'Test',
          documento: Math.floor(Math.random() * 8000000),
          tipo_doc: 'CIP',
          nacionalidad: 'Paraguayo/a',
          email: 'test@email.com',
          nacimiento: new Date((Math.random() * 10000000000) + 1200000000000)
        },
        {
          id: Math.floor(Math.random() * 3000),
          nombre: 'Jhonny',
          apellido: 'Test',
          documento: Math.floor(Math.random() * 8000000),
          tipo_doc: 'CIP',
          nacionalidad: 'Paraguayo/a',
          email: 'test@email.com',
          nacimiento: new Date((Math.random() * 10000000000) + 1200000000000)
        },
        {
          id: Math.floor(Math.random() * 3000),
          nombre: 'Jhonny',
          apellido: 'Test',
          documento: Math.floor(Math.random() * 8000000),
          tipo_doc: 'CIP',
          nacionalidad: 'Paraguayo/a',
          email: 'test@email.com',
          nacimiento: new Date((Math.random() * 10000000000) + 1200000000000)
        },
        {
          id: Math.floor(Math.random() * 3000),
          nombre: 'Jhonny',
          apellido: 'Test',
          documento: Math.floor(Math.random() * 8000000),
          tipo_doc: 'CIP',
          nacionalidad: 'Paraguayo/a',
          email: 'test@email.com',
          nacimiento: new Date((Math.random() * 10000000000) + 1200000000000)
        },
        {
          id: Math.floor(Math.random() * 3000),
          nombre: 'Jhonny',
          apellido: 'Test',
          documento: Math.floor(Math.random() * 8000000),
          tipo_doc: 'CIP',
          nacionalidad: 'Paraguayo/a',
          email: 'test@email.com',
          nacimiento: new Date((Math.random() * 10000000000) + 1200000000000)
        },
        {
          id: Math.floor(Math.random() * 3000),
          nombre: 'Jhonny',
          apellido: 'Test',
          documento: Math.floor(Math.random() * 8000000),
          tipo_doc: 'CIP',
          nacionalidad: 'Paraguayo/a',
          email: 'test@email.com',
          nacimiento: new Date((Math.random() * 10000000000) + 1200000000000)
        },
        {
          id: Math.floor(Math.random() * 3000),
          nombre: 'Jhonny',
          apellido: 'Test',
          documento: Math.floor(Math.random() * 8000000),
          tipo_doc: 'CIP',
          nacionalidad: 'Paraguayo/a',
          email: 'test@email.com',
          nacimiento: new Date((Math.random() * 10000000000) + 1200000000000)
        },
        {
          id: Math.floor(Math.random() * 3000),
          nombre: 'Jhonny',
          apellido: 'Test',
          documento: Math.floor(Math.random() * 8000000),
          tipo_doc: 'CIP',
          nacionalidad: 'Paraguayo/a',
          email: 'test@email.com',
          nacimiento: new Date((Math.random() * 10000000000) + 1200000000000)
        },
        {
          id: Math.floor(Math.random() * 3000),
          nombre: 'Jhonny',
          apellido: 'Test',
          documento: Math.floor(Math.random() * 8000000),
          tipo_doc: 'CIP',
          nacionalidad: 'Paraguayo/a',
          email: 'test@email.com',
          nacimiento: new Date((Math.random() * 10000000000) + 1200000000000)
        },
      ]
    }
  }
}
</script>
