export const useDateFormat = (date: string) => {
  const [yy, mm, dd] = date.split("-");
  return [dd, mm, yy].join("-");
};
