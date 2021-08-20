<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead">
        <!-- :style="{
        backgroundImage: `url(${GRIDSOME_API_URL +  $page.general.edges[0].node.cover.url})`
      }" -->
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading post-title-a">
              <h1>{{$page.general.edges[0].node.title}}</h1>
              <span class="subheading">{{$page.general.edges[0].node.sutitle}}</span>
            </div>
            <div class="box">
                <img class="imgs" @click="blackUrl(3)" style="width:800px"  :src='GRIDSOME_API_URL + $page.general.edges[0].node.cover.url' alt="">
              <div>
                <div class="jai" >{{$page.general.edges[0].node.t1}}</div>
                <br>
                <div>{{$page.general.edges[0].node.t2}}</div>
              </div>
            </div>
            <br>
          <div class="boxPrevnet">
             <div class="box">
              <img class="imgs" @click="blackUrl(1)" style="width:400px" :src='GRIDSOME_API_URL + $page.general.edges[0].node.cover1.url' alt="">
              <div>
                <div class="jai" >{{$page.general.edges[0].node.t3}}</div>
                <br>
                <div>{{$page.general.edges[0].node.t4}}</div>
              </div>
            </div>
            <div class="box">
              <img class="imgs" @click="blackUrl(2)" style="width:400px" :src='GRIDSOME_API_URL + $page.general.edges[0].node.cover2.url' alt="">
              <div>
                <div class="jai" >{{$page.general.edges[0].node.t5}}</div>
                <br>
                <div>{{$page.general.edges[0].node.t6}}</div>
              </div>
            </div>
          </div>
          <br>
             <div class="box">
              <img class="imgs" @click="blackUrl(0)" style="width:800px" :src='GRIDSOME_API_URL + $page.general.edges[0].node.cover4.url' alt="">
              <div>
                <div class="jai" >{{$page.general.edges[0].node.t7}}</div>
                <br>
                <div>{{$page.general.edges[0].node.t8}}</div>
              </div>
            </div>
            <br>
             <br>
              <br>

            <div>{{$page.general.edges[0].node.t9}}</div>

          </div>
        </div>
      </div>
    </header>
    <div class="bottom">
      <div class="bottom-l">{{$page.general.edges[0].node.t10}}</div>
      <div class="bottom-l">{{$page.general.edges[0].node.t11}}</div>
      <div class="bottom-l">{{$page.general.edges[0].node.t12}}</div>
      <div class="bottom-l">{{$page.general.edges[0].node.t13}}</div>
    </div>
    
  </Layout>
</template>
<page-query>
query{
 general: allStrapiOn{
   edges{
      node{
        cover{
          url
        },
        cover1{
          url
        },
        cover2{
          url
        },
        cover4{
          url
        },
        title,
        sutitle,
        t1,
        t2,
        t3,
        t4,
        t5,
        t6,
        t7,
        t8,
        t9,
        t10,
        t11,
        t12,
        t13,
        t14,
      }
    }
  }
}
</page-query>
<script>
// import { Pager } from 'gridsome'

export default {
  name:'Homepage',
  //  components: {
  //   Pager
  // },
  metaInfo: {
    title: 'Hello, world!'
  },
  methods:{
    blackUrl(num){
      this.$router.push(`/detail?${num}`)
    }
  }
}
</script>

<style>
.post-title-a{
  color: #000 !important;
}
.box{
  text-align: center;
  margin-right: 20px;
}
.boxPrevnet{
  display:flex;
}
.jai{
  font-weight: 600px;
}
.bottom{
  display: flex;
}
.bottom-l{
  flex: 1;
  text-align: center;
  border: 1px solid #f3f3f3;
  padding:20px 30px;
}
</style>
