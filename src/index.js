exports.min = function min (array) {
    var massiv=Array.isArray(array);
    var minItog=array[0];
    var myarr=array.length;
    if(!massiv||array===[]){
     return 0, min();
 }else{
    for (var i=0; i<myarr; i++){
        if (minItog> array[i]){
         minItog= array[i];
        }
    }
 
     return minItog;
 }
  
}

exports.max = function max (array) {
    var massiv=Array.isArray(array);
    var itog=array[0];
    var myarr=array.length;
    if(!massiv||array===[]){
        return 0, max();
 }else{
    for (var i=0; i<myarr; i++){
        if (itog < array[i]){
            itog= array[i];
        }
    }
     return itog;
 }
}

exports.avg = function avg (array) {
    var massiv=Array.isArray(array);
    var myarr=array.length;
    var s = 0;
    if(!massiv||array===[]){
        return 0, avg();
  }else{
 for (i = 0; i < myarr; i++){
   
    s += array[i];}
var avgsItog=s/myarr;
return avgsItog;
 }
}
