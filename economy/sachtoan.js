module.exports = {
  
  name: "sachtoan",
  code: `
$description[**@$username Đã đổi điểm lấy sách Toán!**]
$setGlobalUserVar[diem;$sub[$getGlobalUserVar[diem];10]]
$setGlobalUserVar[sachtoan;$sum[$getGlobalUserVar[sachtoan];1]]
$onlyIf[$getGlobalUserVar[diem]>=10 Bạn không đủ điểm để đổi lấy sách!]`
}
