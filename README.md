# share-config

My config for eslint, prettier, eg.

# Install

```
yarn add @dmcs/share-config -D
```

# Eslint Usage

In .eslintrc.js

```js
module.exports = {
  extends: ["@dmcs/share-config"],
};
```

# Prettier Usage

In package.json

```json
{
  "prettier": "@dmcs/share-config/prettier.js"
}
```

Or in .prettierrc.js

```js
module.exports = require("@dmcs/share-config/prettier.js)
```
