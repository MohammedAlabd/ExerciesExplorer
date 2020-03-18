import React from 'react'
import {Fragment} from 'react'
import {Grid, Paper, Typography, List} from "@material-ui/core"
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const styles = {
    paper:{
        padding:20,
        margin:10,
        height:500,
        overflowY:'auto'
    }
}

export default  ({ 
    onSelectEx,
    exercises,
    category, 
    exercise:{ 
        id, 
        title, 
        description
    } 
}) => {
    return (
        <Grid container  >
            <Grid item xs >
                <Paper style ={styles.paper}>
                    {exercises.map(([ group, exercises]) =>
                        !category || category === group
                        ? < Fragment key= {group}> 
                            <Typography
                                variant="h6" 
                                style={{textTransform : "capitalize" }}
                                gutterBottom 
                            >
                                {group}
                            </Typography>
                            <List component="ul">
                                {exercises.map((exercise, id ) => 
                                    <ListItem key={id} button onClick = {() => onSelectEx(exercise.id)}>
                                        <ListItemText primary={exercise.title} />
                                    </ListItem>
                                )}
                            </List>
                        </Fragment>
                        : null
                    )}
                </Paper>
            </Grid>
            <Grid item xs >
                <Paper style ={styles.paper}>
                    <Typography variant="h3">
                        {title}
                    </Typography>
                    <Typography variant="h5">
                        {description}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}
