<template>
  <header>Header</header>
</template>

<script>
export default {
  methods: {},
};
</script>

<static-query>
query {
  metadata {
    siteName
    menu {
      name
      link
    }
  }
}
</static-query>