module.exports = {
  
  name: "checkdiem",
  aliases: ['d', 'diem'],
  code: `$title[Điểm của $username]
$thumbnail[$userAvatar[$authorID]]
$description[ **| Điểm**
$$getGlobalUserVar[cash]




$color[$random[0;999999]]
$footer[@$username RoomRoom]
$addTimestamp`
}
