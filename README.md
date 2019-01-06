# validate-env
CLI tool to validate your env files.

[![Build Status](https://travis-ci.com/yTakkar/validate-env.svg?branch=master)](https://travis-ci.com/yTakkar/validate-env)  [![](https://img.shields.io/github/license/yTakkar/validate-env.svg?style=flat-square)](https://github.com/yTakkar/validate-env) [![codecov](https://codecov.io/gh/yTakkar/validate-env/branch/master/graph/badge.svg)](https://codecov.io/gh/yTakkar/validate-env) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/yTakkar/validate-env)


![alt text][logo]

[logo]: https://i.ibb.co/MGLG39F/carbon-1.png "Demo"

# Installation
```bash
  yarn add @takkar/validate-env -dev
  ```

# Usage

1. Now create a sample env file with keys your think should be available in your env files. For eg. `config/.env.sample` .   
  ```js
  name
  age
  city
  country
  ```

  Now, `validate-env` will validate your env file against these keys. Let's say we wanna validate `.env.development`.

2. Run the command.
  ```bash
  validate-env --sample config/.env.sample --env .env.development
  ```

# API
```
validate-env [options]

Options:
    --sample     Sample env file with keys you think should be available in all env files.
    --env  A env file to check
```
