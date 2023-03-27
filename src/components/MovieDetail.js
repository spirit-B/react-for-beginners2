function MovieDetail({ coverImg, title, year, genres, description }) {
	return (
		<div>
			<img src={coverImg} alt={title} />
			<h1>{title}</h1>
			<h2>({year})</h2>
			<ul>
				<h3>[genres]</h3>
				{genres.map((g) => (
					<li key={g}>{g}</li>
				))}
			</ul>
			<p>{description}</p>
		</div>
	);
}

export default MovieDetail;
