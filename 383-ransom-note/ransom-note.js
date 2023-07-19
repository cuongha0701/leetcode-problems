/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let tempMagazine = magazine;
  for (let i = 0; i < ransomNote.length; i++) {
    if (!tempMagazine.includes(ransomNote[i])) {
      return false;
    } else {
      tempMagazine = tempMagazine.replace(ransomNote[i], '');
    }
  }
  return true;
};
