import React from 'react'
import { Paper, Tabs } from '@material-ui/core'
import Tab from '@material-ui/core/Tab';
export default function Header({muscles, category, onSelect}) {

    const index = category ? muscles.findIndex(group => group === category) + 1 : 0

    const handleChange = (e,index) => {
        onSelect(index === 0 ? "" : muscles[index - 1])
    }

    
    return (
        <Paper >
  <Tabs
    onChange={handleChange}
    value={index}
    indicatorColor="primary"
    textColor="primary"
    centered
  >
      <Tab label="All" />
      {muscles.map(musclesGroup => 
        <Tab key={musclesGroup} label={musclesGroup} />
        
        )}
  </Tabs>
</Paper>
    )
}
