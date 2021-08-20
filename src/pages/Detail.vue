<template>
  <Layout :color="$page.general.edges[this.id].node.subtitle">
    <!-- Page Header -->
    <header class="masthead">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading post-title-a">
                <div><h1 :style="{
                  color:$page.general.edges[this.id].node.subtitle
                }">{{$page.general.edges[this.id].node.title}}</h1></div>
                <div class="site-heading-box">
                 <div class="site-heading-box-top" :style="{
                  color:$page.general.edges[this.id].node.subtitle
                }">
                    <div class="site-heading-box-top-l" >{{$page.general.edges[this.id].node.t1}}</div>
                    <div class="site-heading-box-top-r">{{$page.general.edges[this.id].node.t2}}</div>
                  </div>
                  <div class="site-heading-box-top" :style="{
                  color:$page.general.edges[this.id].node.subtitle
                }">
                    <div class="site-heading-box-top-l">{{$page.general.edges[this.id].node.t3}}</div>
                    <div class="site-heading-box-top-r">{{$page.general.edges[this.id].node.t4}}</div>
                  </div>
              </div>
            </div>
            <div class="box">
               <div>
               {{$page.general.edges[this.id].node.t5}} 
              </div>
                <img class="imgs" @click="blackUrl(1)" style="width:800px"  :src='GRIDSOME_API_URL + $page.general.edges[this.id].node.cover.url' alt="">
              <!-- <div>
                <div class="jai" >{{$page.general.edges[this.id].node.t1}}</div>
                <br>
                <div>{{$page.general.edges[this.id].node.t2}}</div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </header>
  </Layout>
</template>
<page-query>
query{
	general:allStrapiDetail{
    edges{
      node{
        title,
        cover{
          url
        },
        subtitle,
        t1,
        t2,
        t3,
        t4,
        t5
      }
    }
  }
}
</page-query>
<script>

export default {
  name:'Homepage',

  metaInfo: {
    title: 'Hello, world!'
  },
  data(){
    return{
      id: ''
    }
  },
  mounted(){
    this.id = Object.keys(this.$route.query)[0]
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
.site-heading-box{
  width: 400px;
  margin: 0 auto;
}
.site-heading-box-top{
  display: flex;
  justify-content: space-between;
}
.site-heading-box-top-l{
  font-size: 12px;
  font-weight: 600;
}
.site-heading-box-top-r{
  font-size: 12px;
}
</style>
