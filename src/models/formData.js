import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const braisee = sequelize.define('brasiee', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    text: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
},{
    tableName: 'brasiees',
    timestamps: true,   // Aktifkan timestamps
    updatedAt: false    // Nonaktifkan kolom updatedAt
});

export default braisee;
