<template>
    <Card>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem prop="userName">
                <Input type="text" v-model="formInline.userName" placeholder="admin">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')">登陆</Button>
            </FormItem>
        </Form>
    </Card>
</template>

<script>
    import {mapActions, mapMutations} from "vuex";

    export default {
        name: "Login",
        data() {
            return {
                formInline: {
                    userName: '',
                    password: ''
                },
                ruleInline: {
                    userName: [
                        {required: true, message: '请输入账号', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {type: 'string', min: 6, message: '密码最少6位', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.login(this.formInline).then(_ => {
                            this.setRoutes(this.$router.options.routes)
                            this.$router.push('/')
                            this.$Message.success('登陆成功')
                        })
                    }
                })
            },
            ...mapActions({
                login: 'login'
            }),
            ...mapMutations({
                setRoutes: 'setRoutes'
            })
        }
    }
</script>

<style scoped>

</style>
