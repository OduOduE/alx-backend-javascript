export default function updateStudentGradeByCity(list, city, newGrades) {
  return list
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.StudentId === student.id);
      const grade = gradeObj ? gradeObj.grade : 'N/A';
    return { ...student, grade };
    });
}
