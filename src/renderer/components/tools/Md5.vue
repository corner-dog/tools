<template>
	<div id="page-md5">
		<TopBar></TopBar>
		<Form>
			<FormItem label="原字符">
				<Input v-model="key" placeholder="请输入">
					<span v-on:click="md5()" slot="append">计算</span>
				</Input>
			</FormItem>
			<FormItem label="文件路径">
				<Input v-model="filePath">
					<a slot="prepend" v-on:click="selectFile()">选择文件</a>
			        <span slot="append" v-on:click="md5File()">计算</span>
		   		</Input>
   			</FormItem>
   			<FormItem label="结果">
   				<Input v-model="value" type="textarea" placeholder="" />
   			</FormItem>
		</Form>
		<input style="display: none" type="file" ref="file" id="file" v-on:change="setFilePath($event)">
	</div>
</template>
<script type="text/javascript">
	import TopBar from './Bar'
	import js_md5 from 'js-md5'
	var fs= require('fs');
 	var crypto = require('crypto');
	export default {
		data() {
			return {
				key: '',
				value: '',
				filePath: ''
			}
		},
		components: { TopBar },
		methods: {
			md5: function(){
				//alert(this.key)
				this.value = js_md5(this.key)
			},
			selectFile: function(){
				this.$refs.file.click()
			},
			setFilePath: function (e){
				this.filePath = e.currentTarget.files[0]['path']
			},
			md5File: function(){
				var _this = this
				fs.readFile(this.filePath, function(err, data){
					if(err) return 
					let md5Value= crypto.createHash('md5').update(data, 'utf8').digest('hex')
					_this.value = md5Value
				})
			}
		}
	}
</script>
<style type="scss">
	#page-md5{
		padding: 20px;
		font-size: 15px;
	}
</style>