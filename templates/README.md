# Node Package Manager Benchmarks

This repository runs benchmarks of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm), and [yarn](https://github.com/yarnpkg/yarn).

## Results

Each of these benchmarks were run {{ repititions }} times and the results averaged.

{% macro check(item) -%}
    {% if item === true -%}
        ✔
    {%- elif item === false -%}
        ✘
    {%- else -%}
        {{ item }}
    {%- endif %}
{%- endmacro %}

{% for project in projectBenchmarks %}
### {{ project.title }}

{{ project.description }}

{%- for benchmark in project.benchmarks %}
#### {{ check(benchmark.config.cache) }} Warm Cache -- {{ check(benchmark.config.nodeModules) }} `node_modules` -- {{ check(benchmark.config.shrinkwrap) }} Lockfile/Shrinkwrap

| Package Manager | Installation Time | `node_modules` size |
| --------------- | ----------------- | --------------------|
{% for result in benchmark.results -%}
| {{ result.packageManager }} | {{ result.formattedTime }} | {{ result.formattedSize }} |
{% endfor %}
{% endfor %}
{% endfor %}
