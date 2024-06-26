import './App.css';
import Navbar from './header';
import Hero from './hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <body>
        <Hero />
        <h1>This Footer is ugly</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </body>
      <footer>
        <p>
          © 2024 [Company Name]. All rights reserved. [Company Name] | [Street
          Address] | [City, State ZIP] Phone: (555) 123-4567 | Email:
          info@companyname.com Privacy Policy | Terms of Service | Sitemap
          Connect with us: [Social Media Icons: Facebook, Twitter, Instagram,
          LinkedIn] Subscribe to our newsletter for updates and special offers.
          [Email input field] [Subscribe button] Designed with ♥ in
          [City/Country]
        </p>
      </footer>
    </div>
  );
}

export default App;
