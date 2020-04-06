import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'categoryList'
    //our pipe will be stateless so we don't need
    //to include that property.
    //pure: true
})
export class CategoryListPipe implements PipeTransform {
  /*
      This code sets up a local array to store the
      unique category names found, uses the array dot
      for each method to walk over the collection
      and add unique names to the local array,
      then it returns the local array values joined
      into a string with a comma separator
      We are returning value from the pipe.
      U can build a pipes that return other data
      types & angular will just flow that through.
    */
    transform(mediaItems) {
        const categories = [];
        mediaItems.forEach(mediaItem => {
          if (categories.indexOf(mediaItem.category) <= -1) {
              categories.push(mediaItem.category);
          }
        });
        return categories;//.join(', ');
    }
}













