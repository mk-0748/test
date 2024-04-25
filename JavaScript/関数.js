document.write("■■■問1■■■<br><br>");


//円の面積を計算を行う関数。
//円の面積の公式　= 半径 × 半径 × 3.14

function menseki (hankei){
    return (hankei * hankei * 3.14) + "<br>";
}

//計算を行った円の面積の結果を出力する。

document.write(menseki(5));
document.write(menseki(7));
document.write(menseki(10));


document.write("<br>■■■問2■■■<br><br>");


//各グループの遊園地の料金の合計金額を計算を行う関数。
//料金の合計金額 = (大人の人数 × 500円) × (子供の人数 × 200円)

function totalPrice(otona,kodomo){
    return (otona * 500) + (kodomo * 200) + "円です。"  + "<br>";
}
function displayPrice(group, otona, kodomo)
{
    return group + ' GROUP の入園料、合計金額は大人' + otona + '人、子供' + kodomo + '人なので' + "円です。" + otona * 500 + kodomo * 200;

document.write(totalPrice(2, 4));
document.write(totalPrice(1, 5));
document.write(totalPrice(3, 7));
document.write(displayPrice("D", 100, 100));
document.write(displayPrice("E", 10, 1));
