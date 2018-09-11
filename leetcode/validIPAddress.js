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
