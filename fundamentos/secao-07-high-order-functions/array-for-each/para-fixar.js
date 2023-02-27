const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
//emailListInData.forEach((email) => console.log(`O email ${email} está cadastrado em nosso banco de dados!`));

const showEmails = (element, index) => console.log(`E-mail ${index}, ${element}`);

emailListInData.forEach(showEmails);