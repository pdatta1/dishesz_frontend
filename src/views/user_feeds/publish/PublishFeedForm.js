
import React, { useState, useEffect } from 'react'


import { Box, Chip, Grid, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import { FormControl, FormControlLabel, FormGroup } from '@mui/material'
import { TextField, Slider } from '@mui/material'

import { RegularText } from '../../../components/texts/GenericTexts'
import ExploreFeedApi from '../../../session/ExploreFeedApi'
import { GenericButton } from '../../../components/buttons/Buttons'

import AddIngredient from './AddIngredient'

const marks = [
    {
      value: 30,
      label: '30 Mins',
    },
    {
      value: 60,
      label: '60 Mins',
    },
    {
      value: 90,
      label: '90 Mins',
    },
    {
      value: 120,
      label: '20 Mins',
    },
  ]





const PublishFeedForm = ({ handler, errorHandler, errorStatus }) => { 

    const exploreApi = new ExploreFeedApi() 
    const savedData = JSON.parse(localStorage.getItem('formData'))

    const [ cookTime, setCookTime ] = useState(savedData.cookTime)
    const [ prepTime, setPrepTime ] = useState(savedData.prepTime)
    const [ recipeName, setRecipeName ] = useState(savedData.recipeName)
    const [ recipeDescription, setRecipeDescription ] = useState(savedData.recipeDescription)
    const [ recipeDirections, setRecipeDirections ] = useState(savedData.recipeDirections)

    const [ categories, setCategories ] = useState([])
    const [ category, setCategory ] = useState(savedData.category)

    const [ formError, setFormError ] = useState(errorStatus)



    const getCookTime = ( time ) => { 
        return `${time} Mins`
    }

    /* Handlers */
    const handleCookTime = ( event ) => { 
        setCookTime(event.target.value)
    }

    const handlePrepTime = ( event ) => { 
        setPrepTime(event.target.value)
    }

    const handleRecipeName = ( event ) => { 
        setRecipeName(event.target.value)
    }

    const handleRecipeDescription = ( event ) => { 
        setRecipeDescription(event.target.value)
    }

    const handleRecipeDirections = ( event ) => { 
        setRecipeDirections(event.target.value)
    }

    const handleCategory = ( event ) => { 
        setCategory(event.target.value)
    }



    /* End Handler */ 


    useEffect(() => { 

        const _loadRecipeCategories = async () => { 
            
            const data = await exploreApi.getAllCategories() 
            setCategories(data)
        }

        
        _loadRecipeCategories() 
        errorHandler(recipeName, prepTime, cookTime, recipeDescription, recipeDirections, category)

    }, [formError, recipeName, recipeDescription, recipeDirections, category])




    //console.log('Cook Time', cookTime)
    //console.log('Prep Time', prepTime)
    //console.log('Category', category)
    console.log('RecipeName', recipeName)
    return ( 

                <Stack 
                    direction="column"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    >


                    <RegularText
                        size="24px"
                        text="Publish a Recipe"/>


                    <form>
                        
                        <Stack 
                            direction="column"
                            spacing={4}
                            justifyContent="center"
                            alignItems="center">

                            <TextField
                                variant="outlined"
                                placeholder="Recipe Name" 
                                value={recipeName}
                                onChange={handleRecipeName}
                                sx={{
                                    width: '100%'
                                }}
                                type="text"
                            />

                            <TextField
                                variant="outlined"
                                placeholder="Recipe Description" 
                                rows={8}
                                multiline
                                value={recipeDescription}
                                onChange={handleRecipeDescription}
                                sx={{
                                    width: '40rem'
                                }}
                                type="text"

                            />

                            <Stack
                                direction="column"
                                spacing={1}
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                width="100%">

                                <RegularText
                                    size="12px"
                                    text="Prep Time"/>

                                <Slider
                                    aria-label="Prep Time"
                                    defaultValue={30}
                                    getAriaValueText={getCookTime}
                                    step={5}
                                    marks={marks}
                                    min={5}
                                    max={120}
                                    valueLabelDisplay="auto"
                                    value={prepTime}
                                    onChange={handlePrepTime}/>

                            </Stack>


                            <Stack
                                direction="column"
                                spacing={1}
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                width="100%">

                                <RegularText
                                    size="12px"
                                    text="Cook Time"/>

                                <Slider
                                    aria-label="Cook Time"
                                    defaultValue={30}
                                    getAriaValueText={getCookTime}
                                    step={5}
                                    marks={marks} 
                                    min={5}
                                    max={120}
                                    valueLabelDisplay="auto"
                                    value={cookTime}
                                    onChange={handleCookTime}/>


                            </Stack>


                            <TextField
                                variant="outlined"
                                placeholder="Recipe Directions" 
                                rows={10}
                                multiline
                                value={recipeDirections}
                                onChange={handleRecipeDirections}
                                sx={{
                                    width: '100%'
                                }}
                                type="text"

                            />

                            <FormControl
                                fullWidth>

                                    <InputLabel
                                        id="category-label">
                                            Category 
                                    </InputLabel>

                                    <Select
                                        labelId="category-label"
                                        id="category-select"
                                        value={category}
                                        label="Category"
                                        onChange={handleCategory}>
                                            {categories.map((value, index) => ( 
                                                <MenuItem
                                                    key={index}
                                                    value={value}>
                                                        {value}
                                                </MenuItem>
                                            ))}
                                    </Select>

                            </FormControl>

                           
                        </Stack>

                    </form>
    
                </Stack>

               
    )
}

export default PublishFeedForm