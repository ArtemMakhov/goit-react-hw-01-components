import PropTypes from 'prop-types';
import { ListItem, StatusOnlaine, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <ListItem >
            <StatusOnlaine isOnline={isOnline}></StatusOnlaine>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </ListItem>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
    
