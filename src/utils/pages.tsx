export const getPagesCount = (totalCount: number, limit: number) => Math.ceil(totalCount / limit);

export const getPagesArray = (totalPages: number): number[] => {
  let pagesArray = [] as number[];
  for (let i = 0; i < totalPages; i++) {
    pagesArray.push(i + 1);
  }
  return pagesArray;
}