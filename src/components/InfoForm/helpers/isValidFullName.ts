function isValidFullName(fullName: string): boolean {
  let isValid = true;

  const names = fullName.split(' ');
  if (names.length < 2) return false;

  names.forEach((name) => {
    if (name[0] === name[0].toLowerCase()) isValid = false;
  });

  return isValid;
}

export default isValidFullName;
