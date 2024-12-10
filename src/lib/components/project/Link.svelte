<script>
	export let href = '';
	export let text = '';
</script>

<a {href}>{text}</a>

<style>
	a {
		margin-left: var(--margin-left, -1em);
		padding: 1em;
		display: block;
		width: max-content;
	}
</style>
