import { Button } from '@mui/material';
import * as React from 'react';

export const CustomButton = (props) => <Button variant="contained" {...props} sx={{margin: '10px'}}>{props.label}</Button>;

