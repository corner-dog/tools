<template>
	<div style="padding: 20px; height: 100%">
		<TopBar></TopBar>
		<Form>
			<Row>
				<Col span="10">
					<FormItem label="原字符">
						<Input v-model="xmlStr" type="textarea" :rows="20"/>
					</FormItem>
				</Col>
				<Col span="4" style="text-align: center; margin-top:20px;" >
					<Button v-on:click="format()" type="primary">格式化</Button>
				</Col>
				<Col span="10" >
					<FormItem label="结果">
						<Input v-model="result" type="textarea" wrap="off" :rows="20"/>
					</FormItem>
				</Col>
			</Row>
		</Form>
	</div>
</template>
<script type="text/javascript">
	import TopBar from './Bar'
	import vkbeautify from 'vkbeautify'
	export default{
		data() {
			return {
				xmlStr: '',
				result: ''
			}
		},
		components: { TopBar },
		methods: {
			format: function(){
				this.result = ''
				this.result = vkbeautify.xml(this.xmlStr)
			}
		}
	}
</script>