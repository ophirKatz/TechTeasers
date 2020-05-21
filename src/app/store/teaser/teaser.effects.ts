import { Teaser } from 'src/app/model/teaser/teaser.model';
import { TeaserService } from './../../services/teaser/teaser.service';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import { map, switchMap, catchError } from 'rxjs/operators';

import * as teaserActions from './teaser.actions';
import { of } from 'rxjs';

@Injectable()
export class TeaserEffects {
	constructor(private actions$: Actions,
		private teaserService: TeaserService) {}

	public loadTeasers$ = createEffect(() => this.actions$.pipe(
		ofType(teaserActions.loadTeasers),
		switchMap(() => {
			return this.teaserService.fetchTeasers().pipe(
				// TODO : Check in store if data is loaded. If so, dont reload from service.
				map((teasers: Teaser[]) => teaserActions.loadTeasersComplete({teasers})),
				catchError(error => of(teaserActions.loadTeasersFailed({error})))
			);
		})
	))
}