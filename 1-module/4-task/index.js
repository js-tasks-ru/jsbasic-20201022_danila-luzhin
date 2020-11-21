/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let target1 = '1xbet';
  let target2 = 'xxx';
  let lowerStr = str.toLowerCase();
  if(lowerStr.includes(target1) || lowerStr.includes(target2)) {
    return true;
  } else {
    return false;
  }
}
