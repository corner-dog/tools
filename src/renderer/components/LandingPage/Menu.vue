<template>
    <div class="menu-row">
    <Row>
        <Col span="8" v-for="menu in menus">
            <div style="background:#eee;padding: 20px">
                <router-link :to="menu.route">
                    <Card :bordered="false">
                        <p slot="title">{{menu.name}}</p>
                    </Card>
                </router-link>
            </div>
        </Col>
    </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                menus: [{name:'FTP客户端',route: {path: '/ftp', query: {name: 'FTP客户端'}}},
                        {name:'Md5',route: {path: '/md5', query: {name: 'Md5'}}},
                        {name:'XML格式化',route: {path: '/xml', query: {name: 'XML格式化'}}},
                        {name:'Base64',route: {path: '/base64', query: {name: 'Base64'}}},
                        {name:'Socket客户端',route: {path: '/socket', query: {name: 'Socket客户端'}}},
                        {name:'RSA',route: {path: '/rsa', query: {name: 'RSA'}}},
                        {name:'Xterm',route: {path: '/xterm', query: {name: 'Xterm'}}},
                    ]
            }
        },
        methods: {

        }
    }
</script>
<style lang="scss">

</style>