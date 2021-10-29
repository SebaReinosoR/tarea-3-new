import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder, EmailValidator} from '@angular/forms';
@Component({
  selector: 'app-atencion-cliente',
  templateUrl: './atencion-cliente.component.html',
  styleUrls: ['./atencion-cliente.component.scss']
})
export class AtencionClienteComponent implements OnInit {

  constructor(private FormBuilder: FormBuilder) {}

  Flag : boolean = true;
  
  atencionCliente = new FormGroup({});
  numeroPattemers = /^[0-9]*$/;
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  ngOnInit(): void {
    this.atencionCliente=this.FormBuilder.group({
      nombreCompleto: new FormControl('',Validators.required),
      telefono: new FormControl('',[Validators.required , Validators.maxLength(9),Validators.minLength(9) ,Validators.pattern(this.numeroPattemers)]),
      correoElectronico: new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
      dirigido: new FormControl('',Validators.required),
      mensaje: new FormControl('',Validators.required)
    })
  }
  Validacion(){
    this.Flag=false;
  }

}