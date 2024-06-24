let data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

function callme_data() {
  data.forEach((element) => {
    console.log(element);
  });
}

// 1. Print Developers
function printDeveloper() {
  console.log("Print Developers");

  let print_data = function (element) {
    if (element.profession == "developer") {
      console.log(element);
    }
  };

  data.forEach(print_data);
}

// 2. Add Data
function addData() {
  console.log("Add Data");

  let name = prompt("Enter name");
  let age = prompt("Enter age");
  age = parseInt(age);
  let profession = prompt("Enter profession");

  let obj = {};

  obj.name = name;
  obj.age = age;
  obj.profession = profession;

  data.push(obj);

  callme_data();
}

// 3. Remove Admins
function removeAdmin() {
  console.log("Remove Admins");

  let remove_admin = function (element, index) {
    if (element.profession == "admin") {
      data.splice(index, 1);
    }
  };

  data.forEach(remove_admin);

  callme_data();
}

// 4. Concatenate Array
function concatenateArray() {
  console.log("Concatenate Array");

  let dummy_data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];

  let concat_array = [
    { name: "tom", age: 25, profession: "frontend developer" },
    { name: "jerry", age: 29, profession: "backend developer" },
  ];

  let result = dummy_data.concat(concat_array);

  result.forEach(function (element) {
    console.log(element);
  });
}

// 5. Average Age
function averageAge() {
  console.log("Average Age");

  let sum = 0;
  data.forEach(function (element) {
    sum += element.age;
  });

  console.log("Average age:", sum / data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  console.log("Age Check");

  let check_age = data.filter(function (element) {
    if (element.age > 25) {
      return true;
    }
  });

  if (check_age.length >= 1) {
    console.log("Result:", true);
  } else {
    console.log("Result:", false);
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  console.log("Unique Professions");

  let unique_arr = [];

  data.forEach((element) => {
    if (!unique_arr.includes(element.profession)) {
      unique_arr.push(element.profession);
    }
  });

  console.log(unique_arr);
}

// 8. Sort by Age
function sortByAge() {
  console.log("Sort by Age");

  let ascending = (a, b) => {
    if (a.age > b.age) return a.age - b.age;
    return a.age - b.age;
  };

  data.sort(ascending);

  callme_data();
}

// 9. Update Profession
function updateJohnsProfession() {
  console.log("Update Profession");

  data.forEach((element) => {
    if (element.name == "john") {
      element.profession = "manager";
    }
  });

  callme_data();
}

// 10. Profession Count
function getTotalProfessions() {
  console.log("Profession Count");

  let developers_count = 0;
  let admins_count = 0;

  data.forEach((element) => {
    if (element.profession == "developer") {
      ++developers_count;
    } else if (element.profession == "admin") {
      ++admins_count;
    }
  });

  callme_data();
  console.log("Admin Count:", admins_count);
  console.log("Developer Count:", developers_count);
}
