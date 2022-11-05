module.exports = {
  
  name: "thuocbo",
  code: `
$description[**@$username Đã đổi điểm lấy thuốc bổ não💊 !!**]
$setGlobalUserVar[diem.;$sub[$getGlobalUserVar[diem];10]]
$setGlobalUserVar[hm;$sum[$getGlobalUserVar[hm];1]]
$onlyIf[$getGlobalUserVar[diem]>=10:Bạn không đủ điểm để đổi lấy thuốc bổ!]`
}
