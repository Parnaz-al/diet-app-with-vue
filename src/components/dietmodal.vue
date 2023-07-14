<template>
    <div class="modal-overlay">
      <div class="modal">
       
        <p>Dear {{person.username}} you are {{situation}} </p>
        <button @click=" this.$router.push({path: '/'});">Go Home</button>
        <button v-if="showbtn2"  @click=" this.$router.push({path: '/exercise'});">Get Exersise</button>
      </div>
      <div class="close" @click="$emit('close-modal')">
        <img class="close-img" src="../assets/icons8-close.svg"  />
       
      </div>
    </div>
  </template>
  
  <script>
    export default {
        data(){
            return{
                bmi:0,
                situation:'',
                showbtn2:false


            }
        },
        props:['person'],
        mounted() {
            this.bmi=this.person.weight/(this.person.heigh)
            if (this.bmi<18){
                this.situation='under weigth. eat more food.'
                
            }
            if(this.bmi>18 &&this.bmi<25){
                this.situation='normal. keep going.'
                
            }
            if (this.bmi>25){
                this.situation='over weight.eat less food',
                this.showbtn2=true
            }


    
        }
  }
 
  </script>
  <style scoped>

  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
  }
  
  .modal {
    text-align: center;
    background-color: white;
    height: 200px;
    width: 400px;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
  }
  .close {
    margin:10% 0 0 8px;
    cursor: pointer;
    background-color: beige;
    height: 35px;
  }
  .check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
  margin-left: 10px;
  border:none;
}
</style>