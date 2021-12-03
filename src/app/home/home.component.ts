import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }
    ngOnInit(): void {
    }
       submitted = false;
       formulario = new FormGroup({
           nombre: new FormControl ('', [Validators.required, Validators.minLength(3)]),            
           email: new FormControl ('', [Validators.required, Validators.email]), 
           genero: new FormControl ('', [Validators.required, Validators.required]), 
           edad: new FormControl (), 
       });
       get val() { return this.formulario.controls; }

    guardar() {
        this.submitted = true;

        if (this.formulario.invalid) {
            return;
            
        }
        
        alert('Mensaje Enviado !')

    }

}
