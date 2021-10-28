import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-atencion-cliente',
  templateUrl: './atencion-cliente.component.html',
  styleUrls: ['./atencion-cliente.component.scss']
})
export class AtencionClienteComponent implements OnInit {

  constructor(private FormBuilder: FormBuilder) {}


  atencionCliente = new FormGroup({});


  ngOnInit(): void {
    this.atencionCliente=this.FormBuilder.group({
      nombreCompleto: new FormControl('',Validators.required),
      telefono: new FormControl('',[Validators.required,Validators.maxLength(9)]),
      correoElectronico: new FormControl('',[Validators.required, Validators.email]),
      dirigido: new FormControl('',Validators.required),
      mensaje: new FormControl('',Validators.required)

    })
  }

}
