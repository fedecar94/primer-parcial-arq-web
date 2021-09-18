<template>
  <v-row align='center' justify='center'>
    <v-col cols='12' md='6' sm='8'>
      <v-card class='py-4 d-flex justify-center'>
        <h1>Parametrización de vencimientos de puntos</h1>
      </v-card>
      <v-card>
        <v-data-table
          :headers='headers'
          :items='desserts'
          :items-per-page='5'
          class='elevation-1'
        >
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
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'inicio de validez', value: 'inicio' },
        { text: 'fin de validez', value: 'fin' },
        { text: 'duración del puntaje', value: 'duracion' },
        { text: 'Acciones', value: '_acc' }
      ],
      desserts: [
        {
          id: '1234',
          inicio: new Date((Math.random() * 10000000000) + 1200000000000),
          fin: new Date((Math.random() * 10000000000) + 1210000000000),
          duracion: Math.floor(Math.random() * 600)
        },
        {
          id: '1235',
          inicio: new Date((Math.random() * 10000000000) + 1210000000000),
          fin: new Date((Math.random() * 10000000000) + 1220000000000),
          duracion: Math.floor(Math.random() * 600)
        },
        {
          id: '1236',
          inicio: new Date((Math.random() * 10000000000) + 1220000000000),
          fin: new Date((Math.random() * 10000000000) + 1230000000000),
          duracion: Math.floor(Math.random() * 600)
        },
        {
          id: '1237',
          inicio: new Date((Math.random() * 10000000000) + 1230000000000),
          fin: new Date((Math.random() * 10000000000) + 1240000000000),
          duracion: Math.floor(Math.random() * 600)
        },
        {
          id: '1238',
          inicio: new Date((Math.random() * 10000000000) + 1240000000000),
          fin: new Date((Math.random() * 10000000000) + 1250000000000),
          duracion: Math.floor(Math.random() * 600)
        },
        {
          id: '1239',
          inicio: new Date((Math.random() * 10000000000) + 1250000000000),
          fin: new Date((Math.random() * 10000000000) + 1260000000000),
          duracion: Math.floor(Math.random() * 600)
        },
        {
          id: '1240',
          inicio: new Date((Math.random() * 10000000000) + 1260000000000),
          fin: new Date((Math.random() * 10000000000) + 1270000000000),
          duracion: Math.floor(Math.random() * 600)
        },
        {
          id: '1241',
          inicio: new Date((Math.random() * 10000000000) + 1270000000000),
          fin: new Date((Math.random() * 10000000000) + 1280000000000),
          duracion: Math.floor(Math.random() * 600)
        },
        {
          id: '1242',
          inicio: new Date((Math.random() * 10000000000) + 1280000000000),
          fin: new Date((Math.random() * 10000000000) + 1290000000000),
          duracion: Math.floor(Math.random() * 600)
        },
        {
          id: '1243',
          inicio: new Date((Math.random() * 10000000000) + 1290000000000),
          fin: new Date((Math.random() * 10000000000) + 1300000000000),
          duracion: Math.floor(Math.random() * 600)
        }
      ]
    }
  }
}
</script>
