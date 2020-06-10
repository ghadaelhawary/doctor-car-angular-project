export class Patient {
    constructor(
        public NID: number,
        public Name: string,
        public Password: string,
        // public DateOfBirth: Date,
        public DateOfBirth: string,
        public Gender: string,
        // public ProfileCreationDate: Date,
        public ProfileCreationDate: string,
        public _id?:string
    ){}
}
// export class Patientd {
//     constructor(
        
//         public status?:number,
//         public data?:Patient[]
//     ){}
// }
