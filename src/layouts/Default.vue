<template>
  <div class="container mx-auto">
    <ResponsiveNav />
    <HeaderPartial />
    <slot />
    <FooterPartial />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import HeaderPartial from "~/layouts/partials/Header.vue";
import FooterPartial from "~/layouts/partials/Footer.vue";
import ResponsiveNav from "~/layouts/partials/ResponsiveNav.vue";

export default {
  components: {
    HeaderPartial,
    FooterPartial,
    ResponsiveNav,
  },
};
</script>

<style>
</style>
