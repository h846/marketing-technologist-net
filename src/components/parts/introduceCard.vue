<template lang="pug">
b-card(
  tag="article"
  style="max-width: 30rem"
  )
  div.imgBox
    b-card-img-lazy(:src="imagePath")
  b-card-title {{ title }}
  b-card-text {{ text | ignoreHtml }}
  div(v-if="link")
    a(:href="link" target="_blank")
      b-button(block variant="primary") Web Site
</template>

<script>
export default {
  props: {
    title: { type: String, default: "" },
    text: { type: String, default: "" },
    imagePath: { type: String, default: "" },
    link: { type: String, default: "" },
    externalLink: {type: Boolean, default: false}
  },
  filters: {
    moment: function (date) {
      return date.replace("T", " ");
    },
    ignoreHtml: function (httpText) {
      return httpText
        .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")
        .replace("[&hellip;]", "...");
    },
  },
};
</script>

<style lang="stylus" scoped>
.imgBox
  margin: 0 0 1.0rem 0

</style>
