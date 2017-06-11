# Node Package Manager Benchmarks

This repository runs benchmarks of package installation using the [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm), and [yarn](https://github.com/yarnpkg/yarn) package managers.
The benchmarks are run for each node project in the `projects/` subdirectory and the results are rendered into this README file automatically.
Additionally, a prettier HTML version of the results are constructed in `results.html` and can be viewed directly [at this link](https://rawgit.com/sangaline/node-package-manager-benchmarks/master/results.html).
That page is modeled after [the yarn comparison page](https://yarnpkg.com/lang/en/compare/) and is designed to extend those results to include pnpm and a few extra project scaffolds (*e.g.* React, Angular, Vue).

To run the benchmarks, you can execute

```bash
node run benchmarks
```

after installing the appropriate dependencies within `npm install` or equivalent.
The script will display a nice progressbar that gives you an indication of how long it will take to complete (tens of minutes).

If you would like to benchmark a different set of dependencies, you can simply add a new subdirectory with a corresponding `package.json` file.

## Results

Each of these benchmarks were run 5 times and the results averaged.


### Angular 2 Project

An Angular 2 starter kit featuring Angular (Router, Http, Forms, Services, Tests, E2E, Coverage), Karma, Protractor, Jasmine, Istanbul, TypeScript, and Webpack by AngularClass.


#### ✘ Warm Cache -- ✘ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 1 minute 40 seconds | 148.14 MB |
| yarn | 1 minute 26 seconds | 133.23 MB |
| pnpm | 1 minute 8 seconds | 135.04 MB |

#### ✔ Warm Cache -- ✘ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 6 seconds 200.39999999999964 milliseconds | 148.14 MB |
| yarn | 1 second 260.4000000000001 milliseconds | 133.23 MB |
| pnpm | 1 second 975.4000000000001 milliseconds | 135.04 MB |

#### ✘ Warm Cache -- ✘ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 7 seconds 729 milliseconds | 148.14 MB |
| yarn | 1 second 277.4000000000001 milliseconds | 133.23 MB |
| pnpm | 2 seconds 396.5999999999999 milliseconds | 135.04 MB |

#### ✔ Warm Cache -- ✘ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 5 seconds 983.1999999999998 milliseconds | 148.14 MB |
| yarn | 1 second 286.20000000000005 milliseconds | 133.23 MB |
| pnpm | 1 second 824 milliseconds | 135.04 MB |

#### ✘ Warm Cache -- ✔ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 6 seconds 668.8000000000002 milliseconds | 148.14 MB |
| yarn | 1 minute 3 seconds | 133.23 MB |
| pnpm | 1 minute 2 seconds | 135.04 MB |

#### ✔ Warm Cache -- ✔ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 6 seconds 649.3999999999996 milliseconds | 148.14 MB |
| yarn | 1 second 375.20000000000005 milliseconds | 133.23 MB |
| pnpm | 1 second 852.4000000000001 milliseconds | 135.04 MB |

#### ✘ Warm Cache -- ✔ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 6 seconds 654.6000000000004 milliseconds | 148.14 MB |
| yarn | 1 second 338.4000000000001 milliseconds | 133.23 MB |
| pnpm | 3 seconds 658.8000000000002 milliseconds | 135.04 MB |

#### ✔ Warm Cache -- ✔ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 6 seconds 214.80000000000018 milliseconds | 148.14 MB |
| yarn | 1 second 437.20000000000005 milliseconds | 133.23 MB |
| pnpm | 1 second 809.4000000000001 milliseconds | 135.04 MB |


### React Native Project

A React Native project scaffolded using `react-native-cli`.


#### ✘ Warm Cache -- ✘ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 1 minute 11 seconds | 73.72 MB |
| yarn | 1 minute 7 seconds | 66.7 MB |
| pnpm | 44 seconds 842.1999999999971 milliseconds | 65.99 MB |

#### ✔ Warm Cache -- ✘ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 3 seconds 800.4000000000001 milliseconds | 73.72 MB |
| yarn | 987.2 milliseconds | 66.7 MB |
| pnpm | 1 second 355.4000000000001 milliseconds | 65.99 MB |

#### ✘ Warm Cache -- ✘ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 4 seconds 998.1999999999998 milliseconds | 73.72 MB |
| yarn | 988.6 milliseconds | 66.7 MB |
| pnpm | 1 second 914.4000000000001 milliseconds | 65.99 MB |

#### ✔ Warm Cache -- ✘ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 3 seconds 774.5999999999999 milliseconds | 73.72 MB |
| yarn | 976 milliseconds | 66.7 MB |
| pnpm | 1 second 306.5999999999999 milliseconds | 65.99 MB |

#### ✘ Warm Cache -- ✔ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 4 seconds 170.80000000000018 milliseconds | 73.72 MB |
| yarn | 55 seconds 24.80000000000291 milliseconds | 66.69 MB |
| pnpm | 39 seconds 434.1999999999971 milliseconds | 65.99 MB |

#### ✔ Warm Cache -- ✔ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 3 seconds 868.8000000000002 milliseconds | 73.72 MB |
| yarn | 990.4 milliseconds | 66.69 MB |
| pnpm | 1 second 311.5999999999999 milliseconds | 65.99 MB |

#### ✘ Warm Cache -- ✔ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 3 seconds 822.1999999999998 milliseconds | 73.72 MB |
| yarn | 992.2 milliseconds | 66.69 MB |
| pnpm | 1 second 714.4000000000001 milliseconds | 65.99 MB |

#### ✔ Warm Cache -- ✔ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 4 seconds 60.40000000000009 milliseconds | 73.72 MB |
| yarn | 988.2 milliseconds | 66.69 MB |
| pnpm | 1 second 296.20000000000005 milliseconds | 65.99 MB |


### React Project

A React Project scaffolded using `create-react-app` and then ejected.


#### ✘ Warm Cache -- ✘ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 1 minute 11 seconds | 101.56 MB |
| yarn | 59 seconds 389.40000000000146 milliseconds | 79.45 MB |
| pnpm | 48 seconds 668 milliseconds | 79.87 MB |

#### ✔ Warm Cache -- ✘ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 5 seconds 850.3999999999996 milliseconds | 101.56 MB |
| yarn | 1 second 291 milliseconds | 79.45 MB |
| pnpm | 1 second 672.2 milliseconds | 79.87 MB |

#### ✘ Warm Cache -- ✘ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 7 seconds 558.1999999999998 milliseconds | 101.56 MB |
| yarn | 1 second 292.20000000000005 milliseconds | 79.45 MB |
| pnpm | 2 seconds 485.1999999999998 milliseconds | 79.87 MB |

#### ✔ Warm Cache -- ✘ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 5 seconds 812.1999999999998 milliseconds | 101.56 MB |
| yarn | 1 second 278 milliseconds | 79.45 MB |
| pnpm | 1 second 582.2 milliseconds | 79.87 MB |

#### ✘ Warm Cache -- ✔ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 6 seconds 474.39999999999964 milliseconds | 101.56 MB |
| yarn | 47 seconds 292 milliseconds | 79.45 MB |
| pnpm | 41 seconds 939.8000000000029 milliseconds | 79.87 MB |

#### ✔ Warm Cache -- ✔ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 5 seconds 850.8000000000002 milliseconds | 101.56 MB |
| yarn | 1 second 239.79999999999995 milliseconds | 79.45 MB |
| pnpm | 1 second 610.2 milliseconds | 79.87 MB |

#### ✘ Warm Cache -- ✔ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 6 seconds 162 milliseconds | 101.56 MB |
| yarn | 1 second 287.4000000000001 milliseconds | 79.45 MB |
| pnpm | 2 seconds 855.5999999999999 milliseconds | 79.87 MB |

#### ✔ Warm Cache -- ✔ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 5 seconds 804.8000000000002 milliseconds | 101.56 MB |
| yarn | 1 second 245.20000000000005 milliseconds | 79.45 MB |
| pnpm | 1 second 656.8 milliseconds | 79.87 MB |


### Vue Project

The vuexpresso boilerplate using VueX, Vue-Router, Vue-Apollo, webpack, GraphQL, Apollo-client, Express and Mongo.


#### ✘ Warm Cache -- ✘ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 1 minute 10 seconds | 82.79 MB |
| yarn | 1 minute 5 seconds | 73.65 MB |
| pnpm | 47 seconds 623.4000000000015 milliseconds | 75.29 MB |

#### ✔ Warm Cache -- ✘ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 6 seconds 0.6000000000003638 milliseconds | 82.79 MB |
| yarn | 1 second 183 milliseconds | 73.65 MB |
| pnpm | 1 second 787.4000000000001 milliseconds | 75.29 MB |

#### ✘ Warm Cache -- ✘ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 8 seconds 163.19999999999982 milliseconds | 82.79 MB |
| yarn | 1 second 250.79999999999995 milliseconds | 73.65 MB |
| pnpm | 2 seconds 642 milliseconds | 75.29 MB |

#### ✔ Warm Cache -- ✘ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 6 seconds 232.60000000000036 milliseconds | 82.79 MB |
| yarn | 1 second 234.4000000000001 milliseconds | 73.65 MB |
| pnpm | 1 second 734 milliseconds | 75.29 MB |

#### ✘ Warm Cache -- ✔ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 6 seconds 719.3999999999996 milliseconds | 82.79 MB |
| yarn | 58 seconds 163.40000000000146 milliseconds | 73.68 MB |
| pnpm | 41 seconds 534.1999999999971 milliseconds | 75.29 MB |

#### ✔ Warm Cache -- ✔ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 5 seconds 962.8000000000002 milliseconds | 82.79 MB |
| yarn | 1 second 377.4000000000001 milliseconds | 73.68 MB |
| pnpm | 1 second 782.8 milliseconds | 75.29 MB |

#### ✘ Warm Cache -- ✔ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 6 seconds 8.800000000000182 milliseconds | 82.79 MB |
| yarn | 1 second 324 milliseconds | 73.68 MB |
| pnpm | 3 seconds 482.5999999999999 milliseconds | 75.29 MB |

#### ✔ Warm Cache -- ✔ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 6 seconds 51.600000000000364 milliseconds | 82.79 MB |
| yarn | 1 second 302 milliseconds | 73.68 MB |
| pnpm | 1 second 694.5999999999999 milliseconds | 75.29 MB |


