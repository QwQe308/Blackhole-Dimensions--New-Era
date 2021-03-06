function mirrorizeTimesGain(){
    if(player.rl4chall != null) return zero
    var gain = one
    if(hasRl4Milestone(9)) gain = gain.mul(getMMGain().add(1).root(4))
    return gain
}
function doRl4(force = false){
    if(player.cp.lt(getRl4Req()) && !force) return
    if(player.cp.gte(getRl4Req()) && !force) player.mirrorMatter = player.mirrorMatter.add(getMMGain())
    if(player.cp.gte(getRl4Req()) && !force) player.mirrorShard = player.mirrorShard.add(getMSGain())
    player.bestMirrorMatterGain = player.bestMirrorMatterGain.max(getMMGain())
    if(!force) player.mirrorizeTimes = player.mirrorizeTimes.add(mirrorizeTimesGain())

    //reset
    player.mass = zero
    player.ts = zero
    player.ce = zero
    for(i in basicDimNums){
        player.bd[i].level = zero
        player.bd[i].num = zero
        player.bd[i].procmult = one
        player.td[i].level = zero
        player.td[i].num = zero
        if(i == 0) player.td[i].procmult = zero
        else player.td[i].procmult = one

        player.cd[i].num = zero
        player.cd[i].level = zero
        if(i == 0) player.cd[i].procmult = zero
        else player.cd[i].procmult = one

        player.md[i].num = player.md[i].level
        if(i == 0) player.md[i].procmult = zero
        else player.md[i].procmult = one
    }

    player.rl1 = zero
    player.rl2 = zero

    player.t = zero
    player.c20Nerf = one

    player.cp = zero
    player.acp = zero
    if(!hasRl4Milestone(5)) player.challComp = []
    if(!hasRl4Milestone(4)) player.cu = []
    if(hasRl4Milestone(3) && !hasRl4Milestone(4)) player.cu = [11,12,13,14,15,21,22,23,24,25]
    player.cpBooster = zero

    player.mirrorize = true
    player.mirror = zero
    player.am = zero
    player.en = zero
}
function getMMGain(cp = player.cp){
    var gain = cp.root(getRl4Req().add(10).log10()).div(10).pow(2)
    if(!player.mirrorize) gain = one
    if(player.rl4chall != null) return zero
    return sc("MM",gain)
}
function getMSGain(cp = player.cp){
    var gain = cp.root(getRl4Req().add(10).log10()).div(10).pow(2)
    if(!player.mirrorize) gain = one
    if(player.rl4chall == null) gain = gain.pow(getRl4ChallRew(1,1)).mul(getRl4ChallRew(1,2))
    return sc("MS",gain)
}
function getRl4Req(){
    var req = n(1e20)
    if(!player.mirrorize) req = n(1e100)
    return req
}
function updaterl4(){
    if(player.mirrorize) close("row5cu")
    else open("row5cu")
    if(SecondTab==`???????????????`){
        w(`MM`,`?????? ${format(player.mirrorMatter)} ?????????, ${format(player.mirrorShard)} ????????????, ${format(player.mirrorizeTimes)} ???????????????`)
        w(`rl4`,`??????????????? ${format(getMMGain())} ????????? + ${format(getMSGain())} ???????????? + ${format(mirrorizeTimesGain())} ??????????????? (?????? ${format(getRl4Req())} ??????????????????)`)
    }
}