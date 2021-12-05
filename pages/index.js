import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import 'semantic-ui-css/semantic.min.css';

const Home = ({ campaigns }) => {
  const renderCampaigns = (campaigns) => {
    const items = campaigns.map((address) => ({
      header: address,
      description: <a>View Campaign</a>,
      fluid: true,
    }));
    return <Card.Group items={items} />;
  };

  return (
    <div>
      <h3>Open Campaigns</h3>
      {renderCampaigns(campaigns)}
      <Button content='Create Campaign' icon='add circle' primary />
    </div>
  );
};

Home.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  return { campaigns };
};

export default Home;
