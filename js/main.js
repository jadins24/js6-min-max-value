var value=[50,60,30,44,74,-40,-50];
var min=value[0];
var max=value[0];
value.forEach(function(max) {
    
    if(min>max){
        min=max
    }
    
})
document.write("min value" + min + "<br>")
value.forEach(function(min) {
    if(max<min){
        max=min
    }
    
})
document.write(max)