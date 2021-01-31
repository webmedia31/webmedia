<template>
    <section>
        <h1 class="title">
          {{ message }}
        </h1>

        <p v-if="statusCode === 404">
          <nuxt-link to="/">На главную</nuxt-link>
        </p>
    </section>
</template>

<script>
export default {
	props: {
		error: {
			type: Object,
			default: null
		}
	},
	head() {
		return {
			title: this.message
		}
	},
	computed: {
		statusCode() {
			return (this.error && this.error.statusCode) || 500
		},
		message() {
			return this.error.message
		}
	}
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>
