const codeID = (codeID: number | string) => {
  if (typeof codeID === 'string') {
    return codeID.toUpperCase();
  } else {
    return codeID;
  }
};

console.log(codeID('xbox-360'));
console.log(codeID(360));
