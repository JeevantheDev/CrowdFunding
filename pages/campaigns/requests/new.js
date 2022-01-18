import React, { useState } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import web3 from '../../../ethereum/web3';
import Campaign from '../../../ethereum/campaign';
import { Router, Link } from '../../../routes';
import { Layout } from '../../../components/Layout';

const RequestNew = ({ address }) => {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [recipient, setRecipient] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    const campaign = Campaign(address);

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.createRequest(description, web3.utils.toWei(value, 'ether'), recipient).send({
        from: accounts[0],
      });
      Router.pushRoute(`/campaigns/${address}/requests`);
    } catch (err) {
      setErrorMessage(err.message);
    }

    setIsLoading(false);
  };

  return (
    <Layout>
      <Link route={`/campaigns/${address}/requests`}>
        <a>
          <Button>Back</Button>
        </a>
      </Link>
      <h3>Create a Request</h3>
      <Form error={errorMessage ? true : false} onSubmit={onSubmit}>
        <Message error hidden={errorMessage ? false : true} header='Oops!' content={errorMessage} />
        <Form.Field>
          <label>Description</label>
          <Input value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Value in Ether</label>
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Recipient</label>
          <Input value={recipient} onChange={(e) => setRecipient(e.target.value)} />
        </Form.Field>
        <Button primary loading={isLoading}>
          Create
        </Button>
      </Form>
    </Layout>
  );
};

RequestNew.getInitialProps = async (ctx) => {
  const { address } = ctx.query;
  return { address };
};

export default RequestNew;
