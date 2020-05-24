import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-applicant1',
  templateUrl: './applicant1.component.html',
  styleUrls: ['./applicant1.component.css']
})
export class Applicant1Component implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const link = params.get('id');
    });
  }

}
