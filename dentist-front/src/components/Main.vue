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

    .menu-icon {
        transition: all .3s;
    }

    .rotate-icon {
        transform: rotate(-90deg);
    }

    .menu-item span {
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }

    .menu-item i {
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }

    .collapsed-menu span {
        width: 0px;
        transition: width .2s ease;
    }

    .collapsed-menu i {
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
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
            <Sider ref="side1":style="{height: '100vh'}">
                <div v-if="!isCollapsed" class="logo-con">
                    <span>轻松牙医</span>
                </div>
                <Menu :active-name="$route.matched[0].name" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem v-for="(item, index) in $route.matched" :name="item.name" :key="index">
                        {{item.meta.title}}
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar"/>
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
        data() {
            return {
                isCollapsed: false
            }
        },
        computed: {
            rotateIcon() {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses() {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider() {
                this.$refs.side1.toggleCollapse();
            }
        }
    }
</script>
