/*
UTP:
- check if ip is ipv4 or ipv6
  - ipv4
    - must be integer b/w 0 and 255
    - separated by (.)
    - has to be only 4 integers
    - no leading 0s
  - ipv6
    - eight hexadecimal digits
      - 0-9, a-f
    - separated by ":"
      - cannot have "::"
    - can have leading 0's, but not extra leading 0s (e.g., "02001")
    - can shorted all 0's to "0", and remove leading "0s" if followed by a-f
- assume no extra spaces or special characters
- case insensitive

  Input: string which represents an IP address
  Output: has to return either "IPv4", "IPv6", or "Neither" (string)

Alg:

  a) use a global regex to determine if ipv4, ipv6, or neither
    - ip4: ^(\d{1,3}\.){3}\d{1,3}$
    - ip6: ^(([a-f0-9]{3,4}|0):){7}([a-f0-9]{3,4}|0)$
  b) if it is either 4 or 6, push to helper methods to determine if valid
    - For v4, split on `.`
      - make sure none of the sets begin with '0'
      - coerce all to a Number, and make sure they're between 0 and 255
    - For v6, split on ':'
      - make sure all sets only have 4 chars || if 3 it must start a-f
      - 0-9, a-f
    - have the helper return a boolean
      - if boolean is true, return the corresponding string, or return 'Neither'
*/
function possibleIPv4(ip) {
  return /^(\d{1,3}\.){3}\d{1,3}$/.test(ip);
}

function validIPv6(ip) {
  return /^(([a-f0-9]{4}|[a-f1-9][a-f0-9]{0,2}|0[a-f0-9]{0,3}):){7}([a-f0-9]{4}|[a-f1-9][a-f0-9]{0,2}|0[a-f0-9]{0,3})$/i.test(ip);
}

function validIPv4(ip) {
  const groups = ip.split('.');

  if (groups.some(group => group[0] === '0' && group.length > 1)) return false;

  const nums = groups.map(group => Number(group));

  return (nums.every(num => num >= 0 && num <= 255));
}

var validIPAddress = function(IP) {
  if (possibleIPv4(IP)) {
    if (validIPv4(IP)) return 'IPv4';
  } else if (validIPv6(IP)) {
    return 'IPv6';
  }

  return 'Neither';
};

console.log(validIPAddress("172.16.254.1") === 'IPv4');
console.log(validIPAddress("172.16.254.01") === 'Neither');
console.log(validIPAddress("256.256.256.256") === 'Neither');
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334") === 'IPv6');
console.log(validIPAddress("2001:db8:85a3:0:0:8A2E:0370:7334") === 'IPv6');
console.log(validIPAddress("02001:db8:85a3:0:0:8A2E:0370:7334") === 'Neither');
console.log(validIPAddress("02001:db8:85a3::0:8A2E:0370:7334") === 'Neither');
