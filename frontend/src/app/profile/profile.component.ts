import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  _id = "";
  email = "";
  password="";
  nom="";
  prenom="";
  photo="";
  tarif="";
  remboursement="";
  presentation="";
  horaire="";
  contact="";
  formation="";
  langue="";
  creneau="" ;
  training="";

  getId(){
    return this._id;
  }
  getMail(){
    return this.email;
  }
  getPassword(){
    return this.password;
  }
  getNom(){
    return this.nom;
  }
  getPrenom(){
    return this.prenom;
  }
  getPhoto(){
    return this.photo;
  }
  getTarif(){
    return this.tarif;
  }
  getRemboursement(){
    return this.remboursement;
  }
  getPresentation(){
    return this.presentation;
  }
  getHoraire(){
    return this.horaire;
  }
  getContact(){
    return this.contact;
  }
  getFormation(){
    return this.formation;
  }
  getLangue(){
    return this.langue;
  }
  getCreneau(){
    return this.creneau;
  }
  getTraining(){
    return this.training;
  }

  constructor() { }

  ngOnInit(): void {
    this.getUserData()
  }

  async getUserData(){
    let _id = sessionStorage.getItem("user")+"";
    await axios.get('http://localhost:4000/Medecin/'+_id).then((response) => {
        if(response.status == 200){
          this._id = response.data._id
          this.email = response.data.email
          this.password=response.data.password
          this.nom=response.data.nom
          this.prenom=response.data.prenom
          this.photo=response.data.photo
          this.tarif=response.data.tarif
          this.remboursement=response.data.remboursement
          this.presentation=response.data.presentation
          this.horaire=response.data.horaire
          this.contact=response.data.contact
          this.formation=response.data.formation
          this.langue=response.data.langue
          this.creneau=response.data.creneau
        }else{
          alert("An error has occurred");
        }
      }).catch((error) => {
          console.log(error)
          alert("An error has occurred");
      });
  }

  async Update(userData: any){
    if(userData.value.email && userData.value.password && userData.value.password && userData.value.password ){
      await axios.put('http://localhost:4000/Medecin/'+userData.value.id, {user: userData.value }).then((response) => {
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
