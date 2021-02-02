import {Component} from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html'
})

export class EventThumbnailComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '11/25/1985',
        time: '10:00 am',
        price: 9999.99,
        imageUrl: '/assets/images/angularconnect-shield.png'
    }
}