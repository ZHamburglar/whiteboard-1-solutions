function numberToBinary(dec)
{
    if(dec >= 0) {
        var bin = dec.toString(2);
        binaryGap(bin)
    }
    else {
        var binary = (~dec).toString(2);
        console.log(binary)
        binaryGap(binary)
    }
}

function binaryGap(number){
  var splitting = number.split('1')
  for (var i=splitting.length-1; i>=0; i--) {
    if (splitting[i].length<1) {
        splitting.splice(i, 1);
    }
  }
  var longest = splitting.sort(function (a, b) { return b.length - a.length; })[0];
  var final = longest.length
  console.log(final)
}


numberToBinary(3480534598348)
