import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mpsp';
  model = {
    left: true,
    middle: false,
    right: false
  };
  items: MenuItem[] = [
    {label: 'INSTITUCIONAL'},
    {label: 'ÁREAS DE ATUAÇÃO'},
    {label: 'CIDADÃO'},
    {label: 'SERVIÇOS'},
    {label: 'SALA DE IMPRENSA'},
    {label: 'FALE CONOSCO'}
];

}
