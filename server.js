const express = require('express');
const app = express();
const { Sequelize, UUID, STRING, INTEGER, DATE } = require('sequelize');
const connect = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_country_club');

const Facility = connect.define('facility', {
    id: {
    type: UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
    }, 
    name:{ type: STRING(100),
            allowNull: false,
            unique: true
    }
    })
const Member = connect.define('member', {
        id: {
        type: UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
        }, 
        first_name:{ type: STRING(20),
                allowNull: false,
                unique: true
        },
        })

const Booking = connect.define('booking', {
            id: {
            type: INTEGER,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
            }, 
            startTime:{ type: DATE,
                    allowNull: false,
            },
            endTime:{ type: DATE,
                allowNull: false,
        },
            })


const syncAndSeed = async() =>{
    await connect.sync({force: true});
};

const init = async() =>{
    try{
        await connect.authenticate();

    }catch (err){console.log(ex)} 
};

init();

const port = 3000;

app.listen(port, ()=>{console.log(port)})