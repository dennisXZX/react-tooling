import React from 'react'
import { hot } from 'react-hot-loader'

const Warning = React.lazy(() => import('./Warning'))

class App extends React.Component {
	state = {
		count: 0
	}

	increment = () => {
		this.setState(previousState => ({ count: previousState.count + 1 }))
	}

	decrement = () => {
		this.setState(previousState => ({ count: previousState.count - 1 }))
	}

	renderWarning = () => {
		const { count } = this.state

		return count >= 3 
			?	<React.Suspense fallback={null}>
					<Warning />
				</React.Suspense> 
			: null
	}

	render() {
		const { count } = this.state

		return (
			<div>
				<h1>Hello World!!</h1>

				<h2 className={count >= 3 ? 'warning' : null}>
					Count: {this.state.count}
				</h2>

				<button onClick={this.increment}>+</button>
				<button onClick={this.decrement}>-</button>

				{this.renderWarning()}
			</div>
		)
	}
}

export default hot(module)(App)