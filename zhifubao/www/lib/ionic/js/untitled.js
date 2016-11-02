User.get(fromId)
  .then(function(user) {
    return user.friends.find(toId); },
function(err) {
  // 没找到用户
})
.then(function(friend) {
  return user.sendMessage(friend, message);
}, function(err) {
  //用户的朋友返回异常  
})
.then(function(success) {
  // user was sent the message
}, function(err) { 
  //发生错误 
});