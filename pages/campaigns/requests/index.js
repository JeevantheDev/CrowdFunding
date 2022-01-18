import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Layout } from '../../../components/Layout';
import { Link } from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import { RequestRow } from '../../../components/RequestRow';

const RequestIndex = ({ address, requests, requestCount, approversCount }) => {
  const { Header, Row, HeaderCell, Body } = Table;

  const renderRow = (requests) => {
    return requests.map((request, index) => {
      return <RequestRow key={index} id={index} request={request} approversCount={approversCount} address={address} />;
    });
  };

  return (
    <Layout>
      <h3>Request List</h3>
      <Link route={`/campaigns/${address}/requests/new`}>
        <a>
          <Button floated={'right'} style={{ marginBottom: 10 }} primary>
            Add Request
          </Button>
        </a>
      </Link>
      <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Recipient</HeaderCell>
            <HeaderCell>Approval Count</HeaderCell>
            <HeaderCell>Approve</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Row>
        </Header>
        <Body>{renderRow(requests)}</Body>
      </Table>
      <div>Found {requestCount || 0} requests.</div>
    </Layout>
  );
};

RequestIndex.getInitialProps = async (ctx) => {
  const { address } = ctx.query;
  const campaign = Campaign(address);
  const requestCount = await campaign.methods.getRequestsCount().call();
  const approversCount = await campaign.methods.approversCount().call();

  const requests = await Promise.all(
    Array(parseInt(requestCount))
      .fill()
      .map((element, index) => {
        return campaign.methods.requests(index).call();
      }),
  );

  return { address, requests, requestCount, approversCount };
};

export default RequestIndex;
