<template>
    <Table border :columns="columns" :data="dataList">
        <template slot-scope="{ row, index }" slot="action">
            <Button type="info" size="small" style="margin-right: 5px" @click="detail(row,index)">详情</Button>
            <Button type="primary" size="small" style="margin-right: 5px" @click="update(row,index)">修改</Button>
            <Button type="error" size="small" style="margin-right: 5px" @click="remove(row,index)">删除</Button>
        </template>
    </Table>
</template>

<script>
    export default {
        name: "CommonTable",
        props: ['columns', 'dataList', 'remove', 'detail', 'update']
    }
</script>

<style scoped>

</style>
