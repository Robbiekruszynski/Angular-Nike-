import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Data } from './data/data.model';

@Injectable()
export class DataService {
  data: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
     this.data = database.list('data');
  }

  getData() {
    return this.data;
  }
}
