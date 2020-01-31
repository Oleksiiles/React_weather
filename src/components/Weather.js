import React from 'react';

export default class extends React.Component {
	render() {
		return (
			<div>
				{this.props.city && (
					<div className='infoWeath'>
						<p>
							Месторасположение: {this.props.city}, {this.props.country}
						</p>
						<p>Температура: {Math.floor(this.props.temp) + ' C˚' }</p>
						<p>Давление: {this.props.pressure}</p>
						<p>Закат солнца: {this.props.sunset}</p>
					</div>
				)}
				<p className="error">{this.props.error}</p>
			</div>
		);
	}
}
