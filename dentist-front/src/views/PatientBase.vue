<template>
    <Card>
        <Row>
            搜索栏
        </Row>
        <Row>
            <Table border :columns="columns" :data="patientBaseList">
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
                    <Button type="error" size="small" @click="remove(index)">Delete</Button>
                </template>
            </Table>
        </Row>
    </Card>
</template>

<script>

    import {mapActions, mapState} from "vuex";
    import pageReq from "@/libs/pageReq";

    export default {
        name: "patientBase",
        data: function () {
            return {
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
                        width: 150,
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
            })
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
