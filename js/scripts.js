var pigged;
var string;

function vowel1(string) {
  if (string.charAt(0) === ( "a" || "e" || "i" || "o" || "u" )) {
    pigged = string.concat( "ay" );
    return pigged;
  } else {
    consonFirst(string);
  }
}

function consonant1(string) {

}
