import React from 'react';
import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';

import './App.css';

const API_KEY = '5f4551b2c4cd3db76fccf70a145e011d';

class App extends React.Component {
	state = {
		temp: undefined,
		city: undefined,
		country: undefined,
		pressure: undefined,
		sunset: undefined,
		error: undefined,
	};

	gettingWeather = async event => {
		event.preventDefault();
		const city = event.target.elements.city.value;
		if (city) {
			const api_url = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
			);
			const data = await api_url.json();
			if(data.cod === '404'){
                return this.setState({
                    temp: undefined,
                    city: undefined,
                    country: undefined,
                    sunrise: undefined,
                    sunset: undefined,
                    error:"Такого города нет"
                });
            }

			const time = ms => {
				let date = new Date(ms * 1000);
				let hours = date.getHours();
				// Minutes part from the timestamp
				let minutes = '0' + date.getMinutes();
				// Seconds part from the timestamp
				let seconds = '0' + date.getSeconds();
				return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
			};

			// let sunset = data.sys.sunset
			// let date = new Date()
			// date.setTime(sunset)
			// let sunsetdate = date.getHours() + ': ' + date.getMinutes() + ":"

			this.setState({
				temp: data.main.temp,
				city: data.name,
				country: data.sys.country,
				pressure: data.main.pressure,
				sunset: time(data.sys.sunset),
				error: undefined,
			});
		} else {
			this.setState({
				temp: undefined,
				city: undefined,
				country: undefined,
				pressure: undefined,
				sunset: undefined,
				error: 'Введите название города',
			});
		}
	};

	render() {
		return (
			<div className="wrapper">
				<div className="main">
					<div className="container">
						<div className="row">
							<div className="col-sm-5 info">
								<Info />
							</div>
							<div className="col-sm-7 form">
								<Form weatherMethod={this.gettingWeather} />
								<Weather {...this.state} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
