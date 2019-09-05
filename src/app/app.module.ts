import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { FavoritesComponent, SearchPipe } from './favorites/favorites.component';
import { ActionsLogComponent } from './actions-log/actions-log.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FavoriteDialogComponent } from './favorites/favorite-dialog/favorite-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducerFavorites } from './reducers/favorites.reducer';
import { reducerActionLogs } from './reducers/actions-log.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './effects/app.effects';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    FavoritesComponent,
    ActionsLogComponent,
    FavoriteDialogComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    StoreModule.forRoot( {
      favorites: reducerFavorites,
      actionLogs: reducerActionLogs
    }),
    FormsModule,
    MatTableModule,
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FavoriteDialogComponent]
})
export class AppModule { }
