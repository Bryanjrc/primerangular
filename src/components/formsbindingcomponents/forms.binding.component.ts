import { Component } from "@angular/core";

@Component ({
    selector: "app-forms-binding",
    standalone: false,
    templateUrl: "./forms.binding.component.html"
})

export class FormBindingComponent {
    public user: any;
    public mensaje: string;

    constructor() {
        this.mensaje = "";

        this.user = {
            nombre: "",
            apellidos: "",
            edad: ""
        }
    }
}