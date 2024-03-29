import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  hide = true;

  ingresar(){
    const usuario = this.form.value.usuario;
    const contraseña = this.form.value.contraseña;

    if(usuario == 'admin' && contraseña == 'admin123'){
      this.fakeLoading();
    }else{
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open('Usuario o Contraseña ingresados son invalidos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() => {
      
      this.router.navigate(['administrador']);
    }, 1500);
  }
  
}
