import Container  from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import React, { BaseSyntheticEvent } from 'react';
import {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { Note } from '../core/app.types';
import { Box, Typography } from '@material-ui/core';

type  CreateViewProps = {
    onCreate(item: Note): void;
    onCancel(): void;
  }
function CreateView(props: CreateViewProps) {
    const [note, setNote] = useState({title: "", content: ""} as Note) 
    const [error, setError] = useState(false);
    const maxTitleLength = 50;
    const titleOverflowError = 'You have reached max title length';

    const isHTML = (str: string) => {
        const fragment = document.createRange().createContextualFragment(str);
        
        fragment.querySelectorAll('*').forEach(el => el?.parentNode?.removeChild(el));
        
        return !(fragment.textContent || '').trim();
      }

    return (
            <Grid container spacing={3} xs={12} alignItems="flex-start">
                 <Grid item xs={12}>
                    <Box m={2}><Typography variant='h4'>Create new note</Typography></Box>
                 </Grid>
                 <Grid item xs={12}>
                    <form autoComplete="off">
                    <Grid item xs={12} style={{margin: '1em'}}>
                <TextField id="title" label="Title" type="text" variant="outlined" fullWidth error={error} helperText={error ? titleOverflowError : ""} onChange={(e) => {
                    if (e.target.value.length > maxTitleLength) {
                        setError(true);
                    } else {
                        setError(false);
                    }
                    note.title = e.target.value;
                    setNote(note);
                }}/> </Grid>
                <Grid item xs={12} style={{margin: '1em'}}>
                <TextField id="content" label="Content" variant="outlined" fullWidth minRows={20} multiline maxRows={20} onChange={(e) => {
                     
                    let isHtmlString = isHTML(e.target.value);
                    
                    if ((e.nativeEvent as InputEvent).inputType === "insertFromPaste" && isHtmlString) {
                        note.isHtmlContent = true;
                    }
                    note.content = e.target.value;
                    setNote(note);
                }}/>
                </Grid>
                <Grid item xs={12} justifyContent="flex-end" container > 
                    <Button variant="contained"  style={{margin: '1em'}} color="primary" disabled={error} onClick={() =>props.onCreate(note)}>Create</Button>
                    <Button variant="contained"  style={{margin: '1em'}} onClick={props.onCancel}>Cancel</Button>
                </Grid>
            </form>
            </Grid>
            </Grid>
    );
  }
  
  export default CreateView;