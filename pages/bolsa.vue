<template>
  <v-row align='center' justify='center'>
    <v-col cols='12' md='6' sm='8'>
      <v-card class='py-4 d-flex justify-center'>
        <h1>Bolsa de puntos</h1>
      </v-card>
      <v-card>
        <v-data-table
          :headers='headers'
          :items='desserts'
          :items-per-page='5'
          class='elevation-1'
        >
          <template
            v-slot:item.asignacion='{ item }'
          >
            {{ item.asignacion.toLocaleString() }}
          </template>
          <template
            v-slot:item.caducidad='{ item }'
          >
            {{ item.caducidad.toLocaleString() }}
          </template>
          <template
            v-slot:item.saldo='{ item }'
          >
            {{ item.asignado - item.utilizado }}
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
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'identificador del cliente', value: 'cliente' },
        { text: 'asignación de puntaje', value: 'asignacion' },
        { text: 'caducidad de puntaje', value: 'caducidad' },
        { text: 'puntaje asignado', value: 'asignado' },
        { text: 'puntaje utilizado', value: 'utilizado' },
        { text: 'saldo de puntos', value: 'saldo' },
        { text: 'monto de la operación', value: 'monto' },
        { text: 'Acciones', value: '_acc' }
      ],
      desserts: [
        {
          id: '1234',
          cliente: 'Jhonny Test',
          asignacion: new Date((Math.random() * 10000000000) + 1200000000000),
          caducidad: new Date((Math.random() * 10000000000) + 1210000000000),
          asignado: Math.floor((Math.random() * 30) + 30),
          utilizado: Math.floor(Math.random() * 30),
          monto: Math.floor(Math.random() * 50000) * 100
        },
        {
          id: '1235',
          cliente: 'Jhonny Test',
          asignacion: new Date((Math.random() * 10000000000) + 1210000000000),
          caducidad: new Date((Math.random() * 10000000000) + 1220000000000),
          asignado: Math.floor((Math.random() * 30) + 30),
          utilizado: Math.floor(Math.random() * 30),
          monto: Math.floor(Math.random() * 50000) * 100
        },
        {
          id: '1236',
          cliente: 'Jhonny Test',
          asignacion: new Date((Math.random() * 10000000000) + 1220000000000),
          caducidad: new Date((Math.random() * 10000000000) + 1230000000000),
          asignado: Math.floor((Math.random() * 30) + 30),
          utilizado: Math.floor(Math.random() * 30),
          monto: Math.floor(Math.random() * 50000) * 100
        },
        {
          id: '1237',
          cliente: 'Jhonny Test',
          asignacion: new Date((Math.random() * 10000000000) + 1230000000000),
          caducidad: new Date((Math.random() * 10000000000) + 1240000000000),
          asignado: Math.floor((Math.random() * 30) + 30),
          utilizado: Math.floor(Math.random() * 30),
          monto: Math.floor(Math.random() * 50000) * 100
        },
        {
          id: '1238',
          cliente: 'Jhonny Test',
          asignacion: new Date((Math.random() * 10000000000) + 1240000000000),
          caducidad: new Date((Math.random() * 10000000000) + 1250000000000),
          asignado: Math.floor((Math.random() * 30) + 30),
          utilizado: Math.floor(Math.random() * 30),
          monto: Math.floor(Math.random() * 50000) * 100
        },
        {
          id: '1239',
          cliente: 'Jhonny Test',
          asignacion: new Date((Math.random() * 10000000000) + 1250000000000),
          caducidad: new Date((Math.random() * 10000000000) + 1260000000000),
          asignado: Math.floor((Math.random() * 30) + 30),
          utilizado: Math.floor(Math.random() * 30),
          monto: Math.floor(Math.random() * 50000) * 100
        },
        {
          id: '1240',
          cliente: 'Jhonny Test',
          asignacion: new Date((Math.random() * 10000000000) + 1260000000000),
          caducidad: new Date((Math.random() * 10000000000) + 1270000000000),
          asignado: Math.floor((Math.random() * 30) + 30),
          utilizado: Math.floor(Math.random() * 30),
          monto: Math.floor(Math.random() * 50000) * 100
        },
        {
          id: '1241',
          cliente: 'Jhonny Test',
          asignacion: new Date((Math.random() * 10000000000) + 1270000000000),
          caducidad: new Date((Math.random() * 10000000000) + 1280000000000),
          asignado: Math.floor((Math.random() * 30) + 30),
          utilizado: Math.floor(Math.random() * 30),
          monto: Math.floor(Math.random() * 50000) * 100
        },
        {
          id: '1242',
          cliente: 'Jhonny Test',
          asignacion: new Date((Math.random() * 10000000000) + 1280000000000),
          caducidad: new Date((Math.random() * 10000000000) + 1290000000000),
          asignado: Math.floor((Math.random() * 30) + 30),
          utilizado: Math.floor(Math.random() * 30),
          monto: Math.floor(Math.random() * 50000) * 100
        },
        {
          id: '1243',
          cliente: 'Jhonny Test',
          asignacion: new Date((Math.random() * 10000000000) + 1290000000000),
          caducidad: new Date((Math.random() * 10000000000) + 1300000000000),
          asignado: Math.floor((Math.random() * 30) + 30),
          utilizado: Math.floor(Math.random() * 30),
          monto: Math.floor(Math.random() * 50000) * 100
        }
      ]
    }
  }
}
</script>
