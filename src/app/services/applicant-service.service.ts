import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicantServiceService {

  constructor(private httpClient: HttpClient) { }

  public getPositionDetails(id: number): Observable<any> {
    let url = '/api/AccountType';

    return this.httpClient.get<any>(url);
  }

  // public createNewsArticle(news: NewsArticle): Observable<boolean> {
  //   return this.httpClient.post<any>(this.newsUrl, news);
  // }
}
