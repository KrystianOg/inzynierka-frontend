export default {
    parser: "babel-eslint",
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier"
    ],
    rules: {
        "no-restricted-imports": [
            "error",
            {
                "patterns": [
                    "@mui/*/*/*"
                ]
            }
        ]
    },
    plugins: [
        "mui-unused-classes"
    ]
}