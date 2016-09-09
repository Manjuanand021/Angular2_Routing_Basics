import {Routes, RouterModule} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
    {
        path: '',
        component: AboutComponent,
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
