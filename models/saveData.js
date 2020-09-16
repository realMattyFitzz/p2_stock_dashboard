// Model for Data table
module.exports = function (sequelize, DataTypes) {
    const saveData = sequelize.define("saveData", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        symbol: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stockName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        open: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        close: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        volume: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    });
    // Method stored on Data model checks if currently logged-in user (email) matches the "email" field of the current row
    saveData.prototype.isCurrentUser = (user) => {
        return this.email === user;
    }

    return saveData;
};
