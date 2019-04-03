/**
 * 
 * @param {string} userInput`
 * If the input has a length of 1, check if it has the following letters
 * If the input has a length > 1, check it matches the pattern of C,D,...
 */
export const checkInput = userInput => {
  if (userInput.length === 1) {
    return userInput.match(/^[CDEFGAB]$/);
  } else {
    return userInput.match(/^([CDEFGAB],)+[CDEFGAB]$/);
  }
};
/**
 * 
 * @param {array} userLog 
 * @param {string} userInput 
 * userLog will only save 20 entries
 * userLog will starting deleting its first element when the entry is 20
 * new entries will be pushed to the back of userLog
 */
export const adjustLog = (userLog, userInput) => {
  if (userLog.length === 20) {
    userLog.shift();
  }
  userLog.push(userInput);
};