let person = {
  pname: "Clover",
  family: "Clover",
  birthday: 1998,
  calAge: function () {
    // console.log(this);
    return 2024 - this.birthday;
  },
  getSummery: function () {
    return `{The summery of person 
            Name => ${this.pname}
            Family => ${this.family}
            Birthday => ${this.birthday}
            Age =>${this.calAge()}
  }`;
  },
};

console.log(person.calAge(person.birthday));
console.log(person["calAge"](person.birthday));
console.log(person.getSummery());

//-----------------------------------------------
let human = {
  pname: "Azalea",
  family: "Azalea",
  birthday: 1999,
  calAge: function (birthday) {
    //console.log(this);
    return 2024 - this.birthday;
  },
};

console.log(human.calAge(human.birthday));

//----------------------------------------------------
