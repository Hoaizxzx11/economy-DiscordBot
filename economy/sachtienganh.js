module.exports = {
  
  name: "sachtienganh",
  code: `
$description[**@$username Đã đổi được quyển sách Tiếng Anh !!**]
$setGlobalUserVar[diem;$sub[$getGlobalUserVar[diem];10]]
$setGlobalUserVar[sachtienganh;$sum[$getGlobalUserVar[sachtienganh];1]]
$onlyIf[$getGlobalUserVar[diem]>=10;Bạn không đủ điểm để đổi lấy sách!]`
}
