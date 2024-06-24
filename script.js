let data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  let print_data = function (element) {
    console.log(element);
  };

  data.forEach(print_data);

  alert("Traversing Successful");
}

// 2. Add Data
function addData() {
  let name = prompt("Enter name");
  let age = prompt("Rnter age");
  age = parseInt(age);
  let profession = prompt("Enter profession");

  let obj = {};

  obj.name = name;
  obj.age = age;
  obj.profession = profession;

  data.push(obj);

  alert("Data is added successfully");
}

// 3. Remove Admins
function removeAdmin() {
  let remove_admin = function (element, index) {
    if (element.profession == "admin") {
      data.splice(index, 1);
    }
  };

  data.forEach(remove_admin);

  alert("All Admins are successfully removed");
}

// 4. Concatenate Array
function concatenateArray() {
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

  alert("Concatination Done");
}

// 5. Average Age
function averageAge() {
  let average_age = data.reduce(function (prev, element) {
    return prev.age + element.age;
  });

  console.log(average_age / data.length);

  alert("Calculation Done");
}

// 6. Age Check
function checkAgeAbove25() {
  let check_age = data.filter(function (element) {
    if (element.age > 25) {
      return true;
    }
  });

  if (check_age.length >= 1) {
    console.log(true);
  } else {
    console.log(false);
  }

  alert("check Age Above 25 is Done");
}

// 7. Unique Professions
function uniqueProfessions() {
  let unique_arr = [];

  data.forEach((element) => {
    if (!unique_arr.includes(element.profession)) {
      unique_arr.push(element.profession);
    }
  });

  console.log(unique_arr);

  alert("Unique profession Done");
}

// 8. Sort by Age
function sortByAge() {
  let ascending = (a, b) => {
    if (a.age > b.age) return a.age - b.age;
    return a.age - b.age;
  };

  data.sort(ascending);

  console.log(data);

  alert("Sorting is done");
}

// 9. Update Profession
function updateJohnsProfession() {
  data.forEach((element) => {
    if (element.name == "john") {
      element.profession = "manager";
    }
  });

  alert("Update Successful");
}

// 10. Profession Count
function getTotalProfessions() {
  let developers_count = 0;
  let admins_count = 0;

  data.forEach((element) => {
    if (element.profession == "developer") {
      ++developers_count;
    } else {
      ++admins_count;
    }
  });

  console.log("Admin Count:", admins_count);
  console.log("Developer Count:", developers_count);

  alert("Counting Successfull");
}
