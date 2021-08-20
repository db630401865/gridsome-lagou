<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead"  style="background:#fff;">
       <!-- :style="{
        backgroundImage: `url(${GRIDSOME_API_URL +  $page.general.edges[0].node.cover.url})`
      }" -->
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h2>{{$page.general.edges[0].node.title}}</h2>
              <!-- <span class="subheading">{{$page.general.edges[0].node.subTitle}}</span> -->
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-preview" v-for="edge in $page.posts.edges" :key="edge.node.id">
            <g-link :to="'/post/'+ edge.node.id">
              <h2 class="post-title">
                {{edge.node.title}}
              </h2>
            </g-link>
            <p class="post-meta">Posted by
              <!-- <a href="#">{{edge.node.content}}</a> -->
             {{edge.node.subtitle}}</p>
             <!-- <p>
               <span v-for="tag in edge.node.tags" :key="tag.id">
                  <g-link :to="'/tag/' + tag.id" >{{tag.title}} </g-link>&nbsp;
               </span>
             </p>  -->
             </p> 
          </div>
          <Pager :info="$page.posts.pageInfo"></Pager>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query ($page: Int) {
  posts:allStrapiPost(perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges{ 
      node{
        id,
        title,
        created_at,
        content,
        subtitle,
        tags{
          id,
          title
        }
      }
    }
  }

 general:allStrapiGeneral{
    edges{
      node{
        id,
        title,
        subTitle,
        cover{
          url
        }
      }
    }
  }
}
</page-query>
<script>
import { Pager } from 'gridsome'

export default {
  name:'Homepage',
   components: {
    Pager
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>

</style>
