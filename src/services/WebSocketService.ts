import {useWebSocket} from '@vueuse/core';

export class WebSocketService {
  static websocket = useWebSocket(
    'ws://localhost:3000',
    {
      autoReconnect: {
        retries: 3,
        delay: 1000,
        onFailed() {
          console.error('Failed to connect WebSocket after 3 retries');
        },
      },
      // heartbeat: {
      //   message: 'ping',
      //   interval: 1000,
      //   pongTimeout: 1000,
      // },
    })
  
  static getData() {
    return this.websocket.data;
  }
  
  static sendData(data) {
    this.websocket.send(data);
  }
}
