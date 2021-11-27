import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() filtertype: string;
  @Input() filtervalues = [];
  constructor() { }

  ngOnInit(): void {
  }

}
