export function shuffle<T>(arr: Array<T>): Array<T> {
  const shuffledArray = [...arr];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); //random index
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // swap
  }
  return shuffledArray;
}
