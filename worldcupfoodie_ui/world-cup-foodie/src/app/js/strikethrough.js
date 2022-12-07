function my_fun(j){
  var chkbox ="ckb" + j;
  var my_span ="my_span" + j;
  var msg = chkbox + "  " + my_span;
  if(document.getElementById(chkbox).checked){
  document.getElementById(my_span).style.textDecoration='line-through';
  }else{
  document.getElementById(my_span).style.textDecoration='none';
  }}
