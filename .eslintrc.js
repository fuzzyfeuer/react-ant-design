module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true           // Parsing of JSX
        },
        ecmaVersion:  2018,     // Modern ECMAScript features
        project: './tsconfig.eslint.json',
        sourceType:  'module'   // Allows the use of imports
    },
    rules: {
        "arrow-body-style": "off",
        "array-bracket-spacing": "off",
        "arrow-parens": "off",
        "comma-dangle": "off",
        "function-paren-newline": "off",
        "import/order": "off",
        "indent": ["warn", 4],
        "max-len": ["warn", 120],
        "no-console": "off",
        "no-multi-spaces": ["warn", { ignoreEOLComments: true }],
        "no-multiple-empty-lines": "warn",
        "no-trailing-spaces": "warn",
        "no-underscore-dangle": "off",
        "object-curly-newline": "off",
        "object-curly-spacing": "off",
        "operator-linebreak": "off",
        "padded-blocks": "warn",
        "prefer-destructuring": "off",
        "spaced-comment": "off",
        "space-infix-ops": "off",

        "import/newline-after-import": "off",
        "import/no-extraneous-dependencies": "off",
        "import/first": "off",
        "import/prefer-default-export": "off",

        "react/button-has-type": "off",
        "react/destructuring-assignment": "off",

        "react/jsx-closing-bracket-location": "off",
        "react/jsx-indent": ["warn", 4],
        "react/jsx-indent-props": ["warn", 4],
        "react/jsx-tag-spacing": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/state-in-constructor": "off",

        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/brace-style": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/indent": ["warn", 4],
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unused-vars": ["warn"]
    },
    settings: {
        react: {
            version: 'detect' // auto detect the version of React
        }
    }
};
