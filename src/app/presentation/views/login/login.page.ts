import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: any;

  constructor(private navCtrl: NavController) { 
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  login(){
    if(this.loginForm.value.username == 'admin' && this.loginForm.value.password == 'admin'){
      this.navCtrl.navigateForward('/home');
    }
    
  }

  about(){
    this.navCtrl.navigateForward('/about');
  }

  ngOnInit() {
  }

}
