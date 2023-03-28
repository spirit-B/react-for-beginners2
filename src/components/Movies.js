import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movies.module.css';

function Movies({ id, coverImg, title, summary, genres }) {
	return (
		<div className={styles.movie}>
			<img src={coverImg} alt={title} className={styles.movie__img} />
			<div>
				<h2 className={styles.movie__title}>
					<Link to={`/movie/${id}`}>{title}</Link>
				</h2>
				<p>
					{summary.length > 200
						? `${summary.slice(0, 200)}...(more in link)`
						: summary}
				</p>
				<ul className={styles.movie__genres}>
					{genres.map((g) => (
						<li key={g}>{g}</li>
					))}
				</ul>
			</div>
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
