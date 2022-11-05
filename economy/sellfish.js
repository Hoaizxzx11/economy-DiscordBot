module.exports = {
  
  name: "hopqua",
  code: `
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];5]]
$setGlobalUserVar[fish;$sub[$getGlobalUserVar[fish];1]]
$title[__**Mở Quà**__]
$color[00ff59]
$description[
**@$username Đã mở 1 hộp quà và nhận được 5 điểm.**]
$onlyIf[$getGlobalUserVar[fish]>=1;Bạn không có hộp quà để mở!.]`
}
