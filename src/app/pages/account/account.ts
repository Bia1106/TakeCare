import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

import { AlertController } from '@ionic/angular';
import { StorageService } from '../../providers/storage.service';

import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage {
  username: string;
  password: string;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public userData: UserData,
    private info: StorageService
  ) { }

  ngOnInit() {
    // this.info.get()
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }


  //MUDAR PARA EXIBIR DADOS VINDO DO FIRESTORE!!!!!!!!!!
  async changeUsername() {
    const alert = await this.alertCtrl.create({
      header: 'Mudar Usuário',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            console.log(data)
            this.info.add(data.username)
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.username,
          // placeholder: 'username'
        }
      ]
    });
    await alert.present();
  }
  callChangeUser() {
    this.info.get().then((nome: string) => {
      this.username = nome;
      this.changeUsername();
    })

  }
  getUsername() {
    // this.userData.getUsername().then((username) => {
    //   this.username = username;
    // });
  }
  //MUDAR PARA EXIBIR DADOS VINDO DO FIRESTORE!!!!!!!!!!
  async changePassword() {
    const alert = await this.alertCtrl.create({
      header: 'Mudar Senha',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            // this.userData.setUsername(data.username);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'password',
          value: this.password,
          placeholder: 'password'
        }
      ]
    });
    await alert.present();
  }


  logout() {
    this.userData.logout();
    this.router.navigateByUrl('/login');
  }

  support() {
    this.router.navigateByUrl('/support');
  }


}
