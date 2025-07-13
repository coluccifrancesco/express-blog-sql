const connection = require('../data/db');

function index(req, res){
    const sql = 'SELECT * FROM express-blog-sql';

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);
    });
}

module.exports = {
    index
}

// Milestone 2
// Facciamo sì che l’API di INDEX restituisca la lista di post 
// recuperata dal database in formato JSON
// Verifichiamo su Postman che la risposta sia corretta

// Milestone 3
// Facciamo sì che l’API di SHOW restituisca il post desiderato in formato JSON
// Verifichiamo su Postman che la risposta sia corretta

// Milestone 4
// Facciamo sì che l’API di DESTROY permetta di eliminare un post dal database
// Verifichiamo su Postman che la chiamata non dia errore e risponda 204
// Verifichiamo su MySQL Workbench che il post venga effettivamente rimosso

// Bonus:
// Completiamo le altre operazioni crud per la creazioen e aggiornamento di una risorsa.
// Facciamo si che l'API di STORE permetta il salvataggio di un nuovo post
// Facciamo si che l'API di UPDATE permetta la modifica di un post esistente