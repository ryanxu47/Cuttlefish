/***********************************
> 应用名称：Pixiv 去广告
> 软件版本：7.14.9
> 下载地址：https://apps.apple.com/us/app/id337248563
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 解锁说明：去除应用最下方广告
> 更新时间：2022-12-03
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载、售卖
          ⚠️⚠️⚠️
		  
[rewrite_local]
# ～ Pixiv去除广告（2022-12-03）@ddgksf2013
^https?:\/\/oauth\.secure\.pixiv\.net\/(auth\/token) url script-response-body https://raw.githubusercontent.com/ryanxu47/Cuttlefish/master/Script/pixivAds.js
