import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote, ApiResponse } from './app.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  public getQuotes(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(
      'https://goquotes-api.herokuapp.com/api/v1/random?count=1'
    );
  }
  public checkGrammar(text: string): Observable<any> {
    let header = new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      'x-rapidapi-key': 'fe8b693605msha3b9ce3bddd7e80p14b449jsnaf70afb81e99',
      'x-rapidapi-host': 'grammarbot.p.rapidapi.com',
    });

    const data = `text=${encodeURIComponent(text)}&language=en-US`;

    return this.httpClient.post<any>(
      'https://grammarbot.p.rapidapi.com/check',
      data,
      { headers: header }
    );
  }

  url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';

  public translate(text: string) {
    let header = new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      'x-rapidapi-key': '62aed99c24msh21ecce9e042ad33p192a0ajsnbc927ea41c9b',
      'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
    });
    const data = `q=${encodeURIComponent(text)}&target=mk&source=en`;
    return this.httpClient
      .post(
        this.url,
        data,

        { headers: header }
      )
      .pipe(
        map((res: any) => {
          return res.data.translations[0].translatedText;
        })
      );
  }
}
