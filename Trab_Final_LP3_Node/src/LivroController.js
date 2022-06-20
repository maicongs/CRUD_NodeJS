exports.post = async(req, res) => {
    const conn = await connect();

    const sql = 'INSERT INTO livro(titulo,autor,ano_lancamento) VALUES (?,?,?)';

    const values = [req.body.titulo, req.body.autor, req.body.ano_lancamento];

    await conn.query(sql, values);

    res.status(201).send('ok!');
};

exports.put = async(req, res, next) => {
    let id = req.params.id;
    
    const conn = await connect();

    const sql = 'UPDATE livro SET titulo=?, autor=?, ano_lancamento=? where idlivro=?';

    const values = [req.body.titulo, req.body.autor, req.body.ano_lancamento, id];

    await conn.query(sql, values);

    res.status(201).send('ok!');
};

exports.delete = async(req, res, next) => {
    let id = req.params.id;
    
    const conn = await connect();

    const sql = 'DELETE FROM livro where idlivro=?';

    const values = [id];

    await conn.query(sql, values);

    res.status(200).send('ok!');
}

exports.get = async(req, res, next) => {
    const conn = await connect();
    const [rows] = await conn.query(
        'SELECT * FROM livro;'
    );
    res.status(200).send(rows);

};

exports.getById = async(req,res, next) => {
    const conn = await connect();

    const [rows] = await conn.query('SELECT * FROM livro WHERE idlivro =  ' = req.params.id);

    if(rows.length > 0){
        res.status(200).send(rows[0]);
    }else{
        res.status(404).send("ID não existe");
    }
};

async function connect(){
    if(global.connection
        && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require ("mysqll2/promise");
    const connection = await
mysql.createConnection({host:'localhost',
user: 'root', password:'123456',
database: 'trab_final_lp3'});

        console.log("Conectou no MySQL!");
        global.connection = connection;
        return connection
}