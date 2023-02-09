module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": "auto",
        // 兼容ie11 必须用 entry    usage
        "useBuiltIns": "entry",
        "corejs": "3",
        "loose": true,
        "forceAllTransforms": true,
      }
    ],
    [
      "@babel/preset-typescript",
      {
        "isTSX": true,
        "allExtensions": true
      }
    ],
    "@babel/preset-react"
  ],
  "plugins": [
    // [
    //   "@babel/plugin-transform-runtime",
    //   {
    //     "absoluteRuntime": false,
    //     "corejs": 3,
    //     "helpers": true,
    //     "regenerator": true,
    //   }
    // ]
    [
      "import",
      {
        "libraryName": "antd",
        "style": true,
      }
    ]
  ]
};