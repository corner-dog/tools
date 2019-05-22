<template>
	<div>
		<TopBar></TopBar>
		<Form style="padding: 10px;">
			<Row>
				<Col span="6">
					<FormItem label="ip:">
						<Input v-model="ip">
						</Input>
					</FormItem>
				</Col>
				<Col span="6">
					<FormItem label="port:">
						<Input v-model="port">
						</Input>
					</FormItem>
				</Col>
				<Col span="6">
					<FormItem label="user:">
						<Input v-model="user">
						</Input>
					</FormItem>
				</Col>
				<Col span="6">
					<FormItem label="password:">
						<Input v-model="password">
						</Input>
					</FormItem>
				</Col>
			</Row>
		</Form>
		<div style="text-align: center">
			<Button type="primary">连接</Button>
		</div>
		
	</div>
</template>
<script type="text/javascript">
	import TopBar from './Bar'
	export default {
		components: { TopBar }
	}
</script>
