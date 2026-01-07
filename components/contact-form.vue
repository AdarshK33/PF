<template>
  <form ref="formRef" @submit.prevent="submitForm" class="space-y-4">
    <input
      name="name"
      required
      placeholder="Your Name"
      class="w-full border p-2 rounded"
    />

    <input
      type="email"
      name="email"
      required
      placeholder="Your Email"
      class="w-full border p-2 rounded"
    />

    <textarea
      name="message"
      rows="4"
      placeholder="Your Message"
      class="w-full border p-2 rounded"
    ></textarea>

    <button
      type="submit"
      class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      :disabled="loading"
    >
      {{ loading ? 'Sending...' : 'Send Message' }}
    </button>

    <p v-if="msg" class="text-green-600 text-center text-sm">
      {{ msg }}
    </p>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const formRef = ref(null)
const msg = ref('')
const loading = ref(false)

const scriptURL =
  'https://script.google.com/macros/s/AKfycby4nc2HE4bBVQNNsL6Fb7-v820XEJQsCQNIn_DgxXtk/dev'

const submitForm = async () => {
  loading.value = true
  msg.value = ''

  try {
    const formData = new FormData(formRef.value)
    await fetch(scriptURL, { method: 'POST', body: formData })

    msg.value = 'Message sent successfully'
    formRef.value.reset()
    setTimeout(() => (msg.value = ''), 4000)
  } catch (err) {
    msg.value = 'Something went wrong'
  } finally {
    loading.value = false
  }
}
</script>
