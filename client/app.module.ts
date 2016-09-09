/**
 * Created by mtoladinni on 9/9/16.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {FormsModule} from "@angular/forms";
import {routing} from "./app.routing";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [AppComponent, AboutComponent, ContactComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
