<template>
	<div style="padding:10px; margin-top:10px;">
		<TopBar></TopBar>
		<Form>
			<Row>
				<Col span="8">
					<FormItem label="秘钥长度">
						<Select v-model="length"">
					        <Option v-for="len in lens" :value="len.value" :key="len.value">{{ len.label }}</Option>
					    </Select>
					</FormItem>
				</Col>	
			</Row>
			<Button type="primary" v-on:click="createKey()">生成秘钥</Button>
		</Form>
		<Row>
			<Col span="10">
				<Input v-model="publicKey" type="textarea" :rows="15"/>
			</Col>
			<Col span = "4">
			&nbsp;
			</Col>
			<Col span="10">
				<Input v-model="privateKey" type="textarea" :rows="15"/>
			</Col>
		</Row>
	</div>
</template>
<script type="text/javascript">
	import TopBar from './Bar'
	import NodeRsa from 'node-rsa'
	export default {
		components: { TopBar },
		data() {
			return {
				lens: [
					{value:512, label: '512bit'},
					{value:1024, label: '1024bit'},
					{value:2048, label: '2048bit'}
				],
				publicKey: '',
				privateKey: '',
				length: 1024
			}
		},
		methods: {
			createKey: function(){
				let key = new NodeRsa({b: this.length})
				this.privateKey = key.exportKey('pkcs8-private-pem')
				this.publicKey = key.exportKey('pkcs8-public-pem')
			}
		}
	}
</script>