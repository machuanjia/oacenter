<template>
  <Row>
    <Col span="8" offset="8">
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
      <FormItem label="name" prop="name">
        <Input type="text" v-model="formCustom.name"></Input>
      </FormItem>


      <FormItem label="domain" prop="domain">
        <Input type="text" v-model="formCustom.domain"></Input>
      </FormItem>

      <FormItem>
        <Input type="text" value=".worktile.com"></Input>
      </FormItem>

      <FormItem label="userName" prop="userName">
        <Input type="text" v-model="formCustom.userName"></Input>
      </FormItem>

      <FormItem label="Password" prop="passwd">
        <Input type="password" v-model="formCustom.passwd"></Input>
      </FormItem>



      <FormItem>
        <Button type="primary" @click="handleSubmit('formCustom')">Submit</Button>
        <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>
      </FormItem>
    </Form>
    </Col>
  </Row>

</template>
<script>
  import axios from 'axios'
  import qs from 'qs'

  export default {
    data() {
      const validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter your name'))
        } else {
          callback()
        }
      }
      const validateDomain = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter your domain'))
        } else {
          callback()
        }
      }
      const validateUserName = (rule,value,callback)=>{
        if (value === '') {
          callback(new Error('Please enter your username'))
        } else {
          callback()
        }
      }
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter your password'))
        } else {
          callback()
        }
      }
//      const validateAge = (rule, value, callback) => {
//        if (!value) {
//          return callback(new Error('Age cannot be empty'))
//        }
//        // 模拟异步验证效果
//        setTimeout(() => {
//          if (!Number.isInteger(value)) {
//            callback(new Error('Please enter a numeric value'))
//          } else {
//            if (value < 18) {
//              callback(new Error('Must be over 18 years of age'))
//            } else {
//              callback()
//            }
//          }
//        }, 1000)
//      }

      return {
        formCustom: {
          name: '',
          domain: '',
          userName: '',
          passwd: ''
        },
        ruleCustom: {
          name: [
            {
              validator: validateName, trigger: 'blur'
            }
          ],
          domain: [{
            validator: validateDomain, trigger: 'blur'
          }],
          userName: [{
            validator: validateUserName, trigger: 'blur'
          }],
          passwd: [
            {validator: validatePass, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            axios.post('http://localhost:3000/users/login', qs.stringify(this.formCustom))
              .then((res) => {
                console.log(res)
//                this.$Message.success('Success!')
                window.location = '/'
              })
              .catch((err) => {
                if (err) {
                  console.log(err)
                }
              })

          } else {
            this.$Message.error('Fail!')
          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields()
      }
    }
  }
</script>

