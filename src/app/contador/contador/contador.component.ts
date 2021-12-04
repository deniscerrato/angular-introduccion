
import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    
    <h3> {{titulo}} </h3>
    <h4> La base es: <strong>{{base}}</strong> </h4>
    <button (click)=" acumular(-base)" >-</button>
    <span> {{numero}} </span>
    <button (click)=" acumular(base)">+</button>

    
    `
})

export class ContadorComponent {
    titulo = 'Primer App';
    numero: number = 0;
    base: number = 5;
    acumular(valor: number) {
        this.numero += valor;
    }
}