import { defineMeeoviApp } from "@meeovi/core";
import { commerceLayer } from "@meeovi/layers/commerce";
import { authLayer } from "@meeovi/layers/auth";
import { searchLayer } from "@meeovi/layers/search";

export default defineMeeoviApp({
  id: "starter-nuxt",

  layers: [
    commerceLayer(),
    authLayer(),
    searchLayer(),
  ],

  runtime: {
    ssr: true,
    caching: true,
  },
});