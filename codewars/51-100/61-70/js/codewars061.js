/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = "cnet"
*/

function domainName(url) {
  url = url.replace('http://', '');
  url = url.replace('https://', '');
  url = url.replace('www.', '');

  return url.split('.')[0];
}

console.log(domainName('http://www.zombie-bites.com'));
console.log(domainName('www.xakep.ru'));
console.log(domainName('https://www.cnet.com'));

// Codewars Solution

const domainName2 = (url) =>
  url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^.]+)/i)[1];

console.log(domainName2('http://www.zombie-bites.com'));
console.log(domainName2('www.xakep.ru'));
console.log(domainName2('https://www.cnet.com'));

// CodeWars Solution 2

const domainName3 = url =>
  url.replace(/.*\/\/|www.|\..*/g, '');

console.log(domainName3('http://www.zombie-bites.com'));
console.log(domainName3('www.xakep.ru'));
console.log(domainName3('https://www.cnet.com'));
