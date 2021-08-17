<template>
   <Layout>
      <!-- Main Content -->
    <div class="container">
      <br>
      <br>
      <br>
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-preview" v-for="post in $page.tag.posts" :key="post.id">
            <g-link :to="'/post/'+ post.id">
              <h2 class="post-title">
                {{post.title}}
              </h2>
            </g-link>
          </div>
          </div>
          </div>
          </div>
  </Layout>
</template>
 <page-query>
 query($id:ID!){
  tag: strapiTag(id:$id){
    id,
    title,
    path,
    posts{
      id,title
    }
  }
}
</page-query>
<script>
import markdownIt from 'markdown-it'
const md = new markdownIt()


export default {
 name:'Tagpage',
 methods:{
   meToHtml(mds){
     return md.render(mds)
   }
 }
}
</script>
