"use strict";

var dbm;
var type;
var seed;

exports.setup = function(options: any, seedLink: any) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function(db: any) {
    return db.addColumn("Location", "random", {
        type: "string",
    });
};

exports.down = function(db: any) {
    return db.removeColumn("Location", "random");
};

exports._meta = {
    version: 1,
};
