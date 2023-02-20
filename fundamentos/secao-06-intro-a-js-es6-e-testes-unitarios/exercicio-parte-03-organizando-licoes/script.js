const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNightShift = (object, key, value) => {
    object[key] = value;
};

addNightShift(lesson2, 'turno', 'noite');

const listObjectKeys = (obj) => {
    return Object.keys(obj);
};

const showObjLength = (obj) => {
    const objLength = Object.keys(obj).length;
    return objLength;
};

const listObjectValues = (obj) => {
    return Object.values(obj);
};

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const getNumberOfStudents = (obj) => {
  totalOfSudents = 0;
  const keys = Object.keys(obj);
  for (const index in keys) {
    totalOfSudents += obj[keys[index]].numeroEstudantes;
  }
  return totalOfSudents;
};

const getValueByNumber = (obj,number) => Object.values(obj)[number];

const verifyPair = (obj, key, value) => {
  const entries = Object.entries(obj);
  let isEqual = false;
  for (const index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
  }
  return isEqual;
};
