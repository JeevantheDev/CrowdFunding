import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

export const RequestRow = ({ id, request, address, approversCount }) => {
  const { Row, Cell } = Table;

  const readyToFinalize = request.approvalCount > approversCount / 2;

  const onApprove = async (e) => {
    e.stopPropagation();
    const accounts = await web3.eth.getAccounts();
    const campaign = Campaign(address);
    await campaign.methods.approveRequest(id).send({ from: accounts[0] });
  };

  const onFinalize = async (e) => {
    e.stopPropagation();
    const accounts = await web3.eth.getAccounts();
    const campaign = Campaign(address);
    await campaign.methods.finalizeRequest(id).send({ from: accounts[0] });
  };

  return (
    <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
      <Cell>{id}</Cell>
      <Cell>{request.description}</Cell>
      <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
      <Cell>{request.recipient}</Cell>
      <Cell>
        {request.approvalCount} / {approversCount}
      </Cell>
      <Cell>
        {request.complete ? null : (
          <Button onClick={onApprove} color='green' basic>
            Approve
          </Button>
        )}
      </Cell>
      <Cell>
        {request.complete ? null : (
          <Button color='teal' basic onClick={onFinalize}>
            Finalize
          </Button>
        )}
      </Cell>
    </Row>
  );
};
