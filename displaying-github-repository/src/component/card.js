import React from 'react';
import {
    Card,
    CardContent,
    Typography
} from '@material-ui/core';

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        minWidth: 350,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
    },
    pos: {
        fontSize: 10,
        marginBottom: 12,
    },
});

class CardRepository extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        console.log('masuk')
        const { repository, classes } = this.props
        return (
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="primary" gutterBottom>
                        {repository.name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {repository.ssh_url}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {repository.language}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(CardRepository)
