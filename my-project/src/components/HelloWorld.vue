<!--
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
  data: () => ({
    show: true
  })
}
</script>


<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #20A0FF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
-->

<!--
<template>
<div>
    <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>
        <el-row>
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>

            <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>

            <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        


        <el-row :gutter="80">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
        <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
        <el-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        </div>
        

</template>
-->
<!--
<script>
export default {
    // el: "#demo",
    data: () => ({
    show: true
  })
}
</script>
-->
<!--
<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
-->
<!--
<template>
    <div>
        <div>
            <i class="el-icon-circle-check-outline"></i>
            <i class="el-icon-star-on"></i>
        </div>
        <div class="wrapper">
            <el-button class="primary">aaa</el-button>
            <el-button class="primary">bbb</el-button>

        </div>
    </div>
</template>
-->


<!--
<template>
    <div>
        <el-radio-group v-model="radio2">
            <el-radio  :label="1">备选项</el-radio>
            <el-radio  :label="3">备选项</el-radio>
            <el-radio  :label="2">备选项</el-radio>
            <el-radio  :label="4">备选项</el-radio>
        </el-radio-group>
        <br>
        <el-radio-group v-model="radio3">
            <el-radio-button label="Beijing"></el-radio-button>
            <el-radio-button label="`Beijing"></el-radio-button>
            <el-radio-button label="1Beijing"></el-radio-button>
            <el-radio-button label="2Beijing"></el-radio-button>
            <el-radio-button label="3Beijing"></el-radio-button>
        </el-radio-group>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        radio2: '1',
        radio3: 'Beijing'
      };
    }
  }
</script>
-->

<!--
<template>

    <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
</template>
    
<script>
export default {
    data () {
        return {
            checkList: ['选中且禁用','复选框 B']
        };
    }
};
</script>
-->

<!--
<template>
    <div>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>
<script>
  const cityOptions = ['上海', '北京', '广州', '深圳','山东'];
  export default {
    data() {
      return {
        checkAll: true,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(event) {
        this.checkedCities = event.target.checked ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  };    
</script>
-->

<!--
<template>
    <div>
        <el-input 
            type="textarea"
            placeholder="please input"
            :autosize="{minRows:2,maxRows:30}"
            v-model="input2"
            icon="search"
            :disabled="false"
            :on-icon-click="handle">
        </el-input>
    </div>
</template>

<script>
export default {
    data () {
        return {
            input2: ''
        }
    },
    methods: {
        handle(ev) {
            console.log('==============',ev);
        }
    }
}
</script>
-->
<!--
<template>
    <div>
        <el-input
            type="money"
            placeholder="please input"
            :symbol="symbol"
            :decimals="decimals"
            :comma="comma"
            v-model="num4">
        </el-input>
    </div>
</template>

<script>
export default {
    data () {
        return {
            symbol: '￥',
            num4: 20000000000,
            decimals: 2,
            comma: true
        }
        
    }
}
</script>
-->

<!--
<template>
    <div>
        <div>
            <el-input placeholder="请输入内容" v-model="input3">
                <template slot="prepend">Http://</template>
            </el-input>
        </div>
        <div style="margin-top: 15px;">
            <el-input placeholder="请输入内容" v-model="input4">
                <template slot="append">.com</template>
            </el-input>
        </div>
        <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="input5">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="search"></el-button>
        </el-input>
        </div>
    </div>
</template>

<style>
  .el-select .el-input {
    width:110px;
    display: inline-block;
  }
</style>

<script>
export default {
  data() {
    return {
      input3: '',
      input4: '',
      input5: '',
      select: ''
    }
  }
}
</script>
-->

<!--
<template>
    <el-row class="demo-autocomplete">
        <el-col :span="12">
            <div class="sub-title">激活即列出输入建议</div>
            <el-autocomplete
            class="inline-input"
            v-model="state1"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect"
            ></el-autocomplete>
        </el-col>
        <el-col :span="12">
            <div class="sub-title">输入后匹配输入建议</div>
            <el-autocomplete
            class="inline-input"
            v-model="state2"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            :trigger-on-focus="true"
            @select="handleSelect"
            ></el-autocomplete>
        </el-col>
    </el-row>
</template>

<script>
  export default {
    data() {
      return {
        restaurants: [],
        state1: '',
        state2: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>
-->


<!--
<template>
    <div>
        <el-input-number 
        v-model="num1" 
        @change="handleChange" 
        :min="2" 
        :max="20">
        </el-input-number>
    </div>
</template>

<script>
export default {
    data () {
        return {
            num1:'2'
        }
    },
    methodths: {
        handelChange(v){
            console.log(v);
        }
    }
};
</script>
-->

<template>
  <ifbp-default-value-input 
  placeholder= "sss"
  show-value="手工输入"
  @change='handleChange'></ifbp-default-value-input>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      handleChange(showValue,realValue) {
        console.log(showValue,realValue);
      }
    }
  };
  
</script>










