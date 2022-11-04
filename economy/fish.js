module.exports = {
  
  name: "tienganh",
  code: `$description[Học tiếng anh và nói được từ $randomText[Hello;Hi;What;I love you cô Thảo;Where's are you from; Welcome to RoomRoom;],Bạn được cô giáo Thảo cho **$random[0;5] hộp quà.** \`$getServerVar[prefix]hopqua\` để mở hộp quà lấy 5 điểm GPA]
$color[$random[0;999999]]
$setGlobalUserVar[fish;$sum[$getGlobalUserVar[fish];$random[0;5]]]
$setGlobalUserVar[health;$sub[$getGlobalUserVar[health];$random[0;5]]]

$globalCooldown[2m;**⏰ Chờ %time% Cô giáo Thảo đi dự giờ và sẽ quay trở lại!**]

$onlyIf[$getGlobalUserVar[health]>=30; Trí thông minh của bạn đang ở mức 30% và không thể học ! Hãy dùng điểm GPA để đổi lấy thuốc bổ não.  .]
$onlyIf[$getGlobalUserVar[fishrod]>=1;Bạn không có sách để học!]`
}
