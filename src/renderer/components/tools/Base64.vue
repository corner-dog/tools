<template>
	<div>
		<TopBar></TopBar>
		<Form style="padding: 10px">
			<FormItem label="原字符">
				<Input v-model="str" type="textarea" :row="3"/>
			</FormItem>
			<Button v-on:click="encode()" type="primary">编码</Button>
			<Button v-on:click="decode()" type="primary">解码</Button>
			<FormItem label="结果">
				<Input v-model="result" type="textarea" :rows="10"/>
			</FormItem>
		</Form>
	</div>
</template>
<script type="text/javascript">
	import TopBar from './Bar'
	import Base64 from 'js-base64'
	export default {
		data () {
			return {
				str: '',
				result: ''
			}
		},
		components: { TopBar },
		methods: {
			encode: function (){
				this.result = Base64.Base64.encode(this.str)
			},
			decode: function (){
				this.result = Base64.Base64.decode(this.str)
			}
		}
	}
</script>