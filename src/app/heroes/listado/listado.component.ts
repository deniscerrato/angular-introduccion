import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Superman','Batman','Iroman']
  heroesEliminados: string[] = []


  borrarHeroe(){
    const heroeEliminado: string = this.heroes.shift() || ''
    this.heroesEliminados.push(heroeEliminado)
    console.log(this.heroesEliminados)
  }
}
