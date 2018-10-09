import React from "react";

import { SocialIcon } from "react-social-icons";

const App = () => (
  <div className="h-app">
    <div className="h-content">
    <section className="h-about">
      <div className="spin h-photo">
        <img src="https://i.imgur.com/zYYw0JI.jpg" alt="photo" />
      </div>
      <section className="h-meta">
        <h1>Houssam Haidar</h1>
        <p>
          Hi, I'm a Principal Software Engineer at{" "}
          <a
            href="https://www.securitycompass.com/"
            target="_blank"
            children="Security Compass"
          />{" "}
          in Toronto.
        </p>
        <p>
          These days I work primarily with Javascript, React, Electron and
          Node.js but I'm also very passionate about design, UI/UX and Computer
          Systems.
        </p>
        <p>
          Earlier in my career I coined the term BYOS (Bring Your Own Server)
          and wrote{" "}
          <a
            href="https://sdelements.github.io/lets-chat/"
            target="_blank"
            children="Let's Chat"
          />, one of the most popular open source chat apps around.
        </p>
      </section>
    </section>
    <nav className="h-social">
      <SocialIcon
        url="https://instagram.com/thirdcoolest"
        title="Instagram"
        style={{ height: 42, width: 42 }}
      />
      <SocialIcon url="https://github.com/hhaidar" title="github" style={{ height: 42, width: 42 }} />
      <SocialIcon
        url="https://linkedin.com/in/houssam-haidar/"
        title="linkedin"
        style={{ height: 42, width: 42 }}
      />
      <SocialIcon url="https://twitter.com/thirdchillest" title="twitter"  style={{ height: 42, width: 42 }}/>
    </nav>
    </div>
  </div>
);

export default App;
