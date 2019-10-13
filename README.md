This repository demonstrates a bug in api-extractor's handling of "bundledPackages".

To reproduce:

1. Clone repository
2. Run `npm install`
3. Run `npx tsc`
4. Run `npm run api-extractor`

The generated d.ts rollup in `dist/api-extractor-bug.d.ts` will contain the following:

```typescript
export declare const getSession: () => import("redux-orm").Session<[typeof import("./Author").default]>;

export { }
```
