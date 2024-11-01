const makeRandomNum = (number1, number2 = 0) => {
  const randomNum = Math.floor(Math.random() * number1) + number2;
  return randomNum;
};
export default makeRandomNum;
