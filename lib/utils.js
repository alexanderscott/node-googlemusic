"use strict";

var _und = require('underscore');
var macClient = require('getmac');
var fs = require('fs');


var gmUtils = {};

// QUERY STRING HELPER
gmUtils.objToQryStr = function(obj, pickParams){
    var qryStr = '';
    for(var i = 0; i < pickParams.length; i++){
        if(pickParams[i] in obj) qryStr += pickParams[i] + '=' + obj[pickParams[i]] + '&'; 
    }
    return qryStr;
    //if(qryStr.length > 0) qryStr.slice(0, qryStr.length -1);
};

gmUtils.getMacAddress = function(cb){
    macClient.getMac(function(err, macAddress){
        if(err) return cb(err);    
        if( !isValidMacAddress
        cb(null, macAddress.toLowerCase().replace('-', ':');
    });
};

gmUtils.isValidMacAddress = function(macAddressRaw){
    if(!macClient.isMac(macAddress) || !_und.isString(macAddress)) return 

};

gmUtils.toCamelCase = function(str){


};

gmUtils.getOrCreatePath = function(path){

    if(!fs.existsSync(path)){
        

    }
    return path;
};

gmUtils.getVarType = function(var){

};

module.exports = gmUtils;
