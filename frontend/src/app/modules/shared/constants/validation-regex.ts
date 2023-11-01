export const nameWithSpacesRe = /^\p{L}+(\s?\p{L}+|-?\p{L}|'?\p{L})*$/u;
export const nameWithOutSpacesRe = /^\p{L}+(-?\p{L}|'?\p{L})*$/u;
export const passwordRe =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;
export const numberPlateRe = /^[\p{Lu}\d]+$/u;
