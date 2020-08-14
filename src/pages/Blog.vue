<template>
  <Layout>
    <section>
      <h1>Blog</h1>
      <div>
        <div v-for="entry in $page.allBlog.edges" :key="entry.node.id">
          <article>
            <g-link :to="entry.node.path">
              <figure>
                <g-image class :alt="entry.node.image_caption" :src="entry.node.image" />
              </figure>
            </g-link>
            <div>
              Title:
              <h2>
                <g-link :to="entry.node.path">{{ entry.node.title }}</g-link>
              </h2>
              <div>
                Author:
                <p>{{ entry.node.author.name }}</p>
                <time :datetime="entry.node.datetime">{{ entry.node.humanTime }}</time>
              </div>Category
              <ul>
                <li>
                  <span>{{ entry.node.category.title }}</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Blog",
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