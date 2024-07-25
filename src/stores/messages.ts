import { defineStore } from 'pinia';
import { reactive, watch } from 'vue'

import { MessagesService } from '@/services/MessagesService';

const uesMessagesStore = defineStore('messages', () => {
  const messages = reactive([]);
  const message = MessagesService.getData();
  
  const sendMessage = (
    message: string
  ): void => {
    MessagesService.sendMessage(message);
  }
  
  watch(message, (value) => {
    messages.push(value)
  })
  
  return {
    sendMessage,
    messages
  }
});

export { uesMessagesStore };
