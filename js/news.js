var newsArray;
function toggle(newsID){
    return true
}

function updateNewsArray() {
newsArray = [
    ["什么是软上限?就是1+1=1.14514. - QwQe308",toggle(1)],
    ["为什么维度产量这么低？问就是^0.5/10. - QwQe308",toggle(2)],
    ["别问什么时候更新，问就是5小时后. - CaoJinMing",toggle(3)],
    ["2019.4.10 人类首次凝视深渊. - 神之海",toggle(4)],
    ["欢迎来访——你的好邻居 TOM,家住 618 号 - 神之海",toggle(5)],
    ["寻找白洞中…… - 神之海",toggle(6)],
    ["你有尝试过往黑洞里丢奇异物质吗? - 神之海",toggle(7)],
    ["什么是膨胀?就是黑洞零维×1eFGHIJKLMN1000. - 银千叶",toggle(8)],
    ["有一位未知用户传下了一道加密信息.破译中...................................>破译中<.......................................................................................................................>...破译失败 正在重试...<.....................................................................................................................................*你破译出来了一串数字:1050424901.................>...核对中...<.....................................................................................................................................................................似乎是一串Q群号? - QwQe308",toggle(9)],
    ["宇宙要坍塌了 救......>失去联系<...... - QwQe308",toggle(10)],
    ["Found NaN In Your Save!Auto Fix It? - QwQe308",toggle(11)],
    ["吾辈男儿当自强，吃个黑洞好凉凉 - 鸭子",toggle(12)],
    ["这其实是一条新闻 - 曦",toggle(13)],
    ["想知道这游戏是谁做的吗?没错,这游戏是做这游戏的人做的 - 陌尘",toggle(14)],
    ["近日我们观测到一个黑洞，但它立刻消失了。据专家推测，可能是Pepe黑洞，也有可能是Doge黑洞。但是经过我们仔细的推论，可能是一个反物质黑洞，突然吸收大量物质爆炸了。 - 曦",toggle(13)],
    ["这其实是一条自我循环的新闻，其实是一条自我循环的新闻，一条自我循环的新闻，自循环的新闻……“我”去哪了？可能是被黑洞吸走了吧。 - 曦",toggle(13)],
    ["众所周知黑洞啥都能吸，光也不例外……什么？你说奥特曼被禁了？ - 陌尘",toggle(14)],
    ["这里有很多黑洞类高质量新闻，你看到了吗？ - 辉影神秘",toggle(14)],
    ["黑洞晒干了沉默，悔得很冲动，就算只是做错也只是怕错过，在一起叫吞噬，分开了叫爆炸(？，是不是说，没有爆炸的黑洞最美 - CaoJinMing",toggle(3)],
    ["你这黑洞多少粒子一个啊？1.79e308，现在哪有黑洞买的啊？你要不要吧 - 辉影神秘",toggle(14)],
    ["吃个黑洞，嗯，好。。。。好家伙你别吃了 - 辉影神秘",toggle(14)],
    ["反物质维度用不同语言翻译114514遍会是什么样的？ - CaoJinMing",toggle(3)],
    [`在今天，只有在今天你才可以拨打电话15757610937去获得1~600物质。只有在今天你可以达到无限，超越无限。[截至日期 ${t.getDate()}] - 曦`,toggle(3)],
    ["《时间简史》里说过，世界上任何物质都有一个与其相反的物质，有你就有反你，你和反你相接触就会产生爆炸，消失在该平行宇宙，黑洞也不例外。与之相反的是白洞 产生爆炸的能量相当于1^80亿万吨TNT爆炸的能量 - 陌尘",toggle(14)],
    ["黑洞上撒点反物质……嗯～美味 - 鸭子",toggle(12)],
    ["1^80亿万=1 - 曦",toggle(13)],
    ["如果一个黑洞丢出了一个袋鼠 那么几个袋鼠可以丢出一个黑洞呢 - 曦",toggle(13)],
    ["黑洞能产生黑洞吗?黑洞产生黑洞是怎么一回事呢﹖黑洞相信大家都很熟悉，但是黑洞质能产生黑洞是怎么回事呢﹖黑洞能生产黑洞，其实是“黑洞““分裂”。那么黑洞为什么可以分裂，相信大家都很好奇是怎么回事。大家可能会感到很惊讶，黑洞能怎么分裂呢﹖但事实就是这样，QwQ也感到非常惊讶。那么这就是关于黑洞生产黑洞的事情了，大家有没有觉得很神奇呢? - 辉影神秘",toggle(14)],
    ["最新消息，我宇宙出现一无证黑洞，现正于Q-WQ星系袭击行星，请各位行星待在本星系内，待有关创造者处理 - 鸭子",toggle(12)],
];} 
var s;
var scrollTimeouts = []; 
var nextMsgIndex;
function doodooWater() {
  s = document.getElementById("news");
  scrollNextMessage();
}

function scrollNextMessage() {
  updateNewsArray();
  //select a message at random

  try {
    do {nextMsgIndex = Math.floor(Math.random() * newsArray.length)} while (!eval(newsArray[nextMsgIndex][1]))
  } catch(e) {
      console.error("Newsarray doesn't work at idx " + nextMsgIndex)
  }

  scrollTimeouts.forEach(function(v) {clearTimeout(v);});
  scrollTimeouts = [];
    
  //set the text
  s.textContent = newsArray[nextMsgIndex][0];
  //get the parent width so we can start the message beyond it
  let parentWidth = s.parentElement.clientWidth;

  //set the transition to blank so the move happens immediately
  s.style.transition = '';
  //move div_text to the right, beyond the edge of the div_container
  s.style.transform = 'translateX('+parentWidth+'px)';

  //we need to use a setTimeout here to allow the browser time to move the div_text before we start the scrolling
  scrollTimeouts.push(setTimeout( function() {
    //distance to travel is s.parentElement.clientWidth + s.clientWidth + parent padding
    //we want to travel at rate pixels per second so we need to travel for (distance / rate) seconds
    let dist = s.parentElement.clientWidth + s.clientWidth + 20; //20 is div_container padding
    let rate = 140; //change this value to change the scroll speed
    let transformDuration = dist / rate;


    //set the transition duration
    s.style.transition = 'transform '+transformDuration+'s linear';
    let textWidth = s.clientWidth;
    //we need to move it to -(width+parent padding) before it won't be visible
    s.style.transform = 'translateX(-'+(textWidth+5)+'px)';
    //automatically start the next message scrolling after this one finishes
    //you could add more time to this timeout if you wanted to have some time between messages
    scrollTimeouts.push(setTimeout(scrollNextMessage, Math.ceil(transformDuration * 1000)));
  }, 100));
}
