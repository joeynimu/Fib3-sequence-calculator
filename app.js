function fiboThree(n) { 
var arr = []; 
arr[0] = 1;
arr[1] = 1;
arr[2] = 1;
var nIndex = n - 1; 
for (var c = 3; c < n; ++c) { 
arr.push( (c < 3) ? c : arr[c-1] + arr[c-2] + arr[c-3]); 
}
return arr[nIndex]; 
}


var $btn = $('#get');
var $result = $('#result');
$result.hide();
$btn.click(function(){
 var $number = $('#thevalue').val();
 var $returnedvalue = fiboThree( $number );
 var $pretext = ('The ' + $number + ' th number in the Fib3 sequence is')
  $result.text( $pretext + ' ' + $returnedvalue );
  $result.slideDown('slow'); 
  
  
  return false;

});
