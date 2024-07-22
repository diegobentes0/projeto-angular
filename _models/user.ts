import { Component, EventEmitter, Input, Output, output } from "@angular/core";

export interface User{
  nome: String;
  idade: Number;
}@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user: User = {
    idade:0,
    nome:''
  };
;


   };





