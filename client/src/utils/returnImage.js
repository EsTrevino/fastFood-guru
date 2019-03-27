export default function returnImage(chainName, photoOne, photoTwo, photoThree) {
  if (chainName === 'Burger King') {
    return photoOne;
  } else if (chainName === 'Taco Bell') {
    return photoTwo;
  } else if (chainName === "McDonald's") {
    return photoThree;
  }
}
