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
    root.hyphenationPatternsGu = factory();
  }
}(this, function () {
  var patterns = [], hyphenation = [];
// title: Hyphenation patterns for Gujarati
// copyright: Copyright (C) 2016 Santhosh Thottingal
// notice: This file is part of the hyph-utf8 package.
//     See http://www.hyphenation.org/tex for more information.
// source: https://github.com/santhoshtr/hyphenation/
// language:
//     name: Gujarati
//     tag: gu
// authors:
//   -
//     name: Santhosh Thottingal
//     contact: santhosh.thottingal (at) gmail.com
// licence:
//     - This file is available under any of the following licences:
//     -
//         name: MIT
//         url: https://opensource.org/licenses/MIT
//         text: >
//             Permission is hereby granted, free of charge, to any person
//             obtaining a copy of this software and associated documentation
//             files (the "Software"), to deal in the Software without
//             restriction, including without limitation the rights to use,
//             copy, modify, merge, publish, distribute, sublicense, and/or sell
//             copies of the Software, and to permit persons to whom the
//             Software is furnished to do so, subject to the following
//             conditions:
//
//             The above copyright notice and this permission notice shall be
//             included in all copies or substantial portions of the Software.
//
//             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//             EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
//             OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//             NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
//             HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
//             WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//             FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
//             OTHER DEALINGS IN THE SOFTWARE.
//     -
//         name: LGPL
//         version: 3
//         or_later: true
//         url: http://www.gnu.org/licenses/lgpl.html
//     -
//         name: GPL
//         version: 3
//         or_later: true
//         url: http://www.gnu.org/licenses/gpl.html
//
var patterns = [
// GENERAL RULE
// Do not break either side of ZERO-WIDTH JOINER  (U+200D)
"2‍2",
// Break on both sides of ZERO-WIDTH NON JOINER  (U+200C)
"1‌1",
// Break before or after any independent vowel.
"અ1",
"આ1",
"ઇ1",
"ઈ1",
"ઉ1",
"ઊ1",
"ઋ1",
"ૠ1",
"એ1",
"ઐ1",
"ઓ1",
"ઔ1",
// Break after any dependent vowel but not before.
"ા1",
"િ1",
"ી1",
"ુ1",
"ૂ1",
"ૃ1",
"ૄ1",
"ૢ1",
"ૣ1",
"ે1",
"ૈ1",
"ો1",
"ૌ1",
// Break before or after any consonant.
"1ક",
"1ખ",
"1ગ",
"1ઘ",
"1ઙ",
"1ચ",
"1છ",
"1જ",
"1ઝ",
"1ઞ",
"1ટ",
"1ઠ",
"1ડ",
"1ઢ",
"1ણ",
"1ત",
"1થ",
"1દ",
"1ધ",
"1ન",
"1પ",
"1ફ",
"1બ",
"1ભ",
"1મ",
"1ય",
"1ર",
"1લ",
"1ળ",
"1વ",
"1શ",
"1ષ",
"1સ",
"1હ",
// Do not break before chandrabindu, anusvara, visarga, avagraha
// and accents.
"2ઁ1",
"2ઃ1",
"2ઽ1",
// Do not break either side of virama (may be within conjunct).
"2્2",
"2ં2",
""];

  return {
    patterns: patterns,
    exceptions: hyphenation
  };
}));
