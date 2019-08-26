function calculateMaxMatchLengths(patterns){
    var maxMatchLengths = new Array(patterns.length);
    var maxLength = 0;
    for(let i =1;i<patterns.length;i++){
        while(maxLength>0 && patterns.charAt(maxLength)!=patterns.charAt(i)){
            maxLength = maxMatchLengths[maxLength-1];
        }
        if(patterns.charAt(i) == patterns.charAt(maxLength)){
            maxLength++;
        }
        maxMatchLengths[i] = maxLength;
    }
    return maxMatchLengths;
}

function search(text,patterns){
    var positions = [];
    var count = 0;
    for(let i=0;i<text.length;i++){
        while(count>0 && patterns.charAt(count)!= text.charAt(i)){
            count = maxMatchLengths[count-1];
        }
        if(patterns.charAt(count) == text.charAt(i)){
            count++;
        }
        if(count == patterns.length){
            positions.push(i-patterns.length +1);
            count = maxMatchLengths[count-1];
        }
    }
    return positions;
}