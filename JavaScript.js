
let profile00 = document.getElementById('profile00');
profile00.style.color = 'red';




let colors = ['red','black','pink','yellow','green'];
function getRandomNum(max){           
    let randomNum = Math.random();
    let num = Math.round(randomNum * max);
    return num;
};

function changeColor(){
    
    //配列の数を自動取得にしておくと、何通りかを計算するときに自動変更されて超便利！！
        let ColorsLength = colors.length - 1 ;
    //ランダムな数の変数を作成する。（乱数）
    let num = getRandomNum(ColorsLength);
        console.log(num);
    
    //文字色も変えてみる
    //作成した乱数を元に、配列から結果を取得。
    let here = document.getElementsByClassName('here');
    //取得した結果を画面に表示する。
    for (item of here){

        item.style.color = colors[num];
    }
};

    function startfnc()
{
  //関数hyoji()を1000ミリ秒間隔で呼び出す
  setInterval("changeColor()",1000);
};

startfnc();