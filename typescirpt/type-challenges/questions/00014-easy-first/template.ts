type First<T extends any[]> = T extends [infer F, ...infer rest] ? F : never;
