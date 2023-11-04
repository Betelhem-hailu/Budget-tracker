import React from 'react'
import { Button } from 'semantic-ui-react'

function ButtonSaveorCancel({addEntry}) {
  return (
    <Button.Group style={{marginTop:20}}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary onClick={()=>addEntry()}>Ok</Button>
    </Button.Group>
  )
}

export default ButtonSaveorCancel