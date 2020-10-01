module.exports = function check(str, bracketsConfig) {
  const strArr = str.split('');
  let temp = [];
  for (let i = 0; i < strArr.length; i += 1) {
    const bracket = strArr[i];

    for (let j = 0; j < bracketsConfig.length; j += 1) {
      if (bracket === bracketsConfig[j][0]
          && bracketsConfig[j][0] === bracketsConfig[j][1]) {
            if (bracket === temp.slice(-1)[0]) {
              temp = temp.slice(0, -1);
            } else {
              temp = [...temp, bracket];
            }
      }

      if (bracket === bracketsConfig[j][0]) {
        temp = [...temp, bracket];
      }

      if (bracket === bracketsConfig[j][1]
          && temp.slice(-1)[0] === bracketsConfig[j][0]
          && temp.length > 0) {
        temp = temp.slice(0, -1);
      } else if (bracket === bracketsConfig[j][1]) {
          if (bracketsConfig[j][1] === bracketsConfig[j][0]) {
            continue;
          } else {
            return false;
          }
      }
    }
  }

  return temp.length === 0;
}