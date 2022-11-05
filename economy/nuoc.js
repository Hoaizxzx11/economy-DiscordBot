module.exports = {
  
  name: "nuoc",
  code: `
$description[**@$username Đã đổi được chai Sting Đỏ🥛 !!**]
$setGlobalUserVar[diem;$sub[$getGlobalUserVar[diem];10]]
$setGlobalUserVar[nuoc;$sum[$getGlobalUserVar[nuoc];1]]
$onlyIf[$getGlobalUserVar[cash]>=10;Bạn không đủ điểm để đổi!]`
}
