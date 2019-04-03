import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Data } from '../data/data.model'
import { Router } from '@angular/router';
import { DataService} from '../data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {
  data: FirebaseListObservable<any[]>;

    constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
  // this.data = this.dataService.getData();
  }

}
