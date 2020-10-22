// Given an array of logs, reorder the logs so that all letter logs come before digit logs.
// For each log, the first word in each log is an alphanumeric identifier. Then either, 
// all the words after the identifier consist of lowercase letters or digits.
// These are known as letter logs and digit logs. 
// The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties. 
// The digit-logs should be put in their original order.

// Approach 1:
const reorderLogFiles = (logs) => {

  let numberLogs = [];
  let letterLogs = [];
  for (let i = 0; i < logs.length; i++) {
    let log = Number(logs[i].split(' ')[1]);
    if (isNaN(log)) {
      letterLogs.push(logs[i]);
    } else {
      numberLogs.push(logs[i]);
    }
  }

  letterLogs.sort((a, b) => {
    let slicedA = a.slice(a.indexOf(' ') + 1);
    let slicedB = b.slice(b.indexOf(' ') + 1);
    if (slicedA === slicedB) {
      return a > b ? 1 : -1
    }
    return slicedA > slicedB ? 1 : -1;
  });

  return [...letterLogs, ...numberLogs];
};

// Approach 2:
const reorderLogFiles = (logs) => {

  let numberLogs = [];
  let letterLogs = [];
  for (let i = 0; i < logs.length; i++) {
    let log = Number(logs[i].split(' ')[1]);
    if (isNaN(log)) {
      letterLogs.push(logs[i]);
    } else {
      numberLogs.push(logs[i]);
    }
  }

  letterLogs.sort((a, b) => {
    let slicedA = a.slice(a.indexOf(' ') + 1);
    let slicedB = b.slice(b.indexOf(' ') + 1);
    if (slicedA === slicedB) {
      return a.localeCompare(b);
    }
    return slicedA.localeCompare(slicedB);
  });
  return [...letterLogs, ...numberLogs];
};

console.log(reorderLogFiles(['dig1 8 1 5 1','let1 art can','dig2 3 6','let2 own kit dig','let3 art zero']));
// ['let1 art can','let3 art zero','let2 own kit dig','dig1 8 1 5 1','dig2 3 6']
console.log(reorderLogFiles(['a1 9 2 3 1','g1 act car','zo4 4 7','ab1 off key dog','a8 act zoo','a2 act car']));
// ['a2 act car','g1 act car','a8 act zoo','ab1 off key dog','a1 9 2 3 1','zo4 4 7']