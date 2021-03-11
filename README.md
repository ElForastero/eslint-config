🚀 @spaceship/eslint-config
-------------
Shareable ESLint configs for React, React Native, React Native Web, and Node projects. All configs imply TypeScript.

## Usage
Install npm package:
```shell script
yarn add --dev @spaceship/eslint-config
```

Then extend your `.eslintrc` with one of the following configs:

- `eslint-config` - default framework- and environment-agnostic config
- `eslint-config/web` - config for react web apps
- `eslint-config/native` - config for react-native apps
- `eslint-config/hybrid` - config for hybrid react-native + web apps
- `eslint-config/node` - config for nodejs projects
- `eslint-config/jest` - config for testing environment

### .eslintrc
```json
{
  "extends": ["@spaceship/eslint-config/web"]
}
```

### package.json
```json
{
  "eslintConfig": {
    "extends": ["@spaceship/eslint-config/native"]
  }
}
```

### Customizing Prettier
If you would like to customize the Prettier settings, create a file named `.prettierrc` in your project directory. An example of Prettier configuration file:

```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "singleQuote": true,
  "jsxBracketSameLine": true,
  "trailingComma": "es5"
}
```
