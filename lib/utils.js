"use strict";

var _und = require('underscore');

// QUERY STRING HELPER
function objToQryStr(obj, pickParams){
    var qryStr = '';
    for(var i = 0; i < pickParams.length; i++){
        if(pickParams[i] in obj) qryStr += pickParams[i] + '=' + obj[pickParams[i]] + '&'; 
    }
    return qryStr;
    //if(qryStr.length > 0) qryStr.slice(0, qryStr.length -1);
}

exports.objToQryStr = objToQryStr;


function getMacAddress(cb){
    var macClient = require('getmac');
    macClient.getMac(function(err, macAddress){
        if(err) return cb(err);    
        if(!macClient.isMac(macAddress) || !_und.isString(macAddress)) return cb("Invalid mac address found.");
        cb(null, macAddress.toLowerCase().replace('-', ':');
    });
}

exports.getMacAddress = getMacAddress;


function toCamelCase(str){

}

exports.toCamelCase = toCamelCase;
