import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'mw-media-item',
    templateUrl: './media-item.component.html',
    styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent{
    // @Input('mediaItemToWatch') mediaItem;
    @Input() mediaItem;
    @Output() delete = new EventEmitter();

    onDelete() {
        console.log('deleted');
        /*
        This method expects to be called
        with an argument that represents
        data we can send back.
        return back what was requested
        to delete.
        since the media item component
        class has a media item property,
        we can pass that back
        the mediaItem is now wired up
        with an output for a delete event
        using the output decorator.
        */
        this.delete.emit(this.mediaItem);
    }
}
//     name= 'The Redemption';
//     wasWatched(){
//         return true;
//     }
// }

