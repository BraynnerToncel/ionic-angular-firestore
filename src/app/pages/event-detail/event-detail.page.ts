import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event/event.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html', styleUrls: ['./event-detail.page.scss'],
})

export class EventDetailPage implements OnInit {
  currentEvent: any = null;
  eventId: any;
  public guestName = '';
  currentGuest:any[] = [];
  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('id'); this.eventInfo();
    this.getGuests()
  }
  async eventInfo() {
    this.currentEvent = await ( await this.eventService.getEventDetail(this.eventId)).data();
  }

  getGuests(){
    this.eventService.getGuestList( this.eventId).subscribe((guest) => {
      console.log(guest);
      this.currentGuest = guest;
    });
  }

  addGuest(guestName: string): void {
    if (this.currentEvent && this.eventId) {
      console.log(this.currentEvent);
      
      this.eventService
        .addGuest(
          guestName, 
          this.eventId, 
          this.currentEvent.price
        )
        .then(() => { 
          this.guestName = ''
          this.getGuests();
        });
    } else {
      console.error('Error: currentEvent o eventId no está definido.');
    }
  }
}