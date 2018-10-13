export class Employee {

    public firstName: string;
    public lastName: string;
    public gender: string;
    public dateOfBirth: string;
    public department: string;

    constructor(firstName: string, lastName: string, gender: string, dateOfBirth: string, department: string ){
        this.firstName = firstName;
        this.lastName = lastName
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.department = department;
    }

}