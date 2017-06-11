# Node Package Manager Benchmarks

This repository runs benchmarks of [npm](https://github.com/npm/npm), [pnpm](https://github.com/pnpm/pnpm), and [yarn](https://github.com/yarnpkg/yarn).

## Results

Each of these benchmarks were run {{ repititions }} times and the results averaged.

{% macro field(item) -%}
    {% if item === true -%}
        ✔
    {%- elif item === false -%}
        ✘
    {%- else -%}
        {{ item }}
    {%- endif %}
{%- endmacro %}

{% for project in projectBenchmarks %}
### {{ project.name }}

| {{ project.headings | join(' | ') }} |
|{% for heading in project.headings %} ---------- |{% endfor %}
{% for row in project.table -%}
    |{% for item in row %} {{ field(item) }} |{% endfor %}
{% endfor %}
{% endfor %}
