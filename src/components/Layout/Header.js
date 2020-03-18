import React from 'react'
import { Toolbar, AppBar, Typography} from '@material-ui/core'
import CreateDialog from '../Exercises/Dialog' 

export default function Header({handleSubmit}) {
    return (
        <AppBar position="static">
  <Toolbar>
    <Typography variant="h6" style={{flex:1}} >
      News
    </Typography>

    <CreateDialog
      handleSubmit={handleSubmit}
    />
  </Toolbar>
</AppBar>
    )
}
