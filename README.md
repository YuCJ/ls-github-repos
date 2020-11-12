# Search GitHub Repos with infinite scroll

👉 [DEMO](https://yucj.github.io/ls-github-repos/)

作業要求：

- [x] 隨打即搜
- [x] 避免 API rate limit 問題
  - [x] 用 debounce 讓使用者輸入不會密集 trigger API，畫面也不會每輸入一個鍵就跳轉
  - [x] 用 IntersectionObserver 實作 infinite scroll，並防止重複 trigger API
  - [x] 如果真的因為操作太密集或網路傳輸原因造成 response error，會跳出 snackbar 可以 retry，不會頁面直接 crash 或只能重整

其他實作：

- [x] 使用 Material UI
- [x] 使用 Redux 管理頁面狀態和資料，更容易寫測試並且開發時可用 devtool 檢視狀態運作是否正確
- [x] 保留 pagination 資料並將 repo 資料 normalized，程式擴充或更改功能會更容易
- [x] 使用 Redux Best Practice 建議的資料結構和 `@reduxjs/toolkit` 工具

![data dependencies](https://yucj.github.io/ls-github-repos/data-deps.png)

還可優化的部分：

- [ ] infinite scroll 資料是一直 append 增加，但 React + Redux 的邏輯會讓整個 list 都 re-render，當清單會成長很大時可再優化，例如使用 windowing 等方式只 render 看得到的部分

## Run dev server

```bash
npm run dev

# or

npm start
```

- [x] Webpack & Dev Server with hot-reload
- [x] Prettier + ESLint (with StandardJS) + StyleLint
- [x] CommitLint + Standard Version

## Build static files

```bash
npm run build
```

The distribution files will be built to `./dist`

## Bump Version and Push Codes

```bash
npm run release
```
