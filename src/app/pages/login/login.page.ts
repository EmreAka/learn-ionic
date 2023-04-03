import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {IonicModule, LoadingController} from '@ionic/angular';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule]
})
export class LoginPage implements OnInit {
  loginForm: FormGroup
  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.createLoginForm();

  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", Validators.required],
      authenticatorCode: [""]
    })
  }

  async login(){
    const loading = await this.loadingController.create({
      message: "Loading"
    })
    await loading.present();

    this.httpClient.post<any>(`${environment.apiUrl}Auth/Login`, this.loginForm.value).subscribe({
      next: (value) => {
        loading.remove()
        this.router.navigateByUrl("")
      },
    })
  }


}
