import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import {AppComponent} from './app.component';
import {MediaItemComponent} from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe} from './category-list.pipe';
//import {  MediaItemFormComponent } from './new-item/media-item-form.component';
import { lookupListToken, lookupLists } from './providers';
import { MockXHRBackend } from './mock-xhr-backend';
import {routing} from './app.routing';
//import { MediaItemService } from './media-item.service';
//import { NewItemModule } from './new-item/new-item.module';
import { CategoryListComponent } from './category-list.components';



// const lookupLists = {
//   mediums: ['Movies', 'Series']
// };

@NgModule({
    imports: [
        BrowserModule,
        //ReactiveFormsModule,
        HttpClientModule,
        routing,
        //NewItemModule
    ],
    declarations: [
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        CategoryListComponent,
        FavoriteDirective,
        CategoryListPipe,
        //MediaItemFormComponent
    ],
    providers: [ //i'll get instances now we can work with
      //http services, it'll be calling this mockBackend
      //which will handle read and write of media items
      //to an internal list,much like the current media
      //item service does.
      {provide: lookupListToken, useValue: lookupLists},
      {provide: HttpXhrBackend, useClass: MockXHRBackend}
    ],
    bootstrap: [
        AppComponent
    ]
    // providers: [
    //   MediaItemService
    // ]
})
export class AppModule {}
