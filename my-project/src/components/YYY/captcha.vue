<template>
    <div class="container">
        <input value="admin" readonly/>
        <input type="password" value="1234567890" readonly/>

        <div id="demo" style="broder: solid 1px">
            <div v-if="show" @click="getMousePos($event)" style="width: 400px; height: 200px; text-align: left" >
                <img :src="randomImg" alt="">
            </div>
            <div @click="show= !show" style="width: 310px; height: 30px; line-height: 30px; background: rgba(80,80,80,0.09); text-align: center;border: solid 1px rgba(80,80,80,0.3);border-radius: 5px;">
                <p style="font: 微软雅黑; font-size: 15px; margin-top: 0px">
                    请依次点击 "{{firstWord}}"  "{{secondWord}}"  "{{thirdWord}}" "{{forthWord}}"
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data () {
            return {
                show: false,
                x: 0,
                y: 0,
                randomImg: '../../../static/image/niu.jpg',
                firstWord : "哈",
                secondWord : "哈",
                thirdWord : "哈",
                forthWord : "哈",
                // words: [
                //     firstWord = "哈",
                //     SecondWord = "哈",
                //     ThirdWord = "哈",
                //     forthWord = "哈"
                // ]
                
            }
        },
        methods: {
            getMousePos(event) {
                var e = event || window.event;

                //加滚动距离
                // var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
                // var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                // this.x = e.pageX || e.clientX + scrollX;
                // this.y = e.pageY || e.clientY + scrollY;
                //alert('x: ' + x + '\ny: ' + y);
                // return { 'x': e.clientX, 'y': e.clientY };

                console.log('==========', e.clientX, e.clientY);
            },
            GetWord(){
                this.firstWord = "哈";
                this.SecondWord = "哈";
                this.ThirdWord = "哈";
            }
        },
        // created() {
        //     //后台获取随机汉字
        //     for(item in Words){
        //         this.Words = this.$http({
        //         url: '../../../././',
        //         method: 'get'           
        //         })
        //     }
        // }
    }
</script>

<style>
    .container {
      width: 310px;
      margin: 100px auto;
    }
    input {
      display: block;
      width: 290px;
      line-height: 40px;
      margin: 10px 0;
      padding: 0 10px;
      outline: none;
      border:1px solid #c8cccf;
      border-radius: 4px;
      color:#6a6f77;
    }
    #msg {
      width: 100%;
      line-height: 40px;
      font-size: 14px;
      text-align: center;
    }
    a:link,a:visited,a:hover,a:active {
      margin-left: 100px;
      color: #0366D6;
    }

    .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
  </style>