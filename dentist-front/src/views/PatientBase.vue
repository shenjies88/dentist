<template>
    <Card>
        <CommonTable :columns="columns" :dataList="patientBaseList" :openModal="openModal"/>
        <Modal v-model="modalOpen" :title="modalTitle">
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
                modalOpen: false,
                modalTitle: '',
                entity: {
                    id: null,
                    name: null,
                    sex: null,
                    age: null,
                    phone: null,
                    fixedPhone: null,
                    contactAddress: null,
                    note: null,
                    createAt: null
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
                        width: 200,
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
            openModal(row, type) {
                switch (type) {
                    case 'add': {

                    }
                        break;
                    case 'detail': {
                        this.modalTitle = '病人基本信息'
                        this.modalOpen = true;
                    }
                        break;
                    case 'update': {

                    }
                        break;
                    case 'remove': {
                        this.$Modal.confirm({
                            title: '是否确定删除',
                            onOk: () => {
                                this.deletePatientBase(row.id).then(_ => {
                                    this.$Message.info('删除成功');
                                }).catch(e => {
                                    console.log(e)
                                    this.$Message.error('删除失败，请检查网络')
                                })
                            }
                        })
                    }
                }
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
