import React from 'react';
import Typography from 'components/Typography';
import { persons } from 'app/data/persons';
import { List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import Box from '@mui/material/Box';
import { FixedSizeList} from 'react-window';

function renderRow(props){
  const { index, style } = props;
  return (
    <ListItem style={style} key={persons[index].id} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`${persons[index].name}`} />
        <ListItemText primary={`${persons[index].birthday}`} />
        <ListItemText primary={`${persons[index].sex}`} />
        <ListItemText primary={`${persons[index].countryOfOrigin.name}`} />
        <ListItemText primary={`${persons[index].citizenship.name}`} />
      </ListItemButton>
    </ListItem>
  );

}

function PersonListView() {
  return (
    <Typography>
      <Box sx={{ width: '100%', height: '100%', maxWidth: 720, bgcolor: 'background.paper' }}>
        <FixedSizeList height={600} width={720} itemSize={30} itemCount={persons.length}>
            {renderRow}
        </FixedSizeList>
      </Box>
    </Typography>
  );
}

export default PersonListView;
