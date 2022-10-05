import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'app';
  score = calc_qrisk3_female(30, false, false, false, true, true, false, false, true, true, true, false, 23.9, 2, true, 1, 100, 5, 1, 1, 1)
}

function calc_qrisk3_female(age: any, b_AF: any, b_atypicalantipsy: any, b_corticosteroids: any, b_migraine: any, b_ra: any, b_renal: any, b_semi: any, b_sle: any, b_treatedhyp: any, b_type1: any, b_type2: any, bmi: any, ethrisk: any, fh_cvd: any, rati: any, sbp: any, sbps5: any, smoke_cat: any, surv: any, town: any) {
  return age
}