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

function validate(current, arr, property) {
  return arr.every((item) => {
    const inc = item[property].includes(current[property]);
    console.log('esta', property, inc, item[property], current[property]);
  });
}

function getAttendess(registers) {
  const resultsAttendess = [];
  const validated = [];
  const attendess = registers.filter((register) => register.attended === true);
  while (attendess.length > 0) {
    const currentAtt = attendess.shift();
    // console.log(currentAtt, attendess);
    if (
      (validate(currentAtt, attendess, 'ui') ||
        validate(currentAtt, attendess, 'userId')) &&
      (validate(currentAtt, validated, 'ui') ||
        validate(currentAtt, validated, 'userId'))
    ) {
      resultsAttendess.push(currentAtt);
    } else {
      validated.push(currentAtt);
    }
  }

  return resultsAttendess;
}

console.log(getAttendess(registers));
