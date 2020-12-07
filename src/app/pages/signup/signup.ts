import { UserData } from '../../providers/user-data';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { UserOptions } from './../../interfaces/user-options';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActionSheetController, Platform } from '@ionic/angular';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signUp: FormGroup;
  signInData: any;
  public imagemSelecionada ='';
  public uriArqImagem='';

  constructor(
    public router: Router,
    public userData: UserData,
    private formBulder: FormBuilder,
    public actionSheetController: ActionSheetController,
    private camera: Camera,
    private file: File,
    private webview: WebView,
    private platform: Platform,
    private filePath: FilePath,
    private user: UserOptions
  ) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Câmera',
        role: 'destructive',
        icon: 'camera',
        handler: () => {
          this.getPhoto(this.camera.PictureSourceType.CAMERA);
        }
      }, {
        text: 'Biblioteca de fotos',
        icon: 'images-outline',
        handler: () => {
          this.getPhoto(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }
  getPhoto(sourceType: PictureSourceType) {
    let caminhoCorrigido, nomeUtilizado;
    const option: CameraOptions = {
      quality: 10,
      targetHeight: 200,
      targetWidth: 200,
      sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(option).then((caminho) => {
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(caminho).then((path) => {
          caminhoCorrigido = path.substr(0, caminho.lastIndexOf('/') + 1);
          nomeUtilizado = path.substr(caminho.lastIndexOf('/') + 1, caminho.lastIndexOf('?'));
          // this.copiaDiretorioLocal(caminhoCorrigido, nomeUtilizado, this.criarNomeImagem());
          this.uriArqImagem = caminhoCorrigido+nomeUtilizado;
          this.imagemSelecionada = this.caminhoImagem(this.uriArqImagem);
        });
      } else {
        caminhoCorrigido = caminho.substr(0, caminho.lastIndexOf('/') + 1);
        nomeUtilizado = caminho.substr(caminho.lastIndexOf('/') + 1, caminho.lastIndexOf('?'));
        // this.copiaDiretorioLocal(caminhoCorrigido, nomeUtilizado, this.criarNomeImagem());
        this.uriArqImagem = caminhoCorrigido+nomeUtilizado;
        this.imagemSelecionada = this.caminhoImagem(this.uriArqImagem);
      }

    })
  }
  copiaDiretorioLocal(caminho, nomeAtual, novoNome) {
    this.file.copyFile(caminho, nomeAtual, this.file.dataDirectory, novoNome).then((success) => {
      const caminhoArq = this.file.dataDirectory + novoNome;
      const caminhoArqConvertido = this.caminhoImagem(caminhoArq);
      this.imagemSelecionada = caminhoArqConvertido;
    }).catch((error) => {
      console.log(error)
    });
  }

  caminhoImagem(caminhoImagem) {
    if (caminhoImagem == null) {
      return '';
    } else {
      const caminhoConvertido = this.webview.convertFileSrc(caminhoImagem);
      return caminhoConvertido;
    }
  }

  criarNomeImagem() {
    const d = new Date();
    const t = d.getTime();
    const nomeImagem = t + 'jpg';
    return nomeImagem;
  }
  ngOnInit() {
    this.signUp = this.formBulder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      password: ['', Validators.required],
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      idade: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(2)])],
      dataNasc: ['', Validators.required],
      tipoSangue: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(3)])],
      sexo: ['', Validators.required],
    });

  }

  onSignup() {
    if (this.signUp.invalid || this.signUp.pending) {
      alert('Fomrulário inválido!');
    } else {
      this.signInData = this.signUp.value;
      this.signUpMethod();
    }
  }
  signUpMethod() {
    this.user.photo = this.imagemSelecionada;
    this.userData.cadastro(this.signInData);
    this.router.navigateByUrl('login');
  }

}