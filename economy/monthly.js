module.exports = {

  

  name: "sach-toan",

  code: `

$description[**@$username Đã đổi được quyển sách Toán !!**]

$setGlobalUserVar[diem;$sub[$getGlobalUserVar[diem];5]]

$setGlobalUserVar[sach-toan;$sum[$getGlobalUserVar[sach-toan];1]]

$onlyIf[$getGlobalUserVar[diem]>=5;Bạn không đủ điểm GPA để đổi lấy sách!]`

}
