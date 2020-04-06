import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import {throwError} from 'rxjs';

/*
  Then we need a contructor that takes in http,
  adding the typescript access modifier of private,
  to take advantage of the property initialization
  shorcut and setting the type to HttpClient.
*/

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {
constructor(private http: HttpClient) {}
  //Now we have all the service method using the
  //HttpClient we can remove the class property for
  //mediaItems
  //mediaItems = [];
    // {
    //   id: 1,
    //   name: 'Firebug',
    //   medium: 'Series',
    //   category: 'Science Fiction',
    //   year: 2010,
    //   watchedOn: 1294166565384,
    //   isFavorite: false
    // },
    // {
    //   id: 2,
    //   name: 'The Small Tall',
    //   medium: 'Movies',
    //   category: 'Comedy',
    //   year: 2015,
    //   watchedOn: null,
    //   isFavorite: true
    // }, {
    //   id: 3,
    //   name: 'The Redemption',
    //   medium: 'Movies',
    //   category: 'Action',
    //   year: 2016,
    //   watchedOn: null,
    //   isFavorite: false
    // }, {
    //   id: 4,
    //   name: 'Hoopers',
    //   medium: 'Series',
    //   category: 'Drama',
    //   year: null,
    //   watchedOn: null,
    //   isFavorite: true
    // }, {
    //   id: 5,
    //   name: 'Happy Joe: Cheery Road',
    //   medium: 'Movies',
    //   category: 'Action',
    //   year: 2015,
    //   watchedOn: 1457166565384,
    //   isFavorite: false
    // }

    /*
    Get post delete methods these return an observable
    and in the case of the get call we have the use
    of the pipe method to apply an rxjs operator named
    a map for extracting the media items from the response
    payload
    */
  get(medium) {
    const getOptions = {
      params: { medium }
    };
    return this.http.get<MediaItemsResponse>('mediaitems',getOptions)
      .pipe(
        map((response: MediaItemsResponse) => {
          return response.mediaItems;
        }),
        catchError(this.handleError)
      );
  }

  // get(medium) {
  //   const getOptions = {
  //     params: { medium }
  //   };
  //   return this.http.get<MediaItemResponse>('mediaitems',getOptions)
  //   .pipe(map(response => { return response.mediaItems;}));
  // }
  add(mediaItem) {
    //this.mediaItems.push(mediaItem);
    return this.http.post('mediaItems', mediaItem)
    .pipe(catchError(this.handleError));
  }

  delete(mediaItem) {
    return this.http.delete('mediaItems/${mediaItem.id}')
    .pipe(catchError(this.handleError));
    // const index = this.mediaItems.indexOf(mediaItem);
    // if(index >= 0) {
    //   this.mediaItems.splice(index, 1);
    // }
  }

  private handleError(error:HttpErrorResponse){
    console.log(error.message);
    return throwError('A data error occurred, please try again.');
  }

}
export interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  isFavorite: boolean;
}
interface MediaItemsResponse{
  mediaItems: MediaItem[];
}
