<template>
    <Card>
        <CommonTable :columns="columns" :dataList="patientBaseList" :openModal="openModal"/>
        <Modal v-model="modalOpen" :title="modalTitle" @on-ok="handleSubmit('patientBaseForm')"
               @on-cancel="handleCancel">
            <Form ref="patientBaseForm" :model="entity" :rules="patientBaseRules" :label-width="80">
                <FormItem label="姓名">
                    <Input type="text" v-model="entity.name"/>
                </FormItem>
                <FormItem label="性别" v-if="this.operationType === 'detail'">
                    <Input type="text" v-model="entity.sex"/>
                </FormItem>
                <FormItem v-else label="性别">
                    <Select v-model="entity.sex">
                        <Option value="男">男</Option>
                        <Option value="女">女</Option>
                    </Select>
                </FormItem>
                <FormItem label="年龄">
                    <Input type="number" v-model="entity.age"/>
                </FormItem>
                <FormItem>
                </FormItem>
            </Form>
        </Modal>
    </Card>
</template>

<script>

    import {mapActions, mapState} from "vuex";
    import pageReq from "@/libs/pageReq";
    import CommonTable from "../components/CommonTable";

    export default {
        name: "patientBase",
        components: {CommonTable},
        data: function () {
            return {
                operationType: '',
                modalOpen: false,
                modalTitle: '',
                entity: {
                    name: null,
                    sex: null,
                    age: 0,
                    phone: null,
                    fixedPhone: null,
                    contactAddress: null,
                    note: null,
                    createAt: null
                },
                patientBaseRules: {},
                columns: [
                    {
                        type: 'index',
                        title: '序号',
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '性别',
                        key: 'sex'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '电话',
                        key: 'phone'
                    },
                    {
                        title: '固定电话',
                        key: 'fixedPhone'
                    },
                    {
                        title: '联系地址',
                        key: 'contactAddress'
                    },
                    {
                        title: '创建时间',
                        key: 'createAt'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 250,
                        align: 'center'
                    }
                ]
            }
        },
        mounted() {
            this.getPatientBaseList(pageReq);
        },
        methods: {
            ...mapActions({
                getPatientBaseList: 'getPatientBaseList',
                deletePatientBase: 'deletePatientBase'
            }),
            setModal: function (name, type) {
                this.modalTitle = name,
                    this.modalOpen = true;
                this.operationType = type
            },
            openModal(row, type) {
                switch (type) {
                    case 'add': {
                        this.setModal('新增病人信息', 'add')
                        this.entity = {}
                    }
                        break;
                    case 'detail': {
                        this.setModal('病人基本信息', 'detail')
                        this.entity = Object.assign({}, row)
                    }
                        break;
                    case 'update': {
                        this.setModal('修改病人信息', 'update');
                    }
                        break;
                    case 'remove': {
                        this.$Modal.confirm({
                            title: '是否确定删除',
                            onOk: () => {
                                this.deletePatientBase(row.id).then(_ => {
                                    this.$Message.info('删除成功');
                                    this.getPatientBaseList(pageReq)
                                }).catch(e => {
                                    console.log(e)
                                    this.$Message.error('删除失败，请检查网络')
                                })
                            }
                        })
                    }
                }
            },
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        switch (this.operationType) {
                            case "add":
                                break;
                            case "update":
                                break
                        }
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleCancel() {
                this.modalOpen = false;
            }
        },
        computed: {
            ...mapState({
                patientBaseList: state => state.patientBase.patientBaseList,
                count: state => state.patientBase.count
            })
        }
    }
</script>

<style scoped>

</style>
