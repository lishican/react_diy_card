// https://hotel.189free.cn/login/login


// account
// :
// "15999937588"
// captchaCode
// :
// "5628"
// openId
// :
// "1cf40c9f-2643-42cb-912e-2e7fb925494d"
// password
// :
// "123456aB"

// {"code":0,"desc":"操作成功","result":{"tokenId":"bf237531326828baa5d1c868d508c909","busiId":"1038900001","firstLogin":0,"shops":[{"id":"1038900001","name":"广州某酒店","areaCode":null,"tradeId":null}],"statisDate":1511770957306,"token":{"tokenId":"bf237531326828baa5d1c868d508c909","user":{"id":9035,"account":"15999937588","createdts":1507774023000,"creator":"kdadmin","description":"","status":1,"name":"郭志凌","type":2,"canal":1,"password":"123456aB","updatedts":1507774023000,"plateformId":2,"editor":"kdadmin","isClock":0},"sysResources":[{"id":1023,"code":"","description":"酒店客流分析","name":"酒店客流分析","uri":"","levelId":1,"parentId":1023,"resFlag":"","resType":null,"plateformId":2},{"id":10152,"code":"","description":"微信小程序","name":"微信小程序","uri":"","levelId":2,"parentId":1023,"resFlag":"","resType":null,"plateformId":2},{"id":10153,"code":"","description":"小程序---今日客流","name":"今日客流","uri":"/wxapp/busi/todayCust","levelId":3,"parentId":10152,"resFlag":"","resType":null,"plateformId":2},{"id":10154,"code":"","description":"微信小程序--历史趋势","name":"历史趋势","uri":"/wxapp/busi/hisTrend","levelId":3,"parentId":10152,"resFlag":"","resType":null,"plateformId":2},{"id":10155,"code":"","description":"微信小程序--总体概况","name":"总体概况","uri":"/wxapp/busi/getDevice","levelId":3,"parentId":10152,"resFlag":"","resType":null,"plateformId":2},{"id":10156,"code":"","description":"微信小程序--修改密码","name":"修改密码","uri":"/wxapp/busi/chgPassword","levelId":3,"parentId":10152,"resFlag":"","resType":null,"plateformId":2},{"id":10157,"code":"","description":"微信小程序--竞争--入住率","name":"竞争--入住率","uri":"/wxapp/busi/getCheckInRate","levelId":3,"parentId":10152,"resFlag":"","resType":null,"plateformId":2},{"id":10158,"code":"","description":"竞争--4项指数","name":"竞争--4项指数","uri":"/wxapp/busi/getServer","levelId":3,"parentId":10152,"resFlag":"","resType":null,"plateformId":2}],"shops":[{"id":"1038900001","name":"君华海逸酒店","addr":"广东省汕头市金平区君华海逸酒店","tradeId":1,"domainId":3,"busiCustId":1038900,"province":"广东省","city":"汕头市","area":"金平区","isAuth":1,"jd":116.714,"wd":23.3671,"policeId":null,"creater":"9020","createDate":1507800597000,"modifier":"9020","modifyDate":1510732341000,"imgSrc":"/upload/img/f2ede9dd-9af3-48e9-9f62-ba9a60137a85.jpg"}],"custs":[{"id":1038900,"name":"汕头君华海逸酒店有限公司","nodeId":"440500000000","createTime":1504076548000}]}}}


// 设备概况
// https://hotel.189free.cn/wxapp/busi/getDevice
// shopId
// :
// "1038900001"

// {"code":0,"desc":"操作成功","result":{"apOnLineTotal":12,"checkInPeop":112,"onLinePeop":78,"apTotal":320}}

