import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {MediaItemService, MediaItem } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
    medium = '';
    mediaItems: MediaItem[];

    constructor(private mediaItemService: MediaItemService,
      private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
      //this.getMediaItems(this.medium);
      this.activatedRoute.paramMap
      .subscribe(paramMap =>{
        let medium = paramMap.get('medium');
        if(medium.toLowerCase() === 'all'){
          medium = '';
        }
        this.getMediaItems(medium);
      });
    }
      // this.mediaItems = this.mediaItemService.get()
      // .subscribe(mediaItems => {
      //   this.mediaItems=mediaItems;
      // });


    //let's pass the function so we can trigger a
    //reload of the list on delete, so we can create
    //an error function and since we don't need to deal
    //with the parameters at this time, we can use
    //an empty parentheses for that.
    onMediaItemDelete(mediaItem) {
      this.mediaItemService.delete(mediaItem)
      .subscribe(() => {
        this.getMediaItems(this.medium);
      });
     }

     getMediaItems(medium: string) {
       this.medium = medium;
       this.mediaItemService.get(medium)
       .subscribe(mediaItems => {
         this.mediaItems = mediaItems;
       });
     }
}
  //   {
  //     id: 1,
  //     name: 'Firebug',
  //     medium: 'Series',
  //     category: 'Science Fiction',
  //     year: 2010,
  //     watchedOn: 1294166565384,
  //     isFavorite: false
  //   },
  //   {
  //     id: 2,
  //     name: 'The Small Tall',
  //     medium: 'Movies',
  //     category: 'Comedy',
  //     year: 2015,
  //     watchedOn: null,
  //     isFavorite: true
  //   }, {
  //     id: 3,
  //     name: 'The Redemption',
  //     medium: 'Movies',
  //     category: 'Action',
  //     year: 2016,
  //     watchedOn: null,
  //     isFavorite: false
  //   }, {
  //     id: 4,
  //     name: 'Hoopers',
  //     medium: 'Series',
  //     category: 'Drama',
  //     year: null,
  //     watchedOn: null,
  //     isFavorite: true
  //   }, {
  //     id: 5,
  //     name: 'Happy Joe: Cheery Road',
  //     medium: 'Movies',
  //     category: 'Action',
  //     year: 2015,
  //     watchedOn: 1457166565384,
  //     isFavorite: false
  //   }
  // ];

