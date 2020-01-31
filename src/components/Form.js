import React from 'react';

export default class extends React.Component {
	render() {
		return (
			<form onSubmit = {this.props.weatherMethod}>
				<input type="text" name="city" placeholder="Город" />
				<button>Получить погоду</button>
			</form>
		);
	}
}
