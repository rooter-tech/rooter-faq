import { h } from 'preact';
// import _ from 'lodash';

const newsDateFormat = {
	day: 'numeric',
	month: 'numeric',
	year: 'numeric',
	hour: 'numeric',
	minute:'numeric',
	hour12: true
};


const NewsCard = (props) => {
	const { newsData } = props;
	return (
		<div class="card">
			<div class="card-image">
				<figure class="image is-4by3">
					<img src={newsData.media[0].href} alt="News Header Image" />
				</figure>
			</div>
		<div class="card-content">
			<div class="content">
				<h3>{newsData.title}</h3>
				<p>{newsData.summary}</p>
				<div class="content is-small">{`${newsData.author} | ${new Date(newsData.createdAt).toLocaleString('en-IN', newsDateFormat)}`}</div>
			</div>
		</div>
		{/* <footer class="card-footer">
			<a href="#" class="card-footer-item">Read more</a>
		</footer> */}
	  </div>
	);
};

export default NewsCard;
