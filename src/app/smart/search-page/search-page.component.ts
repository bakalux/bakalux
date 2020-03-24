import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { SearchService } from '../../core/search.service';

@Component({
  selector: 'search-page',
  styleUrls: ['./search-page.component.scss'],
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent implements OnInit {
  public readonly keyword$ = new Subject<string>();
  public readonly hasMadeSearch$ = new Subject<boolean>();
  public results$: Observable<object>;

  constructor(private searchService: SearchService) { }

  public ngOnInit(): void {
    this.results$ = this.keyword$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((keyword) => {
        if (keyword.length < 2) {
          this.hasMadeSearch$.next(false);

          return of([]);
        }

        const results = this.searchService.search(keyword);
        this.hasMadeSearch$.next(true);

        return results
      })
    )
  }

}
