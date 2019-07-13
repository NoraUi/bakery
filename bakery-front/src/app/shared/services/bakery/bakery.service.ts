import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Bakery } from 'src/app/model/bakery.model';
import { Bakeries } from 'src/app/model/bakeries.model';

@Injectable({
  providedIn: 'root'
})
export class BakeryService {

  private BASE_API = 'https://jhyi23qkd9.execute-api.eu-west-1.amazonaws.com/v1';

  constructor(private http: HttpClient) {
  }

  get(id: string): Observable<Bakery> {
    return this.http.get<Bakery>(`${this.BASE_API}/api/bakery/${id}`);
  }

  createBakery(bakery: Bakery): Observable<Bakery> {
    return this.http.post<Bakery>(`${this.BASE_API}/api/bakery`, bakery);
  }

  searchBakeries(searchPage: number, pageSize: number): Observable<Bakeries> {
    const params = new HttpParams()
      .set('page', String(searchPage))
      .set('size', String(pageSize));
    return this.http.get<Bakeries>(`${this.BASE_API}/api/bakery`, {params});
  }

}
