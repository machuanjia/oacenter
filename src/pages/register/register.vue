<template>
  <!--<div>-->
  <!--<Button type="primary" @click="postFn()">Primary</Button>-->
  <!--</div>-->


  <Row>
    <Col span="8" offset="8">
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
      <FormItem label="国家" prop="country">
        <Select v-model="formCustom.country">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </FormItem>
      <FormItem label="手机" prop="phone">
        <Input type="input" v-model="formCustom.phone"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSms()">发送验证码</Button>
      </FormItem>
      <FormItem label="验证码" prop="phoneCheck">
        <Input type="input" v-model="formCustom.phoneCheck"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formCustom')">下一步</Button>
        <!--<Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>-->
      </FormItem>
      <a href="/login.html">直接登陆</a>
    </Form>
    </Col>
  </Row>
</template>

<script>
  export default {
    data() {
      const validatePhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter your phone'))
        } else {
          callback()
        }
      }
      const validatePhoneCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter your password again'))
        } else {
          callback()
        }
      }

      return {
        formCustom: {
          country: '86',
          phone: '',
          phoneCheck: ''
        },
        ruleCustom: {
          phone: [
            {validator: validatePhone, trigger: 'blur'}
          ],
          phoneCheck: [
            {validator: validatePhoneCheck, trigger: 'blur'}
          ]
        },
        cityList: [
          {
            value: '86',
            label: '中国+86'
          }, {
            value: '886',
            label: '台湾+886'
          }, {
            value: '1',
            label: 'US+1'
          }, {
            value: '81',
            label: '日本+81'
          }
        ]
      }
    },
    methods: {
      handleSms(){
        this.$refs.formCustom.validateField('phone',(err)=>{
          if(!err){
            this.$$api.register.sendSms({phone:this.formCustom.phone}).then((res)=>{
              console.log(res)
            }).catch((err)=>{
              if (err) {
                console.log(err)
              }
            });
          }
        })
      },
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$$api.register.vailedSms({phone:this.formCustom.phone,token:'123456'}).then((res)=>{
              console.log(res)
              window.location = 'setup.html'
            }).catch((err)=>{
              if (err) {
                console.log(err)
              }
            });
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

<style lang="scss">
  // Import Main styles for this application
  @import "../../../scss/style"
</style>
