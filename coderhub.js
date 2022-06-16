function isInterleave(S1, S2, S3) {
    var a = 0
    var b = 0
    var counter = 0
    var c = 0 
    var a1 = 0 
    var b1 = 0 
    if(S3.length != S1.length + S2.length){
        return false
    }
    for(var i = 0; i < S3.length ; i++){
        if(S3[i] == S1[a] && S3[i] == S2[b])
            if(test(S1,S2,S3,a,b,i)){
                console.log(`Enter`)
                return true
            }
            else{
                i--
                b--
                a--
            }
        if(S3[i] == S2[b]){
            b++
        } else if(S3[i] == S1[a]) {
            a++
        } else {
            console.log(i +S3[i] +' ' + a +S1[a]+ ' ' + b+S2[b] )
            return false
         }
    }
    return true
}
function test(S1,S2,S3,a,b,c){
    console.log('Test')
    for(let i = c ;i < S3.length ; i++){
        console.log(`i = ${i} g ${S3[i]} a = ${a} g ${S1[a]} b = ${b} g ${S2[b]} `)
        if(S3[i] == S1[a]){
            a++
        }
        else if(S3[i] == S2[b]){
            b++
        }else return  false 
    }
    return true
}
console.log(isInterleave("aabcc","dbbca","aadbcbbcac"))