// Age Difference
let age1 = prompt(`when was the older one born?`);
let age2 = prompt(`when was the younger one born?`);

alert(
  `in ${
    Number(age2) * 2 - Number(age1)
  } you will be half as old as your older friend - He will be ${
    Number(age2) * 2 - Number(age1) * 2
  } and you will be ${Number(age2) - Number(age1)}`
);
