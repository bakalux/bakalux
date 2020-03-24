import { Component, Input } from "@angular/core";

import { IRepo } from './repo.interface';

@Component({
  selector: "repo-list",
  styleUrls: ["./repo-list.component.scss"],
  templateUrl: "./repo-list.component.html"
})
export class RepoListComponent {
  @Input()
  public readonly hasMadeSearch?: boolean;

  @Input()
  public readonly results?;

  public get repos(): ReadonlyArray<IRepo> {
    return this.results && this.results.items;
  }

  public get isNothingFound(): boolean {
    return this.hasMadeSearch && !this.repos.length;
  }
}
