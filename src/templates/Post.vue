<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" 
    >
       <!-- :style="{
        backgroundImage: `url(${GRIDSOME_API_URL + $page.post.cover.url})`
      }" -->
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-heading post-heading-a">
              <h1>{{$page.post.title}}</h1>
              <!-- <h2 class="subheading">Problems look mighty small from 150 miles up</h2> -->
              <span class="meta">Posted by
                <a href="#">Start Bootstrap</a>
                on August 24, 2019</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Post Content -->
    <article>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto" v-html="meToHtml($page.post.content)"></div>
          <div class="box"> <img class="imgs" style="width:550px" :src='GRIDSOME_API_URL + $page.post.cover.url' alt=""></div>
        </div>
      </div>
    </article>
  </Layout>
</template>
 <page-query>
 query($id:ID!){
  post: strapiPost(id:$id){
    id,
    title,
    content,
    created_at,
    cover{
      url
    }
    tags{
      id,
      title
    }
  }
}
</page-query>
<script>
import markdownIt from 'markdown-it'
const md = new markdownIt()


export default {
 name:'Postpage',
 methods:{
   meToHtml(mds){
     return md.render(mds)
   }
 }
}
</script>
<style scoped>
.box{
  text-align: center;
}
.post-heading-a{
  color: #000 !important;
}
</style>
