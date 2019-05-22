<template>
	<div>
		<Row style="border-bottom: 1px solid">
			<Col span="8" >
				<router-link to="/"><Icon type="ios-home" size="30" /></router-link>
			</Col>
			<Col span="8" >
				<div style="text-align: center; font-size: 20px; line-height: 30px;">{{title}}</div>
			</Col>
		</Row>
	</div>
</template>
<script type="text/javascript">
	export default{
		data() {
			return {
				title: this.$route.query.name
			}		
		}
	}
</script>