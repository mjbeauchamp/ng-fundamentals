import {Component} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .event-image { max-height: 100px;}
    `]
})

export class EventDetailsComponent {
    event: any;

    constructor(private eventService: EventService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.event = this.eventService.getEvent(parseInt(this.route.snapshot.params['id']));
    }
}