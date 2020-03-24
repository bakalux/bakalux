import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { DumbModule } from '../../dumb';
import { SearchPageComponent } from './search-page.component';

@NgModule({
    declarations: [
        SearchPageComponent,
    ],
    exports: [SearchPageComponent],
    imports: [CommonModule, DumbModule],
})
export class SearchPageModule { }
