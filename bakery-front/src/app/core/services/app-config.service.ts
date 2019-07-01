import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../../model/config.model';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppConfigService {

  private BASE_API = 'https://jhyi23qkd9.execute-api.eu-west-1.amazonaws.com/v1';
  private config: Config;

  constructor(private http: HttpClient) {}

  getConfig(): Observable<Config>  {
    if (!this.config) {
      return this.http.get<Config>(`${this.BASE_API}/conf`).pipe(tap(config => {
        this.config = config;
      }));
    } else {
      return of(this.config);
    }
  }

}
