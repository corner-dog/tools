<template>
	<div id="page-socket" style="padding: 10px;">
		<TopBar></TopBar>
		<Form>
			<Row>
				<Col span="18">
					<FormItem label="ip">
						<Input v-model="ip" placeholder=""></Input>
					</FormItem>
				</Col>
				<Col span="6">
					<FormItem label="port">
						<Input v-model="port" placeholder=""></Input>
					</FormItem>
				</Col>
			</Row>
			<FormItem label="发送信息">
				<Input v-model="str" type="textarea" placeholder="请输入"></Input>
			</FormItem>
			<Button type="primary" v-on:click="send()">发送</Button>
			<FormItem label="16进制编码">
				<Input v-model="hexStr" type="textarea" placeholder=""></Input>
			</FormItem>
			<FormItem label="结果">
				<Input v-model="result" type="textarea" :row="5" placeholder=""></Input>
			</FormItem>
		</Form>
	</div>
</template>
<script type="text/javascript">
	import TopBar from './Bar'
	import Net from 'net'
	export default {
		components: { TopBar },
		data () {
			return {
				str: '123',
				hexStr: '',
				result: '',
				port: 8003,
				ip: '127.0.0.1'
			}
		},
		methods: {
			send: function(){
				this.hexStr = this.stringToHex(this.str)
				let client = new Net.Socket();
				var _this = this
				let len = this.str.length
				console.log('len = ' + len)
				let arr = []
				arr[0] = (len >>> 24 & 0xFF)
				arr[1] = (len >>> 16 & 0xFF)
				arr[2] = (len >>> 8 & 0xFF)
				arr[3] = (len >>> 0 & 0xFF)
				client.connect(this.port,this.ip,function(){
					client.write(_this.byte2string(arr))
				    client.write(_this.str)
				})
				client.on('data',function(data){
				    console.log(data);
				    _this.result = _this.byte2string(data)
				    client.destroy()
				})
			},
			stringToHex: function(str){
				let val=""
				for(let i = 0; i < str.length; i++){
					if(val == "")
						val = str.charCodeAt(i).toString(16)
					else
						val += " " + str.charCodeAt(i).toString(16)
				}
				return val
			},
			byte2string: function (arr) {
				if(typeof arr === 'string') {
					return arr
				}
				var str = ''
				var _arr = arr;
				for(var i = 0; i < _arr.length; i++) {
					var one = _arr[i].toString(2),
					v = one.match(/^1+?(?=0)/);
					if(v && one.length == 8) {
						var bytesLength = v[0].length;
						var store = _arr[i].toString(2).slice(7 - bytesLength);
						for(var st = 1; st < bytesLength; st++) {
							store += _arr[st + i].toString(2).slice(2);
						}
						str += String.fromCharCode(parseInt(store, 2));
						i += bytesLength - 1;
					} else {
						str += String.fromCharCode(_arr[i]);
					}
				}
				return str;
			}
		}
	}
</script>
