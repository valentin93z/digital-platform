export const checkTestAnswer = (array, aId) => {
    let find = false;
    if (array.length === 0) return false;
    array.forEach((item) => {
        if (item.a_id === aId) {
            find = true;
        }
    });
    return find;
}