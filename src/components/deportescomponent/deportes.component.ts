import { Component } from "@angular/core";
"@angular/core";

@Component({
    selector: 'app-deportes',
    standalone: false,
    templateUrl: './deportes.component.html',
    styleUrl: "./deportescomponent.css"
})

export class DeportesComponent {
    public numeros: Array<number>;
    public sports: Array<string>;

    constructor() {
        this.sports = [
            "Canicas",
            "Petanca",
            "Curling",
            "Futbol"
        ]

        this.numeros = [
            4, 77, 81, 14, 15, 56
        ]
    }
}