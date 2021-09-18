<template>
  <v-row align='center' justify='center'>
    <v-col cols='12' md='6' sm='8'>
      <v-card class='py-4 d-flex justify-center'>
        <h1>Administración de conceptos de uso de puntos</h1>
      </v-card>
      <v-card>
        <v-data-table
          :headers='headers'
          :items='desserts'
          :items-per-page='5'
          class='elevation-1'
        >
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
        { text: 'descripción de concepto', value: 'descripcion' },
        { text: 'puntos requeridos', value: 'puntos' },
        { text: 'Acciones', value: '_acc' }
      ],
      desserts: [
        {
          id: '1234',
          descripcion: 'vale de premio',
          puntos: Math.floor(Math.random() * 100)
        },
        {
          id: '1235',
          descripcion: 'vale de descuento',
          puntos: Math.floor(Math.random() * 100)
        },
        {
          id: '1236',
          descripcion: 'vale de consumición',
          puntos: Math.floor(Math.random() * 100)
        },
        {
          id: '1237',
          descripcion: 'canje directo',
          puntos: Math.floor(Math.random() * 100)
        },
        {
          id: '1238',
          descripcion: 'Concepto 1',
          puntos: Math.floor(Math.random() * 100)
        },
        {
          id: '1239',
          descripcion: 'Concepto 2',
          puntos: Math.floor(Math.random() * 100)
        },
        {
          id: '1240',
          descripcion: 'Concepto 3',
          puntos: Math.floor(Math.random() * 100)
        },
      ]
    }
  }
}
</script>
