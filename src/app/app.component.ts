import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Alan"

  userData = {
    email: "email.teste@teste.com",
    role: "Admin",
  }

  title = 'curso-angular';
}
