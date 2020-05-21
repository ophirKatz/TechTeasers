import { Teaser } from 'src/app/model/teaser/teaser.model';
import { props, createAction } from '@ngrx/store';

export const loadTeasers = createAction('[TeaserList] Load Teasers');
export const loadTeasersComplete = createAction('[TeaserList] Load Teasers Complete', props<{ teasers: Teaser[] }>());
export const loadTeasersFailed = createAction('[TeaserList] Load Teasers Failed', props<{ error: string }>());