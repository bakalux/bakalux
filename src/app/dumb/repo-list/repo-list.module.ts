import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { RepoListComponent } from './repo-list.component';

@NgModule({
    declarations: [RepoListComponent],
    exports: [RepoListComponent],
    imports: [CommonModule]
})
export class RepoListModule { }
