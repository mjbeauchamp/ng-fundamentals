import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
        .thumbnail {min-height: 210px;}
    `]
})

export class EventThumbnailComponent {
    @Input() event: any;
    @Output() eventClick = new EventEmitter();

    handleClickMe() {
        console.log('Boop!');
        this.eventClick.emit(this.event.name);
    }

    sayHi() {
        console.log('Hello!!');
    }
}