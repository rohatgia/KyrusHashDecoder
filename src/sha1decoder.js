const crypto = require('crypto');

 
decoding() 

function decoding(){
  var str1 = ""
  var strprevious = ""
  var strOut = ""
  console.log("entered decoding")
  var fs = require("fs");
  var stream = fs.createWriteStream("../puzzles/puzzle3.txt");
  fs.readFile('../puzzles/puzzle2.txt','utf-8',function(err, data){
	console.log("entering read file")
	if (err) throw err;
	var lines = data.split('\n')
	for(var linei = 1;linei<lines.length;linei++){
      line = lines[linei]
	  for(var i = 0;i<128;i++){
	    var test = String.fromCharCode(i)
	  /*
	  //More Efficient, but less robust
	  for(var i = 0;i<17;i++){
	    var test;
		if(i < 10){
			test = i.toString()
		}
		else if(i > 9 && i < 16){
			test = String.fromCharCode(i+87)
		}
		else{
			test = String.fromCharCode(10)
		} */
		strprevious = str1
		str1 += test
		var hash = crypto.createHash('sha1')
		hash.update(str1)
		var check = hash.digest('hex')
		if(check.trim() === line.trim()){
		  strOut += test;
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
