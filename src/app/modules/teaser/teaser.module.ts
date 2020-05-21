import { teaserReducers } from './../../store/index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TeaserService } from './../../services/teaser/teaser.service';
import { TeaserListComponent } from '../../components/teaser-list/teaser-list.component';

import * as fromTeaserStore from '../../store/teaser';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';

// import { entityConfig } from '../../entity-metadata';

@NgModule({
  declarations: [
    TeaserListComponent,
  ],
  providers: [
    TeaserService,
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature(fromTeaserStore.teaserEffects),
    StoreModule.forFeature('teasers', fromTeaserStore.reducer),
    // EntityDataModule.forRoot(entityConfig),
    HttpClientModule
  ],
  exports: [TeaserListComponent]
})
export class TeaserModule { }
