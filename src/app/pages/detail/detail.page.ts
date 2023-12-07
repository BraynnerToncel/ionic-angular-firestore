import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import Song from 'src/app/song.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  song:any = {}
  songId:any;

  constructor(
    private firestoreService:FirestoreService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private navController:NavController
  ) { }

  ngOnInit() {
    this.songId = this.route.snapshot.paramMap.get('id');
    this.songInfo();
  }

 async songInfo(){
    this.song = await ( await this.firestoreService.getSongDetail(this.songId) );
  }

  async delete(song: Song){
    this.song.id = this.songId;
      const alert = await this.alertController.create({message:'Are you sure want to delete the  song?',
      buttons:[{
        text:'Cancel',
        role:'cancel',
        handler:blah =>{
          console.log('Confirm');
        }
      },
      {
        text:'Okay',
        handler: async()=>{
          await this.firestoreService.deleteSong(song);
          this.navController.navigateRoot('/home');
        }
      }
    ]
    })
    await alert.present();
  }

}