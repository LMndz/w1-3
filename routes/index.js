const {Router } = require('express');
const { reject } = require('underscore');
const router = Router();
const _ = require('underscore');
const datos = require('../facturas');

console.log(datos);

router.get('/', (req, res) => {
  return res.json(datos);
});

router.get('/:ci',  (req, res) => {
    const {ci} = req.params;
    try{
       _.each(datos, (dato, i) => {
        res.json(datos.filter(dato => dato.client.ci == ci));
        console.log(datos.filter(dato => dato.client.ci == ci));
        }
       )
    }
  catch (error) {
  }
});

router.post('/', (req, res) => {
    {
        const id = datos.length + 1;
        const newDato = {id, ...req.body};
        datos.push(newDato);
        return res.json(datos);
    }
});

module.exports = router;




//Fetch
/*
const consultar="1311111111"

fetch('direccion del sitio/${consutar}'
        ).then( response => response.json())
        .then( data => console.log(data));
*/


//Async/await axios
 /*
 async function getUser() {
  try {
    const response = await axios.get('direccion del sitio/');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
*/