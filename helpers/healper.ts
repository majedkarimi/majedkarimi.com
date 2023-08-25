export const sortData = (data: any) => {
  return data.slice().sort((a: any, b: any) => a.id - b.id);
};
export const scrollTosection = function (section: string) {
  document.getElementById(`${section}`)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
