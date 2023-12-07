
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event/event.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html', styleUrls: ['./event-list.page.scss'],
})

export class EventListPage implements OnInit {
  eventList: any = [];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEventList().subscribe((events) => {
      this.eventList = events;
    });
  }
}
