import { StorySegment, HistoryItem } from '../types';

// Initial Chapter Image integrated here for easy editing
export const CHAPTER_IMAGE = "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=1536,f=jpeg,q=85/posts/images/699751645688397825/78866d0b-fbcd-4361-8101-9e38a61df36c.jpg";

/**
 * SCRIPT DATA
 * Defined based on user requirements
 */
const SCRIPT_NODES: Record<string, StorySegment> = {
  // Intro
  'start': { id: 'start', speaker: "旁白", text: "昏暗的地下俱樂部深處，霓虹燈光如魅影般迷離閃爍，空氣中瀰漫著濃郁酒精、煙霧與隱隱的荷爾蒙氣味，讓人心神不寧。", nextId: "s2" },
  's2': { id: 's2', speaker: "旁白", text: "已成年的寶可夢表演家瑟蕾娜，為了調查非法寶可夢走私的陰謀，咬牙決定喬裝潛入這間充滿危險傳聞的地下俱樂部。", nextId: "s3" },
  's3': { id: 's3', speaker: "旁白", text: "她換上俱樂部提供的暴露制服，假扮成女服務生，手持托盤在擁擠的桌間小心穿梭，試圖不引起注意。", nextId: "s4" },
  's4': { id: 's4', speaker: "旁白", text: "那套制服極其誘惑人心：上身是迷你比基尼，只用兩片薄薄的心形布料勉強遮住粉嫩乳頭，豐滿雙乳幾乎完全暴露在外。", nextId: "s5" },
  's5': { id: 's5', speaker: "旁白", text: "下身則是超小的C字褲，細細的帶子深深陷入股溝與陰唇之間，僅僅遮住最私密的部位，卻讓臀部曲線一覽無遺。", nextId: "s6" },
  's6': { id: 's6', speaker: "旁白", text: "還配上兔耳頭飾與蓬鬆尾巴，讓她看起來像隻性感的小兔女郎，充滿挑逗意味。", nextId: "s7" },
  's7': { id: 's7', speaker: "瑟蕾娜", text: "(心想) 天啊，這衣服簡直像沒穿一樣……每個人都盯著我看，好羞恥……但為了任務，只能硬撐下去。", nextId: "s8" },
  's8': { id: 's8', speaker: "旁白", text: "她強裝鎮定地站立送酒，雪白肌膚在燈光下閃耀，感受到無數饑渴目光如針般刺在身上，讓她雙頰微微發燙。", nextId: "s9" },
  's9': { id: 's9', speaker: "旁白", text: "一名身材健壯、滿身肌肉的富豪坐在高腳椅上，眼神貪婪地掃過她身體，朝她招手示意靠近。", nextId: "s10" },
  's10': { id: 's10', speaker: "富豪客人", text: "嘿，小美女，這杯酒幫我放到桌上，順便站近一點，讓我好好欣賞你這誘人曲線。", nextId: "s11" },
  's11': { id: 's11', speaker: "瑟蕾娜", text: "好的，先生……(心想) 他看我的眼神好可怕……我得快點離開。", nextId: "s12" },
  's12': { id: 's12', speaker: "旁白", text: "瑟蕾娜走近，將酒杯輕輕放在吧檯上，卻突然被富豪伸出大手拉住細腰，拉得她整個人貼近他身邊。", nextId: "s13" },
  's13': { id: 's13', speaker: "瑟蕾娜", text: "先生，請、請自重……這裡很多人……", nextId: "s14" },
  's14': { id: 's14', speaker: "富豪客人", text: "自重？寶貝，你穿成這樣在這裡晃悠，不就是想被男人們盯著、摸著嗎？看你這小腰扭得多誘人。", nextId: "s15" },
  's15': { id: 's15', speaker: "旁白", text: "他粗壯手臂緊緊箍住她纖細腰肢，讓她無法掙脫，同時將早已勃起的巨大陰莖用力頂在她平坦小腹上。", nextId: "s16" },
  's16': { id: 's16', speaker: "旁白", text: "那根肉棒驚人地粗長堅硬，滾燙熱度透過布料傳來，沿著她光滑腰線緩緩上下磨蹭，像在標記領地。", backgroundImage: "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=640,f=jpeg,q=85/posts/images/699751645688397825/5e457b0f-c471-4380-8de1-2bcbefbfd10c.jpg", nextId: "s17" },
  's17': { id: 's17', speaker: "瑟蕾娜", text: "啊……不要……好燙……它頂到我了……(心想) 太丟臉了，怎麼能這樣……但我不能大聲叫，會暴露身份。", nextId: "s18" },
  's18': { id: 's18', speaker: "富豪客人", text: "感覺到我的大家伙了嗎？它對你這小兔子可是饑渴得很，硬得像鐵棒一樣，就想頂進你身體裡。", nextId: "s19" },
  's19': { id: 's19', speaker: "旁白", text: "他低聲在瑟蕾娜耳邊呢喃，熱息噴灑在她頸項，讓她身體輕顫，俱樂部隱藏的發情氣體開始悄然發揮作用。", nextId: "s20" },
  's20': { id: 's20', speaker: "旁白", text: "氣體讓空氣中充滿奇異香味，滲入她鼻腔，逐漸讓血液加速流動，心跳如鼓般亂跳，腦中浮現莫名綺思。", nextId: "s21" },
  's21': { id: 's21', speaker: "瑟蕾娜", text: "嗯……先生，求你停下……我只是服務生……(心想) 身體怎麼開始熱了……好奇怪……我得忍住。", nextId: "s22" },
  's22': { id: 's22', speaker: "富豪客人", text: "別裝純了，寶貝，你的乳頭都硬挺起來了，看這比基尼布料下凸起的兩點，多可愛啊。", nextId: "s23" },
  's23': { id: 's23', speaker: "旁白", text: "他大膽伸手輕撫她腰側肌膚，指尖沿著比基尼邊緣遊走，偶爾碰觸到暴露的乳房下緣，讓她倒抽一口氣。", nextId: "s24" },
  's24': { id: 's24', speaker: "瑟蕾娜", text: "不……不要碰……好癢……(心想) 為什麼抵抗不了……這氣體是什麼……頭開始暈了。", nextId: "s25" },
  's25': { id: 's25', speaker: "富豪客人", text: "哈哈，你的小腹好光滑，摸起來真舒服，這C字褲也太小了，下面都快露出來了，讓我瞧瞧。", nextId: "s26" },
  's26': { id: 's26', speaker: "旁白", text: "他加快陰莖的磨蹭速度，龜頭部分頂到迷你比基尼下緣，壓迫她敏感的恥丘，散發出濃烈雄性麝香味。", nextId: "s27" },
  's27': { id: 's27', speaker: "旁白", text: "瑟蕾娜雙腿微微顫抖，試圖夾緊大腿，卻只讓C字褲細帶更深陷入陰唇，帶來意外的刺激。", nextId: "s28" },
  's28': { id: 's28', speaker: "瑟蕾娜", text: "哈啊……停下……我受不了……(心想) 太羞恥了，大家都在看……但身體好熱，好想……不，不能想！", nextId: "s29" },
  's29': { id: 's29', speaker: "富豪客人", text: "小騷貨，聽聽你這喘息聲，多動聽啊，我的肉棒已經忍不住要給你點禮物了。", nextId: "s30" },
  's30': { id: 's30', speaker: "旁白", text: "他突然將青筋暴起、脈動不止的巨大陰莖直接貼在她站立的腰部與小腹上猛烈抽動起來。", nextId: "s31" },
  's31': { id: 's31', speaker: "旁白", text: "滾燙粗硬的肉棒在她細膩肌膚上滑動，留下一道道黏膩的前列腺液痕跡，氣味越來越濃烈。", nextId: "s32" },
  's32': { id: 's32', speaker: "瑟蕾娜", text: "嗯……不……太大了……會被別人看到的……(心想) 這味道好強烈……腦袋好亂……為什麼覺得好興奮？", nextId: "s33" },
  's33': { id: 's33', speaker: "富豪客人", text: "寶貝，準備接好我的標記……啊！", nextId: "s34" },
  's34': { id: 's34', speaker: "旁白", text: "他低吼幾聲，腰部猛然一挺，濃稠白濁精液強勁噴射而出，全數射在她平坦小腹、纖細腰側、迷你比基尼布料與光滑大腿內側。", nextId: "s35" },
  's35': { id: 's35', speaker: "旁白", text: "滾燙粘稠的精液順著肌膚緩緩下滑，部分甚至沿C字褲細帶流進股溝與陰唇間，散發出濃郁腥甜氣味，直衝鼻腔。", backgroundImage: "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=640,f=jpeg,q=85/posts/images/699751645688397825/04d0aeda-f0ec-4258-be75-6832974a4f55.jpg", nextId: "s36" },
  's36': { id: 's36', speaker: "富豪客人", text: "哈哈，現在你全身都沾滿我的味道了，小兔子，看起來更誘人了。", nextId: "s37" },
  's37': { id: 's37', speaker: "旁白", text: "瑟蕾娜仍站立原地，雙腿發軟無法移動，身上精液緩緩滴落，那股濃烈腥味混雜發情氣體，讓她腦袋越來越暈眩。", nextId: "s38" },
  's38': { id: 's38', speaker: "旁白", text: "氣體濃度逐漸升高，滲入她每一個毛孔，讓全身皮膚敏感發燙，蜜穴深處開始隱隱抽搐，愛液悄然湧出。", nextId: "s39" },
  's39': { id: 's39', speaker: "瑟蕾娜", text: "哈啊……好熱……頭好暈……身體好奇怪……這味道……好噁心卻……(心想) 不行，不能聞……但好想深吸一口。", nextId: "s40" },
  's40': { id: 's40', speaker: "旁白", text: "她的呼吸變得急促而凌亂，雙頰緋紅如火燒，迷你比基尼下的粉紅乳頭早已硬挺頂起布料，C字褲細帶完全被愛液浸濕透。", backgroundImage: "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=640,f=jpeg,q=85/posts/images/699751645688397825/ec2031e6-a0c3-4e79-9e52-55ec64c1946d.jpg", nextId: "s41" },
  's41': { id: 's41', speaker: "富豪客人", text: "怎麼了，寶貝？臉紅成這樣，是不是發情了？看你雙腿都在抖呢。", nextId: "s42" },
  's42': { id: 's42', speaker: "瑟蕾娜", text: "不……不是……我只是……(心想) 身體為什麼不聽話……下面好癢……好空虛……但我不能這樣。", nextId: "s43" },
  's43': { id: 's43', speaker: "旁白", text: "她試圖轉身離開，卻被富豪輕鬆拉回，精液氣味更近，讓她視線模糊，理智逐漸崩潰邊緣。", nextId: "s44" },
  's44': { id: 's44', speaker: "旁白", text: "雙腿無意識地微微分開，顫抖的玉手不由自主地伸向C字褲，輕輕撥開那條濕漉漉的細帶。", nextId: "s45" },
  's45': { id: 's45', speaker: "旁白", text: "露出粉嫩濕潤的小穴，肥美陰唇已腫脹張開，晶瑩愛液如露珠般不斷湧出，滴落地面。", backgroundImage: "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=640,f=jpeg,q=85/posts/images/699751645688397825/cb301560-9efe-44ba-9fe3-dcc76ee5d147.jpg", nextId: "s46" },
  's46': { id: 's46', speaker: "瑟蕾娜", text: "啊……不行了……好想要……(心想) 太丟臉了……但我忍不住了……任務什麼的……好遠。", nextId: "s47" },
  's47': { id: 's47', speaker: "富豪客人", text: "哦？小美女，主動露出來了？看這小穴濕成這樣，真饑渴啊。", nextId: "s48" },
  's48': { id: 's48', speaker: "旁白", text: "她用纖細手指輕輕翻開自己濕透的陰唇，露出最深處的粉紅嫩肉與微微蠕動的穴口，眼神迷離充滿原始渴望。", nextId: "s49" },
  's49': { id: 's49', speaker: "瑟蕾娜", text: "求求你……用大陰莖……快插進來……填滿我吧……", nextId: "s50" },
  's50': { id: 's50', speaker: "旁白", text: "發情徹底擊潰她的羞恥心與理智，瑟蕾娜站立原地主動索求，害羞的呻吟中帶著無可奈何的顫音。", nextId: "s51" },
  's51': { id: 's51', speaker: "旁白", text: "發情氣體在俱樂部的空氣中越發濃郁而黏膩，像一層無形的薄霧般緩緩滲透進每一個角落，混雜著剛才射在她身上的濃稠精液腥味，以及周圍客人們散發出的汗水與酒精混合氣息，讓整個氛圍變得異常淫靡而壓抑。", nextId: "s52" },
  's52': { id: 's52', speaker: "旁白", text: "瑟蕾娜的呼吸越來越急促而淺短，她感覺到那股奇異的氣味如絲線般纏繞著她的鼻腔和肺部，逐漸滲入血液，讓全身細胞都開始躁動不安，皮膚表面泛起一層細密的粉紅潮紅，彷彿被無形的火焰輕輕舔舐。", nextId: "s53" },
  's53': { id: 's53', speaker: "旁白", text: "她的雙腿微微顫抖著，膝蓋似乎失去了力氣，站立都變得異常吃力，她試圖用意志力抵抗這股莫名的衝動，但腦海中卻不斷浮現出模糊而誘人的幻象，讓她心跳如鼓般狂亂。", nextId: "s54" },
  's54': { id: 's54', speaker: "瑟蕾娜", text: "哈啊……為什麼……身體這麼熱……胸部好脹……感覺要爆炸了……這氣體……到底是什麼……我不能這樣……", nextId: "s55" },
  's55': { id: 's55', speaker: "旁白", text: "她無意識地抬起顫抖的雙手，拉下了迷你比基尼，用力擠壓自己豐滿而彈性的雙乳，指尖深深陷入柔軟嫩肉中，讓乳房形狀被壓得變形，溢出的乳肉在燈光下閃耀著誘人光澤。", backgroundImage: "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=640,f=jpeg,q=85/posts/images/699751645688397825/c8792efb-9d96-4698-9a8a-15c0a3545abc.jpg", nextId: "s56" },
  's56': { id: 's56', speaker: "旁白", text: "兩團雪白如玉的乳房暴露在涼爽而潮濕的空氣中，粉紅色的乳頭早已因發情而腫脹挺立，像兩顆成熟的櫻桃般誘人。", nextId: "s57" },
  's57': { id: 's57', speaker: "旁白", text: "隨著她更用力地揉捏和擠壓，乳頭尖端竟開始滲出晶瑩剔透的乳白色母乳，一滴滴如珍珠般沿著豐滿的乳溝緩緩滑落，留下濕潤而黏膩的痕跡，散發出淡淡的甜膩奶香。", nextId: "s58" },
  's58': { id: 's58', speaker: "旁白", text: "母乳的氣味迅速擴散開來，混入發情氣體中，形成一種更強烈的催情氛圍，讓周圍的客人們眼神瞬間變得更加狂熱而貪婪，他們的呼吸也變得粗重，紛紛從座位上站起，緩緩圍攏過來。", nextId: "s59" },
  's59': { id: 's59', speaker: "瑟蕾娜", text: "啊啊……奶水……居然流出來了……好羞恥……大家都在看……但為什麼……停不下手……好舒服……", nextId: "s60" },
  's60': { id: 's60', speaker: "旁白", text: "一名高大而肌肉發達的男人率先走近，他眼神如餓狼般盯著瑟蕾娜滴奶的胸部，迅速解開褲子，將早已勃起腫脹的粗長肉棒直接貼到她緋紅而發燙的臉頰旁邊。", backgroundImage: "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=640,f=jpeg,q=85/posts/images/699751645688397825/834fe090-57e0-491c-8a49-61d986b7ac34.jpg", nextId: "s61" },
  's61': { id: 's61', speaker: "旁白", text: "滾燙的肉棒表面青筋暴起，脈動著散發出濃烈而刺鼻的雄性氣味，龜頭輕輕碰觸她柔軟如絲的臉蛋肌膚，留下一絲黏膩而透明的前列腺液，像是標記般的痕跡。", nextId: "s62" },
  's62': { id: 's62', speaker: "瑟蕾娜", text: "嗯……好燙……這味道……好強烈……貼得這麼近……(心想) 太丟臉了……但身體好興奮……想碰碰看……", nextId: "s63" },
  's63': { id: 's63', speaker: "旁白", text: "緊接著，另一名身材魁梧的男人也迫不及待地加入，從臉頰的另一側靠近，將同樣粗硬而彎曲的肉棒貼到她精緻小臉的另一邊，讓她感覺到兩股熱浪夾擊。", backgroundImage: "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=640,f=jpeg,q=85/posts/images/699751645688397825/6b66b144-149f-431e-b02d-6cfa96e037d9.jpg", nextId: "s64" },
  's64': { id: 's64', speaker: "旁白", text: "兩根青筋暴起、表面布滿脈絡的肉棒一左一右夾住她嬌嫩的臉龐，龜頭不時輕輕頂撞她的唇角、鼻尖和下巴，帶來陣陣酥麻的觸感，讓她忍不住輕輕喘息。", nextId: "s65" },
  's65': { id: 's65', speaker: "瑟蕾娜", text: "哈啊……兩根……都好近……好粗……跳動得厲害……(心想) 我該推開的……但好想嘗嘗味道……發情氣體太可怕了……", nextId: "s66" },
  's66': { id: 's66', speaker: "旁白", text: "她迷離的雙眼半睜半閉，盯著眼前兩根脈動不已的肉棒，呼吸越來越急促而混亂，母乳仍從腫脹乳頭一滴滴落下，順著平坦小腹滑落到大腿內側，與愛液混合成一片濕潤。", nextId: "s67" },
  's67': { id: 's67', speaker: "旁白", text: "發情的衝動如潮水般湧來，終於徹底戰勝了她殘存的羞恥心和理智，她顫抖的玉手先緩緩伸向左邊那根肉棒，柔軟掌心輕輕包裹住滾燙而堅硬的棒身。", nextId: "s68" },
  's68': { id: 's68', speaker: "旁白", text: "手指纖細而靈巧地上下套弄，從根部滑到龜頭，再緩緩回來，感受肉棒在掌中跳動變得更硬更熱，馬眼處滲出更多透明而黏膩的液體，潤滑了她的動作。", backgroundImage: "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=640,f=jpeg,q=85/posts/images/699751645688397825/c5d5522f-2f09-47b1-8d40-4cb93fd5312e.jpg", nextId: "s69" },
  's69': { id: 's69', speaker: "瑟蕾娜", text: "好硬……好熱……在我的手裡跳動……感覺好有力……(心想) 太淫蕩了……但停不下來……好想更多……", nextId: "s70" },
  's70': { id: 's70', speaker: "旁白", text: "左邊男人低哼一聲，滿意地腰部微微前頂，讓肉棒在她手中滑動得更順暢更深入，發出輕微的摩擦聲響。", nextId: "s71" },
  's71': { id: 's71', speaker: "旁白", text: "瑟蕾娜轉過頭，張開濕潤的櫻桃小嘴，緩緩含住右邊那根肉棒的腫脹龜頭，舌尖輕輕舔過敏感的冠溝和馬眼，品嘗那股鹹澀而獨特的味道。", backgroundImage: "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=640,f=jpeg,q=85/posts/images/699751645688397825/a82161ea-154c-44b2-a36e-924decb258bf.jpg", nextId: "s72" },
  's72': { id: 's72', speaker: "旁白", text: "溫熱而濕潤的口腔完全包裹住龜頭，她本能地開始吸吮起來，用力收緊唇瓣，發出咕啾咕啾的淫靡水聲，讓男人舒服得低吼。", nextId: "s73" },
  's73': { id: 's73', speaker: "瑟蕾娜", text: "嗯……咕……好鹹……但好想要……深一點……(心想) 嘴巴被撐滿了……好滿足……", nextId: "s74" },
  's74': { id: 's74', speaker: "旁白", text: "她一邊用右手快速套弄左邊肉棒，增加速度和力度，讓棒身表面變得濕滑，一邊用嘴深吞右邊肉棒，喉嚨被龜頭頂得微微鼓起，發出含糊的呻吟。", nextId: "s75" },
  's75': { id: 's75', speaker: "旁白", text: "過了一會兒，她依依不捨地吐出右邊肉棒，轉頭含住左邊，同樣用力吸吮舔弄，輪流伺候兩根肉棒，讓它們在她口中與手中交替享受。", nextId: "s76" },
  's76': { id: 's76', speaker: "旁白", text: "兩根肉棒被她伺候得濕亮閃耀，沾滿她的香甜口水、母乳滴落和前列腺液，氣味越來越濃烈，充斥整個周圍空間。", backgroundImage: "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=640,f=jpeg,q=85/posts/images/699751645688397825/68141ed7-a10e-446b-96e4-296faf378d97.jpg", nextId: "s77" },
  's77': { id: 's77', speaker: "旁白", text: "瑟蕾娜的動作越來越熟練而貪婪，她將兩根肉棒用力拉近，讓兩顆腫脹而發紅的龜頭並排緊貼在一起，像是親密的夥伴。", nextId: "s78" },
  's78': { id: 's78', speaker: "旁白", text: "靈巧而濕潤的舌頭快速交互舔弄兩顆龜頭，從馬眼處開始舔到冠溝，再來回掃動，時而用舌尖同時頂住兩顆敏感馬眼，帶來雙重刺激。", backgroundImage: "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=640,f=jpeg,q=85/posts/images/699751645688397825/72607d9c-bb3a-4de7-aac6-65a0bdbff677.jpg", nextId: "s79" },
  's79': { id: 's79', speaker: "旁白", text: "男人們被這精湛的技巧刺激得低吼連連，腰部不住前頂，肉棒在她臉上、舌尖和唇瓣間劇烈跳動，預示著即將爆發。", nextId: "s80" },
  's80': { id: 's80', speaker: "旁白", text: "瑟蕾娜感覺到兩根肉棒在舌尖與手中同時脹大，表面青筋鼓起，馬眼處滲出的液體越來越多，味道更濃烈地充斥她的鼻腔與口腔。", nextId: "s81" },
  's81': { id: 's81', speaker: "瑟蕾娜", text: "嗯……要來了嗎……好燙……都在跳……(心想) 好興奮……想要全部接住……", nextId: "s82" },
  's82': { id: 's82', speaker: "旁白", text: "空氣中發情氣體與精液腥味交織，讓她腦袋一片空白，只剩下本能的渴望與期待，身體微微前傾，準備迎接即將到來的熱浪。", nextId: "choice_double_bj" },

  // 選擇射精方式
  'choice_double_bj': { 
    id: 'choice_double_bj', 
    speaker: "系統", 
    text: "選擇射精方式...", 
    choices: [
      { id: "opt_mouth", text: "射在口內", action: "branch_mouth_1" },
      { id: "opt_face", text: "射在臉上", action: "branch_face_1" }
    ]
  },

  // 分支：射在口內 (test7)
  'branch_mouth_1': { id: 'branch_mouth_1', speaker: "旁白", text: "瑟蕾娜張大濕潤而紅腫的小嘴，將兩顆腫脹發紅的龜頭同時盡力含入口中，用力吸吮並用舌頭緊緊壓住馬眼，給予最後的強烈而致命刺激，讓兩根肉棒同時顫抖。", backgroundImage: "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=768,f=jpeg,q=85/posts/images/699751645688397825/cfcfcb09-c8cc-4182-b16a-462410c270fa.jpg", nextId: "branch_mouth_2" },
  'branch_mouth_2': { id: 'branch_mouth_2', speaker: "男人A", text: "啊啊……射了！！", nextId: "branch_mouth_3" },
  'branch_mouth_3': { id: 'branch_mouth_3', speaker: "男人B", text: "我也是……吞下去！！", nextId: "branch_mouth_4" },
  'branch_mouth_4': { id: 'branch_mouth_4', speaker: "旁白", text: "左邊男人A率先低吼一聲，肉棒深深頂進她喉嚨深處，滾燙濃稠的精液直接噴射而出，像火山爆發般一股股灌滿她的口腔與喉嚨，讓舌根感受到強烈衝擊。", nextId: "branch_mouth_5" },
  'branch_mouth_5': { id: 'branch_mouth_5', speaker: "旁白", text: "濃郁白濁的精液充滿腥鹹熱辣的味道，讓她咕嚕咕嚕地本能吞嚥，卻仍有部分從嘴角溢出，順著下巴緩緩滴落，留下黏膩白絲。", nextId: "branch_mouth_6" },
  'branch_mouth_6': { id: 'branch_mouth_6', speaker: "瑟蕾娜", text: "咕……嗯咕……好多……咽不完……好燙……(心想) 滿嘴都是……好滿足……他們的味道混在一起……我居然吞了……太淫蕩了……", nextId: "branch_mouth_7" },
  'branch_mouth_7': { id: 'branch_mouth_7', speaker: "旁白", text: "緊接著右邊男人B也忍不住，腰部猛頂將肉棒塞得更深，精液同樣爆發般射進她嘴裡，與第一股精液混合成黏膩而大量的熱流，溢出嘴角更多。", nextId: "branch_mouth_8" },
  'branch_mouth_8': { id: 'branch_mouth_8', speaker: "旁白", text: "瑟蕾娜的口腔被灌得滿滿當當，腥鹹味道充滿每一個角落與感官，她努力吞下大部分，卻仍嗆得眼淚直流，嘴角拉出長長的白絲，胸前母乳也因興奮而噴灑更多。", nextId: "branch_mouth_9" },
  'branch_mouth_9': { id: 'branch_mouth_9', speaker: "男人A", text: "哈哈……吞得真乾淨……小嘴真會吸……", nextId: "branch_mouth_10" },
  'branch_mouth_10': { id: 'branch_mouth_10', speaker: "男人B", text: "對……看她那滿足的樣子……還想更多吧？", nextId: "branch_mouth_11" },
  'branch_mouth_11': { id: 'branch_mouth_11', speaker: "旁白", text: "兩人射完後緩緩抽出肉棒，殘留的精液在她唇瓣、舌尖與喉嚨拉出長長黏絲，部分從嘴角緩緩流下，滴到她滴奶的豐滿胸部上，與母乳混合成一片濕滑。", nextId: "branch_mouth_12" },
  'branch_mouth_12': { id: 'branch_mouth_12', speaker: "瑟蕾娜", text: "哈啊……嘴裡好滿……還在流……(心想) 吞了那麼多……身體好熱……但好想再來……", nextId: "aftermath" },

  // 分支：射在臉上 (test8)
  'branch_face_1': { id: 'branch_face_1', speaker: "旁白", text: "瑟蕾娜將靈巧舌頭伸得更長更濕潤，快速在兩顆腫脹發紅的龜頭間來回掃動，同時用雙手用力套弄棒身根部，給予最直接而猛烈的刺激，讓肉棒顫抖得更劇烈。", backgroundImage: "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=768,f=jpeg,q=85/posts/images/699751645688397825/3113e0de-c099-4c11-9c52-889bf94d23fa.jpg", nextId: "branch_face_2" },
  'branch_face_2': { id: 'branch_face_2', speaker: "男人A", text: "該死……要噴了！！", nextId: "branch_face_3" },
  'branch_face_3': { id: 'branch_face_3', speaker: "男人B", text: "啊啊……臉上……全部射臉上！！", nextId: "branch_face_4" },
  'branch_face_4': { id: 'branch_face_4', speaker: "旁白", text: "左邊男人A低吼一聲，肉棒猛然抽離她舌尖，滾燙精液強勁噴射而出，像白濁噴泉般射滿她緋紅的臉頰、鼻樑與眉心，讓整個左臉覆蓋層層白濁。", nextId: "branch_face_5" },
  'branch_face_5': { id: 'branch_face_5', speaker: "旁白", text: "濃稠精液沿著臉蛋緩緩滑落，覆蓋住她的長睫毛、嘴唇與下巴，部分甚至噴進半張的小嘴裡，讓她不由自主品嘗到那股熱辣腥鹹味。", nextId: "branch_face_6" },
  'branch_face_6': { id: 'branch_face_6', speaker: "瑟蕾娜", text: "啊啊……好燙……射在臉上……好黏……(心想) 滿臉都是……大家都能看到……太羞恥了……但為什麼覺得好興奮……像被標記……", nextId: "branch_face_7" },
  'branch_face_7': { id: 'branch_face_7', speaker: "旁白", text: "右邊男人B緊接著爆發，腰部一挺，精液噴灑在她另一側臉蛋、額頭、金色秀髮與眼瞼上，黏膩地掛滿整張精緻小臉，讓視線都變得模糊。", nextId: "branch_face_8" },
  'branch_face_8': { id: 'branch_face_8', speaker: "旁白", text: "兩股大量精液在臉上交匯流淌，順著下巴、頸項與耳垂滴落至豐滿胸前，與持續滲出的母乳混成一片淫靡濕滑的液體，散發更強烈的腥甜混合氣味。", nextId: "branch_face_9" },
  'branch_face_9': { id: 'branch_face_9', speaker: "男人A", text: "看她臉上掛滿我們的東西……真他媽誘人……", nextId: "branch_face_10" },
  'branch_face_10': { id: 'branch_face_10', speaker: "男人B", text: "哈哈……小兔子變成精液面具了……還在舔呢？", nextId: "branch_face_11" },
  'branch_face_11': { id: 'branch_face_11', speaker: "旁白", text: "精液的熱度與黏膩氣味讓她腦袋更加暈眩而混亂，視線被白濁覆蓋，嘴角不自覺揚起滿足而迷離的弧度，舌尖伸出輕舔唇邊殘留。", nextId: "branch_face_12" },
  'branch_face_12': { id: 'branch_face_12', speaker: "瑟蕾娜", text: "哈啊……滿臉……好熱……還在滴……(心想) 被射臉了……好髒……但身體好滿足……想要更多……", nextId: "branch_face_13" },
  'branch_face_13': { id: 'branch_face_13', speaker: "旁白", text: "瑟蕾娜癱軟地跪坐在冰涼的俱樂部地面上，臉上胸前滿是黏膩的精液與母乳，眼神迷離而滿足，發情狀態卻仍未完全消退，讓她身體輕輕顫抖。", nextId: "aftermath" },

  // 共同結局 (test9)
  'aftermath': { id: 'aftermath', speaker: "旁白", text: "瑟蕾娜癱軟地跪坐在冰涼的俱樂部地面上，臉上胸前滿是黏膩的精液與母乳，眼神迷離而滿足，發情狀態卻仍未完全消退，讓她身體輕輕顫抖。", backgroundImage: "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=1024,f=jpeg,q=85/posts/images/699751645688397825/c0a41d62-6195-43a3-b9c0-c13e28c63da4.jpg", nextId: "aftermath_2" },
  'aftermath_2': { id: 'aftermath_2', speaker: "旁白", text: "俱樂部內的霓虹燈光繼續在她的濕潤肌膚上跳躍反射，映照出她緋紅的臉龐、沾滿白濁的秀髮以及豐滿胸部上混合液體的淫靡光澤，周圍客人們的低語、喘息與興奮笑聲逐漸放大，形成一種壓抑而火熱的氛圍。", nextId: "aftermath_3" },
  'aftermath_3': { id: 'aftermath_3', speaker: "旁白", text: "剛才射在她臉上與口中的男人A滿意地低笑著站起，伸手輕輕撫摸她沾滿精液的緋紅臉頰，指尖沾起黏膩的白濁液體，緩緩塗抹在她紅腫而濕潤的唇瓣上，讓她不由自主地輕舔舌尖。", nextId: "aftermath_4" },
  'aftermath_4': { id: 'aftermath_4', speaker: "男人A", text: "小兔子，剛才的口交真不錯，吃得那麼開心？看你這發情的模樣，臉上掛滿我們的東西，還在顫抖，肯定還想要更多吧？", nextId: "aftermath_5" },
  'aftermath_5': { id: 'aftermath_5', speaker: "旁白", text: "瑟蕾娜的喘息仍舊急促而淺短，她感覺到精液的熱度逐漸冷卻卻黏膩地黏附在皮膚上，母乳從腫脹乳頭繼續緩緩滲出，混雜成一片濕滑，讓她全身皮膚敏感得如電流竄過。", nextId: "aftermath_6" },
  'aftermath_6': { id: 'aftermath_6', speaker: "瑟蕾娜", text: "哈啊……嗯……還想要……身體好空虛……好熱……(心想) 天啊，我怎麼會說這種話……好丟臉……但發情氣體讓我完全控制不住……蜜穴好癢……需要被填滿……", nextId: "aftermath_7" },
  'aftermath_7': { id: 'aftermath_7', speaker: "旁白", text: "男人A抓住她纖細而顫抖的手臂，將她緩緩拉起身，讓她站立不穩的身體靠在自己寬闊而結實的胸膛上，滾燙而再度勃起的肉棒頂在她平坦濕潤的小腹，帶來陣陣酥麻的觸感。", nextId: "aftermath_8" },
  'aftermath_8': { id: 'aftermath_8', speaker: "男人A", text: "來吧，自己坐上來，讓大家好好欣賞你這小騷貨有多饑渴，多麼迫不及待地想要被插。", nextId: "aftermath_9" },
  'aftermath_9': { id: 'aftermath_9', speaker: "旁白", text: "他大步走向附近的豪華皮沙發，坐下後將粗長而青筋暴起的肉棒直直挺立在空氣中，散發濃烈雄性氣味，抓住瑟蕾娜的纖腰引導她跨坐到自己強壯的大腿上，讓她面對面騎乘在身上。", nextId: "aftermath_10" },
  'aftermath_10': { id: 'aftermath_10', speaker: "旁白", text: "瑟蕾娜雙腿顫抖地分開站立，迷你比基尼早被粗暴扯掉扔到一旁，超小的C字褲也被撥到一邊，露出腫脹而滴水不止的粉嫩小穴，陰唇微微張開，晶瑩愛液沿著大腿內側緩緩流下。", nextId: "aftermath_11" },
  'aftermath_11': { id: 'aftermath_11', speaker: "旁白", text: "她在男人A的強力引導下，緩緩下沉纖細腰肢，讓那根粗硬而脈動的肉棒對準濕潤穴口，一寸寸吞入緊窄而饑渴的蜜穴深處，每推進一分都帶來撕裂般的充實感。", backgroundImage: "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=768,f=jpeg,q=85/posts/images/699751645688397825/c9754f91-a76f-4de1-a0a5-b0d1c7e049d0.jpg", nextId: "aftermath_12" },
  'aftermath_12': { id: 'aftermath_12', speaker: "瑟蕾娜", text: "啊啊……好粗……進來了……慢慢填滿我……好深……(心想) 肉棒好熱……撐開了我的裡面……子宮被頂到了……好舒服……理智完全沒了，只剩下快感……", nextId: "aftermath_13" },
  'aftermath_13': { id: 'aftermath_13', speaker: "旁白", text: "肉棒完全沒入後，她本能地開始上下起伏腰肢，豐滿雙乳劇烈晃動不止，母乳從粉紅乳頭不受控制地噴灑而出，灑在男人A的胸膛與臉上，散發甜膩奶香。", nextId: "aftermath_14" },
  'aftermath_14': { id: 'aftermath_14', speaker: "旁白", text: "男人A雙手用力揉捏她圓潤而彈性的臀肉，指尖陷入嫩肉中，腰部向上猛烈頂撞，發出響亮的啪啪聲與咕啾咕啾的淫靡水聲，讓整個俱樂部內的客人們眼神更加狂熱。", nextId: "aftermath_15" },
  'aftermath_15': { id: 'aftermath_15', speaker: "旁白", text: "這時，又有兩名新的男人興奮地從人群中走近，一左一右站到沙發旁邊，解開褲子，將兩根早已勃起腫脹的粗壯肉棒湊到她緋紅而喘息的臉旁，散發濃烈氣味。", nextId: "aftermath_16" },
  'aftermath_16': { id: 'aftermath_16', speaker: "男人C", text: "看這小兔子騎得多起勁，腰扭得像波浪一樣，來，別讓嘴巴閒著，幫我們也舔舔這兩根大家伙。", nextId: "aftermath_17" },
  'aftermath_17': { id: 'aftermath_17', speaker: "男人D", text: "對，張開那張小嘴，兩根一起伺候，讓我們也爽爽，看你能同時處理多少。", nextId: "aftermath_18" },
  'aftermath_18': { id: 'aftermath_18', speaker: "旁白", text: "瑟蕾娜轉頭，眼神迷離而充滿渴望地張開沾滿精液與口水的櫻桃小嘴，先含住左邊男人C的肉棒，用力吸吮舔弄，舌尖靈活掃過敏感冠溝與馬眼。", backgroundImage: "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=768,f=jpeg,q=85/posts/images/699751645688397825/942232f9-ac49-4bae-af8d-1d03ec1d382a.jpg", nextId: "aftermath_19" },
  'aftermath_19': { id: 'aftermath_19', speaker: "旁白", text: "同時右手握住右邊男人D的肉棒，快速上下套弄，指尖輕捏龜頭，偶爾轉頭換邊舔弄，讓兩根肉棒在她溫熱口中與柔軟手中輪流享受極致快感。", nextId: "aftermath_20" },
  'aftermath_20': { id: 'aftermath_20', speaker: "瑟蕾娜", text: "嗯咕……好硬……兩根一起……嘴巴好滿……(心想) 前面被插得那麼深……嘴裡也滿是肉棒味道……好淫蕩……但身體好興奮……快感從四面八方來……", nextId: "aftermath_21" },
  'aftermath_21': { id: 'aftermath_21', speaker: "旁白", text: "四人形成激烈的4P狀態，男人A在下方猛力頂撞蜜穴深處，兩側男人C與D享受她的熟練口交與手交，俱樂部內充滿淫靡的聲響、氣味與視覺刺激，讓更多客人圍觀。", nextId: "aftermath_22" },
  'aftermath_22': { id: 'aftermath_22', speaker: "旁白", text: "男人D看著瑟蕾娜翹起而晃動的圓潤臀部，忍不住伸手撫摸那緊緻而微微收縮的後庭，指尖沾滿從蜜穴溢出的愛液，輕輕按壓菊穴周圍，讓她身體一顫。", nextId: "aftermath_23" },
  'aftermath_23': { id: 'aftermath_23', speaker: "男人D", text: "這小屁眼看起來也濕潤了，緊緊的肯定很爽，看來後面也想要被插啊？讓我來開發開發。", nextId: "aftermath_24" },
  'aftermath_24': { id: 'aftermath_24', speaker: "旁白", text: "他將粗硬肉棒從瑟蕾娜口中緩緩抽出，繞到沙發後方，跪在上面，對準她微微張開的後庭，緩緩推入腫脹而濕滑的龜頭，撐開那層禁忌的嫩肉。", nextId: "aftermath_25" },
  'aftermath_25': { id: 'aftermath_25', speaker: "瑟蕾娜", text: "啊啊！那裡……不行……後面也要進去了……太大了……會裂開……", backgroundImage: "https://image.tensorartassets.com/posts/images/699751645688397825/c2876063-76a5-4c6b-aa70-9071d5c6b2d8.mp4", nextId: "aftermath_26" },
  'aftermath_26': { id: 'aftermath_26', speaker: "旁白", text: "粗硬肉棒一點點撐開緊窄而未經開發的後庭，完全沒入腸道深處，與前方的男人A只隔一層薄薄的肉膜，帶來雙重填滿與摩擦的極致刺激，讓她全身毛孔張開。", nextId: "aftermath_27" },
  'aftermath_27': { id: 'aftermath_27', speaker: "旁白", text: "男人A與男人D同步抽插，一進一出讓瑟蕾娜身體劇烈搖晃前後，蜜穴與後庭發出咕啾、啪啪與腸液摩擦的淫亂交響聲，充滿整個空間。", nextId: "aftermath_28" },
  'aftermath_28': { id: 'aftermath_28', speaker: "旁白", text: "兩穴同時被粗大肉棒填滿，她只能發出含糊而破碎的呻吟，母乳從乳頭不受控制地噴灑到男人C身上。", nextId: "aftermath_29" },
  'aftermath_29': { id: 'aftermath_29', speaker: "瑟蕾娜", text: "嗯咕……啊啊……兩穴一起……嘴巴也……要壞掉了……(心想) 好滿……前後都被撐開……摩擦得太激烈了……快感太強烈……腦袋一片白……", nextId: "aftermath_30" },
  'aftermath_30': { id: 'aftermath_30', speaker: "旁白", text: "雙穴的猛烈抽插越來越快，男人A與男人D低吼著加速節奏，肉棒次次撞擊最深處，讓她全身神經繃緊到極限，皮膚泛起雞皮疙瘩。", nextId: "aftermath_31" },
  'aftermath_31': { id: 'aftermath_31', speaker: "旁白", text: "終於，瑟蕾娜纖細腰肢猛然弓起，全身劇烈痙攣如觸電，蜜穴與後庭同時緊縮絞住入侵肉棒，大量透明愛液從前穴噴出，母乳從雙乳狂噴而出如泉湧。", nextId: "aftermath_32" },
  'aftermath_32': { id: 'aftermath_32', speaker: "瑟蕾娜", text: "啊啊啊啊！！！去了！！！噴了！！！全身都要融化了！！！", nextId: "aftermath_33" },
  'aftermath_33': { id: 'aftermath_33', speaker: "旁白", text: "高潮如洶湧海嘯般席捲全身，她尖叫著達到前所未有的巔峰，母乳噴灑到周圍男人身上與地面，愛液濕透沙發與地板，視線一片空白而模糊。", backgroundImage: "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=768,f=jpeg,q=85/posts/images/699751645688397825/6cb54b03-49a1-4252-a5e1-cc9140d2037c.jpg", nextId: "aftermath_34" },
  'aftermath_34': { id: 'aftermath_34', speaker: "旁白", text: "男人們被她的高潮緊縮與痙攣刺激到極點，也相繼低吼射精，滾燙而濃稠的精液灌滿前穴、後庭與口腔，讓她全身每個孔洞都被白濁充滿溢出。", nextId: "aftermath_35" },
  'aftermath_35': { id: 'aftermath_35', speaker: "旁白", text: "然而發情氣體在空氣中仍舊濃郁未散，周圍更多興奮的男人從人群中湧上來，輪流享用她軟弱無力而仍顫抖的身體，開始新一輪的亂交。", nextId: "aftermath_36" },
  'aftermath_36': { id: 'aftermath_36', speaker: "旁白", text: "男人們輪番上陣，有的抓住她金髮深喉抽插，有的猛插蜜穴或後庭，有的揉捏噴奶雙乳，有的甚至用肉棒拍打她臉頰與身體，精液不斷噴灑在她身上。", nextId: "aftermath_37" },
  'aftermath_37': { id: 'aftermath_37', speaker: "旁白", text: "無盡的亂交持續整晚，瑟蕾娜徹底淪為俱樂部的專屬洩慾玩具，每一寸肌膚都被標記，每一個孔洞都被填滿，調查任務早已被遺忘在無邊快感深淵中。", nextId: "end" },

  // 結局
  'end': { 
    id: 'end',
    speaker: "旁白", 
    text: "BAD END", 
    choices: [
      { id: "restart", text: "重新開始", action: "start" }
    ]
  }
};

// Simulate async API call delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const startNewStory = async (theme?: string): Promise<StorySegment> => {
  await delay(300); // Simulate loading
  return SCRIPT_NODES['start'];
};

export const continueStory = async (history: HistoryItem[], userAction: string): Promise<StorySegment> => {
  await delay(100); // Fast transition
  
  const nextNode = SCRIPT_NODES[userAction];
  
  if (!nextNode) {
    if (userAction === 'start') return SCRIPT_NODES['start'];
    if (SCRIPT_NODES[userAction]) return SCRIPT_NODES[userAction];

    // Fallback error node
    return {
      id: 'error',
      speaker: 'System',
      text: 'Error: Scene not found.',
      choices: [{ id: 'reset', text: 'Reset', action: 'start' }]
    };
  }

  return nextNode;
};

export const getNodeById = async (id: string): Promise<StorySegment | null> => {
    return SCRIPT_NODES[id] || null;
};