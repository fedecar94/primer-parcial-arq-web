<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="6" sm="8">
      <v-card class="py-4 d-flex justify-center">
        <h1>Agregar cliente</h1>
      </v-card>
      <v-card>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                v-model="form.nombres"
                :counter="10"
                label="Nombres"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="form.apellidos"
                :counter="10"
                label="Apellidos"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
                v-model="form.tipo_documento"
                :items="documentos"
                label="Tipo"
                required
              ></v-select>
            </v-col>
            <v-col>
              <v-text-field
                v-model="form.nro_documento"
                label="Documento"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="form.nacionalidad"
                :counter="2"
                label="Nacionalidad"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="form.fecha_nacimiento"
                label="Nacimiento"
                type="date"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="form.telefono"
                :counter="10"
                label="Telefono"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="form.email"
                label="E-mail"
                type="email"
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
            to="/cliente"
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
  name: "Cliente",
  data() {
    return {
      form: {
        nombres: "Pepe",
        apellidos: "Grillo",
        nro_documento: "123456",
        tipo_documento: "CIP",
        nacionalidad: "PY",
        email: "pepe.grillo@example.com",
        telefono: "0931987543",
        fecha_nacimiento: "2021-11-18"
      },
      documentos: [
        "CIP",
        "PAS"
      ]
    }
  },
  methods: {
    postData() {
      this.loading = true
      fetch("http://localhost:8000/api/cliente/", {
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
