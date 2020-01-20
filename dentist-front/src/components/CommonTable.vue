<template>
    <div>
        <Row>
            <Button type="info" size="small" :style="{float: 'right' , margin: '20px'}" @click="openModal('add')">新增</Button>
        </Row>
        <Row>
            <Table border :columns="columns" :data="dataList">
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="info" size="small" style="margin-right: 5px" @click="openModal(row,'detail')">详情</Button>
                    <Button type="primary" size="small" style="margin-right: 5px" @click="openModal(row,'update')">修改</Button>
                    <Button type="error" size="small" style="margin-right: 5px" @click="openModal(row,'remove')">删除</Button>
                </template>
            </Table>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "CommonTable",
        props: ['columns', 'dataList', 'openModal']
    //    第一行数据，数据列表，删除方法，详情方法，更新方法
    }
</script>

<style scoped>

</style>
