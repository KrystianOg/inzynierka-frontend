import { styled } from '@mui/material';
import { Link as RLink} from 'react-router-dom';

export const Link = styled(RLink)(({theme}) => ({
    color: theme.palette.primary.main
})) 