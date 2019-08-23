// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.newName = attributes.name,
        this.newAge = attributes.age,
        this.newLocation = attributes.location
    }
    speak(){
        return `Hello my name is ${this.newName} and I am from ${this.newLocation}`;
    }
}

class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.newSpecialty = instructorAttributes.specialty,
        this.newFavLanguage = instructorAttributes.favLanguage,
        this.newCatchPhrase = instructorAttributes.catchPhrase
    }
    demo(subject){
        return `Today we learned about ${subject}`;
    }
    grade(student,subject){
        return `${student.name} recieves a perfect score in ${subject}`;
    }
}

class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes);
        this.newPreviousBackground = studentAttributes.previousBackground,
        this.newClassName = studentAttributes.className,
        this.newFavSubjects = studentAttributes.favSubjects
    }
    listsSubjects(){
        return this.newFavSubjects;
    }
    PRAssignment(){
        return `${this.name} has submitted`:
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttributes){
        super(pmAttributes);
        this.newGradeClassName = pmAttributes.gradeClassName,
        this.newFavInstructor = pmAttributes.favInstructor
    }
    standUp(channel){
        `${this.name} announces to ${channel} @channel standy times!`
    }
    debugsCode(student,subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}