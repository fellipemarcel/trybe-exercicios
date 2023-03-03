const generateEmail = (fullname) => {
    const email = fullname.toLowerCase().replace(' ', '_');
    return {fullname, email: `${email}@trybe.com`};
};

const newEmployees = () => {
  const employees = {
    id1: generateEmail('Pedro Guerra'),
    id2: generateEmail('Luiza Drumond'),
    id3: generateEmail('Carla Paiva'),
  }
  return employees;
};