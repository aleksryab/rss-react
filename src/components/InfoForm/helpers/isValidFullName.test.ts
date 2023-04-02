import isValidFullName from './isValidFullName';

describe('isValidFullName tests', () => {
  it('empty string should return false', () => {
    expect(isValidFullName('')).toBe(false);
  });

  it('one word should return false', () => {
    expect(isValidFullName('Alex')).toBe(false);
  });

  it('two words starting with a small letter should return false', () => {
    expect(isValidFullName('alex smith')).toBe(false);
  });

  it('two words starting with a capital letter should return true', () => {
    expect(isValidFullName('Alex Smith')).toBe(true);
  });
});
