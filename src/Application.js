import { Routes, Route } from 'react-router-dom';

import { Navigation, NavigationLink } from './Navigation';
import { Page } from './Page';

function Application() {
  return (
    <main className="h-screen">
      <h1 className="text-3xl font-bold bg-yellow-300 p-4 border-b-2 border-yellow-400">
        Incredibly Important Thoughts
      </h1>
      <div className="grid grid-cols-12 grid-rows-1 gap-4 h-full">
        <Navigation>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/notes/hipster">Hipster Ipsum</NavigationLink>
          <NavigationLink to="/notes/zombie">Zombie Ipsum</NavigationLink>
          <NavigationLink to="/notes/cupcake">Cupcake Ipsum</NavigationLink>
          <NavigationLink to="/notes/cheese">Cheese Ipsum</NavigationLink>
          <NavigationLink to="/notes/cat">Cat Ipsum</NavigationLink>
          <NavigationLink to="/notes/office">Office Ipsum</NavigationLink>
          <NavigationLink to="/notes/beatles">The Beatles</NavigationLink>
        </Navigation>
        <section className="col-span-9 p-4">
          <Routes>
            <Route
              path="/notes/beatles"
              element={
                <div>
                  <img
                    src="/beatles.jpg"
                    alt="Possibly the Beatles, possibly"
                  />
                </div>
              }
            />
            <Route path="/notes/:id" element={<Page />} />
            <Route path="/" element={<p>Select a note.</p>} />
          </Routes>
        </section>
      </div>
    </main>
  );
}

export default Application;
