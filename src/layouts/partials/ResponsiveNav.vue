<template>
  <div>
    <nav class :class="toggleNav ? '': ''">
      <ul>
        <li class v-for="element in $static.metadata.menu" :key="element.name">
          <g-link :to="element.link" class="l" active-class exact-active-class>{{ element.name }}</g-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<static-query>
query {
  metadata {
    menu {
      name
      link
    }
  }
}
</static-query>

<script>
let myBody = {
  classList: {},
};
export default {
  data() {
    return {
      toggleNav: false,
    };
  },
  methods: {
    toggle() {
      this.toggleNav = !this.toggleNav;
    },
  },
};
</script>