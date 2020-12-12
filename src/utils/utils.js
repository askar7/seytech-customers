const getSum = (a, b) => {
  return a + b;
};

const IsNull = () => null;

// mock
const getSingleUser = () => {
  // Promise
  const url = 'https://reqres.in/api/user/2'; // fake the api
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const formatPatientIds = (patientId) => {
  return '1Z' + patientId;
};

const getMaxDeposit = (cash = []) => {
  let max = 0;
  cash.forEach((money) => {
    if (money > max) {
      max = money;
    }
  });
  return max;
};

// Integration example
const isAnagram = (str1, str2) => {
  return formatStr(str1) === formatStr(str2);
};

// Helper function
function formatStr(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = {
  getSum,
  getSingleUser,
  IsNull,
  formatPatientIds,
  getMaxDeposit,
  isAnagram,
};
