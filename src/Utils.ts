//Tailwind CSS에서 배열 형태로 스타일을 넣을 수 있게
export const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};