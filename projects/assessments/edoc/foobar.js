let arrList = [];
for ( let x = 0; x < 20; x++ ) {
  let y = x + 1;
  if ( y % 5 === 0 || y % 3 === 0 ) {
    if ( y % 5 === 0 ) {
      console.log( "foo");
    }
    if ( y % 3 === 0 ) {
      console.log( "bar");
    }
  } else {
    console.log(y);
  }
}
