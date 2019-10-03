## Autocomplete Package

Basic functionality:
[x] Autocomplete Input
[x] Container for results
[x] When you type `n` letters you'll need to wait `m` ms before you call the search
[x] Ability to provide source callback, which will return to you an array of JSON objects
[x] Ability to provide several source callbacks and use them one by one until the result of callback return not empty array. (OPTIONAL)
[x] Add accessibility for screen reader (ARIA) (OPTIONAL)
[x] Add ability to pass a render callback. this callback should receive the result from source
[] Add ability to pass a render callbacks, which should be chosen depending on the source callback, which would return not empty results (OPTIONAL)
[] Add ability to use keyboard (OPTIONAL)
[x] Add ability to pass custom css for input/container/etc
[x] Loading Spinner
[] Unit tests coverage (OPTIONAL)
[x] Minifying with webpack (OPTIONAL)

How run?
```
$ yarn
$ yarn run build
```

#### Open in browser `index.html` from direction `autocomplete`

## Analytics webpage

How run?
```
$ yarn
$ yarn run build
```

#### Open in browser `index.html` from direction `analytics`
