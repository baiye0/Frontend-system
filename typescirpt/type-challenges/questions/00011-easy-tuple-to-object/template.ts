type TupleToObject<T extends readonly (keyof any)[]> = {
  [k in T[number]]: k;
};
