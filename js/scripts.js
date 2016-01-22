var pigged;
var original;

function vowel1(original) {
  var firstChar = original.charAt(0);
  if ((firstChar === "a" ) || (firstChar === "e" ) || (firstChar === "i" ) || (firstChar === "o" ) || (firstChar === "u" )) {
    pigged = original.concat( "ay" );
    alert("ran vowel1");
    return pigged;
  } else {
    consonant1(original);
  }
}

function consonant1(original) {
  var secondChar = original.charAt(1);
  if (((secondChar === "a" ) || (secondChar === "e" ) || (secondChar === "i" ) || (secondChar === "o" ) || (secondChar === "u" )) && (original.charAt(0) != "q" )){
    pigged = original.substr(1) + original.charAt(0) + "ay";
    alert("ran consonant1");
    return pigged;
  } else if (original.charAt(0) === "q" ){
    pigged = original.substr(2) + original.charAt(0) + original.charAt(1) + "ay";
    alert("ran q function");
    return pigged;
  } else {
    consonant2(original);
  }
}

function consonant2(original) {
    pigged = original.substr(2) + original.charAt(0) + original.charAt(1) + "ay";
    alert("ran consonant2");
    return pigged;
}

$(document).ready(function() {
  $("form#piggy").submit(function(event) {
    var entry = $("input#word").val();

    vowel1(entry);
    alert(pigged);
    event.preventDefault();
  });
});
