
import './App.css';
import {Icon, Container, Header, Statistic, Grid, Segment, Form, Button} from 'semantic-ui-react'
function App() {
  return (
    <Container>
      <Header as='h1'>Budget</Header>
      <Statistic size="small">
        <Statistic.Label>You balance</Statistic.Label>
        <Statistic.Value>1,000</Statistic.Value>
      </Statistic>
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{textAlign: "left"}}>
                  Income:
                </Statistic.Label>
                <Statistic.Value>1,939</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
            <Statistic size="tiny" color="red">
              <Statistic.Label style={{textAlign: "left"}}>
                Expenses:
              </Statistic.Label>
              <Statistic.Value>1,939</Statistic.Value>
            </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>History</Header>

      <Segment color='red'>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$10,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered/>
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='red'>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$120,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered/>
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as='h3'>Add new transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input icon="tags" width={12} label="Description" placeholder="new shinnt thing" />
          <Form.Input icon="dollar" width={4} label="Value" placeholder="100.99" iconPosition="left" />
        </Form.Group>
      </Form>
      <Button.Group style={{marginTop: 20}}>
        <Button>Cancel</Button>
        <Button.Or />
        <Button primary>Ok</Button>
      </Button.Group>
    </Container>
  );
}

export default App;
