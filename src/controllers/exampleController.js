import * as db from'./../database/exampleObjectDB.js';

export const getAllObjects = async (req, res) => {
    res.status(200)
    res.json({
        message: "success",
        data: await db.getAllObjects()
    })
}

export const getObjectsByTitle = async (req, res) => {
    const data = await db.getObjectsByTitle(req.params.title);
    if(data) {
        res.status(200).json({
            message: "success",
            data: data
        })
    }
    else {
        res.status(404).send("Entry not found.");
    }
}

export const getObjectsById = async (req, res) => {
    const data = await db.getObjectsById(req.params.id);
    if(data) {
        res.status(200).json({
            message: "success",
            data: data
        })
    }
    else {
        res.status(404).send("Entry not found.");
    }
}

export const addObject = async (req, res) => {
    const addedObject = await db.addObject(req.body);
    res.status(201).json({
        message: "Inserted new Object.",
        data: addedObject
    })
}

export const updateObject = async (req, res) => {
    const updatedObject = await db.updateObject(req.body);
    if(updatedObject) {
        res.status(202).json({
            message: `Updated ${updatedObject.name}`,
            data: updatedObject
        });
    }
    else{
        res.status(404).send('Object not found');
    }
    
}

export const deleteObject = async (req, res) => {
    const found = await db.deleteObject(req.params.title);
    if(found) {
        res.status(204).send();
    }
    else {
        res.status(404).send("Nothing found.");
    }
}