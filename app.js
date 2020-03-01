/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){

  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      // TODO: search by name
      searchByName(people);
      break;

    case 'no':
      // TODO: search by traits
      searchBySingleCriterion(people);
      break;

    default:
      alert("Invalid input. Please try again!");
      app(people); // restart app
    break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
  var currentPerson = person;
  switch(displayOption){
    case "info":
      // TODO: get person's info
      if(currentPerson == person){
        return displayPerson(person);
      }
      break;

    case "family":
      // TODO: get person's family
      findFamily(person, people);
      var familyInfo = "currentSpousee" + " " + "parents";
      alert(displayPeople)
      break;

    case "descendants":
      // TODO: get person's descendants
      break;

    case "restart":
      app(people); // restart
      break;

    case "quit":
      return; // stop execution
    default:
      return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  let filteredPeople = people.filter(function(el) {
    if(el.firstName === firstName && el.lastName === lastName) {
      return mainMenu(el);
     
    }
   
  });
  return filteredPeople(el)
}
  // TODO: What to do with filteredPeople?
  people.filter(function(el){

    if(el === filteredPeople.firstName || el === filteredPeople.lastName){
    return mainMenu(el);
    }
  });

// alerts a list of people

function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  ////////////////DONE DONE DONE////////////////////////
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.

 var  personInfo = "Id: " + person.id + "\n";
  personInfo += "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "DOB: " + person.dob + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.Weight + "\n";
  personInfo += "Eye color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  personInfo += "Parents: " + person.parents + "\n";
  personInfo += "current Spouse: " + person.currentSpouse + "\n";

  // TODO: finish getting the rest of the information to display
  ////////////////DONE DONE DONE////////////////////////
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, callback){
  do{
    var response = prompt(question).trim();
  } while(!response || !callback(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}



function findFamily(person, people){
  
  let displayParents = data.filter(function(el){
    if(el.parents[0] === person.parents[0] || el.parents[0] === person.parents[1] || el.parents[1] === person.parents[0] || el.parents[1] === person.parents[1] || el.parents[1] === person.parents[0] || el.currentSpouse === person.currentSpouse) {
      return true;
    }
    else{
      return false;
    }
  })
  return displayPeople(displayParents);
}



// function searchByTraits(people, person){
  
//   var gender = promptFor("Enter the person's gender", chars);
//   var dob = promptFor("Enter the persons Date of Birth", chars);

//   let filteredTraits = people.filter(function(el) {
//     if(el.gender === gender){
//       return true;
//     }
//     else {
//       return false;
//     }
//   })
//   return filteredTraits;;
// }






