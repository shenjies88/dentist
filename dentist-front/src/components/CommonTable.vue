<template>
    <div>
        <Row>
            <Button type="info" size="default" :style="{float: 'right' , margin: '20px'}"
                    @click="openModal(null,'add')">新增
            </Button>
        </Row>
        <Row>
            <Table border :columns="columns" :data="dataList" :loading="loading">
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="info" size="default" style="margin-right: 5px" @click="openModal(row,'detail')">详情
                    </Button>
                    <Button type="primary" size="default" style="margin-right: 5px" @click="openModal(row,'update')">
                        修改
                    </Button>
                    <Button type="error" size="default" style="margin-right: 5px" @click="openModal(row,'remove')">删除
                    </Button>
                </template>
            </Table>
            <Page :style="{float: 'right' , margin: '15px'}" :total="count" show-elevator show-sizer
                  @on-change="pageNumChange" @on-page-size-change="pageSizeChange"/>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "CommonTable",
        props: ['columns', 'dataList', 'openModal', 'count', 'pageNumChange', 'pageSizeChange', 'loading']
        //    第一行数据，数据列表，弹出对话框方法，加载状态，分页总数，监听页码变化，监听分页大小变化
    }
</script>

<style scoped>

</style>
