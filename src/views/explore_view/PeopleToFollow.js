

import React, { useState, useEffect } from 'react'


import { Box, Stack, Skeleton } from '@mui/material'

import { PTFPanel } from '../../components/panels/GenericPanels'


import UserAccount from '../../session/UserAccount'
import ProfileDisplay from '../../components/users/ProfileDisplay'


const PeopleToFollow = ({ authStatus }) => { 

    const [ suggestedPeople, updateSuggestedPeople ] = useState([])
    const [ dataLoaded, setDataLoaded ] = useState(false)


    useEffect(() => { 

        const userAccount = new UserAccount() 
        
        const _loadSuggestedPeople = async () => { 
            
            const response = await userAccount.listPeopleToFollow() 
            updateSuggestedPeople(response.data.data)
            setDataLoaded(true)
        }

        _loadSuggestedPeople() 
    }, [])

    return ( 
        <Box 
            width="25vh"
            maxWidth="100%"
            sx={{
                display: {
                    xs: 'none', sm: 'none', md: 'none', lg: 'block', 
                }
            }}
            justifyContent="center"
            alignItems="center">

                <PTFPanel
                    shadow={0}>
                        
                    <Stack 
                        mt={1}
                        direction="column"
                        spacing={3}
                        justifyContent="center"
                        alignItems="center">

                        <Stack 
                            mt={1}
                            direction="column"
                            spacing={2}
                            justifyContent="center"
                            alignItems="center">

                        

                            {dataLoaded ? (

                            <Stack 
                                direction="column"
                                spacing={2}
                                justifyContent="center"
                                alignItems="center"
                                display="flex">

                                {suggestedPeople.map((people, key) => ( 

                                    <ProfileDisplay
                                        key={key}
                                        data={people}
                                        authStatus={authStatus}/>
                                        
                                ))}
                            </Stack>

                            ): ( 

                            <Stack 
                                direction="column"
                                spacing={2}
                                justifyContent="center"
                                alignItems="center"
                                display="flex">

                                    {[1,2,3,4,5].map((index, key) => ( 
                                        <Skeleton 
                                            key={key}
                                            variant="rectangular" 
                                            width={200} 
                                            height={100} />
                                    ))}
                                
                            </Stack>

                            )}

                        
                        </Stack>

                    </Stack>

                </PTFPanel>

               
        </Box>
    )
}

export default PeopleToFollow