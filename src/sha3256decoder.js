var sha3_256 = require('js-sha3').sha3_256;
const crypto = require('crypto');

 
decoding() 

function decoding(){
  var str1 = ""
  var strprevious = ""
  var strOut = ""
  console.log("entered decoding")
  var fs = require("fs");
  var stream = fs.createWriteStream("../puzzles/puzzle4.txt");
  fs.readFile('../puzzles/puzzle3.txt','utf-8',function(err, data){
	console.log("entering read file")
	if (err) throw err;
	var lines = data.split('\n')
	for(var linei = 1;linei<lines.length;linei++){
      line = lines[linei]
	  for(var i = 0;i<128;i++){
	    var test = String.fromCharCode(i)
		strprevious = str1
		str1 += test
		//console.log(str1)
		var check = sha3_256(str1)
		if(check.trim() === line.trim()){
		  if(test.charCodeAt(0) === 10){
			console.log(strOut)
			strOut = ""
		  }
		  break;
		}
		else{
		  if(str1.length > 0){
			str1 = strprevious
		  }
		}
	  }
	}
	
	console.log(str1)
	stream.write(str1);
  })
}
