module.exports = {
  'i18next/no-literal-string': [
    'warn',
    {
      markupOnly: true,
      onlyAttribute: ['text', 'value', 'defaultValue', 'placeholder'],
    },
  ],
};
