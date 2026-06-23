// JavaScript code​​​​​​‌‌‌‌‌‌​​‌‌​‌‌​​​‌‌​​​​​​​ below
// Change these boolean values to control whether you see
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

const roster = [
    {
        name: 'Anwar',
        grades: [97, 87, 99]
    },
{
    name: 'Sophie',
    grades: [75, 22, 85]
},
{
    name: 'Ron',
    grades: [64, 77, 90]
}
];
const teacher = 'Harriet'

/* A student is passing if their GPA is > 70 */
function calculateGPA(grades) {
    return Math.floor((grades.reduce((currSum, currValue) => currSum + currValue)) / grades.length);
}

// Your code goes here

function Student(name, grades) {
    this.name = name;
    this.grades = grades;
}

function CourseRoster(students, teacher) {
    this.roster = students;
    this.teacher = teacher;
}

Student.prototype.getGrades = function() { return this.grades; }
Student.prototype.checkIsPassing = function() { return calculateGPA(this.grades) > 70; }

CourseRoster.prototype.getRoster = function() {
    return this.roster.map(student => `${student.name}`).join(", ");
}

CourseRoster.prototype.returnGraduatingStudents = function() {
    return this.roster.filter(student => student.checkIsPassing());
}
