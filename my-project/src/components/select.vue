<template>
    <div>
        <el-select v-model="value" placeholder="please seect">
            <el-option 
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                options: [{
                    value: 'option1',
                    label: 'gold cake'
                },{
                    value: 'option2',
                    label: 'milk'
                },{
                    VALUE: 'option3',
                    label: 'gala'
                }],
                value: ''
            }
        }
    }
</script>