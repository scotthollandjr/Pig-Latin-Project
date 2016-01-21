describe('vowel1', function() {
  it("words beginning with vowel, append ay", function() {
    expect(vowel1("apple")).to.equal("appleay")
  });
});

describe('consonant2', function() {
  it("words beginning with double consonant, move first letter to end append ay", function() {
    expect(consonant2("breakfast")).to.equal("eakfastbray")
  });
});

// words beginning with vowel, append ay
// words beginning with 1 consonant, move to the end of the word and append ay
// words beginning with 2 consonants, move to the end of the word and append ay
// words beginning with qu, move to end of the word and append ay
// treat y as consonant
