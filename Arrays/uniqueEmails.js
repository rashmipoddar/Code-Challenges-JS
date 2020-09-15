// Given a list of email return the number of unique emails.
// An email address consists of a local address i.e. the portion before @ and domain name the portion after @
// For any '.' in the local address, email is sent to the address after removing all '.'
// For any '+' in the local address, email is sent to the address created after removing all chars after the '+' sign.

const uniqueEmails = (emails) => {
  let modifiedEmails = new Set();
  for (let i = 0; i < emails.length; i++) {
    let [local, domain] = emails[i].split('@');
    let email = local.split('+')[0].split('.').join('');
    modifiedEmails.add(email + '@' + domain);
  }
  return modifiedEmails.size;
};

console.log(uniqueEmails(['test.email+alex@leetcode.com','test.e.mail+bob.cathy@leetcode.com','testemail+david@lee.tcode.com'])); // 2