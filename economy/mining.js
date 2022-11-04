module.exports = {
  
  name: "toan.",
  code: `$setGlobalUserVar[diamond;$sum[$getGlobalUserVar[diamond];$random[0;5]]]
$setGlobalUserVar[health;$sub[$getGlobalUserVar[health];$random[0;5]]]

$title[**$username** Học toán:]
$color[$random[10000;999999]]
$description[Bạn giải được bài toán và được cô giáo cho $random[0;5] hộp quà!, \`$getServerVar[prefix]hopqua\` để đổi lấy 5 điểm GPA.]
$globalCooldown[2s;**⏰ Chờ %time% cô giáo đi livetream Tiktok và sẽ quay trở lại ngay.!**]

$onlyIf[$getGlobalUserVar[health]>=30; Trí thông minh của bạn ở mức 30% và không thể học tiếp! Dùng điểm GPA để đổi lấy thuốc bổ não.]`
}
