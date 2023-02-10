// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const registers = [
  {
    ui: 'aaa',
    userId: 'aaa.soc@sss.com',
    attended: true,
  },
  {
    ui: 'bbb',
    userId: 'aaa.soc@sss.com',
    attended: true,
  },
  {
    ui: 'ccc',
    userId: 'ccc.soc@sss.com',
    attended: true,
  },
  {
    ui: 'ddd',
    userId: 'ddd.soc@sss.com',
    attended: true,
  },
  {
    ui: 'eee',
    userId: 'eee.soc@sss.com',
    attended: true,
  },
  {
    ui: 'bbb',
    userId: 'ddd.soc@sss.com',
    attended: false,
  },
  {
    ui: 'aaa',
    userId: 'ccc.soc@sss.com',
    attended: true,
  },
  {
    ui: 'aaa',
    userId: 'bbb.soc@sss.com',
    attended: false,
  },
  {
    ui: 'ccc',
    userId: 'aaa.soc@sss.com',
    attended: true,
  },
];

function validateNotIncludes(index, arr, property) {
  const newArr = [...arr];
  const current = newArr[index];
  newArr.splice(index, 1);
  return newArr.every((item, i) => !item[property].includes(current[property]));
}

function getAttendess(registers) {
  return registers.filter(
    (register, index) =>
      register.attended === true &&
      validateNotIncludes(index, registers, 'ui') &&
      validateNotIncludes(index, registers, 'userId')
  );
}

console.log(getAttendess(registers));
