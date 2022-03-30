// Grade Assigner

let inputGrade = Number(prompt(`what is your grade?`));

switch (inputGrade > 90 === true) {
  case true:
    alert(`your grade is A`);
    break;
  case false:
    switch ((inputGrade > 80 && inputGrade <= 90) === true) {
      case true:
        alert(`your grade is B`);
        break;
      case false:
        switch ((inputGrade >= 70 && inputGrade <= 80) === true) {
          case true:
            alert(`your grade is C`);
            break;
          case false:
            alert(`your grade is D`);
        }
    }
}
