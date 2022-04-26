var person = {
  firstName: "Ludwig",
  lastName: "Ahgren",
  hobby: "Tax Evasion"
}
console.log(person);

var fullName = person.firstName + " " + person.lastName;
console.log(fullName);

person.job = "Entertainer";
console.log("This person's job is: " + person.job);

person.previousJob = "Amateur poker player";
console.log("This person's previous job is: " + person.previousJob);

console.log(person);
