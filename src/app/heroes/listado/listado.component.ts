import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

 
})
export class ListadoComponent {
  heroeBorrado?: string = '';
  heroes: string[] = ['IronMan', 'SpiderMan', 'Hulk', 'Thor', 'Capitan America'];
  borrarHeroe():void{
    console.log('Borrando Heroe...')
    this.heroeBorrado = this.heroes.shift();
  }
}
