import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  elementos:MenuItem[]=[
    {
      ruta:'/botones',
      icono:'radio-button-on-outline',
      etiqueta:'Botones'
    },
    {
      ruta:'/alertas',
      icono:'warning-outline',
      etiqueta:'Alertas'
    },
    {
      ruta:'/formulario',
      icono:'reader-outline',
      etiqueta:'Formulario'
    },
    {
      ruta:'/action-sheet',
      icono:'arrow-up',
      etiqueta:'Action Sheets'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
