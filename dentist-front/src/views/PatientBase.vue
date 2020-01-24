<template>
    <Card>
        <CommonTable :pageNumChange="pageNumChange" :pageSizeChange="pageSizeChange" :count="count"
                     :columns="columns" :dataList="patientBaseList" :openModal="openModal"/>
        <Modal v-model="modalOpen" :title="modalTitle">
            <Form ref="patientBaseForm" :model="entity" :rules="patientBaseRules" :label-width="80">
                <FormItem label="姓名" prop="name">
                    <Input type="text" v-model="entity.name" :readonly="operationType === 'detail'"/>
                </FormItem>
                <FormItem label="性别" prop="sex">
                    <Input v-if="operationType === 'detail'" type="text" v-model="entity.sex"/>
                    <Select v-else v-model="entity.sex">
                        <Option value="男">男</Option>
                        <Option value="女">女</Option>
                    </Select>
                </FormItem>
                <FormItem label="年龄" prop="age">
                    <Input type="number" number v-model="entity.age" :readonly="operationType === 'detail'"/>
                </FormItem>
                <FormItem label="电话" prop="phone">
                    <Input type="text" v-model="entity.phone" :readonly="operationType === 'detail'"/>
                </FormItem>
                <FormItem label="固定电话" prop="fixedPhone">
                    <Input type="text" v-model="entity.fixedPhone" :readonly="operationType === 'detail'"/>
                </FormItem>
                <FormItem label="联系地址" prop="contactAddress">
                    <Input type="text" v-model="entity.contactAddress"
                           :readonly="operationType === 'detail'"/>
                </FormItem>
                <FormItem label="备注" prop="note">
                    <Input type="text" v-model="entity.note" :readonly="operationType === 'detail'"/>
                </FormItem>
                <FormItem label="创建时间" v-if="operationType !== 'add' && operationType !== 'update'">
                    <Input type="text" v-model="entity.createAt" :readonly="operationType === 'detail'"/>
                </FormItem>
                <FormItem v-if="operationType === 'add' || operationType === 'update' ">
                    <Button type="info" @click="handleSubmit('patientBaseForm')">提交</Button>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="primary" @click="close('patientBaseForm')">关闭</Button>
            </div>
        </Modal>
    </Card>
</template>

<script>

    import pageReq from "@/libs/pageReq";
    import CommonTable from "@/components/CommonTable";
    import patientBaseApi from '@/api/PatientBaseApi'
    import {mapActions, mapState} from "vuex";

    export default {
        name: "patientBase",
        components: {CommonTable},
        computed: {
            ...mapState({
                patientBaseList: state => state.patientBase.patientBaseList,
                count: state => state.patientBase.count
            })
        },
        data: function () {
            return {
                entity: {
                    name: '',
                    sex: '',
                    age: 0,
                    phone: '',
                    fixedPhone: '',
                    contactAddress: '',
                    note: '',
                    createAt: ''
                },
                patientBaseRules: {
                    name: [
                        {required: true, trigger: 'blur', message: '姓名不能为空'}
                    ],
                    sex: [
                        {required: true, trigger: 'blur', message: '性别不能为空'}
                    ],
                    age: [
                        {required: true, trigger: 'blur', message: '年龄不能为空', type: 'number'}
                    ],
                    phone: [
                        {required: true, trigger: 'blur', message: '手机号不能为空'}
                    ],
                    contactAddress: [
                        {required: true, trigger: 'blur', message: '联系地址不能为空'}
                    ]
                },
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
                ],
                operationType: '',
                modalOpen: false,
                modalTitle: '',
            }
        },
        created() {
            this.getPatientBaseList(pageReq);
        },
        methods: {
            ...mapActions({
                getPatientBaseList: 'getPatientBaseList',
            }),
            setModal: function (name, type) {
                this.modalTitle = name;
                this.modalOpen = true;
                this.operationType = type
            },
            openModal(row, type) {
                switch (type) {
                    case 'add': {
                        this.setModal('新增病人信息', 'add')
                    }
                        break;
                    case 'detail': {
                        this.setModal('病人基本信息', 'detail');
                        this.entity = Object.assign({}, row);
                    }
                        break;
                    case 'update': {
                        this.setModal('修改病人信息', 'update');
                        this.entity = Object.assign({}, row);
                    }
                        break;
                    case 'remove': {
                        this.$Modal.confirm({
                            title: '是否确定删除',
                            onOk: () => {
                                patientBaseApi.deletePatientBase(row.id).then(_ => {
                                    this.getPatientBaseList(pageReq);
                                    this.$Message.success("删除成功")
                                }).catch(e => {
                                    this.$Message.error("删除失败")
                                })
                            }
                        })
                    }
                }
            },
            handleSubmit() {
                this.$refs['patientBaseForm'].validate((valid) => {
                    if (valid) {
                        switch (this.operationType) {
                            case "add":
                                patientBaseApi.addPatientBase(this.entity).then(_ => {
                                    this.getPatientBaseList(pageReq);
                                    this.close();
                                    this.$Message.success("添加成功")
                                }).catch(e => {
                                    this.close();
                                    this.$Message.error("添加失败")
                                });
                                break;
                            case "update":
                                patientBaseApi.updatePatientBase(this.entity).then(_ => {
                                    this.getPatientBaseList(pageReq);
                                    this.close();
                                    this.$Message.success("修改成功")
                                }).catch(e => {
                                    this.close();
                                    this.$Message.error("修改失败")
                                });
                                break;
                        }
                    }
                })
            },
            close() {
                this.modalOpen = false;
                this.$refs['patientBaseForm'].resetFields()
            },
            pageNumChange(num) {
                pageReq.pageNum = num;
                this.getPatientBaseList(pageReq)
            },
            pageSizeChange(size) {
                pageReq.pageSize = size;
                this.getPatientBaseList(pageReq)
            }
        }
    }
</script>

<style scoped>

</style>
