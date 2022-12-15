//String Similarity function
String.prototype.similarTo=function(text){
    console.log("This function is still in development! Sorry!")
    console.log('DEVS: fix similarities comparison value. Problem is under \/\/FIX')
    process.exit()
    //Similarities counter
    var sim=0

    //Letters
    var string=this.split("")
    var textSplt=text.split("")

    //Current focus
    var current=string[0]
    
    //Check letters
    //FIX
    for(let i=0;i<string.length;i++){
        current=string[i]
        for(let i=0;i<textSplt.length;i++){
            if(textSplt[i]==current){
                sim+=1
            }
        }
    }

    //Evaluate
    if(sim>(string.length*textSplt.length)/2){
        return true
    }else{
        return false
    }
}

//String to binary converter
String.prototype.toBinary=function(){
    //Kind of obvious, but it will not take numbers unless they have "" around them
    let res = '';
    res = this.toString().split('').map(char => {
       return char.charCodeAt(0).toString(2);
    }).join(' ');
    return res;
}
