const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const cities = require('../../json-data/cities.json')
const countries = require('../../json-data/countries.json')
const allLocations = [...cities, ...countries]

function capitalizeFirstLetter(stringIn) {

    const small = ['of', 'on', 'upon', 'in', 'and']
    
    let arr = stringIn.split(' ')
    arr = arr.map((string)=>{
        if(!small.includes(string.toLowerCase())){
            return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1);
        } else {
            return string.toLowerCase()
        }
    })
    arr = arr.join(' ')
    return arr
}

router.get('/', async (req, res) => {
    const {location} = req.query
    try{
        if(location){
            const locations = allLocations.filter(loc => loc.name.startsWith(capitalizeFirstLetter(location)))
            return res.json(locations)
        }
    } catch(err){
        return res.json([]);
    }
})

module.exports = router;