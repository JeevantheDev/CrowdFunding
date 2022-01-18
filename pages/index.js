import React from 'react';
import { Button, Card } from 'semantic-ui-react';

import { Layout } from '../components/Layout';
import factory from '../ethereum/factory';
import { Link } from '../routes';

const Home = ({ campaigns }) => {
  const renderCampaigns = (campaigns) => {
    const items = campaigns.map((address) => ({
      header: address,
      description: (
        <Link route={`/campaigns/${address}`}>
          <a>View Campaign</a>
        </Link>
      ),
      fluid: true,
    }));
    return <Card.Group items={items} />;
  };

  return (
    <Layout>
      <div>
        <h3>Open Campaigns</h3>
        <Link route='/campaigns/new'>
          <a>
            <Button floated='right' content='Create Campaign' icon='add circle' primary />
          </a>
        </Link>
        {renderCampaigns(campaigns)}
      </div>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  return { campaigns };
};

export default Home;
