/**
 * 
 * @author Patrick Atta-Baah 
 * @file Buttons.js
 * @purpose contain custom buttons for the webapp
 * 
 */

import React from 'react'

import { IconButton, Button } from '@mui/material'

import WidgetsIcon from '@mui/icons-material/Widgets'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import GroupRemoveIcon from '@mui/icons-material/GroupRemove'
import LogoutIcon from '@mui/icons-material/Logout'
import UserAccount from '../../session/UserAccount'


const userAccount = new UserAccount() 

const MobileMenuButton = ({ onPress }) => { 
    /**
     * @purpose Display only on mobile viewport, this button
     *          allows mobile web users to open the menu dialog
     * @param onPress: handle the click event 
     */

    return ( 

        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onPress}>

            <WidgetsIcon />
        </IconButton>


    )
}


const GenericButton = ({ text, onPress, component, to, variant }) => { 
    /**
     * @purpose generic webapp button
     * @param text: text to be display on button
     * @param onPress: button click event handler
     */

    return ( 
        <Button 
            variant={variant}
            onClick={onPress}
            component={component}
            to={to}
            sx={{
                fontSize: '15px',
                width: '12rem',
                borderRadius: '10px', 
                fontFamily: 'Dishesz1'
            }}>

            {text}
        </Button>

    )
}


const FollowButton = ({ text, onPress, variant }) => { 
    /**
     * @purpose generic webapp button
     * @param text: text to be display on button
     * @param onPress: button click event handler
     */

    return ( 
        <Button 
            variant={variant}
            onClick={onPress}
            endIcon={<GroupAddIcon/>}
            sx={{
                fontSize: '12px',
                width: '7rem',
                borderRadius: '10px', 
                fontFamily: 'Dishesz1'
            }}>

            {text}
        </Button>

    )
}

const UnFollowButton = ({ text, onPress, variant }) => { 
    /**
     * @purpose generic webapp button
     * @param text: text to be display on button
     * @param onPress: button click event handler
     */

    return ( 
        <Button 
            variant={variant}
            onClick={onPress}
            endIcon={<GroupRemoveIcon/>}
            sx={{
                fontSize: '12px',
                width: '7rem',
                borderRadius: '10px', 
                fontFamily: 'Dishesz1', 
                bgcolor: '#FF3333', 
                ":hover": {
                    bgcolor: '#FF6666'
                }
            }}>

            {text}
        </Button>

    )
}

const SubmitButton = ({ text, onPress, variant }) => { 
    /**
     * @purpose generic webapp button
     * @param text: text to be display on button
     * @param onPress: button click event handler
     */

    return ( 
        <Button 
            variant={variant}
            onClick={onPress}
            type="submit"
            sx={{
                fontSize: '15px',
                width: '12rem',
                borderRadius: '10px', 
                fontFamily: 'Dishesz1'
            }}>

            {text}
        </Button>

    )
}

const ViewMoreButton = ({ text, onPress, component, to, variant }) => { 
    /**
     * @purpose generic webapp button for recipeDisplay
     * @param text: text to be display on button
     * @param onPress: button click event handler
     */

    return ( 
        <Button 
            variant={variant}
            onClick={onPress}
            component={component}
            to={to}
            sx={{
                fontSize: '12px',
                width: '7rem',
                borderRadius: '10px', 
                fontFamily: 'Dishesz1'
            }}>

            {text}
        </Button>

    )
}

const GenericLinkButton = ({ text, onPress, component, to, variant }) => { 
    /**
     * @purpose generic webapp link button
     * @param text: text to be display on button
     * @param onPress: button click event handler
     */

    return ( 
        <Button 
            variant={variant}
            onClick={onPress}
            component={component}
            to={to}
            sx={{
                borderRadius: '10px', 
                fontFamily: 'Dishesz1',
            }}>

            {text}
        </Button>

    )
}


const IngredientLinkButton = ({ text, link }) => { 
    /**
     * @purpose generic webapp link button
     * @param text: text to be display on button
     * @param onPress: button click event handler
     */

    const openIngredientLink = () => { 
        window.open(link, '_blank')
    }

    return ( 
        <Button 
            variant="contained"
            onClick={openIngredientLink}
            sx={{
                borderRadius: '10px', 
                fontFamily: 'Dishesz1',
            }}>

            {text}
        </Button>

    )
}


const LogoutButton = () => { 
    return ( 
        <IconButton
            size="large"
            aria-label="logout"
            color="inherit"
            onClick={() => { 
                userAccount.logoutUser() 
            }}>
            <LogoutIcon/>
        </IconButton>
    )
}


export { 
    MobileMenuButton, 
    GenericButton,
    GenericLinkButton,
    ViewMoreButton,
    IngredientLinkButton,
    SubmitButton,
    FollowButton,
    UnFollowButton,
    LogoutButton,
}
