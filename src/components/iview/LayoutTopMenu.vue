<template>
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <MenuItem name="1"><Icon type="ios-navigate">菜单一</Icon></MenuItem>
                <MenuItem name="2"><Icon type="ios-keypad">菜单二</Icon></MenuItem>
                <MenuItem name="3"><Icon type="ios-analytics">菜单三</Icon></MenuItem>
                <MenuItem name="4"><Icon type="ios-paper">菜单四</Icon></MenuItem>              
            </div>
        </Menu>
        <Menu mode="horizontal" active-name="1">
            <div class="layout-assistant">
                <MenuItem name="1">菜单一</MenuItem>
                <MenuItem name="2">菜单二</MenuItem>
                <MenuItem name="3">菜单三</MenuItem>
            </div>
        </Menu>
        <div class="layout-breadcrumb">
            <Breadcrumb>
                <BreadcrumbItem href="#">主页</BreadcrumbItem>
                <BreadcrumbItem href="#">项目</BreadcrumbItem>
                <BreadcrumbItem>IView</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="layout-content">
            <div class="layout-content-main">
                这里是正文
            </div>
        </div>
        <div class="layout-copy">
            2010-2018 &copy; HiDarren
        </div>
    </div>
</template>


<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    
    .layout-logo {
        width:100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    
    .layout-nav {
        width: 420px;
        margin: 0 auto;
    }
    
    .layout-breadcrumb {
        padding: 10px 15px 0;
    }
    
    .layout-content {
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    
    .layout-content-main {
        padding: 10px;
    }
    
    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        column-gap: #9ea7b4;
    }
    
    .layout-assistant {
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
</style>