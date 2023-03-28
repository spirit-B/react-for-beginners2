import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movies({ id, coverImg, title, summary, genres }) {
	return (
		<div>
			<img src={coverImg} alt={title} />
			<h2>
				<Link to={`/movie/${id}`}>{title}</Link>
			</h2>
			<p>
				{summary.length > 200
					? `${summary.slice(0, 200)}...(more in link)`
					: summary}
			</p>
			<ul>
				{genres.map((g) => (
					<li key={g}>{g}</li>
				))}
			</ul>
			<hr />
		</div>
	);
}

Movies.propTypes = {
	id: Proptypes.number.isRequired,
	coverImg: Proptypes.string.isRequired,
	title: Proptypes.string.isRequired,
	summary: Proptypes.string.isRequired,
	genres: Proptypes.arrayOf(Proptypes.string).isRequired,
};

export default Movies;
