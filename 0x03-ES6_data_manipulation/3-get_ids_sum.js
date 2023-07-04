export default function getStudentIdsSum(list) {
  return list.reduce((stud, idy) => stud + idy.id, 0);
}
