const SERVER_PORT = 3000;
const CAR_TYPE = {
    0: "未知",
    1: "小客车",
    2: "大货车",
    3: "大巴车",
    4: "行人",
    5: "自行车",
    6: "电动车",
    7: "中巴车",
    8: "危化车",
    9: "遗撒物",
    10: "小货车",
    11: "中货车",
    12: "救护车",
    13: "消防车",
    14: "机动摩托车",
    15: "三轮车",
    150: "外卖车",
    151: "外卖车（美团）",
    152: "外卖车（饿了么）",
    153: "外卖车（肯德基）",
    154: "外卖车（麦当劳）",
    160: "快递车",
    161: "快递车（京东）",
    162: "快递车（顺丰）",
    163: "快递车（申通）",
    164: "快递车（圆通）",
    165: "快递车（中通）",
    166: "快递车（韵达）",
    170: "货车-车轴型为11",
    171: "货车-车轴型为12",
    172: "货车-车轴型为15",
    173: "货车-车轴型为122",
    174: "货车-车轴型为112",
    175: "货车-车轴型为125",
    176: "货车-车轴型为115",
    177: "货车-车轴型为127",
    178: "货车-车轴型为1125",
    179: "货车-车轴型为155",
    180: "货车-车轴型为1127",
    181: "货车-车轴型为117",
    182: "货车-车轴型为147",
    183: "货车-7轴及以上",
};
const MODEL_TYPE_MAP = {
    0: "1",
    9: "1",
    13: "1",
    153: "150",
    154: "150",
    160: "11",
    161: "11",
    162: "11",
    163: "11",
    164: "11",
    165: "11",
    166: "11",
    171: "170",
    172: "170",
    173: "170",
    174: "170",
    175: "170",
    176: "170",
    177: "170",
    178: "170",
    179: "170",
    180: "170",
    181: "170",
    182: "170",
    183: "170",
};
const LICENSE_COLOR_LABEL = {
    0: "蓝色",
    1: "黄色",
    2: "黑色",
    3: "白色",
    4: "渐变绿",
    5: "黄绿双拼",
    6: "蓝白渐变",
    7: "临时牌",
    8: "暂无定义",
    9: "未确定",
    11: "绿色",
    12: "红色",
};
const EVENT_TYPE = {
    1: "机动车违停",
    2: "非机动车逆行",
    3: "机动车逆行",
    4: "占用专用车道",
    5: "行人在机动车道逗留",
    6: "机动车超速",
    7: "非机动车超速",
    8: "机动车慢行",
    9: "机动车压线",
    10: "非机动车横穿马路",
    11: "行人横穿马路",
    12: "机动车横穿马路",
    13: "机动车闯红灯",
    14: "行人闯红灯",
    15: "机动车占用公交车道",
    16: "机动车实线违规变道",
    17: "遗洒物",
    18: "交通事故",
    19: "占用应急车道",
    20: "隧道悬臂物",
    21: "行人进入隧道",
    22: "非机动车进入隧道",
    23: "非机动车越线停车",
    24: "非机动车占用机动车道",
    25: "非机动车闯红灯",
    26: "非机动车违规载人",
    27: "机动车不按规定车道行驶",
    28: "机动车占用非机动车道",
    29: "机动车越线停车",
    30: "施工",
    31: "机动车未礼让行人",
    36: "S形驾驶",
    101: "能见度异常",
    102: "光强异常",
    103: "CO异常",
    104: "火灾",
    401: "疑似事故",
    501: "畅通",
    502: "轻微拥堵",
    503: "中度拥堵",
    504: "重度拥堵",
    607: "危险驾驶",
};
const CAR_COLOR_LABEL = {
    0: "未知",
    1: "白色",
    2: "黑色",
    3: "红色",
    4: " 银色",
    5: "黄色",
    6: "蓝色",
    7: " 彩色 / 杂色",
    8: "棕色",
    9: "灰色",
};
const CAR_COLOR = {
    0: "#d5d9e5",
    1: "#d5d9e5",
    2: "#090e11",
    3: "#e6101c",
    4: "#8594ab",
    5: "#fcc951",
    6: "#2babda",
    7: "#f09f16",
    8: "#4b3829",
    9: "#5f6368",
};
const LICENSE_IMAGES = {
    license0: "../assets/images/license/0.png",
    license1: "../assets/images/license/1.png",
    license2: "../assets/images/license/2.png",
    license3: "../assets/images/license/3.png",
    license4: "../assets/images/license/4.png",
    license5: "../assets/images/license/5.png",
    license6: "../assets/images/license/6.png",
    license9: "../assets/images/license/9.png",
    license11: "../assets/images/license/11.png",
    license12: "../assets/images/license/12.png",
};
const LIGHT_IMAGES = {
    "1red": "../assets/images/light/leftRed.png",
    "1yellow": "../assets/images/light/leftYellow.png",
    "1green": "../assets/images/light/leftGreen.png",
    "2red": "../assets/images/light/sRed.png",
    "2yellow": "../assets/images/light/sYellow.png",
    "2green": "../assets/images/light/sGreen.png",
    "3red": "../assets/images/light/rightRed.png",
    "3yellow": "../assets/images/light/rightYellow.png",
    "3green": "../assets/images/light/rightGreen.png",
    "4red": "../assets/images/light/backRed.png",
    "4yellow": "../assets/images/light/backYellow.png",
    "4green": "../assets/images/light/backGreen.png",
};
const MAP_OPTION = {
    container: "map",
    style: "http://106.120.201.126:14724/style.json",
    center: [117.09, 36.644],
    zoom: 16,
    pitch: 0,
    bearing: 0,
};
