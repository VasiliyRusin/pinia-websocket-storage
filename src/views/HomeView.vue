<script setup lang="ts">
import {ref} from 'vue'
import {uesMessagesStore} from "@/stores"

const messagesStore = uesMessagesStore();

const message = ref<string>("");

const submit = () => {
  messagesStore.sendMessage(message.value);

  message.value = "";
}
</script>

<template>
  <main>
    <ul>
      <li v-for="message in messagesStore.messages">
        {{message}}
      </li>
    </ul>
    <form @submit.prevent="submit">
      <textarea v-model="message"></textarea>
      <button>Отправить</button>
    </form>
  </main>
</template>
