<template>
    <div>
        <Row>
            <Col :xs="2" :sm="4" :md="6" :lg="8"><div style="background-color:blue;">Col</div></Col>
            <Col :xs="20" :sm="16" :md="12" :lg="8"><div style="background-color:green;">Col</div></Col>
            <Col :xs="2" :sm="4" :md="6" :lg="8"><div style="background-color:blue;">Col</div></Col>
        </Row>
        <br>
        <Row>
            <Col :xs="{span:5, offset:1}" :lg="{span:6, offset:2}"><div style="background-color:blue;">Col</div></Col>
            <Col :xs="{span:11, offset:1}" :lg="{span:6, offset:2}"><div style="background-color:green;">Col</div></Col>
            <Col :xs="{span:5, offset:1}" :lg="{span:6, offset:2}"><div style="background-color:blue;">Col</div></Col>
        </Row>
    </div>
</template>