import { File } from '@ionic-native/file/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { UserOptions } from './../interfaces/user-options';
import { Injectable, NgModule } from '@angular/core';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class UserData {

  constructor(private router: Router,
    private firestore: AngularFirestore,
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private file: File) { }

    async uploadImagem(imagem,nomeImagem):Promise<string>{
      if(imagem){
        try {
          nomeImagem = 'fotosUser/'+nomeImagem;
          const resultUpload = await firebase.storage().ref().child(nomeImagem).put(imagem); 
          const urlUpload = resultUpload.ref.getDownloadURL();
          return urlUpload;
        } catch (error) {
          console.log(error)
        }
      }
    }

  criarBlobArqImagem(caminhoImagem) {
    return new Promise((resolve, reject) => {
      this.file.resolveLocalFilesystemUrl(caminhoImagem).then((dados) => {
        const { name, nativeURL } = dados;
        const path = nativeURL.substr(0,nativeURL.lastIndexOf('/')+1);
        return this.file.readAsArrayBuffer(path, name);
      }).then((buffer)=>{
        const blobImagem = new Blob([buffer],{
          type: 'image/jpeg'
        });
        resolve(blobImagem);
      }).catch((erro)=>{
        console.log(erro);
        reject(erro);
      });
    });
  }

  async cadastro(user: UserOptions) {
    try {
      let foto = user.photo;
      const newUser = await this.afa.auth.createUserWithEmailAndPassword(user.email, user.password);
      const newUserObj = Object.assign({}, user);
      delete newUserObj.password;
      foto = foto.replace('http://localhost/','file://')
      const blobImagem = this.criarBlobArqImagem(foto)
      user.nomePhotoEnviada = this.criarNomeImagem()
      user.uriPhotoExibir = await this.uploadImagem(blobImagem,user.nomePhotoEnviada)
      await this.afs.collection('users').doc(newUser.user.uid).set(newUserObj)
      console.log('Sucesso!');
    } catch (error) {
      console.error(error);
    }
  }
  
  async deletarImagem(nomeImagem){
    try {
      nomeImagem = 'fotosUser/'+nomeImagem;
      await firebase.storage().ref().child(nomeImagem).delete();
    } catch (error) {
      console.log(error)
    }
  }

 
  criarNomeImagem() {
    const d = new Date();
    const t = d.getTime();
    const nomeImagem = t + 'jpg';
    return nomeImagem;
  }
  logout() {
    this.router.navigateByUrl('/login');
  }

  getUsername(userEmail:string){
    return this.afs.collection('users',ref=>ref.where('email','==',userEmail)).snapshotChanges()
  }
}
