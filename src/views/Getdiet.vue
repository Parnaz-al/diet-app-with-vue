<template>
    <p class="cmp">Complete the form</p>
    <form class="form" @submit.prevent="submit">
      

      <label >USERNAME</label>
      <input class="inp" type="text" v-model="username" >

      <label >PASSWORD:</label>
      <input   class="inp" type="password" v-model="pass" >
      <div class="passerror" :v-if="passerror">
          <span>{{passerror}} </span>
      </div>

      <label>Weight:</label>
      <input class="inp" type="text" v-model="weight" >
      <label>HEIGTH</label>
      <input class="inp" type="text" v-model="heigh" >


      <label>GENDER:</label>
      <select  class="inp" v-model="selection">
          <option value="female">female</option>
          <option vlue="male">male</option>
      </select>
      
      <div class="submit">
      <button >submit</button>
      </div>
      
  
    </form>
    <div v-for="p in person" :key="p">
        <dietmodal v-if="showmodal" :person="p" @close-modal="close"/>
    </div>
  </template>
  
  <script>
import dietmodal from '@/components/dietmodal.vue'
  export default {
  components: { dietmodal },
      data(){
          return{
             
              username:'',
              weight:0,
              heigh:0,
              pass:'',
              passerror:'',
              selection:'',
              person:[],
              showmodal:false

          }
          
      },
      methods:{
          submit(){
              if (this.pass.length<5){
                  this.passerror="your password length should be more than 5."
              }
           
            this.person.push(
                {
                    heigh:this.heigh,
                    username:this.username,
                    password:this.pass,
                    weight:this.weight,
                    gender:this.selection



                }
                
            )
            this.showmodal=true;
            
          
          
     
          },
          close(){

            this.showmodal=false
          }
          
      }
  
  }
  </script>
  
  <style>

  .form{
    
      margin: auto;
      background-color: white ;
      width: 500px;
      height: auto;
      padding: 40px;
      border-radius: 10px;
      text-align: left;
     
  }
  
  label{
      display: block;
      font-size: 10px;
      color: rgb(175, 170, 170);
      font-weight: bold;
      margin-top:15px;
  
  }
  
  .inp{
      border:none;
      border-bottom:1px solid rgb(189, 178, 178);
      width: 100%;
      margin-top:10px;
      height: 20px;
  }
  .skills{
      display: inline-block;
      width: auto;
      font-size:15px ;
      border-radius:5px;
      padding: 7px;
      background-color: rgb(200, 229, 219);
      margin-top: 10px;
      margin-left:10px ;
      
  }
  .submit{
  
      text-align: center;
      margin-top:40px;
    
    
  
  
  }
  .submit button{
       border: none;
       background-color: rgb(43, 58, 221);
       border-radius: 20px;
       width:130px;
       box-sizing: border-box;
       padding: 9px;
       color: white;
       font-size: 15px;
  }
  .passerror{
      margin-top:10px;
      font-size:11px;
      color:red;
  }
  .cmp{
    color:   rgb(157, 159, 183);
  }
  </style>