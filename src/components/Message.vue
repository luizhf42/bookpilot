<template>
	<div class="wrapper">
		<img src="../assets/user.svg" alt="profile pic" />
		<div>
			<span>Bookpilot</span>
			<p>
				<slot />
			</p>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
.wrapper {
	@apply w-full py-4 flex border-b border-white items-start gap-3;

	img {
		@apply w-12;
	}

	span {
		@apply font-bold mb-2;
	}
}
</style>
