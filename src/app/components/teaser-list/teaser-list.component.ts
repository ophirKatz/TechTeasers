import { Component, OnInit } from '@angular/core';

import { Teaser } from 'src/app/model/teaser/teaser.model';
import { TeasersState } from './../../store/teaser/teaser.state';
import * as fromTeaserStore from '../../store/teaser';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-teaser-list',
  templateUrl: './teaser-list.component.html',
  styleUrls: ['./teaser-list.component.css']
})
export class TeaserListComponent implements OnInit {
  public teasers: Observable<Teaser[]>;

  constructor(private store: Store<TeasersState>) { }

  ngOnInit(): void {
    // this.teasers = this.teaserService.fetchTeasers();
    this.store.dispatch(fromTeaserStore.TeaserActions.loadTeasers());
  }
}
