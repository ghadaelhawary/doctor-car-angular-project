import { PipeTransform, Pipe } from '@angular/core';
import { Patient } from '../_models/patient';

@Pipe({
    name: 'patientFilter',
    pure: true // pure by default
})

export class PatientFilterPipe implements PipeTransform {

    transform(patients: Patient[], searchInput:string): Patient[] {
        if(!patients || !searchInput){
            return patients;
        }

        return patients.filter(patient =>
            patient.Name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
        );
    }

}
