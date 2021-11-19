<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="6" sm="8">
      <v-card class="py-4 d-flex justify-center">
        <h1>Utilizar puntos</h1>
      </v-card>
      <v-card>
        <v-container>
          <v-row>
            <v-col>
              <v-select
                :key='id'
                v-model="form.cliente"
                item-text="fullname"
                item-value="id"
                :items="clientes"
                label="Cliente"
                required
              ></v-select>
            </v-col>
            <v-col>
              <v-select
                :key='id'
                v-model="form.concepto"
                item-text="descripcion"
                item-value="id"
                :items="conceptos"
                label="Concepto"
                required
              ></v-select>
            </v-col>
            <v-col>
              <v-text-field
                v-model="form.p_utilizado"
                label="Puntos"
                type='number'
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            @click="postData"
          >
            Agregar
          </v-btn>
          <v-btn
            color="secondary"
            nuxt
            to="/uso"
          >
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AddUso",
  data() {
    return {
      clientes: [],
      conceptos: [],
      form: {
        cliente: 0,
        concepto: 0,
        p_utilizado: 0,
      },
    }
  },
  mounted() {
    this.getClientes()
    this.getConceptos()
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
            this.form.cliente = item.id
            return item
          })
        }).finally(() => {
        this.loading = false
      })
    },
    getConceptos() {
      this.loading = true;
      fetch('http://localhost:8000/api/concepto/')
        .then(response => response.json())
        .then(data => {
          this.conceptos = data.map(item => {
            this.form.concepto = item.id
            return item
          })
        }).finally(() => {
        this.loading = false
      })
    },
    postData() {
      this.loading = true
      fetch("http://localhost:8000/api/uso/", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(this.form)
      }).then(data => {
        if (data.status > 399) {
          alert('Verifique los datos por favor')
        } else {
          console.debug(data)
        }
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
