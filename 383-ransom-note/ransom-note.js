/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
 if (ransomNote.length > magazine.length) return false;

  let tempMagazine = magazine;
  for (let i = 0; i < ransomNote.length; i++) {
    const r = ransomNote.charAt(i);
    for (let j = 0; j < tempMagazine.length; j++) {
      if (ransomNote.charAt(i) === tempMagazine.charAt(j)) {
        tempMagazine = tempMagazine.replace(tempMagazine.charAt(j), '');
        break;
      }
    }
  }
  if (magazine.length - tempMagazine.length === ransomNote.length) return true;

  return false;
};
