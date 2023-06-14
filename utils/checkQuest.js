export const checkQuest = (array, qId) => {
  let find = false;

  if (array.length === 0) return false;

  array.forEach((item) => {
    if(item.questId === qId) {
      find = true;
    }
  });

  console.log(array, qId);
  console.log(find);
  return find;
}