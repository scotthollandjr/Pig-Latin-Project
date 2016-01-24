var pigged;
var entry;
var original;
var pigArray = [];

function vowel1(original) {
  var firstChar = original.charAt(0);
  if ((firstChar === "a" ) || (firstChar === "e" ) || (firstChar === "i" ) || (firstChar === "o" ) || (firstChar === "u" )) {
    pigged = original.concat( "ay" );
    pigArray.push(pigged + " ");

  } else {
    consonant1(original);
  }
};

function consonant1(original) {
  var secondChar = original.charAt(1);
  if (((secondChar === "a" ) || (secondChar === "e" ) || (secondChar === "i" ) || (secondChar === "o" ) || (secondChar === "u" )) && (original.charAt(0) != "q" )){
    pigged = original.substr(1) + original.charAt(0) + "ay";
    pigArray.push(pigged + " ");
  } else if (original.charAt(0) === "q" ){
    pigged = original.substr(2) + original.charAt(0) + original.charAt(1) + "ay";
    pigArray.push(pigged + " ");
  } else if (original.charAt(1) === "q" ){
    pigged = original.substr(3) + original.charAt(0) + original.charAt(1) + original.charAt(2) + "ay"
  } else {
    consonant2(original);
  }
};

function consonant2(original) {
    pigged = original.substr(2) + original.charAt(0) + original.charAt(1) + "ay";
    pigArray.push(pigged + " ");
};


$(document).ready(function() {
  $("form#piggy").submit(function(event) {
    entry = $("input#word").val();
    var entryArr = entry.split(" ");

    entryArr.forEach(vowel1);

    $("h2#result").append(pigArray);
    event.preventDefault();
  });
});
