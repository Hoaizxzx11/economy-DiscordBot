module.exports = {
  
  name: "nuoc",
  code: `
$description[**@$username Đã đổi được chai Sting Đỏ🥛 !!**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];10]]
$setGlobalUserVar[drink;$sum[$getGlobalUserVar[drink];1]]
$onlyIf[$getGlobalUserVar[cash]>=10;Bạn không đủ điểm để đổi!]`
}
