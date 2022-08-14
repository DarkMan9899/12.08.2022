class University{
    constructor() {
        this.student=[]
        this.teacher=[]
    }
    addMember = (member)=>{
        if (member instanceof  University){
            this.student.push(member)
        }
        else if(member instanceof University){
            this.teacher.push(member)
        }
        else{
            throw new Error("University can only add students or teachers")

        }
    }
    removeMember=(member)=>{
        if (member instanceof  University) {
            this.student=this.student.filter((student)=>{
                return student.id !== member.id
            })
        }
        else if(member instanceof  University){
            this.teacher = this.teacher.filter((teacher)=>{
                return teacher.id !==member.id
            })
        } else{
            throw new Error('University can only add students or teachers')
        }

    }

    startLesson() {
        if (this.teacher.some((teacher) => teacher.energy >= 5) && this.student.some((student) => student.energy >= 2)) {
            this.teacher.forEach((teacher) => teacher.energy -= 5)
            this.student.forEach((student) => student.energy -= 2)
        } else {
            throw new Error("Teachers or students dont have enough energy to start lesson, please wait some time")
        }
    }

}
class UniversityMember {
    constructor(name, age, role, energy, id) {
        this._name = name;
        this._age = age;
        this._role = role;
        this._energy = energy;
        this._id = id;
    }
    info = () =>{
        console.log(this)
    }
}
class student extends UniversityMember{

}

class teacher extends UniversityMember{

}

const university = new University();
const students = new student('Karen', 29, 'Student', 24, 1)
const teachers = new teacher('David', 28, 'Teacher', 24, 2)


university.addMember(student)
university.addMember(teacher)


university.startLesson()
university.startLesson()

console.log(university);