import connection from './connection.js';

export const getAllObjects = async () => {
    const [results] = await connection.query(
        "SELECT * FROM objects", []
    );
    return results;
}

export const getObjectsByTitle = async title => {
    const [results] = await connection.query(
        "SELECT * FROM objects WHERE title = ?", [title]
    );
    return results;
}

export const getObjectsById = async id => {
    const [results] = await connection.query(
        "SELECT * FROM objects WHERE id = ?", [id]
    );
    return results;
}

export const addObject = async objectData => {
    const [results] = await connection.query(
        "INSERT INTO objects (title, prop1, prop2, prop3) VALUES (?, ?, ?, ?)", 
        [
            objectData.title, 
            objectData.date, 
            objectData.string, 
            objectData.integer
        ]
    );
    return results;
}

export const updateObject = async objectData => {
    const [results] = await connection.query(
        "UPDATE objects SET title=?, prop1=?, prop2=?, prop3=? where id=?",
        [
            objectData.title,
            objectData.date,
            objectData.string,
            objectData.integer,
            objectData.id
        ] 
    )
    return results;    
}

export const deleteObject = async title => {
    const [results] = await connection.query(
        "DELETE FROM objects WHERE title=?", [title]
    )
    return results;
}