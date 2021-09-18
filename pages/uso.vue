<template>
  <v-row align='center' justify='center'>
    <v-col cols='12' md='6' sm='8'>
      <v-card class='py-4 d-flex justify-center'>
        <h1>Uso de puntos</h1>
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
            v-slot:item.fecha='{ item }'
          >
            {{ item.fecha.toLocaleString() }}
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <v-data-table
                :headers='puntos_headers'
                :items='puntos'
                hide-default-footer
                :items-per-page='500'
                item-key="id"
                class='elevation-3 my-4'
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
import { v4 as uuidv4 } from 'uuid';
export default {
  name: 'Bolsa',
  data() {
    return {
      expanded: [],
      puntos_headers: [
        { text: 'ID', value: 'id' },
        { text: 'puntaje utilizado', value: 'utilizado' },
        { text: 'bolsa', value: 'bolsa' }
      ],
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'identificador del cliente', value: 'cliente' },
        { text: 'puntaje utilizado', value: 'utilizado' },
        { text: 'fecha', value: 'fecha' },
        { text: 'concepto de uso de punto', value: 'concepto' },
        { text: '', value: 'data-table-expand' },
      ],
      desserts: [
        {
          id: uuidv4(),
          cliente: 'Jhonny Test',
          utilizado: Math.floor(Math.random() * 30),
          fecha: new Date((Math.random() * 10000000000) + 1290000000000),
          concepto: 'Uso POS Super Test'
        },
        {
          id: uuidv4(),
          cliente: 'Jhonny Test',
          utilizado: Math.floor(Math.random() * 30),
          fecha: new Date((Math.random() * 10000000000) + 1290000000000),
          concepto: 'Uso POS Super Test'
        },
        {
          id: uuidv4(),
          cliente: 'Jhonny Test',
          utilizado: Math.floor(Math.random() * 30),
          fecha: new Date((Math.random() * 10000000000) + 1290000000000),
          concepto: 'Uso POS Super Test'
        },
        {
          id: uuidv4(),
          cliente: 'Jhonny Test',
          utilizado: Math.floor(Math.random() * 30),
          fecha: new Date((Math.random() * 10000000000) + 1290000000000),
          concepto: 'Uso POS Super Test'
        },
        {
          id: uuidv4(),
          cliente: 'Jhonny Test',
          utilizado: Math.floor(Math.random() * 30),
          fecha: new Date((Math.random() * 10000000000) + 1290000000000),
          concepto: 'Uso POS Super Test'
        },
        {
          id: uuidv4(),
          cliente: 'Jhonny Test',
          utilizado: Math.floor(Math.random() * 30),
          fecha: new Date((Math.random() * 10000000000) + 1290000000000),
          concepto: 'Uso POS Super Test'
        },
        {
          id: uuidv4(),
          cliente: 'Jhonny Test',
          utilizado: Math.floor(Math.random() * 30),
          fecha: new Date((Math.random() * 10000000000) + 1290000000000),
          concepto: 'Uso POS Super Test'
        },
        {
          id: uuidv4(),
          cliente: 'Jhonny Test',
          utilizado: Math.floor(Math.random() * 30),
          fecha: new Date((Math.random() * 10000000000) + 1290000000000),
          concepto: 'Uso POS Super Test'
        },
        {
          id: uuidv4(),
          cliente: 'Jhonny Test',
          utilizado: Math.floor(Math.random() * 30),
          fecha: new Date((Math.random() * 10000000000) + 1290000000000),
          concepto: 'Uso POS Super Test'
        },
        {
          id: uuidv4(),
          cliente: 'Jhonny Test',
          utilizado: Math.floor(Math.random() * 30),
          fecha: new Date((Math.random() * 10000000000) + 1290000000000),
          concepto: 'Uso POS Super Test'
        }
      ],
      puntos: [
        {
          id: uuidv4(),
          utilizado: Math.floor(Math.random() * 30),
          bolsa: '1234'
        },
        {
          id: uuidv4(),
          utilizado: Math.floor(Math.random() * 30),
          bolsa: '1235'
        },
      ]
    }
  }
}
</script>
