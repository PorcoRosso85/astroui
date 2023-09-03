export const fetchData = async (fetchTarget: string) => {
  const res = await fetch(fetchTarget);
  const data = await res.json();
  return data;
};
