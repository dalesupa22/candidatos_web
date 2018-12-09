import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public redirect(event) {
    this.router.navigate(['']);
  }

}
