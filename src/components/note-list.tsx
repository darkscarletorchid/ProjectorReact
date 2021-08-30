import Button from '@material-ui/core/Button';
import React from 'react';
import NoteItem from './note-item';
import { Note } from '../core/app.types';
import { Grid, Typography, Box } from '@material-ui/core';

type  NoteListViewProps = {
    items: Note[];
    onSelect(id: number): void;
    onCreate(): void;
    onUpdate(id: number): void;
    onDelete(id: number): void;
  }
  
function NoteListView(props: NoteListViewProps) {   
    return (
        <Grid container xs={12} direction="column">
            <Grid container xs={12} direction="row" justifyContent="space-between" style={{padding: '1em'}}>
                <Typography variant='h4'>Note list</Typography>
                <Button variant="contained" color="primary" onClick={() => props.onCreate()}>Create new</Button>
            </Grid>
            <Grid item xs={12}>
            {props.items && props.items.map(element => {
                    return (<Box m={0.5}><NoteItem item={element} onSelect={props.onSelect} onUpdate={props.onUpdate} onDelete={props.onDelete}></NoteItem></Box>)
            })}
            </Grid>
        </Grid>
    );
  }
  
  export default NoteListView;