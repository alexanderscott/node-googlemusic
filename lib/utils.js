"use strict";

// QUERY STRING HELPER
function _objToQryStr(obj, pickParams){
    var qryStr = '';
    for(var i = 0; i < pickParams.length; i++){
        if(pickParams[i] in obj) qryStr += pickParams[i] + '=' + obj[pickParams[i]] + '&'; 
    }
    return qryStr;
    //if(qryStr.length > 0) qryStr.slice(0, qryStr.length -1);
}

exports._objToQryStr = _objToQryStr;
