User
#http://stg-api.meikeapp.party/
### desc: get user detail  得到用户详细信息
# host:  /api/v1/users/:uid
# method:  GET
# params: {}
# resp: {id, mobile, nickname, source, account: {amount} }
###

### desc: sign in  登录
# host:  /api/v1/users/signin
# method:  GET
# params: {mobile, pass}
# resp: {tk, uid}
###

### desc: sign up   注册
# host:  /api/v1/users/signup
# method:  POST
# params: {mobile, pass}
# resp: {tk, uid}
###

### desc: request sms code 请求验证码
# host:  /api/v1/users/sms/send
# method:  POST
# params: {mobile}
# resp: {}
###

### desc: verify sms code 验证验证码
# host:  /api/v1/users/sms/verify
# method:  POST
# params: {mobile, code}
# resp: {true/false}
###

Post

### desc: get likes from one post 
# host:  /api/v1/post/:id/likes
# method:  GET
# params: {page, limit}
# resp: {data, count}
###

### desc: get tips from one post
# host:  /api/v1/post/:id/tips
# method:  GET
# params: {page, limit}
# resp: {data, count}

### desc: get comments from one post 某一篇帖子的评论
# host:  /api/v1/post/:id/comments
# method:  GET
# params: {page, limit}
# resp: {data, count}
###

### desc: create a post 创建一篇帖子
# host:  /api/v1/posts
# method:  POST
# params: {uid, content, images}
# resp: {id, content, user, images, created_at}
###

### desc: add a like to post 一篇帖子增加点赞
# host:  /api/v1/likes
# method:  POST
# params: {uid, pid}
# resp: {}
###

### desc: delete a like from post 取消点赞
# host:  /api/v1/likes
# method:  DELETE
# params: {uid, pid}
# resp: {}
###

Tip

### desc: tip a post
# host:  /api/v1/tips
# method:  POST
# params: {uid, pid, amount}
# resp: {}
###

Like

### desc: add a like to post 为一个贴子点赞
# host:  /api/v1/likes
# method:  POST
# params: {uid, pid}
# resp: {}
###

### desc: delete a like from post
# host:  /api/v1/likes
# method:  DELETE
# params: {uid, pid}
# resp: {}
###

Image

### desc: get image uptoken
# host:  /api/v1/images/uptoken
# method:  GET
# params: {}
# resp: {uptoken}

Comment

### desc: create comment 发表评论
# host:  /api/v1/comments
# method:  POST
# params: { content, uid, pid }
# resp: { data: content所包含的信息 }
###

### desc: delete comment
# host:  /api/v1/comments/:id
# method:  DELETE
# params: {}
# resp: {data or error}
###

首页列表

### desc:  get all posts  首页列表
# host:  /api/v1/posts
# method:  GET
# params: {page, limit}
# resp: {[id, content, user {id, mobile}, images {[url]}, created_at]}
###