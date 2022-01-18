import React, { useState } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import { Layout } from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

const CampaignNew = () => {
  const [minimumContribution, setMinimumContribution] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(minimumContribution).send({
        from: accounts[0],
      });

      Router.pushRoute('/');
    } catch (err) {
      setErrorMessage(err.message);
    }

    setIsLoading(false);
  };

  return (
    <Layout>
      <h3> Create a Campaign</h3>
      <Form error={errorMessage ? true : false} onSubmit={onSubmit}>
        <Message error hidden={errorMessage ? false : true} header='Oops!' content={errorMessage} />
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            value={minimumContribution}
            onChange={(e) => setMinimumContribution(e.target.value)}
            label='wei'
            labelPosition='right'
            placeholder='e.g. 100'
          />
        </Form.Field>
        <Button loading={isLoading} primary>
          Create
        </Button>
      </Form>
    </Layout>
  );
};

export default CampaignNew;
