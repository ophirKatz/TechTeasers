import * as TeaserActions from './teaser.actions';

import * as fromCollection from './teaser.collection';
import { on, createReducer, Action } from '@ngrx/store';
import { TeasersState } from './teaser.state';

const teaserReducer = createReducer(
	fromCollection.initialState,
	on(TeaserActions.loadTeasersComplete, fromCollection.onLoadComplete)
);

export function reducer(state: TeasersState | undefined, action: Action): TeasersState {
  return teaserReducer(state, action);
}