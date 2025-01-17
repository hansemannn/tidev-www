import fs from 'fs';
import globby from 'globby';
import matter from 'gray-matter';
import md from 'markdown-it';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';

export interface PageMeta {
	author?: string,
	category?: string,
	date?: string,
	slug?: string,
	teaser?: string,
	title?: string
}

export interface Page {
	content?: string,
	data?: {}
}

export interface IParams extends ParsedUrlQuery {
    slug: string
}

export async function findContent(type: string): Promise<PageMeta[]> {
	const files = await globby(`./${type}/**/*.md`);
	return files.map((file: string): PageMeta => {
		const { name: slug } = path.parse(file);
		const { data } = matter(fs.readFileSync(file, 'utf-8'));
		return { slug, ...data };
	});
}

export async function loadContent(type: string, slug: string): Promise<Page | undefined> {
	if (!type || !slug) {
		return;
	}

	const files = await globby(`./${type}/**/*.md`);

	for (const file of files) {
        const { name } = path.parse(file);
        if (name === slug) {
            const { content, data } = matter(fs.readFileSync(file, 'utf-8'));

			const html = md({
				html: true,
				linkify: true,
			}).render(content);

			return {
				content: html,
				data
			};
        }
    }
}
