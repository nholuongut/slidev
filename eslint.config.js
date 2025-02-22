import nholuongut from '@nholuongut/eslint-config'

export default nholuongut(
  {
    overrides: {
      vue: {
        'vue/no-v-text-v-html-on-component': 'off',
        'vue/component-name-in-template-casing': 'off',
      },
    },
    formatters: {
      markdown: true,
      css: true,
      slidev: {
        files: [
          '**/slides.md',
          '**/template.md',
          '**/example.md',
          'test/fixtures/markdown/**/*.md',
          'packages/vscode/syntaxes/slidev.example.md',
        ],
      },
    },
  },
)
