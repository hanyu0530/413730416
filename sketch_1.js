
let angle =0;
let r =255,g=0,b=0;


function setup() {  //設定初始內容,只會執行一次
    createCanvas(windowWidth, windowHeight);//產生一個畫布
    background("#023e8a") //設定背景顏色
  }



  
  function draw() {
    background("#d5bdaf")
    rectMode(CENTER)
    noFill()  //以下畫的物件不要充滿顏色
    stroke("#ffb703")//線條的顏色
    strokeWeight(3) //線條的粗細
    //宣告變數
    var rect_width  =   50  +   mouseX/10   //方形的寬度
    var bc_width    =   50  +   mouseY/10   //大圓的寬度
    var sc_wudth    =   25  +   mouseX/100  //小圓的寬度


//繪製形狀的網格
for(let j=0;j<20;j++){
    for(let i=0;i<40;i++){
        if(j<5){    
            stroke("#004e89")
        }else   if(j<10){
            stroke("#4cc9f0")
        }else{stroke("#a2d2ff")
    }
          
        ellipse(25+50*i,25+50*j,bc_width)   //在座標(X:25,25)劃一個直徑50的圓
        rect(25+50*i,25+50*j,rect_width)    //畫方形,在座標(X:25,25)劃一個直徑為50的方形
        ellipse(50+50*i,50+50*j,sc_wudth)   //畫小圓,直徑為25
    
    }
}

//更新顏色漸變
r=(r+1)%256
g=(r+2)%256
b=(r+3)%256

//設置字母的顏色
fill(r,g,b);
textSize(150);
textAlign(CENTER,CENTER);
translate(width/2,height/2);
rotate(angle);
text('SUMMER',0,0);
angle+=0.02

  }
