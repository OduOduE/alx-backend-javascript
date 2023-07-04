export default function getListStudentIds(getList) {
  if (!Array.isArray(getList)) {
    return [];
  }
  return getList.map((object) => object.id);
}
