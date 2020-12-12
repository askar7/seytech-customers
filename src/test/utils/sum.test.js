import {
  getSum,
  getSingleUser,
  IsNull,
  formatPatientIds,
  getMaxDeposit,
  isAnagram,
} from '../../utils/utils';

// const closeDatabase = () => {
//   console.log('closing database');
// };
// beforeEach(() => {
//   closeDatabase();
// });
// afterEach(() => {
//   closeDatabase();
// });

// beforeAll(() => {
//   closeDatabase();
// });

// afterAll(() => {
//   closeDatabase();
// });

// toBe
test('getSum should add two numbers', () => {
  expect(getSum(1, 2)).toBe(3);
});
// not toBe
test('getSum should add two numbers', () => {
  expect(getSum(1, 2)).not.toBe(-1);
});

// isNull
test('isNull', () => {
  expect(IsNull()).toBe(null);
});

test('Get the max amount from cash', () => {
  const cash = [10, 20, 30];
  expect(getMaxDeposit(cash)).toBe(30);
});

test('renders modified patient ids', () => {
  const id = 'ABC';
  expect(formatPatientIds(id)).toHaveLength(5);
  expect(formatPatientIds(id)).toMatch(/Z/); // make sure patient ids contain letter Z
});

// Asynchronous Testing
// Promise
// You could use Async/Await
test('message', () => {
  return getSingleUser().then((data) => {
    expect(data.data.name).toBe('fuchsia rose');
  });
});

// isAnagram
test('isAnagram function exists', () => {
  expect(typeof isAnagram).toEqual('function');
});
test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
  expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});
