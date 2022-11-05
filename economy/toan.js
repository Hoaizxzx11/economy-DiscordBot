module.exports = {

  

  name: "toan",

  code: `$description[@$username Học toán và làm được bài toán $randomText[**1+1=2;Giải phương trình;Số tự nhiên nào khi đem nhân với 3 và trừ đi 2 thì sẽ cho ra đáp án là số đảo ngược của chính nó.;Tìm số lớn nhất trong các số sau: √14,2√5; 

],Bạn được cô giáo Thảo cho **$random[0;1] phiếu bé ngoan.** \`$getServerVar[prefix]bengoan\` để đổi phiếu bé ngoan lấy 5 điểm GPA]

$color[$random[0;999999]]

$setGlobalUserVar[toan;$sum[$getGlobalUserVar[toan];$random[0;1]]]

$setGlobalUserVar[health;$sub[$getGlobalUserVar[health];$random[0;5]]]

$globalCooldown[2m;**⏰ Chờ %time% Cô giáo Thảo đi dự giờ và sẽ quay trở lại!**]

$onlyIf[$getGlobalUserVar[health]>=30; Trí thông minh của bạn đang ở mức 30% và không thể học ! Hãy dùng điểm GPA để đổi lấy thuốc bổ não.  .]

$onlyIf[$getGlobalUserVar[fishrod]>=1;Bạn không có sách để học!]`

}


