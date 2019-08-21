import React from 'react';
import MarketingCard from './MarketingCard';

const HomePage = () => (
  <div>
    <div>Image Banner</div>
    <div>
      <MarketingCard />
      <MarketingCard />
    </div>
    <div>
      <p>Sign up to be notified for new problems!</p>
      <input name="email-newsletter" type="text" placeholder="Email..." />
    </div>
  </div>
);

export default HomePage;
