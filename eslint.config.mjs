import nuxtLayers from "eslint-plugin-nuxt-layers";

export default [
  {
    plugins: {
      "nuxt-layers": nuxtLayers,
    },
    rules: {
      "nuxt-layers/layer-boundaries": [
        "error",
        {
          root: "layers", // 📁 Your layers directory name
          aliases: ["#layers", "@layers"], // 🔗 Path aliases that point to layers
          layers: {
            shared: [], // 🏗️ Cannot import from any layer
            products: ["shared"], // 🛍️ Can only import from shared
            cart: ["shared"], // 🛒 Can only import from shared
            // 🏠 Your project root files can import from all layers (use '*')
          },
        },
      ],
    },
  },
];