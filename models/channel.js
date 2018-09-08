export default (sequelize, DataTypes) => {
  const Channel = sequelize.define('channel', {
    name: DataTypes.STRING,
    public: DataTypes.BOOLEAN,
  }, { underscored: true });

  Channel.associate = (models) => {
    // 1:M
    Channel.belongsTo(models.Team, {
      foreignKey: {
        name: 'teamId', // this is for accessing via javascript
        field: 'team_id' // this is for the actual column in the database itself
      },
    });
  };

  return Channel;
};