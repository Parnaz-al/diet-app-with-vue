import moment from 'moment'
<template>
<div>
  <h1 class="section1">Weigth Tracker </h1>
  <div class="section2">
    <p class="section21">{{current}}</p>
    <p class="section22">Current weight(kg)</p>
    <div v-if="show">
      <span v-if="lost">you lost {{change}}kg</span>
      <span v-if="!lost">you gain {{change}}kg</span>

    </div>
  </div>
  <div class="section3">
    <input class="section31" v-model="weight">
    <input class="section32" type="submit" value="Add weight"  @click="add" >
  </div>

  <p class="section4">Weight History</p>
  <div class="section5" v-for="weight in weights" :key="weight">
    
    <span class="section51">{{weight}} kg</span>
    <span class="section52">{{currentDate()}}</span>
  </div>
  <button v-if="showbtn" class="section6" @click=" this.$router.push({path: '/getdiet'});"> 
   get diet
  </button>
  
</div>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  },
  data(){
    return{
      weight:0,
      current:0,
      weights:[],
      change:0,
      lost:false,
      show:false,
      showbtn:false
    }
  },
  methods:{
    add(){
     
      this.current=this.weight;
      this.weights.push(this.weight);
      this.change=this.weights[this.weights.length-1]-this.weights[this.weights.length-2];
      if (this.change<0){
        this.change=this.change*-1
        this.lost=true

      }
      if (this.change>20){
        this.showbtn=true
      }
      if(this.weights.length>1){
      this.show=true;}

    


      
  

    },
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      return date;
    },
  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background-color: rgb(243, 235, 235);

}
.section1{
font-size:px;
}
.section2{
 width: 190px;
 height: 190px;
 border-radius:50%;
 background-color: white;
 border:3px solid rgb(178, 106, 106);
 margin: auto ;
 text-align: center;
 box-sizing: border-box;
}
.section21 {
 
  font-size:40px;
  font: bold;
  margin-top:50px;
}
.section22{
  font-size:13px;
  color:rgb(188, 181, 181);

}
p{
  margin:5px;
  }
.section3{
  margin-top: 20px;


}
.section31{
  width:200px;
  height: 29px;

}


.section32{
  background-color: rgb(178, 106, 106);
  border: none;
  height: 35px;
  border-radius:0px  5px 5px 0px;
  color:white;
  padding:7px;
  
}
.section5{
  width:500px;
  margin-top: 40px;
  margin: auto;
  text-align: left;
  padding:15px;
  background: white;


}
.section52{
  margin-left: 385px;
}

.section4{
  margin-right:430px;
  margin-top:50px;
}
.section6{
  margin-top:30px;
  background-color: red;
  width:90px;
  padding:7px;
  border: none;
  border-radius: 5px;
}
</style>
