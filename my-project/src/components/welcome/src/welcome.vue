<template>

  <div id="background">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="softWareFontEnd">
      <img @click="openNewPage(1)" src="../img/111.jpg" alt="">
    </div>
    <div class="lifeRecord">
      <img @click="openNewPage(2)" src="../img/111.jpg" alt="">
    </div>
    <div class="photoShop">
      <img @click="openNewPage(3)" src="../img/111.jpg" alt="">
    </div>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      a: null,
      openNewPage(a){
      if(a === 1){
        console.log("1");
        this.$router.push('/fontend');
      } else if(a === 2){
        this.$router.push('/lifeRecord');
        console.log("2");
      } else if(a === 3){
        this.$router.push('/photoShop');
        console.log("3");

      }
    }
    }
  },
  created: {

  },
  methods: {
    
  }
}

</script>

<style>
img{
  height: 20px;
  float: left;
}
.softWareFontEnd {
  margin-left: 10px;
  width: 100%;
  height: 50px;
}
.lifeRecord{
  margin-left: 10px;
  width: 100%;
  height: 50px;
}
.photoShop{
  margin-left: 10px;
  width: 100%;
  height: 50px;
}
</style>