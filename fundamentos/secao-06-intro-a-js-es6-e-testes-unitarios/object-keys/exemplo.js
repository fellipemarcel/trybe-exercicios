const student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  const student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom',
  };

  const listSkills = (student) => {
    arrayOfSkills = Object.keys(student);
    for (const index in arrayOfSkills) {
        console.log(`${arrayOfSkills[index]}, nível: ${student[arrayOfSkills[index]]}`)
    }
  };
  console.log('Estudante 1');
  listSkills(student1);
  console.log('Estudante 2');
  listSkills(student2);