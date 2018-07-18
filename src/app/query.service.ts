import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  baseUrl: String = '';

  constructor (
    private http: HttpClient
  ) { }

  runQuery(url: string) {
    const headers = new HttpHeaders({
      'Metadata': 'true',
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    return this.http
      .get(url, {headers: headers});
  }

}
