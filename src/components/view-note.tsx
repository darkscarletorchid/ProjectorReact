import React from 'react';
import {useEffect} from 'react';

import { Note } from '../core/app.types';
import Typography from '@material-ui/core/Typography';
import Parse from 'html-react-parser';
import { Grid, Box} from '@material-ui/core';


type  ViewNoteProps = {
    selectedItem: Note;
  }

function ViewNote(props: ViewNoteProps) {

    const notAllowedTags = ['script', 'iframe']
    const options = {
        replace: (domNode: any) => {
          if (notAllowedTags.indexOf(domNode.name) != -1) {
            return <div/>;
          }
        }
      };

    const formatContent = (str: string, isHtmlContent: boolean) : string | JSX.Element | JSX.Element[] => {
        if (isHtmlContent) 
        {
            return Parse(str, options);
        }
        return str;
    }

    useEffect(() => {
        document.querySelectorAll('a').forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                let result = window.confirm("Are you sure that you want to follow this link?");
                let link = (e.currentTarget as HTMLElement).getAttribute('href');
                if (result && !!link) {
                    window.open(link, '_blank');
                }
            })
        });
    }, [props.selectedItem])

    return (
        <Grid xs={12} container direction="column">
            <Box m={2}><Typography align="left" variant="h4">{props.selectedItem.title}</Typography></Box>
            <Box m={2} textAlign="left">{formatContent(props.selectedItem.content, props.selectedItem.isHtmlContent)}</Box>
        </Grid>
    );
  }
  
  export default ViewNote;