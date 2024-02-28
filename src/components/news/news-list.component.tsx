import { useState } from 'react';
import { useGetNewsQuery } from '../../api/news.api';
import { NewsItem } from './news-item.component';
import { FormCrud } from '../form/form-crud.component';
import { Button } from '../button/button.component';

export const NewsList = () => {

	//states
	const [loadedNewsCount, setLoadedNewsCount] = useState<number>(10);
	const [formActive, setFormActive] = useState<boolean>(false);

	const { data, isLoading, error, refetch } = useGetNewsQuery(loadedNewsCount);

	const loadMoreNews = () => {
		setLoadedNewsCount((prevCount) => prevCount + 10);
		refetch();
	};

	return (
		<div>
			<div className='flex justify-end my-5 px-[2%]'>
				<Button
					text='Create new post'
					onClick={() => setFormActive(!formActive)} />
			</div>
			{formActive &&
				<FormCrud active={formActive} setActive={setFormActive} />
			}

			{isLoading ? (
				<h2 className="text-center pt-20 text-2xl">Loading...</h2>
			) : (
				<div className="m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center items-center">
					{data &&
						data.articles.map((item, index) => (
							<NewsItem
								key={index}
								id={index}
								author={item.author}
								description={item.description}
								title={item.title}
								urlToImage={item.urlToImage}
							/>
						))}
				</div>
			)}

			{data &&
				<div className='flex justify-center mb-10'>
					<Button text='Load More' onClick={loadMoreNews} />
				</div>
			}
		</div>
	);
};
