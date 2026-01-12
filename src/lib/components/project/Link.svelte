<script>
	export let href = '';
	export let text = '';
	export let target = undefined;

	const rel = target === '_blank' ? 'noopener' : undefined;
</script>

<a {href} {target} {rel}>{text}</a>

<style>
	a {
		margin-left: var(--margin-left, -1em);
		padding: 1em;
		display: block;
		width: max-content;
	}
</style>
