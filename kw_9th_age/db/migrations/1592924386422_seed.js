// This is the initial db seed file
exports.up = (pgm) => {  
  dropAllTables(pgm); 

  // Create legion_colours table
  pgm.createTable(
    { 
      schema: 'kwl_t9a_db', 
      name: 'legion_colours',
    },
    {
      id: {type: "smallint", unique: true, sequenceGenerated: {precedence: "always"}},
      name: {type: "varchar", unique: true},
      rgb: "varchar",
    }    
  );
  seedLegionColoursData(pgm);

  // Create regions table
  pgm.createTable(
    {
      schema: "kwl_t9a_db",
      name: "regions",
    }, 
    {
      id: {type: "smallint", unique: true, sequenceGenerated: {precedence: "always"}},
      name: {type: "varchar", unique: true, notNull: true},
      coord1: {type: "varchar", notNull: true},
      coord2: {type: "varchar", notNull: true},
      coord3: {type: "varchar", notNull: true},
      coord4: {type: "varchar", notNull: true},
      coord5: {type: "varchar", notNull: true},
      coord6: {type: "varchar", notNull: true},
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
    },
  );
  seedRegionsData(pgm);


}


/**
 * Ensure we are starting with a blank schema
 */
dropAllTables = (pgm) => {
  pgm.dropTable({schema: "kwl_t9a_db", name:"legion_colours"}, {"ifExists": "true"});
  pgm.dropTable({schema: "kwl_t9a_db", name:"regions"}, {"ifExists": "true"});
}

/**
 * Seed kwl_t9a_db.legion_colours with data
 */
seedLegionColoursData = (pgm) => { 
  pgm.sql("INSERT INTO kwl_t9a_db.legion_colours (name, rgb) " +
  "VALUES ('red', '255,0,0')"
  );
  pgm.sql("INSERT INTO kwl_t9a_db.legion_colours (name, rgb) " +
  "VALUES ('maroon', '128,0,0')"
  );
  pgm.sql("INSERT INTO kwl_t9a_db.legion_colours (name, rgb) " +
  "VALUES ('fuchsia', '255,0,255')"
  );
  pgm.sql("INSERT INTO kwl_t9a_db.legion_colours (name, rgb) " +
  "VALUES ('yellow', '255,255,0')"
  );
  pgm.sql("INSERT INTO kwl_t9a_db.legion_colours (name, rgb) " +
  "VALUES ('purple', '128,0,128')"
  );
  pgm.sql("INSERT INTO kwl_t9a_db.legion_colours (name, rgb) " +
  "VALUES ('lime', '0,255,0')"
  );
  pgm.sql("INSERT INTO kwl_t9a_db.legion_colours (name, rgb) " +
  "VALUES ('blue', '0,0,255')"
  );
  pgm.sql("INSERT INTO kwl_t9a_db.legion_colours (name, rgb) " +
  "VALUES ('teal', '0,128,128')"
  );
  pgm.sql("INSERT INTO kwl_t9a_db.legion_colours (name, rgb) " +
  "VALUES ('olive', '128,128,0')"
  );
  pgm.sql("INSERT INTO kwl_t9a_db.legion_colours (name, rgb) " +
  "VALUES ('green', '0,128,0')"
  );
  pgm.sql("INSERT INTO kwl_t9a_db.legion_colours (name, rgb) " +
  "VALUES ('navy', '0,0,128')"
  );
  pgm.sql("INSERT INTO kwl_t9a_db.legion_colours (name, rgb) " +
  "VALUES ('aqua', '0,255,255')"
  );

  seedRegionsData();
  
}

/**
 * Seeds the geoJSON data for the regions table
 */
seedRegionsData= (pgm) => {
  // I need to re-wire this project to use webpack and babel in order to properly use imports. 
  // For now, I'll need to stop the sript here and manually execute another one to populate
  // this table

  console.log("SEED THE regions TABLE NOW!!!!");
}