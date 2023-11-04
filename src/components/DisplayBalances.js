import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances({totalIncome, totalExpense}) {
  return (
    <Segment textAlign='center'>
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
         <DisplayBalance title='Income' value={totalIncome} color='red'/>
        </Grid.Column>
        <Grid.Column>
        <DisplayBalance title='Expenses' value={totalExpense} color='green'/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  )
}

export default DisplayBalances