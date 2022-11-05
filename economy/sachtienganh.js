module.exports = {
  
  name: "sachtienganh",
  code: `
$description[**@$username Đã đổi được quyển sách Tiếng Anh !!**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];5]]
$setGlobalUserVar[fishrod;$sum[$getGlobalUserVar[fishrod];1]]
$onlyIf[$getGlobalUserVar[cash]>=75;Bạn không đủ điểm GPA để đổi lấy sách!]`
}
