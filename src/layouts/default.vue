<template lang="pug">
div
  siteHeader
  div.container-fluid
    Nuxt
  siteFooter
</template>

<style lang="stylus">
.body-class
  background-color: #fcfcfc

h1, h2
  max-width: 1920px
  position: relative
  margin: 15px 10px
  padding: 5px
  border-top: solid 2px #343a40
  border-bottom: solid 2px #343a40

h1::before, h1::after, h2::before, h2::after
  content: ""
  width: 100%
  position: absolute
  display: block
  left: 0

h1::before, h2::before
  border-top: solid 4px #343a40
  top: -8px

h1::after, h2::after
  border-top: solid 4px #343a40
  bottom: -8px

</style>