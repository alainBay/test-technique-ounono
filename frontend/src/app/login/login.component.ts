import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async Login(userData: any){
    if(userData.value.email && userData.value.password ){
      await axios.post('http://localhost:4000/Medecin/Login/', {email: userData.value.email, password: userData.value.password }).then((response) => {
        if(response.status == 200){
          sessionStorage.setItem("user", response.data._id);
          location.href="http://localhost:4200";
        }else{
          alert("Email or password is incorrect ");
        }
      }).catch((error) => {
          console.log(error)
          alert("An error has occurred");
      });
    }else{
      alert("Email or password cannot be empty");
    }
  }
}
