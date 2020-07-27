import { Component } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-header',
  // template: `
  //   <h1>I am a Header Component</h1>
  // `,
  // styles: [
  //   'h1 { color: red; background: green; }'
  // ]
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public authService:AuthService) {}

}
