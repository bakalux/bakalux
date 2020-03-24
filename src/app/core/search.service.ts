import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly baseUrl: string = 'https://api.github.com/search/repositories';
  private readonly queryUrl: string = '?q=';
  private readonly sizeUrl: string = "&page=1&per_page=10";

  constructor(private readonly http: HttpClient) { }

  public async search(keyword: string): Promise<object> {
    try {
      return this.http.get(this.baseUrl + this.queryUrl + keyword + this.sizeUrl).toPromise();
    } catch (error) {
      console.error("SearchService: search request error");
    }

  }
}
