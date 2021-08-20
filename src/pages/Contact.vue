<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="page-heading">
              <h1 style="color:#000">Say hi!</h1>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <p>Leave me a note with any questions you might have, I'll get back to you as soon as possible.</p>
          <form name="sentMessage" id="contactForm" novalidate>
            <div class="sender-info" >
                <div  class="sender-info-1">
                  <label for="name" class="label"  >Your name</label>
                  <input type="text" name="name" v-model="form.name"  placeholder="Name" id="name" required data-validation-required-message="Please enter your name." >
                </div>
                <div  class="sender-info-1">
                  <label for="email" class="label"  >Your email</label>
                  <input type="email" v-model="form.email"  class="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." >
                </div>
             </div>
              <div class="message"  >
                <label for="message" class="label"  >Message</label>
                <textarea name="message" rows="5" v-model="form.message"   placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
              </div>
            <br>
            <div id="success"></div>
            <button type="submit" @click.prevent="onSubmit" class="btn btn-primary btn-color" id="sendMessageButton">Submit form</button>
          </form>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import axios from 'axios'

export default {
  metaInfo: {
    name:'Contactpage',
    title: 'About us'
  },
  data(){
    return{
      form:{
        name:'',
        email:'',
        message:''
      }
    }
  },
  methods:{
   async onSubmit(){
      try{
        await axios({
          method:'POST',
          url:'http://106.75.70.25:1337/contacts',
          data:this.form
        })
        alert('成功了')
      }catch(err){
        console.log(err)
        alert('失败了')
      }
    }
  }
}
</script>
<style >
.btn-color{
  background: #000;
  color: #fff !important;
  border-radius: .3rem
}
.sender-info{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem
}
.sender-info-1{
    flex: 1;
    margin-right: 4rem
}
.label{
  display: block;
    font-weight: 700;
    margin-bottom: .5rem;
}
input{
  background: transparent;
  border: 1px solid #f3f3f3;
  outline: none;
  border-radius: .3rem;
  padding: .8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
}
.message{
  box-sizing: border-box
}
textarea{
  resize: none;
  height: 140px;
    background: transparent;
  border: 1px solid #f3f3f3;
  outline: none;
  border-radius: .3rem;
  padding: .8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
}
</style>
