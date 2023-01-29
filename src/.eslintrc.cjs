module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "mui-unused-classes"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "no-restricted-imports": [
            "error",
            {
                "patterns": [
                    "@mui/*/*/*"
                ]
            }
        ]
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}
