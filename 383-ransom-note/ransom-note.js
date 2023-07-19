/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let tempMagazine = magazine;
  for (let i = 0; i < ransomNote.length; i++) {
    for (let j = 0; j < tempMagazine.length; j++) {
      if (ransomNote[i] === tempMagazine[j]) {
        tempMagazine = tempMagazine.replace(tempMagazine[j], "");
        break;
      }
    }
  }
  if (magazine.length - tempMagazine.length === ransomNote.length) return true;

  return false;
};
