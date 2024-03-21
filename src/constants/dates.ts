export const formattedDate = (stringifiedDate: string) => {
  const date = new Date(stringifiedDate);
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(date);
};
