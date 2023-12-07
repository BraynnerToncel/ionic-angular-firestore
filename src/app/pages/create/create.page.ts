import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public createSongForm: FormGroup;

  constructor(
        private loadingCrt: LoadingController,
        private alertController:AlertController,
        private firestoreService:FirestoreService,
        formBuilder:FormBuilder,
        public navController: NavController
  ) { 
    this.createSongForm = formBuilder.group({
      songName: ['', Validators.required ],
      artistName: ['', Validators.required ],
      albumName: ['', Validators.required ],
      songDescription: ['', Validators.required ],

    })
  }

  ngOnInit() {
  }

  async createSong(){
    const loading = await this.loadingCrt.create();
    this.firestoreService.createSong(this.createSongForm.value)
      .then(()=>{
        loading.dismiss().then(()=>{
          this.navController.navigateRoot('/home');
        })
      },(error)=>{
        console.log(error);
        
      });
      return await loading.present();
  }

}