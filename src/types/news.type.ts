export interface IAllNews {
	source: ISource;
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
}

interface ISource {
	id: number;
	name: string;
}

export interface INews {
	id: number;
	urlToImage: string;
	author: string;
	description: string;
	title: string;
}