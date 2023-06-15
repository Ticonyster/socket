import { Component } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.connect();
  }

  joinRoom(room: string) {
    this.socketService.joinRoom(room);
  }

  leaveRoom(room: string) {
    this.socketService.leaveRoom(room);
  }
}
