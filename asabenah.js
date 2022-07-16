

	const convertID = document.getElementById("btn")
	convertID.addEventListener("click", function() {
        
    cm.value = ((m.value) * 100)

    km.value = ((m.value) /1000)

    mm.value = ((m.value) * 1000)

  });


  const clearID = document.getElementById("btn-clear") //create button to clear all text
	clearID.addEventListener("click", function() {
        
    cm.value = ""

    km.value = ""

    mm.value = ""

    m.value = ""

  });




//-----------------------------------------------------------------------
// let firstName = "Samson"
// let lastName = "Oloto"


// if (firstName.length < lastName.length){
//   console.log(`My last name ${lastName} is longer than my last name name ${firstName} with ${lastName.length - firstName.length} letter(s)`);
// } else {
//   console.log(`My last name ${firstName} is longer than my first name ${lastName} with ${firstName.length - lastName.length} letter(s)`);
// };

//------------------------------------------------------------------------

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

// const dob = prompt("Insert your year of birth: ")

// const date = new Date()

// const age = ((date.getFullYear()) - dob)

// if (age < 18){
//   console.log(`You are ${age}. You will be allowed to drive in ${18 - age} years`)
// } else{
//   console.log(`You are ${age}. You are old enough to drive`)
// }
