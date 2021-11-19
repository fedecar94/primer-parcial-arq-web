<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="6" sm="8">
      <v-card class="py-4 d-flex justify-center">
        <h1>Calcular puntos</h1>
      </v-card>
      <v-card>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                v-model="form.monto"
                label="Monto"
                type='number'
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="form.equivale"
                label="Equivale"
                type='number'
                disabled
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
            Calcular
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
  name: "CalcUso",
  data() {
    return {
      form: {
        monto: 0,
        equivale: 0,
      },
    }
  },
  methods: {
    postData() {
      this.loading = true
      fetch("http://localhost:8000/api/uso/calcular/", {
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
      }).then(response => {
        if (response.status > 399) {
          alert('Verifique los datos por favor')
          return {
            monto: 0,
            equivale: 0,
          }
        } else {
          return response.json()
        }
      }).then(data => {
        this.form = data
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
