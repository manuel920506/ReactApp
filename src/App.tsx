import React, { useEffect, useState } from 'react'; 
import './App.css';
import { landingPageDTO } from './films/films.model'; 
import spider_man_path from './photos/Spider_Man_Far_from_Home.jpg';
import moana_path from './photos/moana.jpg';
import avatar_path from './photos/avatar.jpg';
import soul_path from './photos/soul.jpg'; 
import ListFilms from './films/listFilms'; 
import Menu from './utils/Menu';
import { Route, Switch } from 'react-router';
import GenreIndices from './genres/genreIndices';
import { BrowserRouter } from 'react-router-dom';
 
function App() {

  const [films, setFilms] = useState<landingPageDTO>({})

  useEffect(() => {
    const timerId = setTimeout(() => {
      setFilms({onTheBillboard: [
        {
          id: 1,
          title: 'Spider-Man: Far from Home',
          poster: spider_man_path
        },
        {
          id: 2,
          title: 'Moana',
          poster: moana_path
        },
        {
          id: 3,
          title: 'Avatar',
          poster: avatar_path
        }
      ], upcomingFilmReleases: [
        {
          id: 4,
          title: 'Soul',
          poster: soul_path
        }
      ]})
    }, 500);

    return () => clearTimeout(timerId);
  })
 
  return (
    <> 
    <BrowserRouter>
      <Menu/>
  
      <div className='container'> 
        <Switch>
          <Route exact path="/">
            <h3>Films On The Billboard</h3>
            <ListFilms films={films.onTheBillboard} />

            <h3>Upcoming film releases</h3>
            <ListFilms films={films.upcomingFilmReleases} />
          </Route>
          <Route path="/genres">
            <GenreIndices />
          </Route>
        </Switch>
      </div>
    </BrowserRouter> 
    </>
  );
}

export default App;
