import { h } from 'preact';
import { Link } from 'preact-router';
import SocialShare from '../../common/SocialShare';
import NewsAuthor from '../../common/NewsAuthor';

const NewsCard = (props) => {
	const { newsData } = props;
	return (
	<div class="card">
		<Link style={{ color: '#000' }} href={`/news/${newsData.id}/${newsData.slug || ''}`} >
			<div class="card-image">
				<figure class="image is-4by3">
					<img src={newsData.media[0].href} alt="News Header Image" />
				</figure>
			</div>
			<div class="card-content">
				<div class="content">
					<h3>{newsData.title}</h3>
					<p>{newsData.summary}</p>
					<NewsAuthor
						author={newsData.author}
						createdAt={new Date(newsData.createdAt)}
					/>
				</div>
			</div>
		</Link>
		<footer class="card-footer">
		<SocialShare
			title={newsData.title}
			url={`https://www.rooter.io/news/${newsData.id}/${newsData.slug || ''}`}
		/>
		</footer>
	</div>
	);
};

export default NewsCard;
