<template lang="pug">
div
  b-navbar(toggleable="lg" type="dark" variant="dark")
    nuxt-link.navbar-brand(to="/") Marketing Technologist .Net
    b-navbar-toggle(target="nav-collapse")
    b-collapse(id="nav-collapse" is-nav)
      b-navbar-nav
        nuxt-link.nav-link(to="/about") About
      b-navbar-nav(class="ml-auto")
        b-nav-item-dropdown(text="sample" right)
          b-dropdown-item(href="#") sampleitem
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>

</style>