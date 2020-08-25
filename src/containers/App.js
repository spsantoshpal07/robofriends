import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots } from './robots';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots : [],
            searchfield : ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots : users}))
    }

    onSearchBoxValueChange = (event) => {
            this.setState({
                searchfield : event.target.value
            })
    };

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        if(this.state.robots.length === 0) {
            return (<h1 className='tc'>Loading...</h1>)
        } else {
            return (
                <div className='tc'>
                    <header>Robofriends</header>
                    <SearchBox searchChange={this.onSearchBoxValueChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                    <footer>
                        Made with <span role='img' aria-label='Love'>❤️</span> from India.
                    </footer>
                </div>
            )
        }
    }
}





export default App;