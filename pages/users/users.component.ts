import { Component } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
//users: String[] = ['Diego','Adryel','Breno'];
user: User[] = [
  {
    nome:'Diego',
    idade:26
  },{
    nome:'Adryel',
    idade:28
  },
  {nome:'Breno',
    idade:28
}]
}
