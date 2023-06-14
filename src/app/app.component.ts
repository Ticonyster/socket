import { Component } from '@angular/core';
import * as io from 'socket.io-client';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private socket: any;

  constructor() {
    this.socket = io('http://localhost:3000'); // Reemplaza la URL con la dirección de tu servidor Node.js
    this.socket.on('connect', () => {
      console.log('Conectado al servidor de sockets');
    });

    // Maneja los eventos de los sockets aquí
  }

  ngOnDestroy() {
    this.socket.disconnect();
  }

  title = 'socket';
}
