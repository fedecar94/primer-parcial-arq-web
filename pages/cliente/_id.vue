<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="6" sm="8">
      <v-card class="py-4 d-flex justify-center">
        <h1>Editar cliente</h1>
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
            Guardar
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
      clienteId: 0,
      form: {
        nombres: "",
        apellidos: "",
        nro_documento: "",
        tipo_documento: "",
        nacionalidad: "",
        email: "",
        telefono: "",
        fecha_nacimiento: "2000-12-31"
      },
      documentos: [
        "CIP",
        "PAS"
      ]
    }
  },
  beforeMount() {
    this.clienteId = this.$route.params.id
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.loading = true
      fetch(`http://localhost:8000/api/cliente/${this.clienteId}/`)
        .then(response => response.json())
        .then(data => {
          this.form = data
        }).finally(() => {
        this.loading = false
      })

    },
    postData() {
      this.loading = true
      fetch(`http://localhost:8000/api/cliente/${this.clienteId}/`, {
        method: "PATCH",
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
          alert("Verifique los datos por favor")
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
