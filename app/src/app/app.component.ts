import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClinicalInformation } from './clinical-information';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class AppComponent implements OnInit{
  constructor(
    
  ) { }
  
  qriskForm: any;
  clinicalInformation: ClinicalInformation;
  height: number;
  weight: number;
  ethnicities = [
    {label: "white or not stated", value: 1},
    {label: "Indian", value: 2},
    {label: "Pakistani", value: 3},
    {label: "Bangladeshi", value: 4},
    {label: "Other Asian", value: 5},
    {label: "Black Caribbean", value: 6},
    {label: "Black African", value: 7},
    {label: "Chinese", value: 8},
    {label: "Other Ethnic Group", value: 9},
]
  ngOnInit() {
    this.clinicalInformation = new ClinicalInformation();
    this.clinicalInformation.age=1;
    this.qriskForm = new FormGroup({
      age: new FormControl({age: this.clinicalInformation.age}),
      name: new FormControl({name: this.clinicalInformation.name}),
      height: new FormControl({height: this.height}),
      weight: new FormControl({weight: this.weight}),
      atrialFibrillation: new FormControl({atrialFibrillation: this.clinicalInformation.atrialFibrillation}),
      atypicalAntipsychotics: new FormControl({atypicalAntipsychotics: this.clinicalInformation.atypicalAntipsychotics}),
      corticoSteroids: new FormControl({corticoSteroids: this.clinicalInformation.corticoSteroids}),
      rheumatoidArthritis: new FormControl({rheumatoidArthritis: this.clinicalInformation.rheumatoidArthritis}),
      chronicKidneyDisease: new FormControl({chronicKidneyDisease: this.clinicalInformation.chronicKidneyDisease}),
      severeMentalIllness: new FormControl({severeMentalIllness: this.clinicalInformation.severeMentalIllness}),
      systemicLupusErythematosus: new FormControl({systemicLupusErythematosus: this.clinicalInformation.systemicLupusErythematosus})
    })
  }
  title = 'app';
  score = calc_qrisk3_female(30, false, false, false, true, true, false, false, true, true, true, false, 23.9, 2, true, 1, 100, 5, 1, 1, 1)
}

function calc_qrisk3_female(age: any, b_AF: any, b_atypicalantipsy: any, b_corticosteroids: any, b_migraine: any, b_ra: any, b_renal: any, b_semi: any, b_sle: any, b_treatedhyp: any, b_type1: any, b_type2: any, bmi: any, ethrisk: any, fh_cvd: any, rati: any, sbp: any, sbps5: any, smoke_cat: any, surv: any, town: any) {
  return age
}