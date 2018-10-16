  <template>
  <div>
    <el-button @click="show = !show">Click Me</el-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
          show: true,
            input2: ''
        }
    },
    methods: {
        handle(ev) {
            console.log('==============',ev);
        },
        axiosGetRole(){
          this.$axios.post('/date',{withCredentialls: true})
          .then(function(response){
            console.log('res',response)
          })
          .catch(function(error){
            console.log(error);
          })
        }
    },
    mounted(){
      this.axiosGetRole()
    }
}
</script>