export class Developer {
    id: number;
    firstName: string;
    lastName: string;
    favoriteLanguage: string;
    yearStarted: number;

    constructor(id:number,
        firstName: string,
        lastName: string,
        favoriteLanguage: string,
        yearStarted: number){
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.favoriteLanguage = favoriteLanguage;
            this.yearStarted = yearStarted;
        }

}
