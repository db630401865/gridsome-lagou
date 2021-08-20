<template>
  <div class="layout">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <g-link class="navbar-brand" to="/">
          <img  class="logo_svg" src="https://gridsome-forestry.netlify.app/assets/img/logo.332701b7.svg" alt="">
        </g-link>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
           <g-link class="nav-item" to="/journal">
              <a class="nav-link active-link" :style="{
                  color: this.color ?  this.color :''
                }">Journal</a>
            </g-link>
            <g-link class="nav-item" to="/contact" >
              <a :style="{
                  color: this.color ?  this.color :''
                }" class="nav-link active-link">Say Hi!</a>
            </g-link>
          </ul>
        </div>
      </div>
    </nav>

    <!-- 子组件出口 -->
    <slot/>

    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="row">
          <p class="copyright text-muted">Copyright © 2021</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
export default {
  props:['color']
}
</script>
<style>
.logo_svg{
  width: 60px;
}
.navbar-expand-lg .navbar-collapse{
    position: absolute;
    right: 40px
}
</style>
