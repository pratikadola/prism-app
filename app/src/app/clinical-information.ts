export class ClinicalInformation {
    id: number;
    name: string;
    age: number;
    BMI: number;
    ethnicity: string;
    atrialFibrillation: boolean;
    atypicalAntipsychotics: boolean;
    corticoSteroids: boolean;
    migraines: boolean;
    rheumatoidArthritis: boolean;
    chronicKidneyDisease: boolean;
    severeMentalIllness: boolean;
    systemicLupusErythematosus: boolean;
    Treatedhyp: boolean;
    type1Diabetes: boolean;
    type2Diabetes: boolean;
    ethnicityRisk: number;
    heartAttackInFirstDegreeRelative: boolean;
    cholesterolRatio: number;
    systolicBloodPressure: number;
    stdSystolicBloodPressure: number;
    smokeStatus: number;
    yearsNonSurvivalRiskCalculated: number = 10;
    townSendScore: number;
}