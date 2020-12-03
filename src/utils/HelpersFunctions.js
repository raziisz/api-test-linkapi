export function RemoveCaracteresEspecial(data = "") {
  let regexA = /[àáâãäÀÁÂÃÄ]+/g
  let regexE = /[éèêëÉÈÊË]+/g
  let regexI = /[íìîïÍÌÎÏ]+/g
  let regexO = /[óòôõöÓÔÒÕÖ]+/g
  let regexU = /[úùûüÚÙÛÜ]+/g
  let regexC = /[çÇ]+/g
  
  let newData = data.replace(regexA, "a");
  newData = newData.replace(regexE, "e");
  newData = newData.replace(regexI, "i");
  newData = newData.replace(regexO, "o");
  newData = newData.replace(regexU, "u");
  newData = newData.replace(regexC, "c");

  return newData;

}