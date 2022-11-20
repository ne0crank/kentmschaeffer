function checkCashRegister(price, cash, cid) {
  let drawer = cid.slice().reverse();
  let transm = {
    'PENNY'      : 0.01,
    'NICKEL'     : 0.05,
    'DIME'       : 0.1,
    'QUARTER'    : 0.25,
    'ONE'        : 1,
    'FIVE'       : 5,
    'TEN'        : 10,
    'TWENTY'     : 20,
    'FIFTY'      : 50,
    'ONE HUNDRED': 100
  };
  let sum = 0;
  sum = drawer.forEach( index => { sum += index[1] } );
  let remain = cash - price;
  if ( remain >= 0 && sum > 0 && remain !== sum ) {
    while ( remain > 0 && drawer.length > 0 ) {
      console.log(remain, drawer);
      for ( let c = 0; c < cid.length; c++ ) {
        let label = drawer[c][0];
        let coins = drawer[c][1];
        if ( label && coins ) {
          if ( remain > 0 && coins > 0 && remain >= coins ) {
            remain -= transm[label];
            coins -= transm[label];
          }
        }
        if ( coins && coins === 0 ) {
          drawer.splice(c,1);
        }
        sum = drawer.forEach( index => { sum += index[1] } );
      }
      if ( remain > 0 && sum > 0 && remain > sum ) {
        return { status: "INSUFFICIENT FUNDS", change: [] };
      } else if ( remain === 0 && sum > 0 ) {
        return { status: "OPEN", change: [...drawer] };
      }
    }
  } else if ( sum === 0 ) {
    return { status: "INSUFFICIENT FUNDS", change: [] };
  } else if ( sum === remain ) {
    return { status: "CLOSED", change: [...drawer] };
  }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
