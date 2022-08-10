import PropTypes from 'prop-types';
import { Box } from '../Box';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <Box
            
            as="ul"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p={3}
            my={4}
            mx="auto"
            width="25%"
            border="normal"
            borderColor="black"
        >
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline} />
            ))}
            
        </Box>
    );
    
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }))
}