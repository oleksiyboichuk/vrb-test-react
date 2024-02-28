import { FC } from 'react';

interface NewsItemProps {
	id: number
	author: string
	description: string
	title: string
	urlToImage: string
}

export const NewsItem: FC<NewsItemProps> = ({ author, description, title, urlToImage }) => {
	return (
		<section className='bg-neutral-300 drop-shadow-xl m-5 px-5 py-2 max-w-[500px] min-h-[300px] rounded-md'>
			<h1 className='text-red-700 text-md font-bold my-2'>{author}</h1>
			<img src={urlToImage} alt={author} className='w-52 h-32 object-cover rounded-md' />
			<p className='my-2 text-neutral-900 underline'>{title}</p>
			{/* <p>{description}</p> */}
		</section>
	)
}