function Bell(firstName, lastName, laptopName, track) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.laptopName = laptopName;
  this.track = track;
}


Bell.prototype.toString = function showProps() {
  let result = `The following are the properties of ${this.firstName} ${this.lastName}\n`;
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      result += `${i} = ${this[i]}\n`;
    }
  }
  return result;
}

bellOmuboye = new Bell('Bell', 'Omuboye', 'Beast', 'Backend');

console.log(bellOmuboye.toString());