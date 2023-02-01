const header = document.getElementById('header-container');
header.style.backgroundColor = '#34a0a4';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = '#d9ed92';

const headersEmergencyTasks = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < headersEmergencyTasks.length; index += 1) {
    headersEmergencyTasks[index].style.backgroundColor = '#99d98c';
};

const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = '#52b69a';

const headersNoEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < headersNoEmergencyTasks.length; index += 1) {
    headersNoEmergencyTasks[index].style.backgroundColor = '#d9ed92';
}