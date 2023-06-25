export const checkQuest = (array, qId) => {
  let find = false;

  if (array.length === 0) return false;

  array.forEach((item) => {
    if(item.questId === qId) {
      find = true;
    }
  });
  return find;
}

export const checkTestQuest = (array, qId) => {
  let find = false;

  if (array.length === 0) return false;

  array.forEach((item) => {
    if(item.q_id === qId) {
      find = true;
    }
  });
  return find;
}