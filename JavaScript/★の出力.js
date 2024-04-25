document.write("■■■問1■■■ <br><br>");


for(var star1 = 1; star1 <= 5; star1++){
    
    //star1の値がtrueである場合、以下の処理を行う
    document.write("★");
}
//上記のfor文の処理が終わるまで繰り返す


document.write("<br><br>■■■問2■■■ <br><br>");


for(var star1 = 1; star1 <= 2; star1++){
    
    for(var star2 = 1; star2 <= 3; star2++){        
        
        //star2の値がtrueである場合、以下の処理を行う
        document.write("★");
    }
    
    //star1の値がtrueである場合、以下の処理を行う
    document.write("<br>");
} 
//上記の2つのfor文の処理が終わるまで繰り返す


document.write("<br>■■■問3■■■ <br><br>");

for(var star1 = 1; star1 <= 2; star1++){
    
    for(var star2 = 1; star2 <= 5; star2++){   
        
        //star2の値がtrueである場合、以下の処理を行う
        document.write("☆");
    }
    
    //star1の値がtrueである場合、以下の処理を行う
    document.write("<br>");
}
//上記の2つのfor文の処理が終わるまで繰り返す


document.write("<br>■■■問4■■■ <br><br>");


for(var star1 = 1; star1 <= 4; star1++){
    
    for(var star2 = 1; star2 <= 5; star2++){   
        
        //star2の値がtrueであった場合、以下の処理を行う
        document.write("★");
    }
    
    //star1の値がtrueである場合、以下の処理を行う
    document.write("<br>");
}
//上記の2つのfor文の処理が終わるまで繰り返す


document.write("<br>■■■問5■■■ <br><br>");


for(var star1 = 1; star1 <= 4; star1++){
    
    for(var star2 = 1; star2 <= 3; star2++){   
        
        //star2の値がtrueである場合、以下の処理を行う
        document.write("★");
    }
    
    //star1の値がtrueである場合、以下の処理を行う
    document.write("<br>");
}
//上記の2つのfor文の処理が終わるまで繰り返す


document.write("<br>■■■問6■■■<br><br>");


for(var star1 = 1; star1 <= 3; star1++){
    
    for(var star2 = 1; star2 <= 3; star2++){
        if(star2 % 2 == 1){   
            
            //上記if文の条件式がtrueになる場合、以下の処理を行う
            document.write("★");
        }
        else{
            
            //上記if文の条件式がfalseになる場合、以下の処理を行う
            document.write("☆");
        }
    } 
    
    //star1の値がtrueである場合、以下の処理を行う
    document.write("<br>");
}
//上記の2つのfor文の処理が終わるまで繰り返す


document.write("<br>■■■問7■■■<br><br>");


for(var star1 = 1; star1 <= 4; star1++){
    
    for (var star2 = 1; star2 <= 5; star2++){
        if(star2 % 2 == 1){
            
            //上記if文の条件式がtrueである場合、以下の処理を行う
            document.write("★");
        }
        else{
            
            //上記if文の条件式がfalseになる場合、以下の処理を行う
            document.write("☆");
        }
    }
    
    //star1の値がtrueである場合、以下の処理を行う
    document.write("<br>");
}
//上記の2つのfor文の処理が終わるまで繰り返す


document.write("<br>■■■問8■■■<br><br>");


for(var star1 = 1; star1 <= 5; star1++){
    
    for(var star2 = 1; star2 <= star1; star2++){
        
        //star2の値がtrueである場合、以下の処理を行う
        document.write("★");
    }
    
    //star1の値がtrueである場合、以下の処理を行う
    document.write("<br>");
}
//上記の2つのfor文の処理が終わるまで繰り返す