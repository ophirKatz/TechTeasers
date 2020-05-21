import { ModelId } from './../../model/model';
import { Teaser } from './../../model/teaser/teaser.model';
import { TeasersState } from "./teaser.state";

import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

class TeaserCollection {
	private adapter: EntityAdapter<Teaser>;

	constructor() {
		this.adapter = createEntityAdapter<Teaser>();
	}

	public get initialState(): TeasersState {
		return this.adapter.getInitialState({
			selectedTeaserId: ModelId.emptyId,
		});
	}

	//#region collection methods

	public onLoadComplete(state: TeasersState, payload: { teasers: Teaser[] }) {
		return this.adapter.setAll(payload.teasers, state);
	}

	//#endregion

	//#region selectors

	public selectTeaserIds = this.adapter.getSelectors().selectIds;
	public selectAllTeasers = this.adapter.getSelectors().selectAll;

	//#endregion
}

export const teaserCollection = new TeaserCollection();