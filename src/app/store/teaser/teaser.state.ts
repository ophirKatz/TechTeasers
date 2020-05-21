import { ModelId } from './../../model/model';
import { Teaser } from './../../model/teaser/teaser.model';

import { EntityState } from '@ngrx/entity';

export interface TeasersState extends EntityState<Teaser> {
	selectedTeaserId: ModelId;
}