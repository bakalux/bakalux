import { NgModule } from "@angular/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RepoListModule } from './repo-list';

@NgModule({
    exports: [RepoListModule],
    imports: [NgbModule]
})
export class DumbModule { }
