import { Injectable } from '@angular/core';
import { io, Socket} from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket!: Socket;

  constructor() { }

  connect() {
    this.socket = io('http://localhost:3000'); // Reemplaza la URL con la dirección de tu servidor de socket

    this.socket.on('connect', () => {
      console.log('Conectado al servidor de socket');
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor de socket');
    });
  }

  joinRoom(room: string) {
    this.socket.emit('join', room); // Envía un evento 'join' al servidor para unirte a la sala especificada
  }

  leaveRoom(room: string) {
    this.socket.emit('leave', room); // Envía un evento 'leave' al servidor para abandonar la sala especificada
  }
}
