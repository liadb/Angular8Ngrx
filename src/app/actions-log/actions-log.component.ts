import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActionsLog} from './actions-log.interface';
import {Store} from '@ngrx/store';
import {AppState} from '../app.state';
import * as ActionsLogActions from '../actions/actions-log.actions';

@Component({
  selector: 'app-actions-log',
  templateUrl: './actions-log.component.html',
  styleUrls: ['./actions-log.component.scss']
})
export class ActionsLogComponent implements OnInit {
  public actions$: Observable<ActionsLog[]>;
  public displayedColumns: string[] = ['time', 'favorite', 'action', 'delete'];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.actions$ = this.store.select('actionLogs');
  }

  deleteAction(action) {
    this.store.dispatch(new ActionsLogActions.RemoveActionsLog(action.id));
  }

}
