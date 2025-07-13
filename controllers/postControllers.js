let postList = require('../data/posts');
const listLength = postList.length;


const index = (req, res) => {
    
    const tag = req.query.tag;

        // Bonus
        // 1.1 Implementare un filtro di ricerca nella index 
        // che mostri solo i post che hanno un determinato Tag
        if(tag){
            console.log(tag);
            let filteredList = postList.filter(post => post.tags.includes(tag));
            return res.status(200).json(filteredList);
        } 

    res.status(200).json(postList)
}


const show = (req, res) => {
    
    const id = req.params.id - 1;

        // Bonus
        // 1.2 In Destroy, controllare se il parametro si riferisce 
        // ad un post esistente, in caso contrario, rispondere con uno stato 404 
        // e un messaggio d’errore, sempre in formato JSON.
        if(id >= listLength){
            res.status(404)

            return res.json({
                status:'404',
                error:'Not Found',
                message:'Post not found'
            })
        }

    res.status(200).json(postList[id])
}


const store = (req, res) => {

    console.log(req.body);

    const postId = postList[listLength - 1].id + 1;

    // Inseriamo come corpo della nostra request un oggetto 
    // che rappresenti un nuovo post
    const newPostObj = {
        id: postId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    // Implementiamo quindi la logica per aggiungere un nuovo post 
    // e prepariamo la risposta adeguata.
    postList.push(newPostObj);
    console.log(postList);
    
    res.status(201).json(newPostObj);

}

// Ripetiamo il procedimento per Update, in modo da avere 
// la possibilità di modificare le nostre risorse
const update = (req, res) => {
    
    const id = parseInt(req.params.id);
    const post = postList.find(post => post.id === id);

    if(!post){
        return res.status(404).json({
            error: true,
            message: 'Not found'
        })
    }

    post.title = req.body.title;
    post.content = req.body.content;
    post.tags = req.body.tags;

    console.log(postList);
    
    res.json(post)

}


const modify = (req, res) => {
    const id = req.params.id

    if(id > listLength){
        return res.status(404).json({
            error: true,
            message: 'Not found'
        })
    }

    console.log(`Hai modificato il post con id: ${id}`);
    res.json(`Hai modificato il post con id: ${id}`)
}



const destroy = (req, res) => {

    const id =  parseInt(req.params.id);
    const post = postList.find(post => post.id === id)

        // Bonus
        // 1.2 In Destroy, controllare se il parametro si riferisce 
        // ad un post esistente, in caso contrario, rispondere con uno stato 404 
        // e un messaggio d’errore, sempre in formato JSON.
        if(!post){
            res.status(404)

            return res.json({
                status:'404',
                error:'Not Found',
                message:'Post not found'
            })
        }

    postList.splice(postList.indexOf(post), 1);
    console.log(postList);
    
    res.sendStatus(204)
}


module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}