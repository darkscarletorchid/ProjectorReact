import Container  from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import React from 'react';
import { Note } from '../core/app.types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

type  NoteItemProps = {
    item: Note;
    onSelect(id: number): void;
    onUpdate(id: number): void;
    onDelete(id: number): void;
  }
function NoteItem(props: NoteItemProps) {

    function truncateString(string: string, isHtmlContent: boolean, limit: number) {
        let preview: string | null = string;
        if (isHtmlContent) {
           let tempEl = document.createElement("div");
           tempEl.innerHTML = string;
           preview = tempEl.textContent;
        }
        if (!preview) {
            return "";
        }
        else if (preview.length > limit) {
          return preview.substring(0, limit) + "..."
        } else {
          return preview;
        }
      }

    return (
           <Card>
      <CardActionArea>
        <CardContent onClick={() => {props.onSelect(props.item.id)}}>
          <Typography gutterBottom variant="h5" component="h2">
           {props.item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {truncateString(props.item.content, props.item.isHtmlContent, 100)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button variant="contained"color="primary" onClick={() => {props.onUpdate(props.item.id)}}> */}
          {/* Edit */}
        {/* </Button> */}
        <Button variant="contained" color="primary" onClick={() => {props.onDelete(props.item.id)}}>
          Delete
        </Button>
      </CardActions>
    </Card>
    );
  }
  
  export default NoteItem;