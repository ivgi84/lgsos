import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './lgos.routes';

@NgModule({
    declarations:[],
    providers:[],
    imports:[
        RouterModule.forRoot(routes,{
            initialNavigation:'enabled'
        })
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{}