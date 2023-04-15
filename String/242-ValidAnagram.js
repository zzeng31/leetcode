/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false


Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const count = {};

  for (let c of t) {
    count[c] = (count[c] || 0) + 1;
  }
  for (let c of s) {
    if (count[c] === 0 || !count[c]) return false;
    count[c]--;
  }
  return true;
};
