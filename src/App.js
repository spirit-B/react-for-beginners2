import { useEffect, useState } from 'react';

function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	const [haveDollor, setHaveDollor] = useState(0);
	const [selectedCoin, setSelectedCoin] = useState(null);

	const handleHaveDollor = (e) =>
		setHaveDollor((prev) => (prev = e.target.value));
	const handleSelectedCoin = (e) => {
		setSelectedCoin(Number(e.target.value.split('$')[1].replace(' USD', '')));
	};

	useEffect(() => {
		fetch('https://api.coinpaprika.com/v1/tickers')
			.then((response) => response.json())
			.then((json) => {
				setCoins(json);
				setLoading(false);
			});
	}, []);
	return (
		<div>
			<h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
			{loading ? (
				<strong>Loading...</strong>
			) : (
				<select onChange={handleSelectedCoin}>
					{coins.map((coin) => {
						return (
							<option key={coin.id}>
								{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
							</option>
						);
					})}
				</select>
			)}
			<div>
				<h3>How many coins can I buy with this money?</h3>
				<input
					placeholder="input dollors..."
					type="number"
					onChange={handleHaveDollor}
				/>
			</div>
			<div>
				We can buy ...{' '}
				{haveDollor && selectedCoin ? haveDollor / selectedCoin : 0} Coins!
			</div>
		</div>
	);
}

export default App;
