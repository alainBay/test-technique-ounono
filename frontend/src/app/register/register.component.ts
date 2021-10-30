import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  async Register(userData: any){
    if(userData.value.email && userData.value.password && userData.value.password && userData.value.password ){
      await axios.post('http://localhost:4000/Medecin/', {user: userData.value }).then((response) => {
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
      alert("Email or password or first-name or last-name cannot be empty");
    }
  }
}
