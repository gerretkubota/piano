/**
 * 
 * @param {string} input
 * If the input has a length of 1, check if it has the following letters
 * If the input has a length > 1, check it matches the pattern of C,D,...
 */
export const checkInput = input => {
  if (input.length === 1) {
    return input.match(/^[CDEFGAB]$/);
  } else {
    return input.match(/^([CDEFGAB],)+[CDEFGAB]$/);
  }
};