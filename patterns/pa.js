// Hyphenation patterns for Panjabi
// Based on http://mirrors.ctan.org/language/hyph-utf8/tex/generic/hyph-utf8/patterns/tex/hyph-pa.tex
// Source www.ctan.org

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.hyphenationPatternsPa = factory();
  }
}(this, function () {

  // Hyphenation patterns
  var patterns=`
% GENERAL RULE
% Do not break either side of ZERO-WIDTH JOINER  (U+200D)
2‍2
% Break on both sides of ZERO-WIDTH NON JOINER  (U+200C)
1‌1
% Break before or after any independent vowel.
ਅ1
ਆ1
ਇ1
ਈ1
ਉ1
ਊ1
ਏ1
ਐ1
ਓ1
ਔ1
% Break after any dependent vowel but not before.
ਾ1
ਿ1
ੀ1
ੁ1
ੂ1
ੇ1
ੈ1
ੋ1
ੌ1
% Break before or after any consonant.
1ਕ
1ਖ
1ਗ
1ਘ
1ਙ
1ਚ
1ਛ
1ਜ
1ਝ
1ਞ
1ਟ
1ਠ
1ਡ
1ਢ
1ਣ
1ਤ
1ਥ
1ਦ
1ਧ
1ਨ
1ਪ
1ਫ
1ਬ
1ਭ
1ਮ
1ਯ
1ਰ
1ਲ
1ਲ਼
1ਵ
1ਸ਼
1ਸ
1ਹ
% Do not break before chandrabindu, anusvara, visarga, avagraha
% and accents.
2ਁ1
2ਂ1
2ਃ1
% Do not break either side of virama (may be within conjunct).
2੍2
2ੰ2
2ੱ2
`;

  // Hyphenation exceptions
  var exceptions=`
`;

  return {
    patterns: patterns,
    exceptions: exceptions
  };
}));
