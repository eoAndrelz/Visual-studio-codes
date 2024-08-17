const {Sequelize, DataTypes} = require('sequelize');
const Mysql2 = require('mysql2');

const sequelize = new Sequelize('ldm','root','', {
    host: 'localhost',
    dialect: 'mysql'
});

const Client = sequelize.define('Client', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    neighborhood: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cell_phone_number: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
        tableName:'client',
        timestamps: false
    });

async function syncDatabase(){
    try{
        await sequelize.sync({force: true});
        console.log('Tabela Client sincronizada');

        await Client.bulkCreate([
            {
                name: 'André Luiz',
                address: 'Avenida moises Maimonides, 495',
                neighborhood: 'Itaquera',
                cep: '04763-190',
                phone_number: '(69) 3761-6777',
                cell_phone_number: '(69) 3761-6777'
            },
            {
                name: 'Roberto José',
                address: 'Rua Benedito da Cruz',
                neighborhood: 'Vila Virginia',
                cep: '04884-020',
                phone_number: '(21) 3761-1184',
                cell_phone_number: '(21) 3761-1184'
            },
            {
                name:'Raquel Ferreira',
                address: 'Rua Abel de Araújo',
                neighborhood: 'Santa Teresinha',
                cep: '02451-010',
                phone_number: '(81) 2945-1916',
                cell_phone_number: '(81) 2945-1916'
            }
        ]);

    }catch(err){
        console.error('Erro ao inserir dados', err);
    } finally{
        await sequelize.close();
    }
}
syncDatabase();