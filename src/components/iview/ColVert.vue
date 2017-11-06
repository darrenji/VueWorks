<template>
    <div>
       <p>顶部对齐</p>
       <Row type="flex" justify="center" align="top">
            <Col span="4"><p style="height:80px;background-color:blue;">col-4</p></Col>
            <Col span="4"><p style="height:30px;background-color:blue;">col-4</p></Col>
            <Col span="4"><p style="height:100px;background-color:blue;">col-4</p></Col>
            <Col span="4"><p style="height:60px;background-color:red;">col-4</p></Col>
       </Row>
       <p>底部对齐</p>
       <Row type="flex" justify="center" align="bottom">
            <Col span="4"><p style="height:80px;background-color:blue;">col-4</p></Col>
            <Col span="4"><p style="height:30px;background-color:blue;">col-4</p></Col>
            <Col span="4"><p style="height:100px;background-color:blue;">col-4</p></Col>
            <Col span="4"><p style="height:60px;background-color:red;">col-4</p></Col>
       </Row>
       <p>居中对齐</p>
       <Row type="flex" justify="center" align="middle">
            <Col span="4"><p style="height:80px;background-color:blue;">col-4</p></Col>
            <Col span="4"><p style="height:30px;background-color:blue;">col-4</p></Col>
            <Col span="4"><p style="height:100px;background-color:blue;">col-4</p></Col>
            <Col span="4"><p style="height:60px;background-color:red;">col-4</p></Col>
       </Row>
    </div>
</template>