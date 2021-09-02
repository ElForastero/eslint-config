🚀 @spaceship/eslint-config
-------------
Shareable ESLint configs for React, React Native, React Native Web, and Node projects. All configs imply TypeScript.

## Usage

Install npm package:

```shell script
yarn add --dev @spaceship/eslint-config
```

Then extend your `.eslintrc` with one of the following configs:

- `@spaceship/eslint-config` - default framework- and environment-agnostic config
- `@spaceship/eslint-config/web` - config for react web apps
- `@spaceship/eslint-config/native` - config for react-native apps
- `@spaceship/eslint-config/hybrid` - config for hybrid react-native + web apps
- `@spaceship/eslint-config/node` - config for nodejs projects
- `@spaceship/eslint-config/jest` - config for testing environment
- `@spaceship/eslint-config/i18n` - config for i18n solutions

### .eslintrc

```json
{
  "extends": [
    "@spaceship/eslint-config/web"
  ]
}
```

### package.json

```json
{
  "eslintConfig": {
    "extends": [
      "@spaceship/eslint-config/native"
    ]
  }
}
```
