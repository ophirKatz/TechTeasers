import * as TeaserActions from './teaser.actions';

import { teaserCollection } from './teaser.collection';
import { on, createReducer, Action } from '@ngrx/store';
import { TeasersState } from './teaser.state';

const teaserReducer = createReducer(
	teaserCollection.initialState,
	on(TeaserActions.loadTeasersComplete, teaserCollection.onLoadComplete)
);

export function reducer(state: TeasersState | undefined, action: Action): TeasersState {
  return teaserReducer(state, action);
}