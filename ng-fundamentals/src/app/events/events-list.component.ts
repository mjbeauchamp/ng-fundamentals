import {Component} from '@angular/core';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '11/25/1985',
        time: '10:00 am',
        price: 9999.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1234 Howdy Ln',
            city: 'Kansas City',
            country: 'USA'
        }
    }

    handleEventClicked(event) {
        console.log(event);
    }
}