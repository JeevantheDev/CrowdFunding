import React, { useState } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';

import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

export const ContributeForm = ({ address }) => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    const campaign = Campaign(address);
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(value, 'ether'),
      });
      Router.replaceRoute(`/campaigns/${address}`);
    } catch (err) {
      setErrorMessage(err.message);
    }

    setIsLoading(false);
  };

  return (
    <Form error={errorMessage ? true : false} onSubmit={onSubmit}>
      <Message error hidden={errorMessage ? false : true} header='Oops!' content={errorMessage} />
      <Form.Field>
        <label>Amount to Contribute</label>
        <Input value={value} onChange={(e) => setValue(e.target.value)} label='ether' labelPosition='right' />
      </Form.Field>
      <Button loading={isLoading} primary>
        Contribute
      </Button>
    </Form>
  );
};
