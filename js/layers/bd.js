function getMaxMass(){
    var limit = n(Number.MAX_VALUE)
    return limit
}


var bdMult = {}
var BDcost = [n(10),n(1000),n(1e9),n(1e64)]
var BDcostMult = [n(100),n(1000),(1e4),n(1e8)]
function buyMaxbd(){
    for(i in basicDimNums) buybd(i)
}
function getAllbdMult(){
    var mult = n(1)
    mult = mult.mul(getRl1Mult())
    return mult
}
function getAnybdMult(dimNum){
    var mult = bdMult.all
    var level = player.bd[dimNum].level
    if(level.gte(150)) level = level.div(1.5).add(50)
    level = powsoftcap(level,n(150),1.25)
    mult = mult.mul(getbdLevelBoostBase().pow(level))
    mult = mult.mul(getTSEff(dimNum))
    return mult
}
function getbdLevelBoostBase(dimNum){
    var base = n(2)
    return base
}
function buybd(dimNum){
    var bulkStat = bulkBuy(player.mass,BDcost[dimNum],player.bd[dimNum].level,BDcostMult[dimNum])
    if(bulkStat.bulk.lt(1)) return
    player.bd[dimNum].num = player.bd[dimNum].num.add(bulkStat.bulk)
    player.bd[dimNum].level = player.bd[dimNum].level.add(bulkStat.bulk)
    player.mass = player.mass.sub(bulkStat.cost)
}
function updatebd(){
    //计算部分!
    var proc = n(1)
    bdMult.all = getAllbdMult()
    for(i in basicDimNums) bdMult[i] = getAnybdMult(i)
    for(i in basicDimNums){
        i = Number(i)
        if(i<=2) player.bd[i].num = player.bd[i].num.add(player.bd[i+1].num.mul(bdMult[i+1]).root(dimNerf).mul(diff).div(10))
        player.bd[i].procmult = player.bd[i].procmult.add(player.bd[i].num.mul(bdMult[i]).mul(diff))
        proc = proc.mul(player.bd[i].procmult)
    }

    //rl2!
    proc = proc.pow(getRl2Exp())
    //sc
    if(proc.gte(Number.MAX_VALUE)) proc = proc.div(1e25).add(Number.MAX_VALUE)
    proc = powsoftcap(proc,n(Number.MAX_VALUE),1.25)

    player.mass = player.mass.add(proc.mul(diff)).min(getMaxMass())

    //显示部分!
    w("massNum",`${format(player.mass,0)}`)
    w("massProc",`(+ ${format(proc,0)} /s)`)
    if(SecondTab!="黑洞维度") return close("bd")
    open("bd")
    for(i in basicDimNums) w("bd"+i,getBasicDimDesp("黑洞",i,"物质",bdMult[i],player.bd[i].procmult,player.bd[i].num)+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+getBasicBuyButtonDesp(showBulkBuy(player.mass,BDcost[i],player.bd[i].level,BDcostMult[i]),"物质"))
}