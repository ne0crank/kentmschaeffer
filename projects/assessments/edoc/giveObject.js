let giveObject = (data, findMe) => {
  for ( let x = 0; x < data.length; x++ ) {
    if (data[x].hasOwnProperty === findMe ) {
      return data[x];
    }
  }
  return { error: "object " + findMe + "not found" };
}
