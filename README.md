🚀 @elforastero/eslint-config
-------------
Shareable ESLint config for React, React Native, React Native Web, and Node projects. All configs imply TypeScript.
## Usage
Install npm package:
```shell script
yarn add @elforastero/eslint-config
```

> As all dependencies are listed in peer dependencies, they should be installed manually depending on the chosen package.

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
  // Choose from eslint-config, */node, */web, */native, */hybrid
  "extends": ["@elforastero/eslint-config/web"]
}
```

### package.json
```json
{
  "eslintConfig": {
    "extends": ["@elforastero/eslint-config/native"]
  }
}
```

### Customizing Prettier
If you would like to customize the Prettier settings, create a file named .prettierrc in your project directory. An example of Prettier configuration file:

```json
// .prettierrc
{
  "printWidth": 100,
  "tabWidth": 2,
  "singleQuote": true,
  "jsxBracketSameLine": true,
  "trailingComma": "es5"
}
```
