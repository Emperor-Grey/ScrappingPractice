const info = [
  {
    id: 1,
    FirstName: "King",
    SecondName: "Grey",
    gender: "Male",
    age: 19,
    status: "single",
  },
  {
    id: 2,
    FirstName: "Revanth",
    SecondName: "EEE",
    gender: "Male",
    age: 18,
    status: "commited",
  },
  {
    id: 3,
    FirstName: "Real",
    SecondName: "Charan",
    gender: "Male",
    age: 18,
    status: "commited",
  },
  {
    id: 4,
    FirstName: "Big",
    SecondName: "Hero",
    gender: "Male",
    age: 6,
    status: "undefined",
  },
];

function getDetails() {
  return info;
}

function getDetail(id) {
  return info.find((d) => d.id == id);
}

// const allData = getDetails();
// allData

const data = getDetail(4);

// const firstName = data.FirstName;
// const secondName = data.SecondName;

const { FirstName, ...otherData } = data;
console.log(FirstName);
console.log(otherData);

const bigData = getDetails();

const [first, second] = bigData;
console.log(second);
