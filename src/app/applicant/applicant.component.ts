import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicantService } from '../services/applicant.service';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css'],
})
export class ApplicantComponent implements OnInit {
  AdvertTitle = 'Developer';
  CompanyName = 'Company A';
  Step = 1;

  constructor(
    private route: ActivatedRoute,
    private service: ApplicantService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const link = params['id'];
      console.log(link);

      if (link) {
        this.service.getPositionDetails(link).subscribe((result) => {
          console.log(result);
        });
      }
    });
  }
}
