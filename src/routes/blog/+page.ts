import type { PageLoad } from './$types';

type Post = {
	meta: {
		title: string;
		description: string;
		keywords?: string;
	};
	path: string;
};

export const load: PageLoad = async () => {
	const modules = import.meta.glob('../../content/*.md');

	const posts: Post[] = [];

	for (const [path, resolver] of Object.entries(modules)) {
		const module = (await resolver()) as { metadata: Post['meta'] };
		const slug = path.replace('../../content/', '').replace('.md', '');
		posts.push({
			meta: module.metadata,
			path: `/blog/${slug}`
		});
	}

	return { posts };
};

export const prerender = true;
