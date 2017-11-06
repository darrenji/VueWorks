<template>
    <div>
        <p>左对齐</p>
        <Row type="flex" justify="start" class="code-row-bg">
            <Col span="4"><div style="background-color:green;">col-4</div></Col>
            <Col span="4"><div style="background-color:blue;">col-4</div></Col>
            <Col span="4"><div style="background-color:green;">col-4</div></Col>
            <Col span="4"><div style="background-color:blue;">col-4</div></Col>
        </Row>
        <p>右对齐</p>
        <Row type="flex" justify="end" class="code-row-bg">
            <Col span="4"><div style="background-color:green;">col-4</div></Col>
            <Col span="4"><div style="background-color:blue;">col-4</div></Col>
            <Col span="4"><div style="background-color:green;">col-4</div></Col>
            <Col span="4"><div style="background-color:blue;">col-4</div></Col>
        </Row>
        <p>等宽排列</p>
        <Row type="flex" justify="space-between" class="code-row-bg">
            <Col span="4"><div style="background-color:green;">col-4</div></Col>
            <Col span="4"><div style="background-color:blue;">col-4</div></Col>
            <Col span="4"><div style="background-color:green;">col-4</div></Col>
            <Col span="4"><div style="background-color:blue;">col-4</div></Col>
        </Row>
        <p>分散排列</p>
        <Row type="flex" justify="space-around" class="code-row-bg">
            <Col span="4"><div style="background-color:green;">col-4</div></Col>
            <Col span="4"><div style="background-color:blue;">col-4</div></Col>
            <Col span="4"><div style="background-color:green;">col-4</div></Col>
            <Col span="4"><div style="background-color:blue;">col-4</div></Col>
        </Row>
        <p>居中排列</p>
        <Row type="flex" justify="center" class="code-row-bg">
            <Col span="4"><div style="background-color:green;">col-4</div></Col>
            <Col span="4"><div style="background-color:blue;">col-4</div></Col>
            <Col span="4"><div style="background-color:green;">col-4</div></Col>
            <Col span="4"><div style="background-color:blue;">col-4</div></Col>
        </Row>
    </div>
</template>