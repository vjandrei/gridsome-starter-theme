<template>
  <Layout>
    <section>
      <div>
        <h1 v-html="$page.blog.title"></h1>
        <div>
          <p>{{ $page.blog.author.name }}</p>
          <time :datetime="$page.blog.datetime">{{
            $page.blog.humanTime
          }}</time>
          <p>
            Posted in
            <g-link :to="$page.blog.category.path">{{
              $page.blog.category.title
            }}</g-link>
          </p>
        </div>
        <figure>
          <g-image :alt="$page.blog.image_caption" :src="$page.blog.image" />
          <figcaption>{{ $page.blog.image_caption }}</figcaption>
        </figure>
      </div>

      <div>
        <p v-html="$page.blog.excerpt"></p>

        <div v-html="$page.blog.content"></div>

        <ul>
          <li v-for="tag in $page.blog.tags" :key="tag.id">
            <g-link :to="tag.path">{{ tag.title }}</g-link>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    blog(id: $id) {
      title
      path
      image(width:1200)
      image_caption
      excerpt
      content
      humanTime : created(format:"Do MMMM YYYY")
      datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
      category {
        title
        path
      }
      author {
        name
      }
      tags {
        id
        title
        path
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.blog.title,
    };
  },
};
</script>
