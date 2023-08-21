export const sortData = (data: any) => {
  return data.slice().sort((a: any, b: any) => a.id - b.id);
};
