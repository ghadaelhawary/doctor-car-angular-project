import { PipeTransform, Pipe } from "@angular/core";
import { Clinic } from "../../../_Models/clinic/clinic";
// import {Doctor} from '../../../_Models/doctor/doctor';
// import { from, pipe } from "rxjs";
@Pipe({
  name: "nameFilter"
})
export class NameFilterPipe implements PipeTransform {
  result: [];
  transform(clinics: Clinic[], nameSerch: string) {
    if (!clinics || !nameSerch) {
      return clinics;
    }
    let y = clinics.filter(clinic => {
      return clinic.Name.toLowerCase().includes(nameSerch);
    });
    return y;
  }
}
