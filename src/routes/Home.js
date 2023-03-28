import { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import styles from './Home.module.css';

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMoives = async () => {
		const json = await (
			await fetch(
				'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year',
			)
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	};
	useEffect(() => {
		getMoives();
	}, []);
	return (
		<div className={styles.container}>
			{loading ? (
				<div className={styles.loader}>
					<span>Loading...</span>
				</div>
			) : (
				<div className={styles.movies}>
					{movies.map((movie) => (
						<Movies
							key={movie.id}
							id={movie.id}
							coverImg={movie.medium_cover_image}
							title={movie.title}
							summary={movie.summary}
							genres={movie.genres}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Home;