// 今天客流
/*https://hotel.189free.cn/wxapp/busi/todayCust

shopId
:
"1038900001"


{"code":0,"desc":"操作成功","result":{"lineDatas":{"yestdayDatas":["44","18","12","23","25","22","10","44","49","23","90","55"],"todayDatas":["35","17","7","19","19","17","15","28","0","0","0","0"],"days":["00-02","02-04","04-06","06-08","08-10","10-12","12-14","14-16","16-18","18-20","20-22","22-24"]},"nowOnLinePeop":"9","prevOnLinePeop":"9","chkInRate":"17.68","statisDate":"2017112715","prevNetSucc":"146","netSucc":"172","prevChkInRate":"23.15"}}

 



// 竞争指数
https://hotel.189free.cn/wxapp/busi/getCheckInRate

{"code":0,"desc":"操作成功","result":{"areaRate":0.2627,"tradeRate":0.2503,"shopRate":0.4332}}




服务指数
https://hotel.189free.cn/wxapp/busi/getServer
{"code":0,"desc":"操作成功","result":{"fw":{"hy":["0.57","0.64","0.68"],"cy":["0.23","0.14","0.19"],"zp":["感觉有点乱服务","服务到位","打客房服务电话要毛巾啥的反应还是挺快的"],"scoreTotal":3.0,"x":["好评率","中评率","差评率"],"hp":["别的服务都挺好的","服务挺好的,完美服务","服务到位不错"],"cp":["酒店对生客真的太没有服务意识了,比连锁酒店的服务质量都差,前台素质太差","服务员各方面还有保安问下怎么到地下停车场","游泳池下午班的服务人员态度恶劣,带位的只服务自己认识的客人"],"zy":["0.2","0.22","0.13"]},"yj":{"hy":["0.6","0.59","0.59"],"cy":["0.26","0.26","0.23"],"zp":["设施齐备","房间很大","设施有点老"],"scoreTotal":3.6,"x":["好评率","中评率","差评率"],"hp":["房间很干净,环境也挺安静的周边的粿粉汤很好吃","房间很干净,设备也很不错,听客人说晚上也很安静","房间干净整洁,周围环境方便购物逛街"],"cp":["刚进房的时候都要摸黑进入房间很烦人,要知道那些第一次住的客人得在黑暗的房间里转半天才能找到开关,明明房间插着取电卡,每次都得打着手机电筒摸去床头旁边的中控面板才能开房间灯","最差就系房间卫生,开关设备差好多按不到开不到的","房间里的家具都是有年纪的了,对了酒店也有健身房,不过设施有点旧,设施有点陈旧了,床头是皮质的,房间里面放的这个红茶味道超级难喝,酒店的房间还是挺大的,不过就是装修和设施一看就能看出岁月的沧桑,但是房间"],"zy":["0.14","0.15","0.18"]},"zt":{"hy":["0.72","0.74","0.73"],"cy":["0.17","0.13","0.16"],"zp":["价廉物美的酒店","价廉物美的酒店","很一般的酒店！最多4星"],"scoreTotal":3.8,"x":["好评率","中评率","差评率"],"hp":["非常棒的入住体验，位置好找，离苏宁广场不远，酒店设施和环境都很赞，房间舒适明亮，风景不错，整体性价比很高，还会来住。","汕头性价比很好的酒店，每次出差汕头都会选这家酒店，交通也很方便，周边有商圈很多，吃玩都方便。房间够大。","酒店设施齐全，交通方便，生活便利，硬件新颖，安静舒适，服务到位，价格合理。"],"cp":["没啥大毛病，但是每次入住，刚进房的时候都要摸黑进入房间很烦人！每次都得打着手机电筒摸去床头旁边的中控面板才能开房间灯！你们能不能考虑一下天黑后入住的客人的感受？？明明房间插着取电卡，给人留个走廊灯不行","酒店对生客真的太没有服务意识了；比连锁酒店的服务质量都差；前台素质太差","超级差的酒店！没性价比！以后不会再住的！"],"zy":["0.11","0.13","0.11"]},"ws":{"hy":["0.74","0.7","0.66"],"cy":["0.17","0.19","0.2"],"zp":["服务态度连打扫房间的阿姨都不如,卫生方便一般","卫生,特别是卫生间的水够大","但是前天说房间都没打扫好"],"scoreTotal":3.9,"x":["好评率","中评率","差评率"],"hp":["很干净舒适","房间很干净舒服","房间还算干净"],"cp":["最差就系房间卫生","已经不干净了,整体的卫生状况也很好,卫生保持的一般,房间里面放的这个红茶味道超级难喝,其他的卫生还是可以的,卫生间的卫生还是不错的","30有男服务员敲门问要不要搞卫生"],"zy":["0.09","0.11","0.14"]}}}




// 历史趋势
https://hotel.189free.cn/wxapp/busi/hisTrend

isRefresh
:
0
shopId
:
"1038900001"
statisBeginDate
:
"20171126"
statisEndDate
:
"20171126"
type
:
1 （1是1天，2是多天）





{"code":0,"desc":"操作成功","result":{"rankDatas":{"floorAnalyse":{"vals":[{"data":"348","name":"18层"},{"data":"317","name":"17层"},{"data":"312","name":"14层"},{"data":"308","name":"12层"},{"data":"291","name":"16层"}]},"roomAnalyse":{"vals":[{"data":"25","name":"1215房"},{"data":"23","name":"1623房"},{"data":"23","name":"1535房"},{"data":"22","name":"1807房"},{"data":"18","name":"1719房"}]},"statisDate":"2017112715","clientBrandAnalyse":{"vals":[{"data":"63.17","name":"apple"},{"data":"17.36","name":"HUAWEI"},{"data":"9.58","name":"三星"},{"data":"4.49","name":"小米"},{"data":"1.49","name":"OPPO"}]}},"lineDatas":{"dayDatas":["44","18","12","23","25","22","10","44","49","23","90","55"],"days":["00-02","02-04","04-06","06-08","08-10","10-12","12-14","14-16","16-18","18-20","20-22","22-24"]}}}



isRefresh
:
1
shopId
:
"1038900001"
statisBeginDate
:
"20171113"
statisEndDate
:
"20171126"
type
:
2


{"code":0,"desc":"操作成功","result":{"lineDatas":{"dayDatas":["278","245","97","408","371","395","221","314","297","413","361","422","379","332"],"days":["20171113","20171114","20171115","20171116","20171117","20171118","20171119","20171120","20171121","20171122","20171123","20171124","20171125","20171126"]}}}

*/



/*   header: {
  tokenId: token
}, 














export const CODE_URI = "https://hotel.189free.cn/login/captchaCode";
*/