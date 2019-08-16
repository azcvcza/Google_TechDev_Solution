var test_str = '3[2[b]c]4[hj]c'
var temp = [];

//访问字符串
function walk(str){
    
    for(var i =0;i<str.length;i++){
        if(str.charAt(i)==='['){
            temp.push(str.charAt(i));
        }
        else if(str.charAt(i)===']'){
            // 碰到 ] 时
            temp.push(str.charAt(i));// temp中形成  ……[xxxx]结构;
            var str1 = temp.join(''); // 转换成字符串 '...[xxxx]';
            var after_replace ='';// 将str1替换后产生的字符串
            var regex = /\d+\[[a-z]+\]/;// 正则捕获 3[\w+];
            var capture = regex.exec(str1)[0];// 捕获,[0]中存储捕获字符串;
            var target = spread(capture);// 将获取到的字符串展开 2[b]=> bb;
            after_replace = str1.replace(capture,target)// 3[2[b] => 3[bb
            temp = [];// 清空原有;
            temp.push(after_replace);// 将结果放入 此时 temp中 3[bb
                                     // 下一个将放入 c],于是将bbc展开成bbcbbcbbc
            //console.log('now temp:',temp);
            // 然后继续循环
        }
        else{
            temp.push(str.charAt(i));
        }
    }
    console.log('final:',temp.join(''));
}
// 将 2[abc]结构展开
function spread(str){
    var result ='';// 存储结果
    var regex1 = /\d+/;// 捕获数字
    var regex2 = /\[[a-z]+\]/;// 捕获 [abc]
    var number = parseInt(regex1.exec(str)[0]);// 字符串转换成数字
    var quote = regex2.exec(str)[0];// [abc]
    var inside_str = quote.substr(1,quote.length-2);// abc

    // 循环拼接
    for(number;number>0;number--){
        result += inside_str;
    }
    return result;
}
walk(test_str);