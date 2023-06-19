const data = require("../db/data");

const controller = {
    allJokes : (req, res)=> {
        res.json({data});
    },
    findJoke: (req, res)=> {
        const groupe = req.params.groupe;

        const result = data.filter( carambarJokes => carambarJokes.id == groupe);

        if (result.length == 0 ){
            res.json({message : "blague introuvable "});
        }
        else{
            res.json({result});
        }
    },
    randomJoke : (req, res) =>{
        const numMax = data.length;

        const number = getRandomInt(numMax);

        const result = data[number];
        res.json({result});

    }


}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
module.exports =  controller
