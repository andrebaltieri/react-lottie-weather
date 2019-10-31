import React from 'react';
import Season from './services/season.service';
import ErrorCard from './Components/ErrorCard';
import SummerCard from './Components/SummerCard';
import SpringCard from './Components/SpringCard';
import WaitingCard from './Components/WaitingCard';
import FallCard from './Components/FallCard';
import WinterCard from './Components/WinterCard';

class App extends React.Component {
  state = { latitude: null, error: null, season: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        const season = Season(new Date().getMonth(), position.coords.latitude);
        this.setState({ latitude: position.coords.latitude, season: season });
      },
      err => this.setState({ error: err.message }),
    );
  }

  render() {
    if (this.state.season === 'summer') return <SummerCard></SummerCard>;
    if (this.state.season === 'spring') return <SpringCard></SpringCard>;
    if (this.state.season === 'fall') return <FallCard></FallCard>;
    if (this.state.season === 'winter') return <WinterCard></WinterCard>
    if (this.state.error) return <ErrorCard></ErrorCard>;

    return <WaitingCard></WaitingCard>;
  }
}

export default App;