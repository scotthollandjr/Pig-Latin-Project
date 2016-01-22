var pigged;
var original;

function vowel1(original) {
  if (original.charAt(0) === ( "a" || "e" || "i" || "o" || "u" )) {
    pigged = original.concat( "ay" );
    return pigged;
  }
}

function consonant2(original) {
  if (original.charAt(1) !== ( "a" || "e" || "i" || "o" || "u" )) {
    pigged = original.substr(2) + original.charAt(0) + original.charAt(1) + "ay";
    return pigged;
  }
}
