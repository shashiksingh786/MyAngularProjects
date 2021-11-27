import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HackerRankAngular';
  statuses = ['All', 'Active', 'Disable'];
  categories = ['Development', 'Testing', 'Deployment'];

  status = 'status';
  category = 'category';
  ngOnInit() {

  }

}
