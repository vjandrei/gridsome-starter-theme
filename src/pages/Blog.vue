<template>
  <Layout>
    <section>
      <h1>Blog´s</h1>
      <div>
        <div v-for="entry in $page.allBlog.edges" :key="entry.node.id">
          <article>
            <g-link :to="entry.node.path">
              <figure>
                <g-image
                  class
                  :alt="entry.node.image_caption"
                  :src="entry.node.image"
                  width="50"
                />
              </figure>
            </g-link>

            <h1>
              Title:
              <g-link :to="entry.node.path">{{ entry.node.title }}</g-link>
            </h1>
            <p>Author: {{ entry.node.author.name }}</p>
            <p>
              Time:
              <time :datetime="entry.node.datetime">{{
                entry.node.humanTime
              }}</time>
            </p>
            Categories:
            <ul>
              <li>
                <span>{{ entry.node.category.title }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Blog',
  },
};
</script>

<page-query>
  query {
    
    allBlog{
      
      edges {
        node {
          title
          path
          image(width:780)
          humanTime : created(format:"Do MMMM YYYY")
          datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")
          author {
            name
          }
          category {
            title
          }
        }
      }
    }
  }
</page-query>
