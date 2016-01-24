var pigged;
var entry;
var original;
var pigArray = [];

function vowel1(original) {
  if (original.charAt(0).match(/[aeiouAEIOU]/gi)) {
    pigged = original.concat( "ay" );
    pigArray.push(pigged + " ");

  } else {
    consonant1(original);
  }
};

function consonant1(original) {
  if ((original.charAt(1).match(/[aeiouAEIOU]/gi)) && (original.charAt(0).match(/[^qQ]/))){
    pigged = original.substr(1) + original.charAt(0) + "ay";
    pigArray.push(pigged + " ");
  } else if (original.charAt(0).match(/[qQ]/)){
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
