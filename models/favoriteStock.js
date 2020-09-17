// Model for favoriteStock table
module.exports = function (sequelize, DataTypes) {
    const FavoriteStock = sequelize.define("FavoriteStock", {
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
    });
    // Method stored on favoriteStock model checks if currently logged-in user (email) matches the "email" field of the current row
    FavoriteStock.prototype.isCurrentUser = (user) => {
        return this.email === user;
    }

    return FavoriteStock;
};
