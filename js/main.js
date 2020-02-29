// bai 1.
function dateTime() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if( day < 10){
        day = "0" + day;
    }
    if( month <10 ){
        month = "0" + month;    
    }
    let time =` ${date.getHours()} h: ${date.getMinutes()}  ngày :  ${day} - ${month} - ${date.getFullYear()}`;
    document.getElementById("demo").innerHTML = time;
}
// bai 2.
function ex2(){
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if( day < 10){
        day = "0" + day;
    }
    if( month <10 ){
        month = "0" + month;    
    }
    let result_1 = ` ${day} - ${month} - ${date.getFullYear()}`;
    let result_2 = ` ${day} / ${month} / ${date.getFullYear()}`;
    let result_3 = ` ${month} - ${day} - ${date.getFullYear()}`;
    let result_4 = ` ${month} / ${day} / ${date.getFullYear()}`;
    document.getElementById('dd-mm').innerHTML = result_1;
    document.getElementById('dd/mm').innerHTML = result_2;
    document.getElementById('mm-dd').innerHTML = result_3;
    document.getElementById('mm/dd').innerHTML = result_4;

}
//bai 3.
function ex3(){
    let number = document.getElementById('number').value;
    let n =  number.length;
    for(i = 0 ; i < n ; i++){
        if(number[i] > number[i+1]){
            document.getElementById("result_3").innerHTML= "dãy số không tăng";
            break;
        }if(number[i] <= number[i+1]){
            document.getElementById("result_3").innerHTML= "dãy số tăng";
        }
    }
}
//bai 4.
function ex4(){
    let textIn = document.getElementById('text').value;
    let textOut = "";
    let n = textIn.length;
    for( var i=0; i<=n; i++ ){
        if(( textIn[i] == "~" )){
            alert("khong duoc phep");
            break;
        }
        textOut  += String.fromCharCode(textIn.charCodeAt(i) + 1);
        document.getElementById("result_4").innerHTML = textOut;
    }
}
//bai 5. 
function ex5(){
    let textIn = document.getElementById('text_odd').value;
    let textOut = "";
    let n = textIn.length;
    let j = (n-1)/2 - 1;
    if( n%2 == 0 || n <= 3){
        alert("co chieu dai le");
        return;
    }
    textOut = textIn.substr( j, 3);
    document.getElementById("result_5").innerHTML = textOut;
}
//bai 6.
function ex6(){
    let numberIn = document.getElementById('number_repeat').value;
    let arr = numberIn.split(' ');
    let n = arr.length;
    let numberOut = arr[0];
    let s;
    let max = 0;
    for( let i=0; i <= n; i++){
        s = 1;
        for( let j=0; j<= n; j++){
            if(arr[i]==arr[j]){
                s++;
            }
        }
        if( s >= max ){
            max = s;
            numberOut = arr[i];
        }
    }
    document.getElementById('result_6').innerHTML = numberOut;
}


//bai 7.
function ex7(){
    let textIn = document.getElementById('text_seach').value;
    let textOut = "";
    if( textIn.indexOf('java') == -1){
        textOut = " không tìm thấy 'java' trong chuỗi ";
    }else{
        textOut = " tìm tất 'java' trong chuỗi tại vị trí :" + textIn.indexOf('java') + 1;
    }
    document.getElementById("result_7").innerHTML = textOut;
}
//bai 8.
function ex8(){
    let date = new Date();
    let arr = ["một", "hai", "ba", "tư", "năm", "sáu", "bảy", "tám", "chín", "mười", "mười 11", " mười hai"];
    let month = arr[date.getMonth()]; 
    let textOut = date.getMonth() + 1 + " - tháng " + month;
    document.getElementById("result_8").innerHTML = textOut;
}
//bai 9.
function ex9(){
    let textIn = document.getElementById("text_long").value;
    let text = textIn.split(" ");
    let textOut = "";
    let n = text.length;
    let max = 0;
    for( var i = 0; i < n; i++){
        if( textIn.length == 0) alert("vui lòng nhập vào");
        if( text[i].length > max){
            max = text[i].length;
            textOut = text[i];
        }
    }
    document.getElementById("result_9").innerHTML = textOut;

}
//bai 10.
function ex10(){
    let numberFirst =  document.getElementById('number_first').value;
    let numberLast = document.getElementById('number_last').value;
    let textOut = [];
    if( numberFirst > numberLast){
        alert("vui long nhap lai");
    }else{
        for( var n = numberFirst; n <= numberLast; n++){
            if(n==1){
                continue;
            }
            if( n==2 ){
                textOut.push(2);
            }else{
                for( var i = 2; i < numberLast; i++){
                    if( n%2==0){
                        continue;
                    }else{
                        textOut.push(n);
                        break;
                    }
                }
            }
        }
    }
    document.getElementById("result_10").innerHTML = textOut.join("-");
}
