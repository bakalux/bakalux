import { NgModule } from "@angular/core";

import { DumbModule } from '../dumb';
import { SearchPageModule } from './search-page';

@NgModule({
    exports: [
        SearchPageModule
    ],
})
export class SmartModule { }
