/** 表情字典 */
const faceMap = {
  0: '[惊讶]',
  1: '[撇嘴]',
  2: '[色]',
  3: '[发呆]',
  4: '[得意]',
  5: '[流泪]',
  6: '[害羞]',
  7: '[闭嘴]',
  8: '[睡]',
  9: '[大哭]',
  10: '[尴尬]',
  11: '[发怒]',
  12: '[调皮]',
  13: '[呲牙]',
  14: '[微笑]',
  15: '[难过]',
  16: '[酷]',
  18: '[抓狂]',
  19: '[吐]',
  20: '[偷笑]',
  21: '[可爱]',
  22: '[白眼]',
  23: '[傲慢]',
  24: '[饥饿]',
  25: '[困]',
  26: '[惊恐]',
  27: '[流汗]',
  28: '[憨笑]',
  29: '[悠闲]',
  30: '[奋斗]',
  31: '[咒骂]',
  32: '[疑问]',
  33: '[嘘]',
  34: '[晕]',
  35: '[折磨]',
  36: '[衰]',
  37: '[骷髅]',
  38: '[敲打]',
  39: '[再见]',
  41: '[发抖]',
  42: '[爱情]',
  43: '[跳跳]',
  46: '[猪头]',
  49: '[拥抱]',
  53: '[蛋糕]',
  54: '[闪电]',
  55: '[炸弹]',
  56: '[刀]',
  57: '[足球]',
  59: '[便便]',
  60: '[咖啡]',
  61: '[饭]',
  63: '[玫瑰]',
  64: '[凋谢]',
  66: '[爱心]',
  67: '[心碎]',
  69: '[礼物]',
  74: '[太阳]',
  75: '[月亮]',
  76: '[赞]',
  77: '[踩]',
  78: '[握手]',
  79: '[胜利]',
  85: '[飞吻]',
  86: '[怄火]',
  89: '[西瓜]',
  96: '[冷汗]',
  97: '[擦汗]',
  98: '[抠鼻]',
  99: '[鼓掌]',
  100: '[糗大了]',
  101: '[坏笑]',
  102: '[左哼哼]',
  103: '[右哼哼]',
  104: '[哈欠]',
  105: '[鄙视]',
  106: '[委屈]',
  107: '[快哭了]',
  108: '[阴险]',
  109: '[亲亲]',
  110: '[吓]',
  111: '[可怜]',
  112: '[菜刀]',
  113: '[啤酒]',
  114: '[篮球]',
  115: '[乒乓]',
  116: '[示爱]',
  117: '[瓢虫]',
  118: '[抱拳]',
  119: '[勾引]',
  120: '[拳头]',
  121: '[差劲]',
  122: '[爱你]',
  123: '[不]',
  124: '[好]',
  125: '[转圈]',
  126: '[磕头]',
  127: '[回头]',
  128: '[跳绳]',
  129: '[挥手]',
  130: '[激动]',
  131: '[街舞]',
  132: '[献吻]',
  133: '[左太极]',
  134: '[右太极]',
  136: '[双喜]',
  137: '[鞭炮]',
  138: '[灯笼]',
  140: '[K歌]',
  144: '[喝彩]',
  145: '[祈祷]',
  146: '[爆筋]',
  147: '[棒棒糖]',
  148: '[喝奶]',
  151: '[飞机]',
  158: '[钞票]',
  168: '[药]',
  169: '[手枪]',
  171: '[茶]',
  172: '[眨眼睛]',
  173: '[泪奔]',
  174: '[无奈]',
  175: '[卖萌]',
  176: '[小纠结]',
  177: '[喷血]',
  178: '[斜眼笑]',
  180: '[惊喜]',
  181: '[骚扰]',
  182: '[笑哭]',
  183: '[我最美]',
  184: '[河蟹]',
  185: '[羊驼]',
  187: '[幽灵]',
  188: '[蛋]',
  190: '[菊花]',
  192: '[红包]',
  193: '[大笑]',
  194: '[不开心]',
  197: '[冷漠]',
  198: '[呃]',
  199: '[好棒]',
  200: '[拜托]',
  201: '[点赞]',
  202: '[无聊]',
  203: '[托脸]',
  204: '[吃]',
  205: '[送花]',
  206: '[害怕]',
  207: '[花痴]',
  208: '[小样儿]',
  210: '[飙泪]',
  211: '[我不看]',
  212: '[托腮]',
  214: '[啵啵]',
  215: '[糊脸]',
  216: '[拍头]',
  217: '[扯一扯]',
  218: '[舔一舔]',
  219: '[蹭一蹭]',
  220: '[拽炸天]',
  221: '[顶呱呱]',
  222: '[抱抱]',
  223: '[暴击]',
  224: '[开枪]',
  225: '[撩一撩]',
  226: '[拍桌]',
  227: '[拍手]',
  228: '[恭喜]',
  229: '[干杯]',
  230: '[嘲讽]',
  231: '[哼]',
  232: '[佛系]',
  233: '[掐一掐]',
  234: '[惊呆]',
  235: '[颤抖]',
  236: '[啃头]',
  237: '[偷看]',
  238: '[扇脸]',
  239: '[原谅]',
  240: '[喷脸]',
  241: '[生日快乐]',
  242: '[头撞击]',
  243: '[甩头]',
  244: '[扔狗]',
  245: '[加油必胜]',
  246: '[加油抱抱]',
  247: '[口罩护体]',
  260: '/搬砖中',
  261: '/忙到飞起',
  262: '/脑阔疼',
  263: '/沧桑',
  264: '/捂脸',
  265: '/辣眼睛',
  266: '/哦哟',
  267: '/头秃',
  268: '/问号脸',
  269: '/暗中观察',
  270: '/emm',
  271: '/吃瓜',
  272: '/呵呵哒',
  273: '/我酸了',
  274: '/太南了',
  276: '/辣椒酱',
  277: '/汪汪',
  278: '/汗',
  279: '/打脸',
  280: '/击掌',
  281: '/无眼笑',
  282: '/敬礼',
  283: '/狂笑',
  284: '/面无表情',
  285: '/摸鱼',
  286: '/魔鬼笑',
  287: '/哦',
  288: '/请',
  289: '/睁眼',
  290: '/敲开心',
  291: '/震惊',
  292: '/让我康康',
  293: '/摸锦鲤',
  294: '/期待',
  295: '/拿到红包',
  296: '/真好',
  297: '/拜谢',
  298: '/元宝',
  299: '/牛啊',
  300: '/胖三斤',
  301: '/好闪',
  302: '/左拜年',
  303: '/右拜年',
  304: '/红包包',
  305: '/右亲亲',
  306: '/牛气冲天',
  307: '/喵喵',
  308: '/求红包',
  309: '/谢红包',
  310: '/新年烟花',
  311: '/打call',
  312: '/变形',
  313: '/嗑到了',
  314: '/仔细分析',
  315: '/加油',
  316: '/我没事',
  317: '/菜汪',
  318: '/崇拜',
  319: '/比心',
  320: '/庆祝',
  321: '/老色痞',
  322: '/拒绝',
  323: '/嫌弃',
  324: '/吃糖',
  325: '/惊吓',
  326: '/生气',
  327: '/加一',
  328: '/错号',
  329: '/对号',
  330: '/完成',
  331: '/明白',
  332: '/举牌牌',
  333: '/烟花',
  334: '/虎虎生威',
  335: '/绿马护体',
  336: '/豹富',
  337: '/花朵脸',
  338: '/我想开了',
  339: '/舔屏',
  340: '/热化了',
  341: '/打招呼',
  342: '/酸Q',
  343: '/我方了',
  344: '/大怨种',
  345: '/红包多多',
  346: '/你真棒棒',
  347: '/大展宏兔',
  348: '/福萝卜'
}
/** 戳一戳字典 */
const pokeMap = {
  0: '[回戳]',
  1: '[戳一戳]',
  2: '[比心]',
  3: '[点赞]',
  4: '[心碎]',
  5: '[666]',
  6: '[放大招]',
  2000: '[敲门]',
  2001: '[抓一下]',
  2002: '[碎屏]',
  2003: '[勾引]',
  2004: '[手雷]',
  2005: '[结印]',
  2006: '[召唤术]',
  2007: '[玫瑰花]',
  2009: '[让你皮]',
  2011: '[宝贝球]'
}

export { faceMap, pokeMap }
