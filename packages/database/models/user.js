module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });
};