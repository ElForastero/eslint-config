module.exports = {
  extends: ['@react-native-community'],
  plugins: ['react-native-a11y'],
  rules: {
    // https://github.com/FormidableLabs/eslint-plugin-react-native-a11y
    'react-native-a11y/has-accessibility-hint': 'warn',
    'react-native-a11y/has-accessibility-props': 'warn',
    'react-native-a11y/has-valid-accessibility-actions': 'warn',
    'react-native-a11y/has-valid-accessibility-component-type': 'warn',
    'react-native-a11y/has-valid-accessibility-role': 'warn',
    'react-native-a11y/has-valid-accessibility-state': 'warn',
    'react-native-a11y/has-valid-accessibility-states': 'warn',
    'react-native-a11y/has-valid-accessibility-traits': 'warn',
    'react-native-a11y/has-valid-accessibility-value': 'warn',
    'react-native-a11y/no-nested-touchables': 'warn',
  },
};
