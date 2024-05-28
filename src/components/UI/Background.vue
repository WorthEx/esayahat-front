<template>
  <div class="bg-cover bg-center h-screen " :style="{ 'background-image': `url(${BackgroundImage})` }">>
  </div>
</template>
<script>
import BackgroundImage from './src/assets/images/background-1.png'
import Header from './components/Header.vue' //подключение компонента HEADER.VUE
export default{
  name: 'Main',
  components: {
      Header //подключение компонента HEADER.VUE
  },
  data(){
    return{
        
      
    }
  },
  methods:{    
    
  }
}
</script>