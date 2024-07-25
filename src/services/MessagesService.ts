import { WebSocketService } from './WebSocketService';

export class MessagesService extends WebSocketService {
  static sendMessage(
    message: string,
    attachments?: Array<string>
  ) {
    this.websocket.send(JSON.stringify({
      message,
      attachments
    }));
  }
  
  static editMessage(
    id: string,
    message: string,
    attachments?: Array<string>
  ) {
    this.websocket.send(JSON.stringify({
      id,
      message,
      attachments
    }));
  }
}
