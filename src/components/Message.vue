<template>
	<div class="wrapper">
		<img src="../assets/user.svg" alt="profile pic" />
		<div>
			<span>{{ from }}</span>
			<div>
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const { from } = defineProps({
	from: String,
});
</script>

<style scoped lang="postcss">
div {
	@apply w-full;
}

.wrapper {
	@apply py-4 flex border-b border-white items-start gap-3;

	img {
		@apply w-12;
	}

	span {
		@apply font-bold mb-2;
	}
}
</style>
