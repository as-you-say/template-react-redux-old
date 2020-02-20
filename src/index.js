function* saga1(){
  yield call(foo, 1, 2, 3);
}

function* saga2(){
  yield 2;
}