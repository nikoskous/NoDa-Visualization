import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`,
};

export interface RandomQuoteContext {
  // The quote's category: 'dev', 'explicit'...
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private httpClient: HttpClient) {}

  temporalRange(from: string, to: string) {
    return this.httpClient.get('/movingobject/' + from + '/' + to).toPromise();
  }

  javaTest() {
    return this.httpClient.get('/hello', { responseType: 'text' }).toPromise();
  }

  javaTestJson() {
    return this.httpClient.get('/testjson').toPromise();
  }
}
