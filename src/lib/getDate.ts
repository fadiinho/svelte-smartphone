const formatZero = (digit: number) => {
  if (digit < 10) {
      return `0${digit}`
  }
  return digit;
}

export const getDate = () => {
  const date = new Date();
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return `${formatZero(hours)}:${formatZero(minutes)}`;
}
