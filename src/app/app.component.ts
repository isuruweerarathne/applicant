import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicantServiceService } from './services/applicant-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  AdvertTitle = 'Developer';
  CompanyName = 'Company A';
  Step = 1;

  constructor(
    // private route: ActivatedRoute,
    // private router: Router
    private service: ApplicantServiceService
  ) { }


  ngOnInit(): void {
    this.service.getPositionDetails(1).subscribe(result => {
      console.log(result);
    });
    // this.route.paramMap.subscribe(params => {
    //   const link = [+params.get('productId')];
    // });
  }
}
