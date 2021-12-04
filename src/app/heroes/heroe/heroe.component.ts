import { Component, enableProdMode } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'Spider-Man';
    edad: number = 35;
    get capitalizarHeroe(): string{
        return this.nombre.toUpperCase()
    }
    obtenerInfo(): string{
        return `${this.nombre} - ${this.edad} Años`
    }
    cambiarNombre(): void{
        this.nombre = 'Hulk';

    }
    cambiarEdad(): void{
        this.edad = 45;
        
    }
}