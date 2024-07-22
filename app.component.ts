import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/HomeComponent';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { FooterComponent } from "./_components/footer/footer.component";
import { BaseUiComponent } from "./_components/base-ui/base-ui.component";
import { UsersComponent } from "./pages/users/users.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, NavbarComponent, FooterComponent, BaseUiComponent, UsersComponent]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }


  exibeHome: boolean = true;
btn: any;
  destruir(){
    this.exibeHome = false
}
}
