import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { DataService } from '../data.service'
import { Data } from '../data/data.model'

@Component({
  selector: 'app-upper',
  templateUrl: './upper.component.html',
  styleUrls: ['./upper.component.css'],
  providers: [DataService]
})
export class UpperComponent implements OnInit {
  datas: FirebaseListObservable<any[]>;
constructor(private dataService: DataService) {}
  ngOnInit() {
  this.datas = this.dataService.getData();
  }
 dataDisplay= null;
 button(){
  this.dataDisplay=true;
 }

}
