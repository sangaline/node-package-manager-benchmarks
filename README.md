# Node Package Manager Benchmarks

*This repository is a companion to the article [What I still don't use Yarn](https://intoli.com/blog/node-package-manager-benchmarks) on [the Intoli Website](https://intoli.com).*

This project runs benchmarks of package installation using the [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm), and [yarn](https://github.com/yarnpkg/yarn) package managers.
The benchmarks are run for each node project in the `projects/` subdirectory and the results are rendered into this README file automatically.
Additionally, a prettier HTML version of the results are constructed in `results.html` and can be viewed directly [at this link](https://cdn.rawgit.com/sangaline/node-package-manager-benchmarks/df69a2d29d6752278dbf1001600db1ed1cc742dd/results.html).
That page is modeled after [the yarn comparison page](https://yarnpkg.com/lang/en/compare/) and is designed to extend those results to include pnpm and a few extra project scaffolds (*e.g.* React, Angular, Vue).

To run the benchmarks, you can execute

```bash
node run benchmarks
```

after installing the appropriate dependencies within `npm install` or equivalent.
The script will display a nice progress bar that gives you an indication of how long it will take to complete (tens of minutes).

If you would like to benchmark a different set of dependencies, you can simply add a new subdirectory with a corresponding `package.json` file.
Similarly, any `.nj` file added to the `templates/` directory will be rendered as a [Nunjucks template](https://mozilla.github.io/nunjucks/) (that's how this README was generated).

## Results

Each of these benchmarks were run 5 times and the results averaged.


### Angular 2 Project

An Angular 2 starter kit featuring Angular (Router, Http, Forms, Services, Tests, E2E, Coverage), Karma, Protractor, Jasmine, Istanbul, TypeScript, and Webpack by AngularClass.


#### ✘ Warm Cache -- ✘ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 1 minute 21 seconds | 148.14 MB |
| yarn | 1 minute 11 seconds | 133.23 MB |
| pnpm | 59 seconds 936 milliseconds | 135.04 MB |

#### ✔ Warm Cache -- ✘ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 5 seconds 597 milliseconds | 148.14 MB |
| yarn | 1 second 146 milliseconds | 133.23 MB |
| pnpm | 1 second 708 milliseconds | 135.04 MB |

#### ✘ Warm Cache -- ✘ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 7 seconds 255 milliseconds | 148.14 MB |
| yarn | 1 second 158 milliseconds | 133.23 MB |
| pnpm | 2 seconds 552 milliseconds | 135.04 MB |

#### ✔ Warm Cache -- ✘ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 5 seconds 550 milliseconds | 148.14 MB |
| yarn | 1 second 132 milliseconds | 133.23 MB |
| pnpm | 1 second 654 milliseconds | 135.04 MB |

#### ✘ Warm Cache -- ✔ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 6 seconds 151 milliseconds | 148.14 MB |
| yarn | 57 seconds 464 milliseconds | 133.23 MB |
| pnpm | 52 seconds 857 milliseconds | 135.04 MB |

#### ✔ Warm Cache -- ✔ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 5 seconds 526 milliseconds | 148.14 MB |
| yarn | 1 second 148 milliseconds | 133.23 MB |
| pnpm | 1 second 638 milliseconds | 135.04 MB |

#### ✘ Warm Cache -- ✔ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 5 seconds 538 milliseconds | 148.14 MB |
| yarn | 1 second 144 milliseconds | 133.23 MB |
| pnpm | 3 seconds 174 milliseconds | 135.04 MB |

#### ✔ Warm Cache -- ✔ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 5 seconds 537 milliseconds | 148.14 MB |
| yarn | 1 second 156 milliseconds | 133.23 MB |
| pnpm | 1 second 648 milliseconds | 135.04 MB |


### React Native Project

A React Native project scaffolded using `react-native-cli`.


#### ✘ Warm Cache -- ✘ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 51 seconds 389 milliseconds | 73.72 MB |
| yarn | 46 seconds 658 milliseconds | 66.7 MB |
| pnpm | 40 seconds 333 milliseconds | 65.99 MB |

#### ✔ Warm Cache -- ✘ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 3 seconds 567 milliseconds | 73.72 MB |
| yarn | 928 milliseconds | 66.7 MB |
| pnpm | 1 second 276 milliseconds | 65.99 MB |

#### ✘ Warm Cache -- ✘ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 4 seconds 665 milliseconds | 73.72 MB |
| yarn | 924 milliseconds | 66.7 MB |
| pnpm | 1 second 779 milliseconds | 65.99 MB |

#### ✔ Warm Cache -- ✘ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 3 seconds 471 milliseconds | 73.72 MB |
| yarn | 922 milliseconds | 66.7 MB |
| pnpm | 1 second 233 milliseconds | 65.99 MB |

#### ✘ Warm Cache -- ✔ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 3 seconds 855 milliseconds | 73.72 MB |
| yarn | 37 seconds 838 milliseconds | 66.7 MB |
| pnpm | 36 seconds 510 milliseconds | 65.99 MB |

#### ✔ Warm Cache -- ✔ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 3 seconds 499 milliseconds | 73.72 MB |
| yarn | 926 milliseconds | 66.7 MB |
| pnpm | 1 second 260 milliseconds | 65.99 MB |

#### ✘ Warm Cache -- ✔ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 3 seconds 475 milliseconds | 73.72 MB |
| yarn | 930 milliseconds | 66.7 MB |
| pnpm | 1 second 707 milliseconds | 65.99 MB |

#### ✔ Warm Cache -- ✔ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 3 seconds 479 milliseconds | 73.72 MB |
| yarn | 939 milliseconds | 66.7 MB |
| pnpm | 1 second 214 milliseconds | 65.99 MB |


### React Project

A React Project scaffolded using `create-react-app` and then ejected.


#### ✘ Warm Cache -- ✘ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 1 minute 4 seconds | 101.56 MB |
| yarn | 51 seconds 645 milliseconds | 79.45 MB |
| pnpm | 43 seconds 466 milliseconds | 79.87 MB |

#### ✔ Warm Cache -- ✘ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 5 seconds 516 milliseconds | 101.56 MB |
| yarn | 1 second 145 milliseconds | 79.45 MB |
| pnpm | 1 second 532 milliseconds | 79.87 MB |

#### ✘ Warm Cache -- ✘ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 7 seconds 51 milliseconds | 101.56 MB |
| yarn | 1 second 156 milliseconds | 79.45 MB |
| pnpm | 2 seconds 318 milliseconds | 79.87 MB |

#### ✔ Warm Cache -- ✘ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 5 seconds 460 milliseconds | 101.56 MB |
| yarn | 1 second 129 milliseconds | 79.45 MB |
| pnpm | 1 second 474 milliseconds | 79.87 MB |

#### ✘ Warm Cache -- ✔ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 6 seconds 95 milliseconds | 101.56 MB |
| yarn | 40 seconds 443 milliseconds | 79.45 MB |
| pnpm | 35 seconds 835 milliseconds | 79.87 MB |

#### ✔ Warm Cache -- ✔ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 5 seconds 455 milliseconds | 101.56 MB |
| yarn | 1 second 153 milliseconds | 79.45 MB |
| pnpm | 1 second 450 milliseconds | 79.87 MB |

#### ✘ Warm Cache -- ✔ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 5 seconds 456 milliseconds | 101.56 MB |
| yarn | 1 second 133 milliseconds | 79.45 MB |
| pnpm | 2 seconds 113 milliseconds | 79.87 MB |

#### ✔ Warm Cache -- ✔ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 5 seconds 443 milliseconds | 101.56 MB |
| yarn | 1 second 128 milliseconds | 79.45 MB |
| pnpm | 1 second 443 milliseconds | 79.87 MB |


### Vue Project

The vuexpresso boilerplate using VueX, Vue-Router, Vue-Apollo, webpack, GraphQL, Apollo-client, Express and Mongo.


#### ✘ Warm Cache -- ✘ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 59 seconds 177 milliseconds | 82.79 MB |
| yarn | 50 seconds 237 milliseconds | 73.66 MB |
| pnpm | 42 seconds 252 milliseconds | 75.29 MB |

#### ✔ Warm Cache -- ✘ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 5 seconds 525 milliseconds | 82.79 MB |
| yarn | 1 second 115 milliseconds | 73.66 MB |
| pnpm | 1 second 679 milliseconds | 75.29 MB |

#### ✘ Warm Cache -- ✘ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 7 seconds 147 milliseconds | 82.79 MB |
| yarn | 1 second 114 milliseconds | 73.66 MB |
| pnpm | 2 seconds 442 milliseconds | 75.29 MB |

#### ✔ Warm Cache -- ✘ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 5 seconds 519 milliseconds | 82.79 MB |
| yarn | 1 second 131 milliseconds | 73.66 MB |
| pnpm | 1 second 584 milliseconds | 75.29 MB |

#### ✘ Warm Cache -- ✔ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 6 seconds 98 milliseconds | 82.79 MB |
| yarn | 38 seconds 90 milliseconds | 73.66 MB |
| pnpm | 35 seconds 373 milliseconds | 75.29 MB |

#### ✔ Warm Cache -- ✔ `node_modules` -- ✘ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 5 seconds 486 milliseconds | 82.79 MB |
| yarn | 1 second 128 milliseconds | 73.66 MB |
| pnpm | 1 second 591 milliseconds | 75.29 MB |

#### ✘ Warm Cache -- ✔ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 5 seconds 482 milliseconds | 82.79 MB |
| yarn | 1 second 126 milliseconds | 73.66 MB |
| pnpm | 2 seconds 261 milliseconds | 75.29 MB |

#### ✔ Warm Cache -- ✔ `node_modules` -- ✔ Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
| npm | 5 seconds 502 milliseconds | 82.79 MB |
| yarn | 1 second 116 milliseconds | 73.66 MB |
| pnpm | 1 second 583 milliseconds | 75.29 MB |


