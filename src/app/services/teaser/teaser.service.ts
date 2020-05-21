import { Teaser } from 'src/app/model/teaser/teaser.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeaserService {
  private readonly db: string = 'assets/db.json';

  constructor(private httpClient: HttpClient) {
  }

  public fetchTeasers(): Observable<Teaser[]> {
    return this.httpClient.get<Teaser[]>(this.db);
  }
}
