<style scoped lang="less">
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-header-bar {
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }

    .layout-logo-left {
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }

    .layout-content {
        overflow: auto;

        &-breadcrumb {
            padding: 10px;
        }
    }

    .logo-con {
        display: flex;
        color: #fff;
        padding: 10px 40px 10px 20px;
        align-content: center;
        justify-content: space-between;
        background-color: #6495ED;

        img {
            width: 42px;
            height: 42px;
        }

        span {
            font-size: 20px;
            line-height: 40px;
            font-family: "PingFangSC-Regular", sans-serif;
        }
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Sider :style="{height: '100vh'}">
                <div class="logo-con">
                    <span>脚手架</span>
                </div>
                <Menu :active-name="this.sideMenuListData[0].name" theme="dark" width="auto">
                    <MenuItem v-for="(item, index) in this.sideMenuListData" :name="item.name" :key="index"
                              :to="item.path">
                        {{item.meta.title}}
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Menu :active-name="this.topMenuListData[0].name" mode="horizontal" theme="light"
                          @on-select="headerTopMenuSelect">
                        <MenuItem v-for="(item,index) in this.topMenuListData" :name="item.name" :key="index"
                                  :to="item.path">
                            {{item.meta.title}}
                        </MenuItem>
                    </Menu>
                </Header>
                <Content :style="{margin: '20px', minHeight: '260px'}">
                    <Breadcrumb class="layout-content-breadcrumb">
                        <BreadcrumbItem
                                :to="item.path"
                                v-for="(item, index) in $route.matched"
                                :key="index"
                        >{{item.meta.title}}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <router-view/>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>

    export default {
        methods: {
            headerTopMenuSelect: function (name) {
                this.sideMenuListData = this.topMenuListData.find(e => e.name === name).children;
            },
        },
        created() {
            console.log(this)
        },
        comments: {
            topMenuListData: [],
            sideMenuListData: [],
        }

    }
</script>
