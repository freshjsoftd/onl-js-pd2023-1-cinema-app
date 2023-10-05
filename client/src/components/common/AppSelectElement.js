import { FormControl, InputLabel, Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import React from 'react'
import { useSelector } from 'react-redux';
// =====================================================
import { nationalities, years } from '../../constants';




function AppSelectElement({field, meta}) {
  const array = useSelector(state => state);
  const {moviesList: {movies}} = array;
  const {actorsList: {actors}} = array;
  const {directorsList: {directors}} = array;
  const {studiosList: {studios}} = array;

  // console.log(movies)
  
  
  const setMenuItem = (array = ['']) => { 
    return array.map((item) => (
      <MenuItem 
      key={item} 
      value={item}
      sx={{maxHeight: '20px'}}
      >{item}</MenuItem>)
      );
   }

  const chooseArray = () => {
    switch (field.name) {
        case 'birthYear': return setMenuItem(years);
        case 'nationality': return setMenuItem(nationalities);
        case 'actors': return setMenuItem(actors);
        case 'directors': return setMenuItem(directors);
        case 'moviesList': return setMenuItem(movies);
        case 'studios': return setMenuItem(studios);
        default: break
    }
};

  return (
    <FormControl {...field}
            variant='outlined'
            sx={{bgcolor:'aquamarine'}}
            // className={classes.root}
            >
            <InputLabel
                id='demo-simple-select-outlined-label'
                sx={{fontSize: '20px'}}
                >{field.name + ':'}</InputLabel>
                <Select
                    labelId='demo-simple-select-outlined-label'
                    id='demo-simple-select-outlined'
                    sx={{bgcolor: 'aquamarine', minWidth: '300px'}}
                    name={field.name}
                    value={meta.value}
                    onChange={field.onChange}
                    label={field.name + ':'}
                    // className={classes.select}
                >
                    <MenuItem value='' sx={{maxHeight: '20px'}}>
                        <em>----</em>
                    </MenuItem>
                    {chooseArray()}
                </Select>
            {(meta.error && meta.touched) && <div className='error'>{meta.error}</div>}
        </FormControl>
  )
}

export default AppSelectElement