import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event/event.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
    selector: 'app-event-create',
    templateUrl: './event-create.page.html',
    styleUrls: ['./event-create.page.scss'],
})


export class EventCreatePage implements OnInit {
    eventName: string = '';
    eventPrice: number = 0;
    eventCost: number = 0;
    eventDate: string = '';
    currentDate: string = '';
    constructor(private router: Router, private eventService: EventService, private datePipe: DatePipe) { 
        const today = new Date();
        // Formatear la fecha como una cadena en el formato deseado
        this.currentDate = this.datePipe.transform(today, 'yyyy-MM-dd')!;
        
    }
    ngOnInit() { }

    createEvent(
        eventName: string,
        eventPrice: number,
        eventCost: number,
        eventDate: string
    ) {
        if (
            eventName === undefined ||
            eventPrice === undefined ||
            eventCost === undefined ||
            eventDate === undefined
        ) {
            return;
        }
        this.eventService
            .createEvent(eventName, eventPrice, eventCost, eventDate)
            .then(() => {
                this.router.navigateByUrl('home');
            });

    }
}