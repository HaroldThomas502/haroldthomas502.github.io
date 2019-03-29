var pos = 0, test, test_status, question, options, chA, chB, chC;
var result = 0;



// this is a multidimensional array - 4 inner array elements with 4 elements inside them

var questions = [
  ["How often do you win an argument?", "Always", "Usually", "Never"],
  ["Which soup would you prefer?", "Spicy Asian Chicken and Noodle", "Loaded Potato", "Vegetable Beef"],
  ["Choose the best car for you", "Ford Mustang", "Honda Accord", "Kia Soul"],
  ["Which show is bingeworthy?", "Game of Thrones", "The Walking Dead", "Fuller House"]
  ];


// this get function is a shortcut for the getElementByID method

function get(ix){
  return document.getElementById(ix);
}


function writeQuestion(){
  test = get("test");
  yoursign = "Reserved for Disabled Parking";
  if(pos >= questions.length){
    test.innerHTML = "<h2>Thank You for Taking This Survey</h2>";
	if (result < 5) {
	  yoursign = "Stop";
	} else if (result < 9) {
	  yoursign = "Proceed With Caution";
	} else if (result < 13) {
	  yoursign = "Yield";
	}
    get("test_status").innerHTML = "Your Sign is "+yoursign;

    // resets the variable to allow users to restart the test

    pos = 0;
    result = 0;
    return false;
  }

  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  test.innerHTML = "<h3>"+question+"</h3>";


  // append to the data string started on the line above - options for asked question

  test.innerHTML += "<input type='radio' name='options' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='options' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='options' value='C'> "+chC+"<br><br>";
  test.innerHTML += "<button onclick='checkReply()'>Next</button>";
}

function checkReply(){

  // use getElementsByName to loop through array and aggregate the result value

  options = document.getElementsByName("options");
  for(var i=0; i<options.length; i++){
    if(options[i].checked){
      result += i+1;
    }
  }


  pos++;


  writeQuestion();

}

window.addEventListener("load", writeQuestion, false);