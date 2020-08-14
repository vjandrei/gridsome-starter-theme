<template>
  <footer role="contentinfo">
    <div>
      <p>
        © 2020 A starter template built with
        <a href="https://www.gridsome.org">Gridsome.</a> - Template inspired by
        <a href="https://github.com/noxify" target="_blank">Marcus Reinhardt</a>
      </p>

      <ul>
        <li v-for="element in $static.metadata.social" :key="element.link">
          <a :href="element.link" class :aria-label="element.icon" target="_blank">{{element.link}}</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {},
};
</script>

<static-query>
query {
  metadata {
    social {
      icon
      link
    }
  }
}
</static-query>