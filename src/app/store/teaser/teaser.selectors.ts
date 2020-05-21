import { TeasersState } from './teaser.state';
import { teaserCollection } from './teaser.collection';

export const getSelectedTeaserId = (state: TeasersState) => state.selectedTeaserId;

export const selectTeaserIds = teaserCollection.selectTeaserIds;
export const selectAllTeasers = teaserCollection.selectAllTeasers;