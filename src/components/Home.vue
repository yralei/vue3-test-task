<script setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { useRouter } from 'vue-router';

const router = useRouter()

const state = reactive({
  email: '',
  password: ''
})

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) }
}

const v$ = useVuelidate(rules, state)

async function handleSubmit() {
  const result = await v$.value.$validate()

  if (result) {
    router.push('/game')
  }
}
</script>

<template>
  <v-container class="d-flex justify-center align-center h-screen">
    <v-card height="200" width="400">
      <v-text-field label="Email" v-model="state.email"
        :error-messages="v$?.email?.$errors[0]?.$message"></v-text-field>
      <v-text-field label="Password" v-model="state.password"
        :error-messages="v$?.password?.$errors[0]?.$message"></v-text-field>

      <div class="d-flex justify-center pb-2">
        <v-btn @click="handleSubmit">Login</v-btn>
      </div>
    </v-card>
  </v-container>
</template>
