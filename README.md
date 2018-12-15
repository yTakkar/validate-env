# Validate-Env
Validate your env files.

# Demo
![alt text](https://raw.githubusercontent.com/yTakkar/validate-env/master/example/example.gif)

#Usage
1. Installation [You can install it as a dev-dependency also].
```bash
npm i validate-env -g
```

2. Now create a sample env file with keys your think should be available in your env files.
    
  For example.
  ```js
  name
  age
  city
  country yarn global add validate-env
  ```

  Now, `validate-env` will validate your env files against these keys.

3. Use it.
```bash
validate-env --sample path-to-env-sample-file --env path-to-your-env-file
```

If you've installed it as a `devDependency`,
```bash
./node_modules/.bin/validate-env  --sample path-to-env-sample-file --env path-to-your-env-file
```

# Example
```bash
validate-env --sample config/.env.sample --env ./.env.development
```
