/**
 * @see https://prettier.io/docs/en/options
 * @type {import("prettier").Config}
 */
export default {
  printWidth: 100,
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  singleAttributePerLine: true,
  overrides: [
    {
      files: ['**/*.css'],
      options: {
        singleQuote: false,
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
}
