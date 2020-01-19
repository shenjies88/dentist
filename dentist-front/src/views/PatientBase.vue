<template>
    <Card>
        <Row>
            搜索栏
        </Row>
        <Row>
            <CommonTable :columns="columns" :dataList="patientBaseList" :detail="detail"/>
        </Row>
        <Modal v-model="modalOpen" title="病人基本信息">

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
                getPatientBaseList: 'getPatientBaseList'
            }),
            detail(row,index) {
                this.modalOpen = true;
            }
        },
        computed: {
            ...mapState({
                patientBaseList: state => state.patientBase.patientBaseList,
                count: state => state.count
            })
        }
    }
</script>

<style scoped>

</style>
