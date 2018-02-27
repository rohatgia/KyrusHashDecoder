# KyrusHashDecoder
This is a set of Node.JS programs which allows one to decrypt the puzzle.txt file available on the Kyrus Technologies website

This requires the npm install of js-sha3 (npm install js-sha3) (https://github.com/emn178/js-sha3)

This makes use of the MD5 Hashing (and its dependencies) from cryptii (https://github.com/cryptii/cryptii). Selected files are included in this repository

The files can be run in order from the src directory: md5decoder, sha1decoder, and then sha3256decoder

To run the files, from a terminal/command prompt on a system with Node.JS installed, enter: node md5decoder.js (where md5decoder can be replaced with any of the three filename)

Running the files yields an output file in the puzzles folder. These outputs contain the decrypted outputs of each node file. puzzle.txt is the initially provided file, given in an MD5 format. puzzle2.txt contains a question, followed by SHA-1 keys. puzzle3.txt contains a question, followed by SHA-3 256 keys. puzzle4.txt contains a single question.

The questions and their answers have been compiled into a file in the root directory, Questions&Answers.txt

For best results, do not run the md5decoder, as the length of the initial puzzle, and the time complexity of my solution lead to a ~24 Hour decryption time. If running any file, please let it complete to provide complete results for the succeeding script.
