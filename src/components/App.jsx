import React from 'react';

import { SocialIcon } from 'react-social-icons';


const App = () =>
  <div className="h-app">
    <img src="https://i.imgur.com/zYYw0JI.jpg" alt="photo" />
    <h1>Houssam Haidar</h1>
    <p>Hi, I'm a software developer based in Toronto</p>
    <nav className="h-social">
      <SocialIcon url="https://instagram.com/thirdcoolest" title="Instagram"/>
      <SocialIcon url="https://github.com/hhaidar" title="github" />
      <SocialIcon url="https://linkedin.com/in/houssam-haidar/" title="linkedin" />
      <SocialIcon url="https://twitter.com/letstweetbro" title="twitter" />
    </nav>
  </div>

export default App;
