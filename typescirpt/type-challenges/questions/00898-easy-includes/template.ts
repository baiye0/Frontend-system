type Equal<X, Y> = (<Res>() => Res extends X ? true : false) extends <
  Res
>() => Res extends Y ? true : false
  ? true
  : false;

type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;
