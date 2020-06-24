exports.up = pgm => {
   
  // Create legion_table
   pgm.createTable(
    { 
      schema: 'kwl_t9a_db', 
      name: 'legions',
    },
    {
      id: {type: "smallint", unique: true, sequenceGenerated: {precedence: "always"}},
      name: {type: "varchar", unique: true},
      region_id: {
        type: "smallint",
        foreignKey: {
          name: 'fk_regions',
          table: 'regions',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'id'
        }
      },
      colour_id: {
        type: "smallint",
        foreignKey: {
          name: 'fk_regions',
          table: 'legion_colours',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'id'
        }
      }
    }    
  );
};

exports.down = pgm => {};


seedLegionsTable =(pgm) =>{

}
