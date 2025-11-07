$(document).ready(function () {
	const obj_arr = get_data();
	
	obj_arr.tag_list.filter(m=>m.type == "town").forEach(function(eachtown){
		$(`<label><input type="checkbox" name="${eachtown.en.replace(" ","")}" >${eachtown.zh}</label>`)
        .addClass('town')
        .on('change', 'input', function() { if (this.checked) {$('div.town_list input[type="checkbox"]').not(this).prop('checked', false);} })
        .appendTo($('div.town_list'));
		
	})
	
	obj_arr.poi_list.filter(n=>n.ID < 3000).forEach(function(eachPoi){
		let _poi_card = $(`<div  name="${eachPoi.name.en}"></div>`);
		
		
		$(`<div title="${eachPoi.name.en}">${eachPoi.name.zh}</div>`).addClass('poi_title').appendTo(_poi_card);
		$(`<div><a href="https://b42map.com/?${eachPoi.x}x${eachPoi.y}" target="_blank">(${eachPoi.x},${eachPoi.y})</a><button class="copy-button"></button></div>`).addClass('coordi').appendTo(_poi_card);
		if(eachPoi.description.en !== ""){
			//$(`<div>${eachPoi.description.en}</div>`).addClass('description en').appendTo(_poi_card);
		    $(`<div>${eachPoi.description.zh}</div>`).addClass('description zh').attr("title",eachPoi.description.en).appendTo(_poi_card);
		}
		
		
		$(`<div class="${eachPoi.location.replace(" ","")}">${eachPoi.location.replace(" ","")}</div>`).addClass('tag location ').appendTo(_poi_card);
		
		eachPoi.tags.forEach(function(eachTag){
			$(`<div tag="${eachTag}">${eachTag}</div>`).addClass('tag').appendTo(_poi_card);
		})
	    _poi_card.addClass('poi').appendTo($('div.pois'));
	});
	
	    $('.copy-button').on('click', function() {
        const aElement = $(this).prev('a');

        if (aElement.length > 0) { 
            const href = aElement.attr('href');

            navigator.clipboard.writeText(href)
                .then(() => {
                    const $thisButton = $(this);
                    const originalText = $thisButton.text();
                    
                    //$thisButton.text('已複製！');
                    $thisButton.css('background-image','url(image/copy-success.svg)');
                    
                    setTimeout(() => {
                        $thisButton.text(originalText);
						$thisButton.css('background-image','url(image/copy.svg)');
                    }, 2000);
                })
                .catch(err => {
                    console.error('複製失敗:', err);
                });
        }
    });

});

function get_array(){
    const storedData = localStorage.getItem('pageConfig');
    if (storedData) {
        try {
            const parsedData = JSON.parse(storedData);
            console.log('從 localStorage 讀取 JSON');
            return parsedData;
        } catch (e) {
            console.error('解析 localStorage 中的 JSON 失敗，將返回 null。');
        }
    }
    
    console.log('未找到 localStorage 資料，將返回 null。');
	const nullData =
	{
		class_list: [],
		page_list: [],
	}
    return null;
}
function cityscape(sheet) {
    if($(sheet).attr('src') === './image/cityscape.svg'){
        //$('link[rel=stylesheet]').attr('href','./css/style_dark.css');
        $(sheet).attr('src','./image/cityscape-star.svg');
		$('div.town_list').hide();
    }else{
        //$('link[rel=stylesheet]').attr('href','./css/style_waffle.css');
        $(sheet).attr('src','./image/cityscape.svg');
		$('div.town_list').show();
    }
}

function get_data(){
	const tags = [
        {
            "type": "tag",
            "en": "town",
            "zh": "小鎮"
        },
        {
            "type": "tag",
            "en": "city",
            "zh": "城市"
        },
        {
            "type": "tag",
            "en": "spawn",
            "zh": "重生點"
        },
        {
            "type": "tag",
            "en": "region",
            "zh": "區域"
        },
        {
            "type": "tag",
            "en": "Spiffo",
            "zh": "斯皮弗"
        },
        {
            "type": "tag",
            "en": "Restaurant",
            "zh": "餐廳"
        },
        {
            "type": "tag",
            "en": "Fire",
            "zh": "火災"
        },
        {
            "type": "tag",
            "en": "Fire axe",
            "zh": "消防斧"
        },
        {
            "type": "tag",
            "en": "Fire station",
            "zh": "消防局"
        },
        {
            "type": "tag",
            "en": "Headquaters",
            "zh": "總部"
        },
        {
            "type": "tag",
            "en": "farm",
            "zh": "農場"
        },
        {
            "type": "tag",
            "en": "warehouse",
            "zh": "倉庫"
        },
        {
            "type": "tag",
            "en": "factory",
            "zh": "工廠"
        },
        {
            "type": "tag",
            "en": "manor",
            "zh": "莊園"
        },
        {
            "type": "tag",
            "en": "chicken",
            "zh": "雞"
        },
        {
            "type": "tag",
            "en": "residential",
            "zh": "住宅區"
        },
        {
            "type": "tag",
            "en": "gated",
            "zh": "門禁"
        },
        {
            "type": "tag",
            "en": "community",
            "zh": "社區"
        },
        {
            "type": "tag",
            "en": "estate",
            "zh": "房地產"
        },
        {
            "type": "tag",
            "en": "store",
            "zh": "商店"
        },
        {
            "type": "tag",
            "en": "furniture",
            "zh": "家具"
        },
        {
            "type": "tag",
            "en": "appliances",
            "zh": "電器"
        },
        {
            "type": "tag",
            "en": "western",
            "zh": "西部主題"
        },
        {
            "type": "tag",
            "en": "blacksmith",
            "zh": "鐵匠鋪"
        },
        {
            "type": "tag",
            "en": "saloon",
            "zh": "酒吧"
        },
        {
            "type": "tag",
            "en": "school",
            "zh": "學校"
        },
        {
            "type": "tag",
            "en": "fenced",
            "zh": "有圍欄的"
        },
        {
            "type": "tag",
            "en": "bunkrooms",
            "zh": "上下舖寢室"
        },
        {
            "type": "tag",
            "en": "classrooms",
            "zh": "教室"
        },
        {
            "type": "tag",
            "en": "cafeteria",
            "zh": "自助餐廳"
        },
        {
            "type": "tag",
            "en": "clinic",
            "zh": "診所"
        },
        {
            "type": "tag",
            "en": "greenhouse",
            "zh": "溫室"
        },
        {
            "type": "tag",
            "en": "courtyard",
            "zh": "庭院"
        },
        {
            "type": "tag",
            "en": "retreat",
            "zh": "休養所/靜修處"
        },
        {
            "type": "tag",
            "en": "lakehouse",
            "zh": "湖邊小屋"
        },
        {
            "type": "tag",
            "en": "barn",
            "zh": "穀倉"
        },
        {
            "type": "tag",
            "en": "isolated",
            "zh": "隔離的"
        },
        {
            "type": "tag",
            "en": "base",
            "zh": "基地"
        },
        {
            "type": "tag",
            "en": "gardening",
            "zh": "園藝"
        },
        {
            "type": "tag",
            "en": "seeds",
            "zh": "種子"
        },
        {
            "type": "tag",
            "en": "supplies",
            "zh": "補給品"
        },
        {
            "type": "tag",
            "en": "cabin",
            "zh": "小木屋"
        },
        {
            "type": "tag",
            "en": "woods",
            "zh": "樹林"
        },
        {
            "type": "tag",
            "en": "stove",
            "zh": "爐子"
        },
        {
            "type": "tag",
            "en": "sink",
            "zh": "水槽"
        },
        {
            "type": "tag",
            "en": "outhouse",
            "zh": "戶外廁所"
        },
        {
            "type": "tag",
            "en": "shed",
            "zh": "棚屋"
        },
		{
			"type": "tag_slf",
            "en": "tool",
            "zh": "工具"
		},
		{
			"type": "tag_slf",
            "en": "Clothes",
            "zh": "服飾"
		},
		{
			"type": "tag_slf",
            "en": "autorepair",
            "zh": "汽修"
		},
        {
            "type": "tag_slf",
            "en": "Office",
            "zh": "辦公室"
        },
        {
            "type": "tag_slf",
            "en": "hardware",
            "zh": "五金"
        },
        {
            "type": "tag_slf",
            "en": "wood",
            "zh": "木工材料"
        },
        {
            "type": "tag_slf",
            "en": "Warehouses",
            "zh": "倉庫"
        },
        {
            "type": "tag_slf",
            "en": "far",
            "zh": "偏遠"
        },
        {
            "type": "tag_slf",
            "en": "equipment",
            "zh": "電子設備"
        },
        {
            "type": "tag_slf",
            "en": "safe",
            "zh": "安全屋"
        },
        {
            "type": "tag_slf",
            "en": "danger",
            "zh": "危險地點"
        },
        {
            "type": "tag_slf",
            "en": "Furniture",
            "zh": "家具"
        },
        {
            "type": "tag_slf",
            "en": "Junk",
            "zh": "廢車"
        },
        {
            "type": "tag_slf",
            "en": "Kitchen",
            "zh": "廚具"
        },
		{
			"type": "tag_slf",
            "en": "material",
            "zh": "材料"
		},
		{
			"type": "tag_slf",
            "en": "food",
            "zh": "食物"
		},
		{
			"type": "tag_slf",
            "en": "book",
            "zh": "書籍"
		},
		{
			"type": "tag_slf",
            "en": "vehicle",
            "zh": "車"
		},
		{
			"type": "tag_slf",
            "en": "gasoline",
            "zh": "汽油"
		},
		{
			"type": "tag_slf",
            "en": "medical",
            "zh": "醫材"
		},
		{
			"type": "tag_slf",
            "en": "wine",
            "zh": "酒"
		},
		{
			"type": "tag_slf",
            "en": "garden",
            "zh": "園藝"
		},
		{
			"type": "tag_slf",
            "en": "gun",
            "zh": "槍枝"
		},
		{
			"type": "tag_slf",
            "en": "weapons",
            "zh": "武器"
		},
        {
            "type": "town",
            "en": "Muldraugh",
            "zh": "莫德勞"
        },
        {
            "type": "town",
            "en": "March Ridge",
            "zh": "三月嶺"
        },
        {
            "type": "town",
            "en": "Rosewood",
            "zh": "羅斯伍德"
        },
        {
            "type": "town",
            "en": "Ekron",
            "zh": "埃克倫"
        },
        {
            "type": "town",
            "en": "Irvington",
            "zh": "歐文頓"
        },
        {
            "type": "town",
            "en": "Echo Creek",
            "zh": "迴聲溪"
        },
        {
            "type": "town",
            "en": "Brandenburg",
            "zh": "布蘭登堡"
        },
        {
            "type": "town",
            "en": "Riverside",
            "zh": "河畔鎮"
        },
        {
            "type": "town",
            "en": "West Point",
            "zh": "西點"
        },
        {
            "type": "town",
            "en": "Louisville",
            "zh": "路易斯維爾"
        },
        {
            "type": "town",
            "en": "Fallas Lake",
            "zh": "法拉斯湖"
        },
        {
            "type": "town",
            "en": "Valley Station",
            "zh": "山谷站"
        },
        {
            "type": "town",
            "en": "Dixie",
            "zh": "迪克西"
        },
        {
            "type": "town",
            "en": "Doe Valley",
            "zh": "鹿谷"
        }
    ];
	const pois = [
    {
        "ID": "3000",
        "x": 10782,
        "y": 9950,
        "name": {
			"en": "Muldraugh",
			"zh":"莫德勞"
		},
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "town",
            "spawn"
        ]
    },
    {
        "ID": "3001",
        "x": 10121,
        "y": 12720,
        "name": {
			"en": "March Ridge",
			"zh":"三月嶺"
		},
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "town"
        ]
    },
    {
        "ID": "3002",
        "x": 8107,
        "y": 11576,
        "name": {
			"en": "Rosewood",
			"zh": "羅斯伍德"
		},
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "town",
            "spawn"
        ]
    },
    {
        "ID": "3003",
        "x": 545,
        "y": 9754,
        "name": {
			"en": "Ekron",
			"zh":"埃克倫"
		},
        "location": "Ekron",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "town"
        ]
    },
    {
        "ID": "3004",
        "x": 2498,
        "y": 14253,
        "name": {
			"en": "Irvington",
			"zh":"歐文頓"
		},
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "town"
        ]
    },
    {
        "ID": "3005",
        "x": 3518,
        "y": 10926,
        "name": {
			"en": "Echo Creek",
			"zh":"迴聲溪"
		},
        "location": "Echo Creek",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "town",
            "spawn"
        ]
    },
    {
        "ID": "3006",
        "x": 2101,
        "y": 6076,
        "name": "Brandenburg",
        "name": {
			"en": "Brandenburg",
			"zh":"布蘭登堡"
		},
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "town"
        ]
    },
    {
        "ID": "3007",
        "x": 6443,
        "y": 5281,
        "name": {
			"en": "Riverside",
			"zh":"河畔鎮"
		},
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "town",
            "spawn"
        ]
    },
    {
        "ID": "3008",
        "x": 11697,
        "y": 6834,
        "name": "West Point",
        "name": {
			"en": "West Point",
			"zh":"西點"
		},
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "town",
            "spawn"
        ]
    },
    {
        "ID": "3009",
        "x": 12936,
        "y": 2238,
        "name": {
			"en": "路易斯維爾",
			"zh":"Louisville"
		},
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "town"
        ]
    },
    {
        "ID": "3010",
        "x": 15436,
        "y": 2940,
        "name": "Louisville Airport",
        "name": {
			"en": "Louisville Airport",
			"zh":"路易斯維爾機場"
		},
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "3011",
        "x": 7276,
        "y": 8345,
        "name": {
			"en": "Fallas Lake",
			"zh":"法拉斯湖"
		},
        "location": "Fallas Lake",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "town"
        ]
    },
    {
        "ID": "3012",
        "x": 13515,
        "y": 5082,
        "name": {
			"en": "Valley Station",
			"zh":"山谷站"
		},
        "description": {
            "en": "",
            "zh": ""
        },
        "Importance": 1,
        "location": "Valley Station",
        "tags": [
            "region"
        ]
    },
    {
        "ID": "1000",
        "x": 11599,
        "y": 8252,
        "name": {
            "en": "Clothing Store",
            "zh": "[迪克西]服飾店"
        },
        "location": "Dixie",
        "description": {
            "en": "Barg-n-Clothes.",
            "zh": "Barg-n-Clothes。"
        },
        "tags": ["Clothes"]
    },
    {
        "ID": "1001",
        "x": 11464,
        "y": 8809,
        "name": {
            "en": "Diner",
            "zh": "[迪克西]餐館"
        },
        "location": "Dixie",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1002",
        "x": 11603,
        "y": 8308,
        "name": {
            "en": "Gas Station",
            "zh": "[迪克西]加油站"
        },
        "location": "Dixie",
        "description": {
            "en": "Gas-2-Go, 2 pumps.",
            "zh": "Gas-2-Go，2個油泵。"
        },
        "tags": ["gasoline"]
    },
    {
        "ID": "1003",
        "x": 11508,
        "y": 8832,
        "name": {
            "en": "Gas station",
            "zh": "[迪克西]加油站"
        },
        "location": "Dixie",
        "description": {
            "en": "Two pumps.",
            "zh": "兩個油泵。"
        },
        "tags": ["gasoline"]
    },
    {
        "ID": "1004",
        "x": 11683,
        "y": 8821,
        "name": {
            "en": "Laundromat",
            "zh": "[迪克西]自助洗衣店"
        },
        "location": "Dixie",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Clothes"]
    },
    {
        "ID": "1005",
        "x": 11687,
        "y": 8367,
        "name": {
            "en": "Molan's Used Cars",
            "zh": "[迪克西]莫蘭二手車"
        },
        "location": "Dixie",
        "description": {
            "en": "Clean them just to be sure.",
            "zh": "清理一下以確保萬無一失。"
        },
        "tags": ["autorepair"]
    },
    {
        "ID": "1006",
        "x": 11556,
        "y": 8858,
        "name": {
            "en": "Picnic Dining Area",
            "zh": "[迪克西]野餐區"
        },
        "location": "Dixie",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["vehicle"]
    },
    {
        "ID": "1007",
        "x": 11668,
        "y": 8302,
        "name": {
            "en": "Spiffo's",
            "zh": "[迪克西]Spiffo's"
        },
        "location": "Dixie",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "Spiffo",
            "Restaurant",
			"food"
        ]
    },
    {
        "ID": "1008",
        "x": 11670,
        "y": 8794,
        "name": {
            "en": "Supermarket",
            "zh": "[迪克西]超市"
        },
        "location": "Dixie",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1009",
        "x": 11493,
        "y": 8914,
        "name": {
            "en": "Trailer Park",
            "zh": "[迪克西]拖車公園"
        },
        "location": "Dixie",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["vehicle"]
    },
    {
        "ID": "1010",
        "x": 8927,
        "y": 10320,
        "name": {
            "en": "<3 Brian",
            "zh": "[鹿谷] <3 Brian"
        },
        "location": "Doe Valley",
        "description": {
            "en": "Just a message in the dirt.",
            "zh": "只是土裡的一條訊息。"
        },
        "tags": []
    },
    {
        "ID": "1011",
        "x": 3847,
        "y": 6212,
        "name": {
            "en": "Abandoned Factory",
            "zh": "[鹿谷]廢棄工廠"
        },
        "location": "Doe Valley",
        "description": {
            "en": "3 stories, needs renovation.",
            "zh": "3層樓，需要翻新。"
        },
        "tags": []
    },
    {
        "ID": "1012",
        "x": 7445,
        "y": 7959,
        "name": {
            "en": "Army Quarters",
            "zh": "[鹿谷]軍營"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["material","weapons"]
    },
    {
        "ID": "1013",
        "x": 5470,
        "y": 9661,
        "name": {
            "en": "Auto Repair Store",
            "zh": "[鹿谷]汽車維修店"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["material","autorepair","tool"]
    },
    {
        "ID": "1014",
        "x": 8059,
        "y": 7620,
        "name": {
            "en": "Cabin in the Woods",
            "zh": "[鹿谷]森林小屋"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1015",
        "x": 4817,
        "y": 7939,
        "name": {
            "en": "Camp Busy Beaver",
            "zh": "[鹿谷]忙碌海狸營地"
        },
        "location": "Doe Valley",
        "description": {
            "en": "A collection of cabins & sports amenities deep in the Kentucky wilderness. Happy trails!",
            "zh": "肯塔基荒野深處的一組小屋和運動設施。祝您旅途愉快！"
        },
        "tags": ["tool"]
    },
    {
        "ID": "1016",
        "x": 3800,
        "y": 8549,
        "name": {
            "en": "Camping Store",
            "zh": "[鹿谷]露營用品店"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["tool","material"]
    },
    {
        "ID": "1017",
        "x": 5501,
        "y": 9566,
        "name": {
            "en": "Clothing Store",
            "zh": "[鹿谷]服飾店"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Clothes"]
    },
    {
        "ID": "1018",
        "x": 10223,
        "y": 7586,
        "name": {
            "en": "Construction Site",
            "zh": "[鹿谷]工地(半成屋)"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1019",
        "x": 4674,
        "y": 8597,
        "name": {
            "en": "Deerhead Lake Park Ranger Station",
            "zh": "[鹿谷]鹿頭湖公園護林站"
        },
        "location": "Doe Valley",
        "description": {
            "en": "Park ranger station that has 3 beds, a kitchen upstairs, and lots of storage space.",
            "zh": "公園護林站，樓上有3張床、一個廚房和大量儲藏空間。"
        },
        "tags": ["far"]
    },
    {
        "ID": "1021",
        "x": 3703,
        "y": 8462,
        "name": {
            "en": "Diner",
            "zh": "[鹿谷]餐館"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food","wine"]
    },
    {
        "ID": "1022",
        "x": 5499,
        "y": 9582,
        "name": {
            "en": "Doctor's Office",
            "zh": "[鹿谷]診所"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office","medical"]
    },
    {
        "ID": "1023",
        "x": 6560,
        "y": 8946,
        "name": {
            "en": "Double Small Warehouses",
            "zh": "[鹿谷]兩間小型倉庫"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Warehouses","tool","material"]
    },
    {
        "ID": "1024",
        "x": 5892,
        "y": 9861,
        "name": {
            "en": "Double Small Warehouses",
            "zh": "[鹿谷]兩間小型倉庫"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Warehouses","tool","material"]
    },
    {
        "ID": "1025",
        "x": 7657,
        "y": 9343,
        "name": {
            "en": "Double Warehouse",
            "zh": "[鹿谷]雙倉庫"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Warehouses","tool","material"]
    },
    {
        "ID": "1026",
        "x": 8279,
        "y": 10039,
        "name": {
            "en": "Double Warehouse",
            "zh": "[鹿谷]雙倉庫"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Warehouses","tool","material"]
    },
    {
        "ID": "1027",
        "x": 5465,
        "y": 9584,
        "name": {
            "en": "Farm Produce Shop",
            "zh": "[鹿谷]農產品店"
        },
        "location": "Doe Valley",
        "description": {
            "en": "With adjoining cafÃ©s.",
            "zh": "附有相鄰的咖啡館。"
        },
        "tags": ["food","tool","material","garden"]
    },
    {
        "ID": "1028",
        "x": 9449,
        "y": 9777,
        "name": {
            "en": "Farm stall",
            "zh": "[鹿谷]農場攤位"
        },
        "location": "Doe Valley",
        "description": {
            "en": "Fresh seasonal produce - sale now on!",
            "zh": "新鮮時令農產品——現正特賣！"
        },
        "tags": ["food"]
    },
    {
        "ID": "1029",
        "x": 7087,
        "y": 8370,
        "name": {
            "en": "First house shown in Project Zomboid's trailer",
            "zh": "[鹿谷]《Project Zomboid》預告片中出現的第一棟房屋"
        },
        "location": "Doe Valley",
        "description": {
            "en": "\"What happened here, what's happening here... it's not contained!\"",
            "zh": "“這裡發生了什麼，正在發生什麼...它沒有被控制住！”"
        },
        "tags": []
    },
    {
        "ID": "1030",
        "x": 5467,
        "y": 9709,
        "name": {
            "en": "Gas Station",
            "zh": "[鹿谷]加油站"
        },
        "location": "Doe Valley",
        "description": {
            "en": "Two Pumps.",
            "zh": "兩個油泵。"
        },
        "tags": ["gasoline"]
    },
    {
        "ID": "1031",
        "x": 3690,
        "y": 8495,
        "name": {
            "en": "Gas Station",
            "zh": "[鹿谷]加油站"
        },
        "location": "Doe Valley",
        "description": {
            "en": "Gas N More, 2 pumps.",
            "zh": "Gas N More，2個油泵。"
        },
        "tags": ["gasoline"]
    },
    {
        "ID": "1032",
        "x": 3807,
        "y": 8513,
        "name": {
            "en": "Gun Store",
            "zh": "[鹿谷]槍店"
        },
        "location": "Doe Valley",
        "description": {
            "en": "No sledgehammer needed.",
            "zh": "不需要大錘。"
        },
        "tags": ["gun","weapons"]
    },
    {
        "ID": "1033",
        "x": 5577,
        "y": 6499,
        "name": {
            "en": "Horse Course",
            "zh": "[鹿谷]馬術課程"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1034",
        "x": 9040,
        "y": 8732,
        "name": {
            "en": "Hunter's Cabin",
            "zh": "[鹿谷]獵人小屋"
        },
        "location": "Doe Valley",
        "description": {
            "en": "Has a fireplace, tool shed, and outhouse.",
            "zh": "設有壁爐、工具棚和戶外廁所。"
        },
        "tags": []
    },
    {
        "ID": "1035",
        "x": 7140,
        "y": 8981,
        "name": {
            "en": "Ice Cream Store",
            "zh": "[鹿谷]冰淇淋店"
        },
        "location": "Doe Valley",
        "description": {
            "en": "You deserve a treat.",
            "zh": "你值得犒賞自己。"
        },
        "tags": ["food"]
    },
    {
        "ID": "1036",
        "x": 3859,
        "y": 8428,
        "name": {
            "en": "Isolated House",
            "zh": "[鹿谷]孤立房屋"
        },
        "location": "Doe Valley",
        "description": {
            "en": "Low fence and small shed, better than nothing. Mostly obscured by trees.",
            "zh": "低矮的圍欄和小棚屋，總比沒有好。大部分被樹木遮擋。"
        },
        "tags": []
    },
    {
        "ID": "1037",
        "x": 4243,
        "y": 7226,
        "name": {
            "en": "Lake House",
            "zh": "[鹿谷]湖邊小屋"
        },
        "location": "Doe Valley",
        "description": {
            "en": "A lone house by a lake deep in the woods of Doe Valley. Has an antique oven.",
            "zh": "鹿谷深處樹林裡湖邊的一棟孤立房屋。有一個古董烤箱。"
        },
        "tags": []
    },
    {
        "ID": "1038",
        "x": 7259,
        "y": 8498,
        "name": {
            "en": "Laundromat",
            "zh": "[鹿谷]自助洗衣店"
        },
        "location": "Doe Valley",
        "description": {
            "en": "Very Small laundromat, only has a handful of washers/dryers.",
            "zh": "非常小的自助洗衣店，只有少量洗衣機/烘乾機。"
        },
        "tags": []
    },
    {
        "ID": "1039",
        "x": 5474,
        "y": 9680,
        "name": {
            "en": "Laundromat",
            "zh": "[鹿谷]自助洗衣店"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1041",
        "x": 5564,
        "y": 12476,
        "name": {
            "en": "Military Research Facility",
            "zh": "[鹿谷]軍事研究設施"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1042",
        "x": 5464,
        "y": 9511,
        "name": {
            "en": "Military Surplus Store",
            "zh": "[鹿谷]軍事剩餘物資店"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1043",
        "x": 5547,
        "y": 9663,
        "name": {
            "en": "Restaurant",
            "zh": "[鹿谷]餐廳"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1044",
        "x": 3659,
        "y": 8535,
        "name": {
            "en": "Small Farm House",
            "zh": "[鹿谷]小型農舍"
        },
        "location": "Doe Valley",
        "description": {
            "en": "Small Farm House with fields and tool shed.",
            "zh": "帶有田地和工具棚的小型農舍。"
        },
        "tags": []
    },
    {
        "ID": "1045",
        "x": 7485,
        "y": 11081,
        "name": {
            "en": "Small Warehouse",
            "zh": "[鹿谷]小型倉庫"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1046",
        "x": 8532,
        "y": 9033,
        "name": {
            "en": "Small Workshop",
            "zh": "[鹿谷]小型工作室"
        },
        "location": "Doe Valley",
        "description": {
            "en": "Small workshop with antique oven.",
            "zh": "帶有古董烤箱的小型工作室。"
        },
        "tags": []
    },
    {
        "ID": "1047",
        "x": 3924,
        "y": 6214,
        "name": {
            "en": "Trapper House",
            "zh": "[鹿谷]捕獸人小屋"
        },
        "location": "Doe Valley",
        "description": {
            "en": "The last surviving house of an abandoned town.",
            "zh": "一個廢棄小鎮最後倖存的房屋。"
        },
        "tags": []
    },
    {
        "ID": "1048",
        "x": 6734,
        "y": 10020,
        "name": {
            "en": "Triple Warehouses",
            "zh": "[鹿谷]三倉庫"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1049",
        "x": 7246,
        "y": 8522,
        "name": {
            "en": "Bar",
            "zh": "[法拉斯湖]酒吧"
        },
        "location": "Fallas Lake",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["wine"]
    },
    {
        "ID": "1050",
        "x": 7258,
        "y": 8431,
        "name": {
            "en": "Book Store",
            "zh": "[法拉斯湖]書店"
        },
        "location": "Fallas Lake",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["book"]
    },
    {
        "ID": "1051",
        "x": 7234,
        "y": 8203,
        "name": {
            "en": "Burger Joint",
            "zh": "[法拉斯湖]漢堡店"
        },
        "location": "Fallas Lake",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1052",
        "x": 7387,
        "y": 8353,
        "name": {
            "en": "Church",
            "zh": "[法拉斯湖]教堂"
        },
        "location": "Fallas Lake",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["wood"]
    },
    {
        "ID": "1053",
        "x": 7296,
        "y": 8388,
        "name": {
            "en": "Doctor's Office",
            "zh": "[法拉斯湖]診所"
        },
        "location": "Fallas Lake",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office","medical"]
    },
    {
        "ID": "1054",
        "x": 7252,
        "y": 8321,
        "name": {
            "en": "Farming Supply Store",
            "zh": "[法拉斯湖]農用品店"
        },
        "location": "Fallas Lake",
        "description": {
            "en": "Seeds etc, some general hardware, plus guns in the back room.",
            "zh": "種子等，一些一般五金，後屋還有槍枝。"
        },
        "tags": ["material","hardware","garden","gun","weapons"]
    },
    {
        "ID": "1056",
        "x": 7317,
        "y": 8186,
        "name": {
            "en": "Gas Station",
            "zh": "[法拉斯湖]加油站"
        },
        "location": "Fallas Lake",
        "description": {
            "en": "2-story gas station by the lake. 4 pumps.",
            "zh": "湖邊的兩層樓加油站。4個油泵。"
        },
        "tags": ["gasoline"]
    },
    {
        "ID": "1057",
        "x": 7296,
        "y": 8253,
        "name": {
            "en": "General Store",
            "zh": "[法拉斯湖]雜貨店"
        },
        "location": "Fallas Lake",
        "description": {
            "en": "Lots of food and some clothes.",
            "zh": "大量食物和一些衣物。"
        },
        "tags": ["Clothes","food"]
    },
    {
        "ID": "1058",
        "x": 7256,
        "y": 8231,
        "name": {
            "en": "Hardware Store",
            "zh": "[法拉斯湖]五金行"
        },
        "location": "Fallas Lake",
        "description": {
            "en": "E.P. Tools.",
            "zh": "E.P. Tools。"
        },
        "tags": ["material","hardware","tool"]
    },
    {
        "ID": "1059",
        "x": 7252,
        "y": 8378,
        "name": {
            "en": "Police Station",
            "zh": "[法拉斯湖]警察局"
        },
        "location": "Fallas Lake",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["gun","weapons"]
    },
    {
        "ID": "1060",
        "x": 12037,
        "y": 2593,
        "name": {
            "en": "3 Garage Mansion",
            "zh": "[路易斯維爾]三車庫豪宅"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1061",
        "x": 14149,
        "y": 2630,
        "name": {
            "en": "3 Mansion Complex",
            "zh": "[路易斯維爾]三豪宅區"
        },
        "location": "Louisville",
        "description": {
            "en": "3 Mansions gated all around with only 1 way in and a small pond.",
            "zh": "3棟豪宅被圍起來，只有1個入口和一個小池塘。"
        },
        "tags": []
    },
    {
        "ID": "1062",
        "x": 13318,
        "y": 1293,
        "name": {
            "en": "5 Bux or Less",
            "zh": "[路易斯維爾]5元或更少"
        },
        "location": "Louisville",
        "description": {
            "en": "Everything under $5, everyday.",
            "zh": "所有商品每天都低於5美元。"
        },
        "tags": ["food"]
    },
    {
        "ID": "1063",
        "x": 12474,
        "y": 1774,
        "name": {
            "en": "93.2 LMBW Radio",
            "zh": "[路易斯維爾]93.2 LMBW電台"
        },
        "location": "Louisville",
        "description": {
            "en": "Electronic equipment & offices.",
            "zh": "電子設備和辦公室。"
        },
        "tags": ["Office","material","equipment"]
    },
    {
        "ID": "1064",
        "x": 13961,
        "y": 3231,
        "name": {
            "en": "A.A. Ron Hunting Supply",
            "zh": "[路易斯維爾]A.A. Ron 狩獵用品"
        },
        "location": "Louisville",
        "description": {
            "en": "Hunting store/gun store.",
            "zh": "狩獵用品店/槍店。"
        },
        "tags": ["gun","weapons"]
    },
    {
        "ID": "1065",
        "x": 13312,
        "y": 1314,
        "name": {
            "en": "ABCDriving School",
            "zh": "[路易斯維爾]ABC駕訓班"
        },
        "location": "Louisville",
        "description": {
            "en": "You crash it, you pay it.",
            "zh": "你撞壞它，你就要賠償。"
        },
        "tags": ["vehicle"]
    },
    {
        "ID": "1066",
        "x": 12183,
        "y": 1457,
        "name": {
            "en": "Aitor Wire Company",
            "zh": "[路易斯維爾]Aitor 電線公司"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office","material","equipment"]
    },
    {
        "ID": "1067",
        "x": 12305,
        "y": 3533,
        "name": {
            "en": "AmeriGlobe Communications",
            "zh": "[路易斯維爾]AmeriGlobe 通訊"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office","material","equipment"]
    },
    {
        "ID": "1068",
        "x": 12781,
        "y": 1214,
        "name": {
            "en": "American Eats",
            "zh": "[路易斯維爾]美國小吃"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1069",
        "x": 12515,
        "y": 4267,
        "name": {
            "en": "Army Checkpoint",
            "zh": "[路易斯維爾]軍隊檢查站"
        },
        "location": "Louisville",
        "description": {
            "en": "Army camp set up on the main road.",
            "zh": "在主要道路上設立的軍隊營地。"
        },
        "tags": ["gun","weapons"]
    },
    {
        "ID": "1070",
        "x": 12224,
        "y": 1320,
        "name": {
            "en": "Army Surplus Store",
            "zh": "[路易斯維爾]軍事物資店"
        },
        "location": "Louisville",
        "description": {
            "en": "Ready Prep, guns and army gear.",
            "zh": "Ready Prep，槍枝和軍用裝備。"
        },
        "tags": ["gun","weapons","material"]
    },
    {
        "ID": "1071",
        "x": 12547,
        "y": 1393,
        "name": {
            "en": "Art Gallery of Louisville",
            "zh": "[路易斯維爾]路易斯維爾美術館"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1072",
        "x": 12655,
        "y": 2118,
        "name": {
            "en": "Auto Repair Shop (Central)",
            "zh": "[路易斯維爾]汽車維修店（中）"
        },
        "location": "Louisville",
        "description": {
            "en": "Car Fix-Ation.",
            "zh": "Car Fix-Ation。"
        },
        "tags": ["material","tool","autorepair"]
    },
    {
        "ID": "1073",
        "x": 12266,
        "y": 1567,
        "name": {
            "en": "Auto Repair Shop (Central)",
            "zh": "[路易斯維爾]汽車維修店（中）"
        },
        "location": "Louisville",
        "description": {
            "en": "Al's Autoshop.",
            "zh": "Al's Autoshop。"
        },
        "tags": ["material","tool","autorepair"]
    },
    {
        "ID": "1074",
        "x": 13111,
        "y": 1757,
        "name": {
            "en": "Auto Repair Shop (East)",
            "zh": "[路易斯維爾]汽車維修店（東）"
        },
        "location": "Louisville",
        "description": {
            "en": "American Tire.",
            "zh": "American Tire。"
        },
        "tags": ["material","tool","autorepair"]
    },
    {
        "ID": "1075",
        "x": 12232,
        "y": 1375,
        "name": {
            "en": "Auto Repair Shop (North)",
            "zh": "[路易斯維爾]汽車維修店（北）"
        },
        "location": "Louisville",
        "description": {
            "en": "Jim's Autoshop.",
            "zh": "Jim's Autoshop。"
        },
        "tags": ["material","tool","autorepair"]
    },
    {
        "ID": "1076",
        "x": 13280,
        "y": 2965,
        "name": {
            "en": "Auto Repair Shop (South)",
            "zh": "[路易斯維爾]汽車維修店（南）"
        },
        "location": "Louisville",
        "description": {
            "en": "American Tire.",
            "zh": "American Tire。"
        },
        "tags": ["material","tool","autorepair"]
    },
    {
        "ID": "1077",
        "x": 12616,
        "y": 3518,
        "name": {
            "en": "Auto Repair Shop (South)",
            "zh": "[路易斯維爾]汽車維修店（南）"
        },
        "location": "Louisville",
        "description": {
            "en": "Car Fix-ation.",
            "zh": "Car Fix-ation。"
        },
        "tags": ["material","tool","autorepair"]
    },
    {
        "ID": "1078",
        "x": 12489,
        "y": 1697,
        "name": {
            "en": "Awl Work and Sew Play",
            "zh": "[路易斯維爾]Awl Work and Sew Play"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1079",
        "x": 13170,
        "y": 1560,
        "name": {
            "en": "Awl Work and Sew Play",
            "zh": "[路易斯維爾]Awl Work and Sew Play"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1080",
        "x": 12912,
        "y": 1398,
        "name": {
            "en": "BBBQ",
            "zh": "[路易斯維爾]BBBQ"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1081",
        "x": 12411,
        "y": 2835,
        "name": {
            "en": "Back To The Nurture",
            "zh": "[路易斯維爾]回歸自然"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1082",
        "x": 13581,
        "y": 2134,
        "name": {
            "en": "Bakery",
            "zh": "[路易斯維爾]麵包店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1083",
        "x": 13181,
        "y": 1283,
        "name": {
            "en": "Bar",
            "zh": "[路易斯維爾]酒吧"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food","wine"]
    },
    {
        "ID": "1084",
        "x": 13951,
        "y": 3129,
        "name": {
            "en": "Bar",
            "zh": "[路易斯維爾]酒吧"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food","wine"]
    },
    {
        "ID": "1085",
        "x": 12858,
        "y": 1206,
        "name": {
            "en": "Bar",
            "zh": "[路易斯維爾]酒吧"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food","wine"]
    },
    {
        "ID": "1086",
        "x": 12190,
        "y": 1270,
        "name": {
            "en": "Battery Factory",
            "zh": "[路易斯維爾]電池工廠"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["tool","material","equipment"]
    },
    {
        "ID": "1087",
        "x": 13585,
        "y": 2147,
        "name": {
            "en": "Beer & Liquor",
            "zh": "[路易斯維爾]啤酒與烈酒"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["wine"]
    },
    {
        "ID": "1088",
        "x": 12433,
        "y": 3020,
        "name": {
            "en": "Bible Spirit Baptist Church",
            "zh": "[路易斯維爾]聖經精神浸信會"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["wood"]
    },
    {
        "ID": "1089",
        "x": 12704,
        "y": 2123,
        "name": {
            "en": "Big Empty Warehouse",
            "zh": "[路易斯維爾]大型空倉庫"
        },
        "location": "Louisville",
        "description": {
            "en": "Fenced in warehouse with lots of room.",
            "zh": "帶圍欄的倉庫，空間很大。"
        },
        "tags": ["Warehouses"]
    },
    {
        "ID": "1090",
        "x": 12179,
        "y": 1592,
        "name": {
            "en": "Big Warehouse",
            "zh": "[路易斯維爾]大型倉庫"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Warehouses"]
    },
    {
        "ID": "1091",
        "x": 13613,
        "y": 1622,
        "name": {
            "en": "Black Liquorice",
            "zh": "[路易斯維爾]黑色甘草"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1092",
        "x": 13347,
        "y": 1295,
        "name": {
            "en": "Book Store",
            "zh": "[路易斯維爾]書店"
        },
        "location": "Louisville",
        "description": {
            "en": "Worm of Books.",
            "zh": "書蟲書店。"
        },
        "tags": ["book"]
    },
    {
        "ID": "1093",
        "x": 12560,
        "y": 1931,
        "name": {
            "en": "Book Store",
            "zh": "[路易斯維爾]書店"
        },
        "location": "Louisville",
        "description": {
            "en": "Bernards Book Emporium.",
            "zh": "伯納德圖書商場。"
        },
        "tags": ["book"]
    },
    {
        "ID": "1094",
        "x": 12375,
        "y": 1510,
        "name": {
            "en": "Book Store",
            "zh": "[路易斯維爾]書店"
        },
        "location": "Louisville",
        "description": {
            "en": "Book Naked.",
            "zh": "赤裸之書。"
        },
        "tags": ["book"]
    },
    {
        "ID": "1095",
        "x": 13240,
        "y": 1658,
        "name": {
            "en": "Book Store",
            "zh": "[路易斯維爾]書店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["book"]
    },
    {
        "ID": "1096",
        "x": 12813,
        "y": 1310,
        "name": {
            "en": "Book Store",
            "zh": "[路易斯維爾]書店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["book"]
    },
    {
        "ID": "1097",
        "x": 13382,
        "y": 3052,
        "name": {
            "en": "Book Store",
            "zh": "[路易斯維爾]書店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["book"]
    },
    {
        "ID": "1098",
        "x": 12534,
        "y": 1254,
        "name": {
            "en": "Book Store",
            "zh": "[路易斯維爾]書店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["book"]
    },
    {
        "ID": "1099",
        "x": 13524,
        "y": 1396,
        "name": {
            "en": "Book Store",
            "zh": "[路易斯維爾]書店"
        },
        "location": "Louisville",
        "description": {
            "en": "Quite the collection.",
            "zh": "相當豐富的收藏。"
        },
        "tags": ["book"]
    },
    {
        "ID": "1100",
        "x": 13182,
        "y": 1250,
        "name": {
            "en": "Book Store",
            "zh": "[路易斯維爾]書店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["book"]
    },
    {
        "ID": "1101",
        "x": 12561,
        "y": 3523,
        "name": {
            "en": "Bow-Wow Dog Nutrition",
            "zh": "[路易斯維爾]Bow-Wow 狗營養品"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1102",
        "x": 12444,
        "y": 2062,
        "name": {
            "en": "Bowling Alley",
            "zh": "[路易斯維爾]保齡球館"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1103",
        "x": 13139,
        "y": 1578,
        "name": {
            "en": "Boxing Gym",
            "zh": "[路易斯維爾]拳擊館"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1104",
        "x": 12313,
        "y": 1428,
        "name": {
            "en": "Boxing Gym",
            "zh": "[路易斯維爾]拳擊館"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1105",
        "x": 13170,
        "y": 1592,
        "name": {
            "en": "Boxpop Berwery",
            "zh": "[路易斯維爾]Boxpop 啤酒廠"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["wine"]
    },
    {
        "ID": "1106",
        "x": 12121,
        "y": 1259,
        "name": {
            "en": "Brac Brick Factory",
            "zh": "[路易斯維爾]布拉克磚塊工廠"
        },
        "location": "Louisville",
        "description": {
            "en": "Full of emergency glass breakers!",
            "zh": "充滿了緊急破窗器！"
        },
        "tags": ["tool"]
    },
    {
        "ID": "1107",
        "x": 12596,
        "y": 962,
        "name": {
            "en": "Bridge Checkpoint",
            "zh": "[路易斯維爾]橋樑檢查站"
        },
        "location": "Louisville",
        "description": {
            "en": "No way through...",
            "zh": "無法通行..."
        },
        "tags": []
    },
    {
        "ID": "1108",
        "x": 12562,
        "y": 1467,
        "name": {
            "en": "Brooks Public Library",
            "zh": "[路易斯維爾]布魯克斯公共圖書館"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["book"]
    },
    {
        "ID": "1109",
        "x": 13240,
        "y": 3486,
        "name": {
            "en": "Burger Joint",
            "zh": "[路易斯維爾]漢堡店"
        },
        "location": "Louisville",
        "description": {
            "en": "A small diner on the outskirts of the city center.",
            "zh": "市中心郊區的一家小餐館。"
        },
        "tags": ["food"]
    },
    {
        "ID": "1110",
        "x": 13206,
        "y": 1283,
        "name": {
            "en": "Burgers",
            "zh": "[路易斯維爾]漢堡"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1111",
        "x": 12558,
        "y": 2313,
        "name": {
            "en": "Bus Station",
            "zh": "[路易斯維爾]巴士站"
        },
        "location": "Louisville",
        "description": {
            "en": "Your gateway to Louisville, Knox Country and beyond! Stains on seats may or may not be brains of the deceased.",
            "zh": "通往路易斯維爾、諾克斯縣及其他地區的門戶！座位上的污漬可能或可能不是逝者的腦漿。"
        },
        "tags": []
    },
    {
        "ID": "1112",
        "x": 12491,
        "y": 1446,
        "name": {
            "en": "Butcher Shop",
            "zh": "[路易斯維爾]肉店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1113",
        "x": 12713,
        "y": 1333,
        "name": {
            "en": "Cafe",
            "zh": "[路易斯維爾]咖啡館"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1114",
        "x": 13530,
        "y": 2143,
        "name": {
            "en": "Cafe",
            "zh": "[路易斯維爾]咖啡館"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1115",
        "x": 13388,
        "y": 2925,
        "name": {
            "en": "Canto Records",
            "zh": "[路易斯維爾]Canto 唱片"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1116",
        "x": 13246,
        "y": 1327,
        "name": {
            "en": "Car Dealership",
            "zh": "[路易斯維爾]汽車經銷商"
        },
        "location": "Louisville",
        "description": {
            "en": "Scenic Mile car dealership.",
            "zh": "Scenic Mile 汽車經銷商。"
        },
        "tags": ["tool","autorepair","material","vehicle"]
    },
    {
        "ID": "1117",
        "x": 13159,
        "y": 1388,
        "name": {
            "en": "Car Dealership",
            "zh": "[路易斯維爾]汽車經銷商"
        },
        "location": "Louisville",
        "description": {
            "en": "Upscale Mobility Auto Dealership.",
            "zh": "Upscale Mobility 汽車經銷商。"
        },
        "tags": ["tool","autorepair","material","vehicle"]
    },
    {
        "ID": "1118",
        "x": 12372,
        "y": 2533,
        "name": {
            "en": "Car Dealership",
            "zh": "[路易斯維爾]汽車經銷商"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["tool","autorepair","material","vehicle"]
    },
    {
        "ID": "1119",
        "x": 12850,
        "y": 1316,
        "name": {
            "en": "Cardinal Plaza",
            "zh": "[路易斯維爾]紅雀廣場"
        },
        "location": "Louisville",
        "description": {
            "en": "Multi-floor mini-mall with various shops.",
            "zh": "多層迷你商場，內有各種商店。"
        },
        "tags": ["tool","food","book","material"]
    },
    {
        "ID": "1120",
        "x": 12768,
        "y": 1398,
        "name": {
            "en": "Cathedral",
            "zh": "[路易斯維爾]大教堂"
        },
        "location": "Louisville",
        "description": {
            "en": "St. Michael's Cathedral.",
            "zh": "聖邁克爾大教堂。"
        },
        "tags": ["wood"]
    },
    {
        "ID": "1121",
        "x": 12583,
        "y": 3274,
        "name": {
            "en": "Cemetary",
            "zh": "[路易斯維爾]墓地"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1122",
        "x": 12846,
        "y": 1697,
        "name": {
            "en": "Central Loisville Community Center",
            "zh": "[路易斯維爾]路易斯維爾中央社區中心"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1123",
        "x": 13238,
        "y": 2681,
        "name": {
            "en": "Central Park",
            "zh": "[路易斯維爾]中央公園"
        },
        "location": "Louisville",
        "description": {
            "en": "Louiville's central park with playground.",
            "zh": "路易斯維爾的中央公園，設有遊樂場。"
        },
        "tags": []
    },
    {
        "ID": "1124",
        "x": 13043,
        "y": 2827,
        "name": {
            "en": "Central Park Stables",
            "zh": "[路易斯維爾]中央公園馬廄"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1125",
        "x": 13330,
        "y": 1242,
        "name": {
            "en": "Chugg's",
            "zh": "[路易斯維爾]Chugg's"
        },
        "location": "Louisville",
        "description": {
            "en": "Beverage/beer factory near the Ohio River.",
            "zh": "俄亥俄河附近的飲料/啤酒廠。"
        },
        "tags": ["wine"]
    },
    {
        "ID": "1126",
        "x": 12607,
        "y": 3364,
        "name": {
            "en": "Church",
            "zh": "[路易斯維爾]教堂"
        },
        "location": "Louisville",
        "description": {
            "en": "Church with a huge graveyard.",
            "zh": "帶有巨大墓地的教堂。"
        },
        "tags": []
    },
    {
        "ID": "1127",
        "x": 12410,
        "y": 1926,
        "name": {
            "en": "Church",
            "zh": "[路易斯維爾]教堂"
        },
        "location": "Louisville",
        "description": {
            "en": "Holy Light Baptist Church.",
            "zh": "聖光浸信會。"
        },
        "tags": []
    },
    {
        "ID": "1128",
        "x": 12872,
        "y": 2856,
        "name": {
            "en": "Church",
            "zh": "[路易斯維爾]教堂"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1129",
        "x": 13667,
        "y": 2547,
        "name": {
            "en": "Church",
            "zh": "[路易斯維爾]教堂"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1130",
        "x": 13182,
        "y": 1293,
        "name": {
            "en": "Clothing Store",
            "zh": "[路易斯維爾]服飾店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Clothes"]
    },
    {
        "ID": "1131",
        "x": 13239,
        "y": 1675,
        "name": {
            "en": "Clothing Store",
            "zh": "[路易斯維爾]服飾店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Clothes"]
    },
    {
        "ID": "1132",
        "x": 13334,
        "y": 1293,
        "name": {
            "en": "Clothing Store",
            "zh": "[路易斯維爾]服飾店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Clothes"]
    },
    {
        "ID": "1133",
        "x": 12693,
        "y": 1209,
        "name": {
            "en": "Clothing Store",
            "zh": "[路易斯維爾]服飾店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Clothes"]
    },
    {
        "ID": "1134",
        "x": 12666,
        "y": 1211,
        "name": {
            "en": "Clothing Store",
            "zh": "[路易斯維爾]服飾店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Clothes"]
    },
    {
        "ID": "1135",
        "x": 13251,
        "y": 2137,
        "name": {
            "en": "Clothing store",
            "zh": "[路易斯維爾]服飾店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Clothes"]
    },
    {
        "ID": "1136",
        "x": 13466,
        "y": 1317,
        "name": {
            "en": "Clothing store",
            "zh": "[路易斯維爾]服飾店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Clothes"]
    },
    {
        "ID": "1137",
        "x": 12629,
        "y": 2327,
        "name": {
            "en": "Coffee Nirvana",
            "zh": "[路易斯維爾]咖啡涅槃"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1138",
        "x": 13820,
        "y": 1675,
        "name": {
            "en": "Construction Site",
            "zh": "[路易斯維爾]工地"
        },
        "location": "Louisville",
        "description": {
            "en": "Good spot for some DIY home improvements.",
            "zh": "適合進行一些 DIY 家居裝修的好地點。"
        },
        "tags": ["tool","wood","material"]
    },
    {
        "ID": "1139",
        "x": 12280,
        "y": 2529,
        "name": {
            "en": "Conven-U-Mart",
            "zh": "[路易斯維爾]便利商店"
        },
        "location": "Louisville",
        "description": {
            "en": "Food, glorious food.",
            "zh": "食物，光榮的食物。"
        },
        "tags": ["food"]
    },
    {
        "ID": "1140",
        "x": 13947,
        "y": 2240,
        "name": {
            "en": "Convenience Store / Laundromat",
            "zh": "[路易斯維爾]便利商店/自助洗衣店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1141",
        "x": 13721,
        "y": 3691,
        "name": {
            "en": "Corn Maze",
            "zh": "[路易斯維爾]玉米迷宮"
        },
        "location": "Louisville",
        "description": {
            "en": "Would you go here?",
            "zh": "你會去這裡嗎？"
        },
        "tags": []
    },
    {
        "ID": "1142",
        "x": 12325,
        "y": 3415,
        "name": {
            "en": "Corner-fenced house",
            "zh": "[路易斯維爾]角落圍欄房屋"
        },
        "location": "Louisville",
        "description": {
            "en": "A 2-story house on the edge of Louisville that is almost surrounded by tall fences.",
            "zh": "位於路易斯維爾邊緣的一棟兩層房屋，幾乎被高高的圍欄包圍。"
        },
        "tags": ["safe"]
    },
    {
        "ID": "1143",
        "x": 12637,
        "y": 1469,
        "name": {
            "en": "Country Clerk and Records",
            "zh": "[路易斯維爾]縣書記和記錄處"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1144",
        "x": 12468,
        "y": 1540,
        "name": {
            "en": "Court House",
            "zh": "[路易斯維爾]法院"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office","wood"]
    },
    {
        "ID": "1145",
        "x": 13344,
        "y": 1735,
        "name": {
            "en": "Diner",
            "zh": "[路易斯維爾]餐館"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1146",
        "x": 13240,
        "y": 1697,
        "name": {
            "en": "Diner",
            "zh": "[路易斯維爾]餐館"
        },
        "location": "Louisville",
        "description": {
            "en": "What more do I gotta say? Grab a bite to eat in the most zombie-infested place you possibly can.",
            "zh": "我還需要說什麼？在殭屍最有可能出沒的地方吃點東西吧。"
        },
        "tags": ["food","danger"]
    },
    {
        "ID": "1147",
        "x": 12907,
        "y": 1408,
        "name": {
            "en": "Diner",
            "zh": "[路易斯維爾]餐館"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1148",
        "x": 12718,
        "y": 1212,
        "name": {
            "en": "Diner",
            "zh": "[路易斯維爾]餐館"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1149",
        "x": 12627,
        "y": 3667,
        "name": {
            "en": "Discount Account",
            "zh": "[路易斯維爾]折扣帳戶"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1150",
        "x": 13078,
        "y": 1589,
        "name": {
            "en": "Dogs-A-Flaming",
            "zh": "[路易斯維爾]Dogs-A-Flaming"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1151",
        "x": 13470,
        "y": 1349,
        "name": {
            "en": "Donut Store",
            "zh": "[路易斯維爾]甜甜圈店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1152",
        "x": 12328,
        "y": 2268,
        "name": {
            "en": "Dormitory",
            "zh": "[路易斯維爾]宿舍"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1153",
        "x": 12662,
        "y": 1400,
        "name": {
            "en": "E. Wrayburn Building",
            "zh": "[路易斯維爾]E. Wrayburn 大樓"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1154",
        "x": 14765,
        "y": 4085,
        "name": {
            "en": "Electrical Substation",
            "zh": "[路易斯維爾]變電站"
        },
        "location": "Louisville",
        "description": {
            "en": "Grid damage detected; Technicians dispatched.",
            "zh": "檢測到電網損壞；技術人員已派出。"
        },
        "tags": ["equipment","tool"]
    },
    {
        "ID": "1155",
        "x": 12335,
        "y": 3251,
        "name": {
            "en": "Elementary School",
            "zh": "[路易斯維爾]小學"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["wood","book"]
    },
    {
        "ID": "1156",
        "x": 13683,
        "y": 2785,
        "name": {
            "en": "Evergreen Hill Community Center",
            "zh": "[路易斯維爾]常青山社區中心"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1157",
        "x": 13683,
        "y": 2785,
        "name": {
            "en": "Evergreen Hill Community Center",
            "zh": "[路易斯維爾]常青山社區中心"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1158",
        "x": 13600,
        "y": 2762,
        "name": {
            "en": "Evergreen Public School",
            "zh": "[路易斯維爾]常青公立學校"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["wood","book"]
    },
    {
        "ID": "1159",
        "x": 13605,
        "y": 1569,
        "name": {
            "en": "Family Dentistry",
            "zh": "[路易斯維爾]家庭牙醫"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["medical"]
    },
    {
        "ID": "1160",
        "x": 13533,
        "y": 2856,
        "name": {
            "en": "Fancy Mansion",
            "zh": "[路易斯維爾]豪華豪宅"
        },
        "location": "Louisville",
        "description": {
            "en": "Face the apocalypse like a king.",
            "zh": "像國王一樣面對末日。"
        },
        "tags": []
    },
    {
        "ID": "1161",
        "x": 12664,
        "y": 1151,
        "name": {
            "en": "Fancy Restaurant",
            "zh": "[路易斯維爾]高檔餐廳"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food","wine"]
    },
    {
        "ID": "1162",
        "x": 13555,
        "y": 3635,
        "name": {
            "en": "Farm Produce Warehouses",
            "zh": "[路易斯維爾]農產品倉庫"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["garden","tool","food"]
    },
    {
        "ID": "1163",
        "x": 13697,
        "y": 3604,
        "name": {
            "en": "Farmers' Market",
            "zh": "[路易斯維爾]農夫市場"
        },
        "location": "Louisville",
        "description": {
            "en": "Fresh food from our local farmers! Check out the nearby corn maze!",
            "zh": "來自我們當地農民的新鮮食物！看看附近的玉米迷宮！"
        },
        "tags": ["garden","tool","food"]
    },
    {
        "ID": "1164",
        "x": 13219,
        "y": 3021,
        "name": {
            "en": "Farming Store With Garden",
            "zh": "[路易斯維爾]帶花園的農用品店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["garden","tool","food","material"]
    },
    {
        "ID": "1165",
        "x": 13423,
        "y": 1732,
        "name": {
            "en": "Fenced Housing",
            "zh": "[路易斯維爾]帶圍欄的房屋"
        },
        "location": "Louisville",
        "description": {
            "en": "Secure Houses surrounded by tall fences. One entrance.",
            "zh": "被高圍欄包圍的安全房屋。一個入口。"
        },
        "tags": ["safe"]
    },
    {
        "ID": "1166",
        "x": 13580,
        "y": 1701,
        "name": {
            "en": "Finnegan Research Group",
            "zh": "[路易斯維爾]芬尼根研究小組"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "Office"
        ]
    },
    {
        "ID": "1167",
        "x": 13689,
        "y": 1779,
        "name": {
            "en": "Fire Department",
            "zh": "[路易斯維爾]消防局"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "Fire",
            "Fire axe",
            "Fire station",
			"weapons",
			"tool",
			"material"
        ]
    },
    {
        "ID": "1168",
        "x": 12363,
        "y": 1760,
        "name": {
            "en": "Fire Department",
            "zh": "[路易斯維爾]消防局"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "Fire",
            "Fire axe",
            "Fire station",
			"weapons",
			"tool",
			"material"
        ]
    },
    {
        "ID": "1169",
        "x": 13943,
        "y": 3047,
        "name": {
            "en": "Fire Department",
            "zh": "[路易斯維爾]消防局"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "Fire",
            "Fire axe",
            "Fire station",
			"weapons",
			"tool",
			"material"
        ]
    },
    {
        "ID": "1170",
        "x": 12617,
        "y": 2354,
        "name": {
            "en": "First Train Inn",
            "zh": "[路易斯維爾]第一列車旅館"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1171",
        "x": 13346,
        "y": 1753,
        "name": {
            "en": "Food Market",
            "zh": "[路易斯維爾]食品市場"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1172",
        "x": 12481,
        "y": 1929,
        "name": {
            "en": "Food Market",
            "zh": "[路易斯維爾]食品市場"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1173",
        "x": 13567,
        "y": 3024,
        "name": {
            "en": "Food Market",
            "zh": "[路易斯維爾]食品市場"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1174",
        "x": 13782,
        "y": 2542,
        "name": {
            "en": "Food Market",
            "zh": "[路易斯維爾]食品市場"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1175",
        "x": 13177,
        "y": 1603,
        "name": {
            "en": "Food Market",
            "zh": "[路易斯維爾]食品市場"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1176",
        "x": 12368,
        "y": 2463,
        "name": {
            "en": "Football Field",
            "zh": "[路易斯維爾]足球場"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1177",
        "x": 13026,
        "y": 1581,
        "name": {
            "en": "Fossoil Field - Baseball stadium",
            "zh": "[路易斯維爾]Fossoil 球場 - 棒球場"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1178",
        "x": 12082,
        "y": 1612,
        "name": {
            "en": "Fossoil Headquarters",
            "zh": "[路易斯維爾]Fossoil 總部"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1179",
        "x": 13039,
        "y": 1634,
        "name": {
            "en": "From The Dugouts",
            "zh": "[路易斯維爾]From The Dugouts"
        },
        "location": "Louisville",
        "description": {
            "en": "Gifts + Souvenirs",
            "zh": "禮品 + 紀念品"
        },
        "tags": []
    },
    {
        "ID": "1180",
        "x": 12369,
        "y": 1319,
        "name": {
            "en": "Fun XTreme",
            "zh": "[路易斯維爾]極限樂趣"
        },
        "location": "Louisville",
        "description": {
            "en": "Mini Golf, Bowling, Arcade, Laser Tag.",
            "zh": "迷你高爾夫、保齡球、遊樂場、雷射槍戰。"
        },
        "tags": []
    },
    {
        "ID": "1181",
        "x": 13153,
        "y": 1516,
        "name": {
            "en": "Funeral Home",
            "zh": "[路易斯維爾]殯儀館"
        },
        "location": "Louisville",
        "description": {
            "en": "Here the dead are welcome!",
            "zh": "歡迎逝者！"
        },
        "tags": []
    },
    {
        "ID": "1182",
        "x": 13115,
        "y": 1444,
        "name": {
            "en": "Furniture Store",
            "zh": "[路易斯維爾]家具店"
        },
        "location": "Louisville",
        "description": {
            "en": "Furniture Store with an antique stove.",
            "zh": "帶有古董烤爐的家具店。"
        },
        "tags": ["tool","wood","Furniture"]
    },
    {
        "ID": "1183",
        "x": 12668,
        "y": 2163,
        "name": {
            "en": "Furniture Store",
            "zh": "[路易斯維爾]家具店"
        },
        "location": "Louisville",
        "description": {
            "en": "Better Furnishings.",
            "zh": "更好的家具。"
        },
        "tags": ["Furniture"]
    },
    {
        "ID": "1184",
        "x": 13420,
        "y": 1462,
        "name": {
            "en": "Furniture Store",
            "zh": "[路易斯維爾]家具店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Furniture"]
    },
    {
        "ID": "1185",
        "x": 13380,
        "y": 3073,
        "name": {
            "en": "Furniture Store",
            "zh": "[路易斯維爾]家具店"
        },
        "location": "Louisville",
        "description": {
            "en": "A small furniture store with decent options.",
            "zh": "選擇不錯的小型家具店。"
        },
        "tags": ["Furniture"]
    },
    {
        "ID": "1186",
        "x": 13143,
        "y": 3013,
        "name": {
            "en": "Garage For Lease",
            "zh": "[路易斯維爾]待租車庫"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1187",
        "x": 12098,
        "y": 2100,
        "name": {
            "en": "Gas Station",
            "zh": "[路易斯維爾]加油站"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["gasoline"]
    },
    {
        "ID": "1188",
        "x": 12713,
        "y": 2239,
        "name": {
            "en": "Gas Station",
            "zh": "[路易斯維爾]加油站"
        },
        "location": "Louisville",
        "description": {
            "en": "Gas-2-Go.",
            "zh": "Gas-2-Go。"
        },
        "tags": ["gasoline"]
    },
    {
        "ID": "1189",
        "x": 12273,
        "y": 1621,
        "name": {
            "en": "Gas Station",
            "zh": "[路易斯維爾]加油站"
        },
        "location": "Louisville",
        "description": {
            "en": "Fossoil.",
            "zh": "Fossoil。"
        },
        "tags": ["gasoline"]
    },
    {
        "ID": "1190",
        "x": 12444,
        "y": 3536,
        "name": {
            "en": "Gas Station",
            "zh": "[路易斯維爾]加油站"
        },
        "location": "Louisville",
        "description": {
            "en": "Fossoil.",
            "zh": "Fossoil。"
        },
        "tags": ["gasoline"]
    },
    {
        "ID": "1191",
        "x": 13960,
        "y": 3275,
        "name": {
            "en": "Gas Station",
            "zh": "[路易斯維爾]加油站"
        },
        "location": "Louisville",
        "description": {
            "en": "Gas-2-Go.",
            "zh": "Gas-2-Go。"
        },
        "tags": ["gasoline"]
    },
    {
        "ID": "1192",
        "x": 13386,
        "y": 1412,
        "name": {
            "en": "Gas Station",
            "zh": "[路易斯維爾]加油站"
        },
        "location": "Louisville",
        "description": {
            "en": "Fossoil.",
            "zh": "Fossoil。"
        },
        "tags": ["gasoline"]
    },
    {
        "ID": "1193",
        "x": 12912,
        "y": 3029,
        "name": {
            "en": "Gas Station",
            "zh": "[路易斯維爾]加油站"
        },
        "location": "Louisville",
        "description": {
            "en": "Fossoil.",
            "zh": "Fossoil。"
        },
        "tags": ["gasoline"]
    },
    {
        "ID": "1194",
        "x": 13556,
        "y": 2138,
        "name": {
            "en": "Gas Station",
            "zh": "[路易斯維爾]加油站"
        },
        "location": "Louisville",
        "description": {
            "en": "Gas-2-Go.",
            "zh": "Gas-2-Go。"
        },
        "tags": ["gasoline"]
    },
    {
        "ID": "1195",
        "x": 13619,
        "y": 1527,
        "name": {
            "en": "Gas Station",
            "zh": "[路易斯維爾]加油站"
        },
        "location": "Louisville",
        "description": {
            "en": "Gas-2-Go.",
            "zh": "Gas-2-Go。"
        },
        "tags": ["gasoline"]
    },
    {
        "ID": "1196",
        "x": 13383,
        "y": 2966,
        "name": {
            "en": "Gas Station",
            "zh": "[路易斯維爾]加油站"
        },
        "location": "Louisville",
        "description": {
            "en": "Gas-2-Go, 4 pumps.",
            "zh": "Gas-2-Go，4個油泵。"
        },
        "tags": ["gasoline"]
    },
    {
        "ID": "1197",
        "x": 12998,
        "y": 2162,
        "name": {
            "en": "Gas Station",
            "zh": "[路易斯維爾]加油站"
        },
        "location": "Louisville",
        "description": {
            "en": "Fossoil, 8 pumps.",
            "zh": "Fossoil，8個油泵。"
        },
        "tags": ["gasoline"]
    },
    {
        "ID": "1198",
        "x": 13133,
        "y": 1324,
        "name": {
            "en": "Gas Station",
            "zh": "[路易斯維爾]加油站"
        },
        "location": "Louisville",
        "description": {
            "en": "Gas-2-Go, 4-pumps.",
            "zh": "Gas-2-Go，4個油泵。"
        },
        "tags": ["gasoline"]
    },
    {
        "ID": "1199",
        "x": 12579,
        "y": 2550,
        "name": {
            "en": "Gas Station/GigaMart",
            "zh": "[路易斯維爾]加油站/GigaMart"
        },
        "location": "Louisville",
        "description": {
            "en": "GigaMart with 4 gas pumps next to it.",
            "zh": "GigaMart 旁邊有 4 個加油泵。"
        },
        "tags": ["gasoline"]
    },
    {
        "ID": "1200",
        "x": 12207,
        "y": 1799,
        "name": {
            "en": "Gated Community",
            "zh": "[路易斯維爾]封閉式社區"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["safe"]
    },
    {
        "ID": "1201",
        "x": 13452,
        "y": 3057,
        "name": {
            "en": "GigaMart",
            "zh": "[路易斯維爾]GigaMart"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1202",
        "x": 12633,
        "y": 1672,
        "name": {
            "en": "GigaMart",
            "zh": "[路易斯維爾]GigaMart"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1203",
        "x": 12425,
        "y": 1323,
        "name": {
            "en": "Glo Night Club",
            "zh": "[路易斯維爾]Glo 夜總會"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["wine"]
    },
    {
        "ID": "1204",
        "x": 12413,
        "y": 2827,
        "name": {
            "en": "Go Flash",
            "zh": "[路易斯維爾]Go Flash"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1205",
        "x": 12576,
        "y": 1882,
        "name": {
            "en": "Golden Dragon Buffet",
            "zh": "[路易斯維爾]金龍自助餐"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1206",
        "x": 12662,
        "y": 2190,
        "name": {
            "en": "Goodman Legal Services",
            "zh": "[路易斯維爾]Goodman 法律服務"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1207",
        "x": 13362,
        "y": 1292,
        "name": {
            "en": "Greene's",
            "zh": "[路易斯維爾]Greene's"
        },
        "location": "Louisville",
        "description": {
            "en": "Grocery store.",
            "zh": "雜貨店。"
        },
        "tags": ["food","book"]
    },
    {
        "ID": "1208",
        "x": 13334,
        "y": 2959,
        "name": {
            "en": "Greene's",
            "zh": "[路易斯維爾]Greene's"
        },
        "location": "Louisville",
        "description": {
            "en": "Grocery store.",
            "zh": "雜貨店。"
        },
        "tags": ["food","book"]
    },
    {
        "ID": "1209",
        "x": 13510,
        "y": 2142,
        "name": {
            "en": "Greene's",
            "zh": "[路易斯維爾]Greene's"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food","book"]
    },
    {
        "ID": "1210",
        "x": 13137,
        "y": 2123,
        "name": {
            "en": "Greene's",
            "zh": "[路易斯維爾]Greene's"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food","book"]
    },
    {
        "ID": "1211",
        "x": 13328,
        "y": 3072,
        "name": {
            "en": "Grill store",
            "zh": "[路易斯維爾]燒烤店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1212",
        "x": 13246,
        "y": 1633,
        "name": {
            "en": "Grocery Store",
            "zh": "[路易斯維爾]雜貨店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food","book"]
    },
    {
        "ID": "1213",
        "x": 13594,
        "y": 1536,
        "name": {
            "en": "Gun Store",
            "zh": "[路易斯維爾]槍店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["gun","weapons"]
    },
    {
        "ID": "1214",
        "x": 12361,
        "y": 1720,
        "name": {
            "en": "Gun Store",
            "zh": "[路易斯維爾]槍店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["gun","weapons"]
    },
    {
        "ID": "1215",
        "x": 13555,
        "y": 1273,
        "name": {
            "en": "Gun Store",
            "zh": "[路易斯維爾]槍店"
        },
        "location": "Louisville",
        "description": {
            "en": "Stars and Stripes.",
            "zh": "星條旗。"
        },
        "tags": ["gun","weapons"]
    },
    {
        "ID": "1216",
        "x": 12630,
        "y": 1144,
        "name": {
            "en": "Gym",
            "zh": "[路易斯維爾]健身房"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1217",
        "x": 12854,
        "y": 1373,
        "name": {
            "en": "Gym",
            "zh": "[路易斯維爾]健身房"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1218",
        "x": 13330,
        "y": 2971,
        "name": {
            "en": "Hair Genesis",
            "zh": "[路易斯維爾]毛髮起源"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1219",
        "x": 13959,
        "y": 3106,
        "name": {
            "en": "Hardware Store",
            "zh": "[路易斯維爾]五金行"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["tool","weapons","material","hardware"]
    },
    {
        "ID": "1220",
        "x": 13172,
        "y": 1551,
        "name": {
            "en": "Hardware Store",
            "zh": "[路易斯維爾]五金行"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["tool","weapons","material","hardware"]
    },
    {
        "ID": "1221",
        "x": 13312,
        "y": 1307,
        "name": {
            "en": "Hardware Store",
            "zh": "[路易斯維爾]五金行"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["tool","weapons","material","hardware"]
    },
    {
        "ID": "1222",
        "x": 12377,
        "y": 1382,
        "name": {
            "en": "Hardware Store",
            "zh": "[路易斯維爾]五金行"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["tool","weapons","material","hardware"]
    },
    {
        "ID": "1223",
        "x": 13959,
        "y": 3099,
        "name": {
            "en": "Hardware Store",
            "zh": "[路易斯維爾]五金行"
        },
        "location": "Louisville",
        "description": {
            "en": "E.P. Tools.",
            "zh": "E.P. Tools。"
        },
        "tags": ["tool","weapons","material","hardware"]
    },
    {
        "ID": "1224",
        "x": 13528,
        "y": 3089,
        "name": {
            "en": "Hardware Store",
            "zh": "[路易斯維爾]五金行"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["tool","weapons","material","hardware"]
    },
    {
        "ID": "1225",
        "x": 13521,
        "y": 1318,
        "name": {
            "en": "Hardware Store",
            "zh": "[路易斯維爾]五金行"
        },
        "location": "Louisville",
        "description": {
            "en": "On the second floor of Grand Ohio Mall.",
            "zh": "位於 Grand Ohio 購物中心的二樓。"
        },
        "tags": ["tool","weapons","material","hardware"]
    },
    {
        "ID": "1226",
        "x": 13369,
        "y": 3074,
        "name": {
            "en": "Hardware store",
            "zh": "[路易斯維爾]五金行"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["tool","weapons","material","hardware"]
    },
    {
        "ID": "1227",
        "x": 12927,
        "y": 1485,
        "name": {
            "en": "Hickory Bakery Box",
            "zh": "[路易斯維爾]山核桃烘焙盒"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1228",
        "x": 13049,
        "y": 1710,
        "name": {
            "en": "HighSchool",
            "zh": "[路易斯維爾]高中"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["book","wood"]
    },
    {
        "ID": "1229",
        "x": 12606,
        "y": 4161,
        "name": {
            "en": "Hole in the Fence",
            "zh": "[路易斯維爾]圍欄上的洞"
        },
        "location": "Louisville",
        "description": {
            "en": "The alternate way to the army checkpoint.",
            "zh": "通往軍隊檢查站的另一條路。"
        },
        "tags": ["safe"]
    },
    {
        "ID": "1230",
        "x": 12224,
        "y": 2757,
        "name": {
            "en": "Horsetrack",
            "zh": "[路易斯維爾]賽馬場"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1231",
        "x": 12940,
        "y": 2076,
        "name": {
            "en": "Hospital",
            "zh": "[路易斯維爾]醫院"
        },
        "location": "Louisville",
        "description": {
            "en": "Louisville Central Hospital.",
            "zh": "路易斯維爾中心醫院。"
        },
        "tags": ["medical"]
    },
    {
        "ID": "1232",
        "x": 12578,
        "y": 1816,
        "name": {
            "en": "Hugo Plush",
            "zh": "[路易斯維爾]Hugo Plush"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1233",
        "x": 13466,
        "y": 2979,
        "name": {
            "en": "Jay's Chicken",
            "zh": "[路易斯維爾]Jay's 炸雞"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1234",
        "x": 13630,
        "y": 1271,
        "name": {
            "en": "Jay's Chicken",
            "zh": "[路易斯維爾]Jay's 炸雞"
        },
        "location": "Louisville",
        "description": {
            "en": "Fast-food Restaurant.",
            "zh": "速食餐廳。"
        },
        "tags": ["food"]
    },
    {
        "ID": "1235",
        "x": 12745,
        "y": 2233,
        "name": {
            "en": "Jay's Chicken",
            "zh": "[路易斯維爾]Jay's 炸雞"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1236",
        "x": 13365,
        "y": 1350,
        "name": {
            "en": "Jay's Chicken",
            "zh": "[路易斯維爾]Jay's 炸雞"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1237",
        "x": 12271,
        "y": 1381,
        "name": {
            "en": "Jay's Chicken",
            "zh": "[路易斯維爾]Jay's 炸雞"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food"]
    },
    {
        "ID": "1238",
        "x": 12790,
        "y": 2227,
        "name": {
            "en": "Jay's Chicken HQ",
            "zh": "[路易斯維爾]Jay's 炸雞總部"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1239",
        "x": 13695,
        "y": 1681,
        "name": {
            "en": "Junkyard",
            "zh": "[路易斯維爾]廢車場"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["material","autorepair","Junk"]
    },
    {
        "ID": "1240",
        "x": 12558,
        "y": 2408,
        "name": {
            "en": "KY Transit",
            "zh": "[路易斯維爾]KY 交通"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["vehicle","material","autorepair","tool","Junk"]
    },
    {
        "ID": "1241",
        "x": 12615,
        "y": 3557,
        "name": {
            "en": "Kentucky Herald Newspaper",
            "zh": "[路易斯維爾]肯塔基先驅報"
        },
        "location": "Louisville",
        "description": {
            "en": "Printing factory and writers/editors workplace.",
            "zh": "印刷廠和作家/編輯工作場所。"
        },
        "tags": ["book"]
    },
    {
        "ID": "1242",
        "x": 12427,
        "y": 1371,
        "name": {
            "en": "Kitchen Supply Store",
            "zh": "[路易斯維爾]廚房用品店"
        },
        "location": "Louisville",
        "description": {
            "en": "Appliances, pots, pans, etc.",
            "zh": "電器、鍋、平底鍋等。"
        },
        "tags": ["tool","Kitchen"]
    },
    {
        "ID": "1243",
        "x": 12171,
        "y": 1394,
        "name": {
            "en": "Kitten Knives",
            "zh": "[路易斯維爾]小貓刀具"
        },
        "location": "Louisville",
        "description": {
            "en": "Large office building with a production line and storage.",
            "zh": "設有生產線和倉儲的大型辦公樓。"
        },
        "tags": [
		    "Office","Warehouses","tool","Office"
		]
    },
    {
        "ID": "1244",
        "x": 12566,
        "y": 1696,
        "name": {
            "en": "Knox Bank",
            "zh": "[路易斯維爾]諾克斯銀行"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1245",
        "x": 13410,
        "y": 1353,
        "name": {
            "en": "Knox Bank",
            "zh": "[路易斯維爾]諾克斯銀行"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1246",
        "x": 12617,
        "y": 1586,
        "name": {
            "en": "Knox Bank (Classic Building)",
            "zh": "[路易斯維爾]諾克斯銀行（經典建築）"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1247",
        "x": 13603,
        "y": 3027,
        "name": {
            "en": "Knox Bank (Modern Building)",
            "zh": "[路易斯維爾]諾克斯銀行（現代建築）"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1248",
        "x": 12912,
        "y": 1380,
        "name": {
            "en": "Knox Distillery",
            "zh": "[路易斯維爾]諾克斯釀酒廠"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["wine"]
    },
    {
        "ID": "1249",
        "x": 12917,
        "y": 1446,
        "name": {
            "en": "Knox Pack Kitchens",
            "zh": "[路易斯維爾]諾克斯包裝廚房"
        },
        "location": "Louisville",
        "description": {
            "en": "Kitchen Appliance Store.",
            "zh": "廚房電器店。"
        },
        "tags": ["Kitchen","tool","equipment"]
    },
    {
        "ID": "1250",
        "x": 13561,
        "y": 1581,
        "name": {
            "en": "Knox Talk Radio Station",
            "zh": "[路易斯維爾]諾克斯脫口秀電台"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office","equipment"]
    },
    {
        "ID": "1251",
        "x": 12632,
        "y": 3769,
        "name": {
            "en": "KnoxPack Kitchens",
            "zh": "[路易斯維爾]諾克斯包裝廚房"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Kitchen","food"]
    },
    {
        "ID": "1252",
        "x": 12340,
        "y": 2057,
        "name": {
            "en": "LBMW Station",
            "zh": "[路易斯維爾]LBMW 電台"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office","equipment"]
    },
    {
        "ID": "1253",
        "x": 12406,
        "y": 2255,
        "name": {
            "en": "LSU Campus",
            "zh": "[路易斯維爾]LSU 校園"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["book","wood"]
    },
    {
        "ID": "1254",
        "x": 12350,
        "y": 2142,
        "name": {
            "en": "LSU Library",
            "zh": "[路易斯維爾]LSU 圖書館"
        },
        "location": "Louisville",
        "description": {
            "en": "Louisville State University Library.",
            "zh": "路易斯維爾州立大學圖書館。"
        },
        "tags": ["book","wood"]
    },
    {
        "ID": "1255",
        "x": 12787,
        "y": 1848,
        "name": {
            "en": "Large Apartment Complex",
            "zh": "[路易斯維爾]大型公寓樓"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1256",
        "x": 14121,
        "y": 2798,
        "name": {
            "en": "Large Gated Community",
            "zh": "[路易斯維爾]大型封閉式社區"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1257",
        "x": 12759,
        "y": 2944,
        "name": {
            "en": "Large Grocery Store",
            "zh": "[路易斯維爾]大型雜貨店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["food","book","tool","material"]
    },
    {
        "ID": "1258",
        "x": 12720,
        "y": 2180,
        "name": {
            "en": "Large Warehouse",
            "zh": "[路易斯維爾]大型倉庫"
        },
        "location": "Louisville",
        "description": {
            "en": "Tools and more.",
            "zh": "工具及更多。"
        },
        "tags": ["Warehouses","tool","material"]
    },
    {
        "ID": "1259",
        "x": 12254,
        "y": 3545,
        "name": {
            "en": "Leafhill Heights Offices",
            "zh": "[路易斯維爾]Leafhill Heights 辦公室"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
		    "Office","equipment"
		]
    },
    {
        "ID": "1260",
        "x": 12565,
        "y": 3761,
        "name": {
            "en": "Line by Line Design",
            "zh": "[路易斯維爾]逐行設計"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1261",
        "x": 12408,
        "y": 2845,
        "name": {
            "en": "Liquor Store",
            "zh": "[路易斯維爾]酒類專賣店"
        },
        "location": "Louisville",
        "description": {
            "en": "Liquorty Split.",
            "zh": "Liquorty Split。"
        },
        "tags": ["wine"]
    },
    {
        "ID": "1262",
        "x": 13440,
        "y": 1292,
        "name": {
            "en": "Liquor Store",
            "zh": "[路易斯維爾]酒類專賣店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["wine"]
    },
    {
        "ID": "1263",
        "x": 12232,
        "y": 1347,
        "name": {
            "en": "Liquor Store",
            "zh": "[路易斯維爾]酒類專賣店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["wine"]
    },
    {
        "ID": "1264",
        "x": 12618,
        "y": 2292,
        "name": {
            "en": "Liquor Store",
            "zh": "[路易斯維爾]酒類專賣店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["wine"]
    },
    {
        "ID": "1265",
        "x": 12717,
        "y": 5059,
        "name": {
            "en": "Liquor store",
            "zh": "[路易斯維爾]酒類專賣店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["wine"]
    },
    {
        "ID": "1266",
        "x": 13960,
        "y": 3205,
        "name": {
            "en": "Liquor store",
            "zh": "[路易斯維爾]酒類專賣店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["wine"]
    },
    {
        "ID": "1267",
        "x": 12831,
        "y": 1333,
        "name": {
            "en": "Lola Limon",
            "zh": "[路易斯維爾]Lola Limon"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1268",
        "x": 13522,
        "y": 1271,
        "name": {
            "en": "Lola Limon",
            "zh": "[路易斯維爾]Lola Limon"
        },
        "location": "Louisville",
        "description": {
            "en": "Inside of the mall.",
            "zh": "在購物中心內。"
        },
        "tags": []
    },
    {
        "ID": "1269",
        "x": 12263,
        "y": 1444,
        "name": {
            "en": "Louisville Animal Shelter",
            "zh": "[路易斯維爾]路易斯維爾動物收容所"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1270",
        "x": 12776,
        "y": 1144,
        "name": {
            "en": "Louisville Boat Club",
            "zh": "[路易斯維爾]路易斯維爾遊艇俱樂部"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1271",
        "x": 13249,
        "y": 1234,
        "name": {
            "en": "Louisville Bruiser",
            "zh": "[路易斯維爾]路易斯維爾布魯澤"
        },
        "location": "Louisville",
        "description": {
            "en": "Baseball Bat Factory.",
            "zh": "棒球棒工廠。"
        },
        "tags": []
    },
    {
        "ID": "1272",
        "x": 12563,
        "y": 1534,
        "name": {
            "en": "Louisville City Hall",
            "zh": "[路易斯維爾]路易斯維爾市政廳"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1273",
        "x": 12965,
        "y": 1309,
        "name": {
            "en": "Louisville Expo Center",
            "zh": "[路易斯維爾]路易斯維爾博覽中心"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1274",
        "x": 13759,
        "y": 1937,
        "name": {
            "en": "Louisville Music Concert",
            "zh": "[路易斯維爾]路易斯維爾音樂會"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1275",
        "x": 13182,
        "y": 1276,
        "name": {
            "en": "Mama McFudgington's",
            "zh": "[路易斯維爾]Mama McFudgington's"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1276",
        "x": 12233,
        "y": 1627,
        "name": {
            "en": "Maps Unlimited",
            "zh": "[路易斯維爾]地圖無限"
        },
        "location": "Louisville",
        "description": {
            "en": "Sells domestic and internation maps and magazines.",
            "zh": "販售國內外地圖和雜誌。"
        },
        "tags": []
    },
    {
        "ID": "1277",
        "x": 12606,
        "y": 3701,
        "name": {
            "en": "Mashie Signs & Paintings",
            "zh": "[路易斯維爾]Mashie 標誌與繪畫"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1278",
        "x": 12571,
        "y": 3172,
        "name": {
            "en": "Mausoleum",
            "zh": "[路易斯維爾]陵墓"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1279",
        "x": 12423,
        "y": 1761,
        "name": {
            "en": "Medical Center",
            "zh": "[路易斯維爾]醫療中心"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1280",
        "x": 12733,
        "y": 3969,
        "name": {
            "en": "Military Homes",
            "zh": "[路易斯維爾]軍事住房"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1281",
        "x": 12668,
        "y": 2125,
        "name": {
            "en": "Milk 'n' More",
            "zh": "[路易斯維爾]Milk 'n' More"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1282",
        "x": 13958,
        "y": 3242,
        "name": {
            "en": "Milk 'n' More",
            "zh": "[路易斯維爾]Milk 'n' More"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1283",
        "x": 12428,
        "y": 2774,
        "name": {
            "en": "Motel",
            "zh": "[路易斯維爾]汽車旅館"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1284",
        "x": 13225,
        "y": 3523,
        "name": {
            "en": "Motel",
            "zh": "[路易斯維爾]汽車旅館"
        },
        "location": "Louisville",
        "description": {
            "en": "A motel with a large outside pool and plenty of rooms.",
            "zh": "一間擁有大型室外游泳池和充足房間的汽車旅館。"
        },
        "tags": []
    },
    {
        "ID": "1285",
        "x": 12333,
        "y": 1369,
        "name": {
            "en": "Movie theater",
            "zh": "[路易斯維爾]電影院"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1286",
        "x": 12403,
        "y": 1389,
        "name": {
            "en": "Music store",
            "zh": "[路易斯維爾]音樂店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1287",
        "x": 12438,
        "y": 3108,
        "name": {
            "en": "My Sunday Market",
            "zh": "[路易斯維爾]我的週日市場"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1288",
        "x": 12645,
        "y": 1918,
        "name": {
            "en": "News Now Network",
            "zh": "[路易斯維爾]新聞網"
        },
        "location": "Louisville",
        "description": {
            "en": "Large building with many shelves, desks, and a few themed filming sets.",
            "zh": "設有許多架子、書桌和一些主題拍攝場景的大型建築。"
        },
        "tags": []
    },
    {
        "ID": "1289",
        "x": 12155,
        "y": 2914,
        "name": {
            "en": "Oak Park Apartments",
            "zh": "[路易斯維爾]橡樹公園公寓"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1290",
        "x": 13682,
        "y": 1572,
        "name": {
            "en": "Office Furniture Store",
            "zh": "[路易斯維爾]辦公家具店"
        },
        "location": "Louisville",
        "description": {
            "en": "Lots of desks here.",
            "zh": "這裡有很多書桌。"
        },
        "tags": ["Office"]
    },
    {
        "ID": "1291",
        "x": 13179,
        "y": 1748,
        "name": {
            "en": "Palette Art Supplies",
            "zh": "[路易斯維爾]調色板美術用品"
        },
        "location": "Louisville",
        "description": {
            "en": "For all your base decoration needs!",
            "zh": "滿足您所有基地裝飾的需求！"
        },
        "tags": []
    },
    {
        "ID": "1292",
        "x": 13391,
        "y": 2368,
        "name": {
            "en": "Park Center",
            "zh": "[路易斯維爾]公園中心"
        },
        "location": "Louisville",
        "description": {
            "en": "Louisville central park center.",
            "zh": "路易斯維爾中央公園中心。"
        },
        "tags": []
    },
    {
        "ID": "1293",
        "x": 12320,
        "y": 1331,
        "name": {
            "en": "Pawn Shop",
            "zh": "[路易斯維爾]當鋪"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1294",
        "x": 13123,
        "y": 2975,
        "name": {
            "en": "Pawn Shop",
            "zh": "[路易斯維爾]當鋪"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1295",
        "x": 12376,
        "y": 1470,
        "name": {
            "en": "Pawn Shop",
            "zh": "[路易斯維爾]當鋪"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1296",
        "x": 12488,
        "y": 1383,
        "name": {
            "en": "Pawn Shop",
            "zh": "[路易斯維爾]當鋪"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1297",
        "x": 12268,
        "y": 1341,
        "name": {
            "en": "Perfick Potato Co.",
            "zh": "[路易斯維爾]Perfick 馬鈴薯公司"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1298",
        "x": 13217,
        "y": 3044,
        "name": {
            "en": "Pet Health Pawmise",
            "zh": "[路易斯維爾]寵物健康保證"
        },
        "location": "Louisville",
        "description": {
            "en": "A Veterinarian's office.",
            "zh": "一間獸醫診所。"
        },
        "tags": ["Office"]
    },
    {
        "ID": "1299",
        "x": 13237,
        "y": 1286,
        "name": {
            "en": "Pharmacy",
            "zh": "[路易斯維爾]藥局"
        },
        "location": "Louisville",
        "description": {
            "en": "Pharmahug.",
            "zh": "Pharmahug。"
        },
        "tags": []
    },
    {
        "ID": "1300",
        "x": 13123,
        "y": 2126,
        "name": {
            "en": "Pharmacy",
            "zh": "[路易斯維爾]藥局"
        },
        "location": "Louisville",
        "description": {
            "en": "Pharmahug.",
            "zh": "Pharmahug。"
        },
        "tags": []
    },
    {
        "ID": "1301",
        "x": 13232,
        "y": 2972,
        "name": {
            "en": "Pharmacy",
            "zh": "[路易斯維爾]藥局"
        },
        "location": "Louisville",
        "description": {
            "en": "Med-U-Well Pharmacy and Medical Clinic.",
            "zh": "Med-U-Well 藥局和醫療診所。"
        },
        "tags": []
    },
    {
        "ID": "1302",
        "x": 12950,
        "y": 1482,
        "name": {
            "en": "Pharmacy",
            "zh": "[路易斯維爾]藥局"
        },
        "location": "Louisville",
        "description": {
            "en": "Med-U-Well Pharmacy and Clinic.",
            "zh": "Med-U-Well 藥局和診所。"
        },
        "tags": []
    },
    {
        "ID": "1303",
        "x": 12440,
        "y": 3832,
        "name": {
            "en": "Pizza Whirled",
            "zh": "[路易斯維爾]環球披薩"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1304",
        "x": 13170,
        "y": 3028,
        "name": {
            "en": "Pizza Whirled",
            "zh": "[路易斯維爾]環球披薩"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1305",
        "x": 13225,
        "y": 2104,
        "name": {
            "en": "Pizza Whirled",
            "zh": "[路易斯維爾]環球披薩"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1306",
        "x": 13652,
        "y": 1278,
        "name": {
            "en": "Pizza Whirled",
            "zh": "[路易斯維爾]環球披薩"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1307",
        "x": 13474,
        "y": 1411,
        "name": {
            "en": "Pizza Whirled",
            "zh": "[路易斯維爾]環球披薩"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1308",
        "x": 13517,
        "y": 2112,
        "name": {
            "en": "Pizza Whirled",
            "zh": "[路易斯維爾]環球披薩"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1309",
        "x": 13782,
        "y": 2558,
        "name": {
            "en": "Police Station",
            "zh": "[路易斯維爾]警察局"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1310",
        "x": 13220,
        "y": 3087,
        "name": {
            "en": "Police Station",
            "zh": "[路易斯維爾]警察局"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1311",
        "x": 12444,
        "y": 1609,
        "name": {
            "en": "Police Station & Prison",
            "zh": "[路易斯維爾]警察局與監獄"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1312",
        "x": 12961,
        "y": 1379,
        "name": {
            "en": "Police station",
            "zh": "[路易斯維爾]警察局"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1313",
        "x": 12624,
        "y": 2076,
        "name": {
            "en": "Post Office",
            "zh": "[路易斯維爾]郵局"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1314",
        "x": 12514,
        "y": 4063,
        "name": {
            "en": "Refugee Area",
            "zh": "[路易斯維爾]難民區"
        },
        "location": "Louisville",
        "description": {
            "en": "Refugee Area with lots of tents, propane bbqs, and metal drums.",
            "zh": "設有許多帳篷、丙烷燒烤架和金屬桶的難民區。"
        },
        "tags": []
    },
    {
        "ID": "1315",
        "x": 13423,
        "y": 3738,
        "name": {
            "en": "Refugee Camp",
            "zh": "[路易斯維爾]難民營"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1316",
        "x": 14824,
        "y": 3716,
        "name": {
            "en": "Remote House with a field",
            "zh": "[路易斯維爾]帶有田野的偏遠房屋"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1317",
        "x": 12421,
        "y": 1423,
        "name": {
            "en": "Repurposed Building",
            "zh": "[路易斯維爾]改建建築"
        },
        "location": "Louisville",
        "description": {
            "en": "A large building repurposed for what appears to be the army, containing many cots, clothing, and weapons, slightly southwest of the theater in the north of the city.",
            "zh": "一棟大型建築被改建為看似軍隊用途，內部有許多行軍床、衣物和武器，位於城市北部劇院的西南方。"
        },
        "tags": []
    },
    {
        "ID": "1318",
        "x": 13597,
        "y": 1699,
        "name": {
            "en": "Research Labs",
            "zh": "[路易斯維爾]研究實驗室"
        },
        "location": "Louisville",
        "description": {
            "en": "Good lord what is happening in there!",
            "zh": "天啊，裡面發生了什麼事！"
        },
        "tags": []
    },
    {
        "ID": "1319",
        "x": 13959,
        "y": 3211,
        "name": {
            "en": "Resturant",
            "zh": "[路易斯維爾]餐廳"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1320",
        "x": 12731,
        "y": 1143,
        "name": {
            "en": "Resturant",
            "zh": "[路易斯維爾]餐廳"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1321",
        "x": 12975,
        "y": 1430,
        "name": {
            "en": "Roller Skating Rink",
            "zh": "[路易斯維爾]溜冰場"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1322",
        "x": 12527,
        "y": 1751,
        "name": {
            "en": "Romero Center for the Performing Arts",
            "zh": "[路易斯維爾]羅梅羅表演藝術中心"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1323",
        "x": 13639,
        "y": 4072,
        "name": {
            "en": "Ruined Gas Station",
            "zh": "[路易斯維爾]廢棄加油站"
        },
        "location": "Louisville",
        "description": {
            "en": "With one surviving pump.",
            "zh": "還有一個油泵倖存。"
        },
        "tags": []
    },
    {
        "ID": "1324",
        "x": 12034,
        "y": 1945,
        "name": {
            "en": "Scarlet Oak Distillery",
            "zh": "[路易斯維爾]猩紅橡樹釀酒廠"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1325",
        "x": 12576,
        "y": 1635,
        "name": {
            "en": "Seahorse Coffee",
            "zh": "[路易斯維爾]海馬咖啡"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1326",
        "x": 13523,
        "y": 1714,
        "name": {
            "en": "Seahorse Coffee",
            "zh": "[路易斯維爾]海馬咖啡"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1327",
        "x": 13078,
        "y": 1598,
        "name": {
            "en": "Seahorse Coffee",
            "zh": "[路易斯維爾]海馬咖啡"
        },
        "location": "Louisville",
        "description": {
            "en": "A coffee store inside Fossoil Stadium.",
            "zh": "Fossoil 體育場內的一家咖啡店。"
        },
        "tags": []
    },
    {
        "ID": "1328",
        "x": 13084,
        "y": 2023,
        "name": {
            "en": "Shady Oaks Nursing Home",
            "zh": "[路易斯維爾]Shady Oaks 養老院"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1329",
        "x": 13570,
        "y": 1274,
        "name": {
            "en": "Sheba Jewellers",
            "zh": "[路易斯維爾]示巴珠寶商"
        },
        "location": "Louisville",
        "description": {
            "en": "Jewelry Store.",
            "zh": "珠寶店。"
        },
        "tags": []
    },
    {
        "ID": "1330",
        "x": 12517,
        "y": 1445,
        "name": {
            "en": "Small Art Gallery",
            "zh": "[路易斯維爾]小型美術館"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1331",
        "x": 13610,
        "y": 1366,
        "name": {
            "en": "Small Art Gallery",
            "zh": "[路易斯維爾]小型美術館"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1332",
        "x": 13344,
        "y": 3045,
        "name": {
            "en": "Small Mall",
            "zh": "[路易斯維爾]小型購物中心"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1333",
        "x": 13446,
        "y": 4077,
        "name": {
            "en": "Small Military Checkpoint",
            "zh": "[路易斯維爾]小型軍事檢查站"
        },
        "location": "Louisville",
        "description": {
            "en": "A small checkpoint on the boundary of the exclusion zone.",
            "zh": "禁區邊界的一個小型檢查站。"
        },
        "tags": []
    },
    {
        "ID": "1334",
        "x": 14534,
        "y": 4025,
        "name": {
            "en": "South Army Checkpoint",
            "zh": "[路易斯維爾]南部軍隊檢查站"
        },
        "location": "Louisville",
        "description": {
            "en": "Another way into Louisville.",
            "zh": "進入路易斯維爾的另一條路。"
        },
        "tags": []
    },
    {
        "ID": "1335",
        "x": 12971,
        "y": 3223,
        "name": {
            "en": "South Louisville Elementary",
            "zh": "[路易斯維爾]南路易斯維爾小學"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1336",
        "x": 12448,
        "y": 3786,
        "name": {
            "en": "Spiffo's",
            "zh": "[路易斯維爾]Spiffo's"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "Spiffo",
            "Restaurant"
        ]
    },
    {
        "ID": "1337",
        "x": 13457,
        "y": 2927,
        "name": {
            "en": "Spiffo's",
            "zh": "[路易斯維爾]Spiffo's"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "Spiffo",
            "Restaurant"
        ]
    },
    {
        "ID": "1338",
        "x": 13661,
        "y": 1321,
        "name": {
            "en": "Spiffo's",
            "zh": "[路易斯維爾]Spiffo's"
        },
        "location": "Louisville",
        "description": {
            "en": "Fast-food Restaurant.",
            "zh": "速食餐廳。"
        },
        "tags": [
            "Spiffo",
            "Restaurant"
        ]
    },
    {
        "ID": "1339",
        "x": 12314,
        "y": 1930,
        "name": {
            "en": "Spiffo's",
            "zh": "[路易斯維爾]Spiffo's"
        },
        "location": "Louisville",
        "description": {
            "en": "A Spiffo's on the West side of Louisville.",
            "zh": "路易斯維爾西側的一家 Spiffo's。"
        },
        "tags": [
            "Spiffo",
            "Restaurant"
        ]
    },
    {
        "ID": "1340",
        "x": 13303,
        "y": 1351,
        "name": {
            "en": "Spiffo's",
            "zh": "[路易斯維爾]Spiffo's"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "Spiffo",
            "Restaurant"
        ]
    },
    {
        "ID": "1341",
        "x": 13080,
        "y": 1633,
        "name": {
            "en": "Spiffo's",
            "zh": "[路易斯維爾]Spiffo's"
        },
        "location": "Louisville",
        "description": {
            "en": "Spiffo's in the baseball stadium.",
            "zh": "棒球場內的 Spiffo's。"
        },
        "tags": []
    },
    {
        "ID": "1342",
        "x": 12714,
        "y": 1621,
        "name": {
            "en": "Spiffo's HQ",
            "zh": "[路易斯維爾]Spiffo's 總部"
        },
        "location": "Louisville",
        "description": {
            "en": "The Spiffo's headquarters. Praise mega Spiffo.",
            "zh": "Spiffo's 總部。讚美巨型 Spiffo。"
        },
        "tags": [
            "Spiffo",
            "Restaurant",
            "Headquaters"
        ]
    },
    {
        "ID": "1343",
        "x": 13316,
        "y": 3052,
        "name": {
            "en": "Sporting Goods Store",
            "zh": "[路易斯維爾]運動用品店"
        },
        "location": "Louisville",
        "description": {
            "en": "Baseball bats for days.",
            "zh": "多到可以打好幾天的棒球棒。"
        },
        "tags": []
    },
    {
        "ID": "1344",
        "x": 12458,
        "y": 3702,
        "name": {
            "en": "St. Peregrin Hospital",
            "zh": "[路易斯維爾]聖佩雷格林醫院"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1345",
        "x": 12458,
        "y": 3702,
        "name": {
            "en": "St. Peregrin Hospital",
            "zh": "[路易斯維爾]聖佩雷格林醫院"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1346",
        "x": 12471,
        "y": 1272,
        "name": {
            "en": "StarEplex - Movie Theater",
            "zh": "[路易斯維爾]StarEplex - 電影院"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1347",
        "x": 12583,
        "y": 3637,
        "name": {
            "en": "Steely Revolve",
            "zh": "[路易斯維爾]Steely Revolve"
        },
        "location": "Louisville",
        "description": {
            "en": "A metal working company.",
            "zh": "一家金屬加工公司。"
        },
        "tags": []
    },
    {
        "ID": "1348",
        "x": 12196,
        "y": 1684,
        "name": {
            "en": "Storage Units",
            "zh": "[路易斯維爾]儲存單元"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1349",
        "x": 12181,
        "y": 1328,
        "name": {
            "en": "Storage Units",
            "zh": "[路易斯維爾]儲存單元"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1350",
        "x": 12713,
        "y": 1999,
        "name": {
            "en": "Storage Units",
            "zh": "[路易斯維爾]儲存單元"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1351",
        "x": 13122,
        "y": 1708,
        "name": {
            "en": "Storage Units",
            "zh": "[路易斯維爾]儲存單元"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1352",
        "x": 12419,
        "y": 2818,
        "name": {
            "en": "SweetPea",
            "zh": "[路易斯維爾]SweetPea"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1353",
        "x": 12669,
        "y": 2140,
        "name": {
            "en": "T.I.S Construction",
            "zh": "[路易斯維爾]T.I.S 建築"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1354",
        "x": 12579,
        "y": 2071,
        "name": {
            "en": "Taco del Pancho",
            "zh": "[路易斯維爾]Taco del Pancho"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1355",
        "x": 13527,
        "y": 3019,
        "name": {
            "en": "Taco del Pancho",
            "zh": "[路易斯維爾]Taco del Pancho"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1356",
        "x": 13562,
        "y": 1386,
        "name": {
            "en": "The Grand Ohio Mall",
            "zh": "[路易斯維爾]大俄亥俄購物中心"
        },
        "location": "Louisville",
        "description": {
            "en": "Large 2 level mall.",
            "zh": "大型兩層購物中心。"
        },
        "tags": []
    },
    {
        "ID": "1357",
        "x": 12636,
        "y": 1317,
        "name": {
            "en": "The Havisham Hotel&Suites",
            "zh": "[路易斯維爾]哈維沙姆酒店與套房"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1358",
        "x": 12733,
        "y": 1211,
        "name": {
            "en": "The Plump Cornucopia",
            "zh": "[路易斯維爾]豐饒角雜貨店"
        },
        "location": "Louisville",
        "description": {
            "en": "A grocery store of sorts.",
            "zh": "一種雜貨店。"
        },
        "tags": []
    },
    {
        "ID": "1359",
        "x": 13037,
        "y": 1210,
        "name": {
            "en": "The Waterfront",
            "zh": "[路易斯維爾]海濱"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1360",
        "x": 13135,
        "y": 1780,
        "name": {
            "en": "Thumbs of Green",
            "zh": "[路易斯維爾]綠色拇指"
        },
        "location": "Louisville",
        "description": {
            "en": "Farming store with a garden.",
            "zh": "帶有花園的農用品店。"
        },
        "tags": []
    },
    {
        "ID": "1361",
        "x": 13522,
        "y": 1314,
        "name": {
            "en": "Time 4 Sport",
            "zh": "[路易斯維爾]運動時光"
        },
        "location": "Louisville",
        "description": {
            "en": "On the 1st floor of the mall",
            "zh": "位於購物中心一樓"
        },
        "tags": []
    },
    {
        "ID": "1362",
        "x": 13311,
        "y": 2970,
        "name": {
            "en": "Tita Maria's Catina",
            "zh": "[路易斯維爾]Tita Maria's Catina"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1363",
        "x": 12714,
        "y": 2326,
        "name": {
            "en": "Train Station",
            "zh": "[路易斯維爾]火車站"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1364",
        "x": 12675,
        "y": 4403,
        "name": {
            "en": "Train Yard",
            "zh": "[路易斯維爾]火車場"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1365",
        "x": 12650,
        "y": 4339,
        "name": {
            "en": "Train Yard",
            "zh": "[路易斯維爾]火車場"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1366",
        "x": 13689,
        "y": 1615,
        "name": {
            "en": "U-Store It",
            "zh": "[路易斯維爾]U-Store It"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1367",
        "x": 12583,
        "y": 3581,
        "name": {
            "en": "U.S Mail Service",
            "zh": "[路易斯維爾]美國郵政服務"
        },
        "location": "Louisville",
        "description": {
            "en": "Post Office.",
            "zh": "郵局。"
        },
        "tags": ["Office"]
    },
    {
        "ID": "1368",
        "x": 12627,
        "y": 3704,
        "name": {
            "en": "United Shipping Logistics",
            "zh": "[路易斯維爾]聯合航運物流"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1369",
        "x": 12431,
        "y": 2818,
        "name": {
            "en": "VHS Store",
            "zh": "[路易斯維爾]VHS 店"
        },
        "location": "Louisville",
        "description": {
            "en": "Hit Vids.",
            "zh": "Hit Vids。"
        },
        "tags": []
    },
    {
        "ID": "1370",
        "x": 12797,
        "y": 1212,
        "name": {
            "en": "VHS Store",
            "zh": "[路易斯維爾]VHS 店"
        },
        "location": "Louisville",
        "description": {
            "en": "Hit Vids.",
            "zh": "Hit Vids。"
        },
        "tags": []
    },
    {
        "ID": "1371",
        "x": 13429,
        "y": 1292,
        "name": {
            "en": "VHS Store",
            "zh": "[路易斯維爾]VHS 店"
        },
        "location": "Louisville",
        "description": {
            "en": "Hit Vids, West of the Grand Ohio Mall.",
            "zh": "Hit Vids，位於大俄亥俄購物中心西側。"
        },
        "tags": []
    },
    {
        "ID": "1372",
        "x": 13114,
        "y": 1454,
        "name": {
            "en": "VHS Store",
            "zh": "[路易斯維爾]VHS 店"
        },
        "location": "Louisville",
        "description": {
            "en": "Hit Vids.",
            "zh": "Hit Vids。"
        },
        "tags": []
    },
    {
        "ID": "1373",
        "x": 12561,
        "y": 3617,
        "name": {
            "en": "Valu Insurance",
            "zh": "[路易斯維爾]Valu 保險"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1374",
        "x": 12560,
        "y": 3696,
        "name": {
            "en": "ValuTech HQ",
            "zh": "[路易斯維爾]ValuTech 總部"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1375",
        "x": 12316,
        "y": 1271,
        "name": {
            "en": "Velvet Tassel Club",
            "zh": "[路易斯維爾]天鵝絨流蘇俱樂部"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1376",
        "x": 12611,
        "y": 3617,
        "name": {
            "en": "Warehouse",
            "zh": "[路易斯維爾]倉庫"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1377",
        "x": 12796,
        "y": 2184,
        "name": {
            "en": "Warehouse",
            "zh": "[路易斯維爾]倉庫"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1378",
        "x": 12973,
        "y": 2233,
        "name": {
            "en": "Wellington Heights Golf Club",
            "zh": "[路易斯維爾]威靈頓高地高爾夫俱樂部"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1379",
        "x": 13416,
        "y": 1292,
        "name": {
            "en": "Window shop",
            "zh": "[路易斯維爾]櫥窗商店"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1380",
        "x": 12225,
        "y": 3026,
        "name": {
            "en": "Zippee Market",
            "zh": "[路易斯維爾]Zippee 市場"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1381",
        "x": 13000,
        "y": 3115,
        "name": {
            "en": "Zippee Market",
            "zh": "[路易斯維爾]Zippee 市場"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1382",
        "x": 13066,
        "y": 1922,
        "name": {
            "en": "Zippee Market",
            "zh": "[路易斯維爾]Zippee 市場"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1383",
        "x": 12664,
        "y": 1366,
        "name": {
            "en": "Zippee Market",
            "zh": "[路易斯維爾]Zippee 市場"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1384",
        "x": 13519,
        "y": 1668,
        "name": {
            "en": "Zippee Market",
            "zh": "[路易斯維爾]Zippee 市場"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1385",
        "x": 12521,
        "y": 1482,
        "name": {
            "en": "Zippee Market",
            "zh": "[路易斯維爾]Zippee 市場"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1386",
        "x": 12646,
        "y": 2291,
        "name": {
            "en": "Zippee Market",
            "zh": "[路易斯維爾]Zippee 市場"
        },
        "location": "Louisville",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1387",
        "x": 10081,
        "y": 12806,
        "name": {
            "en": "Bakery",
            "zh": "[三月嶺]麵包店"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1388",
        "x": 10170,
        "y": 12673,
        "name": {
            "en": "Bar",
            "zh": "[三月嶺]酒吧"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1389",
        "x": 10328,
        "y": 12794,
        "name": {
            "en": "Church",
            "zh": "[三月嶺]教堂"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1390",
        "x": 10172,
        "y": 12645,
        "name": {
            "en": "Cinema",
            "zh": "[三月嶺]電影院"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1391",
        "x": 10030,
        "y": 12732,
        "name": {
            "en": "Community Center",
            "zh": "[三月嶺]社區中心"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1392",
        "x": 10110,
        "y": 11151,
        "name": {
            "en": "Diner",
            "zh": "[三月嶺]餐館"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1393",
        "x": 10160,
        "y": 12761,
        "name": {
            "en": "Doctor's Office",
            "zh": "[三月嶺]醫生辦公室"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1394",
        "x": 10079,
        "y": 12818,
        "name": {
            "en": "Family Fashion",
            "zh": "[三月嶺]家庭時尚"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1395",
        "x": 9395,
        "y": 9300,
        "name": {
            "en": "Farmer's Warehouse",
            "zh": "[三月嶺]農民倉庫"
        },
        "location": "March Ridge",
        "description": {
            "en": "Logistics hub for fresh produce.",
            "zh": "新鮮農產品的物流中心。"
        },
        "tags": []
    },
    {
        "ID": "1396",
        "x": 10113,
        "y": 12786,
        "name": {
            "en": "Food Market",
            "zh": "[三月嶺]食品市場"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1397",
        "x": 10144,
        "y": 12791,
        "name": {
            "en": "Gas Station",
            "zh": "[三月嶺]加油站"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1398",
        "x": 10183,
        "y": 12819,
        "name": {
            "en": "Hair-Saloon",
            "zh": "[三月嶺]髮廊"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1399",
        "x": 10074,
        "y": 12776,
        "name": {
            "en": "Insurance Office",
            "zh": "[三月嶺]保險辦公室"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1400",
        "x": 10077,
        "y": 12637,
        "name": {
            "en": "Knox Military Apartments",
            "zh": "[三月嶺]諾克斯軍事公寓"
        },
        "location": "March Ridge",
        "description": {
            "en": "An apartment complex for military personnel with a large amount of equipment and weapons.",
            "zh": "一個供軍事人員使用的公寓大樓，內有大量裝備和武器。"
        },
        "tags": []
    },
    {
        "ID": "1401",
        "x": 10183,
        "y": 12782,
        "name": {
            "en": "Laundromat",
            "zh": "[三月嶺]自助洗衣店"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1402",
        "x": 10181,
        "y": 12731,
        "name": {
            "en": "Laundromat",
            "zh": "[三月嶺]自助洗衣店"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1403",
        "x": 10176,
        "y": 12805,
        "name": {
            "en": "Mama McFudgington's",
            "zh": "[三月嶺]Mama McFudgington's"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1404",
        "x": 10131,
        "y": 12761,
        "name": {
            "en": "Mendy's Eatery",
            "zh": "[三月嶺]Mendy's 餐館"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1405",
        "x": 10184,
        "y": 12793,
        "name": {
            "en": "Office",
            "zh": "[三月嶺]辦公室"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1406",
        "x": 10144,
        "y": 12761,
        "name": {
            "en": "Pharmahug",
            "zh": "[三月嶺]Pharmahug"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1407",
        "x": 10107,
        "y": 12713,
        "name": {
            "en": "Post Office",
            "zh": "[三月嶺]郵局"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1408",
        "x": 10278,
        "y": 8749,
        "name": {
            "en": "Relay station",
            "zh": "[三月嶺]中繼站"
        },
        "location": "March Ridge",
        "description": {
            "en": "A radio relay station. Access forbidden, except trained personnel.",
            "zh": "一個無線電中繼站。禁止進入，受訓人員除外。"
        },
        "tags": []
    },
    {
        "ID": "1409",
        "x": 10095,
        "y": 12750,
        "name": {
            "en": "Restaurant",
            "zh": "[三月嶺]餐廳"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1410",
        "x": 9999,
        "y": 12655,
        "name": {
            "en": "School",
            "zh": "[三月嶺]學校"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1411",
        "x": 10164,
        "y": 12733,
        "name": {
            "en": "VHS Store",
            "zh": "[三月嶺]VHS 店"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1412",
        "x": 8847,
        "y": 9206,
        "name": {
            "en": "Well",
            "zh": "[三月嶺]水井"
        },
        "location": "March Ridge",
        "description": {
            "en": "Well. Well.",
            "zh": "水井。水井。"
        },
        "tags": []
    },
    {
        "ID": "1413",
        "x": 10820,
        "y": 9412,
        "name": {
            "en": "A CDDA Starter House",
            "zh": "[莫德勞]CDDA 起始點"
        },
        "location": "Muldraugh",
        "description": {
            "en": "House one starts in the the A Really CDDA challenge map.",
            "zh": "在 A Really CDDA 挑戰地圖中開始的房屋。"
        },
        "tags": []
    },
    {
        "ID": "1414",
        "x": 10969,
        "y": 9173,
        "name": {
            "en": "Abandoned Cabins",
            "zh": "[莫德勞]廢棄小屋"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1415",
        "x": 10625,
        "y": 10047,
        "name": {
            "en": "Abandoned Restaurant",
            "zh": "[莫德勞]廢棄餐廳"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1416",
        "x": 10638,
        "y": 9904,
        "name": {
            "en": "Adult Education Center",
            "zh": "[莫德勞]成人教育中心"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1417",
        "x": 10619,
        "y": 9437,
        "name": {
            "en": "All You Can Eat Buffet",
            "zh": "[莫德勞]吃到飽自助餐"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1418",
        "x": 10605,
        "y": 9406,
        "name": {
            "en": "Auto Repair Shop",
            "zh": "[莫德勞]汽車修理店"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1419",
        "x": 10173,
        "y": 10940,
        "name": {
            "en": "Auto Repair Shop",
            "zh": "[莫德勞]汽車修理店"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1420",
        "x": 10771,
        "y": 9539,
        "name": {
            "en": "Backyard Garden",
            "zh": "[莫德勞]後院花園"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1421",
        "x": 10617,
        "y": 9606,
        "name": {
            "en": "Bakery",
            "zh": "[莫德勞]麵包店"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1422",
        "x": 10617,
        "y": 9219,
        "name": {
            "en": "Bar",
            "zh": "[莫德勞]酒吧"
        },
        "location": "Muldraugh",
        "description": {
            "en": "Care for a drink?",
            "zh": "要來一杯嗎？"
        },
        "tags": []
    },
    {
        "ID": "1423",
        "x": 10955,
        "y": 9944,
        "name": {
            "en": "Baseball Field",
            "zh": "[莫德勞]棒球場"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1424",
        "x": 10694,
        "y": 10103,
        "name": {
            "en": "Big Urban Warehouse",
            "zh": "[莫德勞]大型城市倉庫"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1425",
        "x": 10746,
        "y": 9415,
        "name": {
            "en": "Bob and Kate's Safehouse",
            "zh": "[莫德勞]Bob 和 Kate 的安全屋"
        },
        "location": "Muldraugh",
        "description": {
            "en": "The pillow will help her get comfortable.",
            "zh": "枕頭將幫助她感到舒適。"
        },
        "tags": []
    },
    {
        "ID": "1426",
        "x": 10610,
        "y": 10365,
        "name": {
            "en": "Book Store",
            "zh": "[莫德勞]書店"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1427",
        "x": 10606,
        "y": 9467,
        "name": {
            "en": "Burger and Laundromat",
            "zh": "[莫德勞]漢堡和自助洗衣店"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1428",
        "x": 11243,
        "y": 8953,
        "name": {
            "en": "Cabin",
            "zh": "[莫德勞]小屋"
        },
        "location": "Muldraugh",
        "description": {
            "en": "Do you really want to be alone in the woods now? Without a well?",
            "zh": "現在你真的想一個人待在樹林裡嗎？沒有水井？"
        },
        "tags": []
    },
    {
        "ID": "1429",
        "x": 9664,
        "y": 8773,
        "name": {
            "en": "Cabin in the Woods",
            "zh": "[莫德勞]林中小屋"
        },
        "location": "Muldraugh",
        "description": {
            "en": "Do you really want to be alone in the woods now?Has a well.",
            "zh": "現在你真的想一個人待在樹林裡嗎？有水井。"
        },
        "tags": []
    },
    {
        "ID": "1430",
        "x": 10648,
        "y": 9924,
        "name": {
            "en": "Cafeteria",
            "zh": "[莫德勞]自助餐廳"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1431",
        "x": 12422,
        "y": 8927,
        "name": {
            "en": "Camp Grounds",
            "zh": "[莫德勞]露營地"
        },
        "location": "Muldraugh",
        "description": {
            "en": "A Group of Cabins In The Woods Near Muldraugh.",
            "zh": "莫德勞附近樹林中的一群小屋。"
        },
        "tags": []
    },
    {
        "ID": "1432",
        "x": 10723,
        "y": 9711,
        "name": {
            "en": "Chapel",
            "zh": "[莫德勞]小教堂"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1433",
        "x": 10773,
        "y": 10169,
        "name": {
            "en": "Church",
            "zh": "[莫德勞]教堂"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1434",
        "x": 10628,
        "y": 9903,
        "name": {
            "en": "Clothing Store",
            "zh": "[莫德勞]服飾店"
        },
        "location": "Muldraugh",
        "description": {
            "en": "Small used clothing store.",
            "zh": "小型二手服飾店。"
        },
        "tags": []
    },
    {
        "ID": "1435",
        "x": 10610,
        "y": 10376,
        "name": {
            "en": "Clothing Store",
            "zh": "[莫德勞]服飾店"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1436",
        "x": 10061,
        "y": 9576,
        "name": {
            "en": "Construction Site",
            "zh": "[莫德勞]工地"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1437",
        "x": 10838,
        "y": 10029,
        "name": {
            "en": "Convenience Store",
            "zh": "[莫德勞]便利商店"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1438",
        "x": 10876,
        "y": 10028,
        "name": {
            "en": "Cortman Medical",
            "zh": "[莫德勞]Cortman 醫療"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1439",
        "x": 10591,
        "y": 11204,
        "name": {
            "en": "Cross roads",
            "zh": "[莫德勞]十字路口"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1440",
        "x": 10614,
        "y": 10559,
        "name": {
            "en": "Diner",
            "zh": "[莫德勞]餐館"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1441",
        "x": 11600,
        "y": 9295,
        "name": {
            "en": "Drug Lab",
            "zh": "[莫德勞]製毒實驗室"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1442",
        "x": 10383,
        "y": 10090,
        "name": {
            "en": "Electrical Substation",
            "zh": "[莫德勞]變電站"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1443",
        "x": 10614,
        "y": 9881,
        "name": {
            "en": "Electronics Store",
            "zh": "[莫德勞]電子產品店"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1444",
        "x": 10619,
        "y": 9967,
        "name": {
            "en": "Elementary school",
            "zh": "[莫德勞]小學"
        },
        "location": "Muldraugh",
        "description": {
            "en": "All those fire drills finally paid off!",
            "zh": "所有這些消防演習終於有了回報！"
        },
        "tags": []
    },
    {
        "ID": "1445",
        "x": 11825,
        "y": 9780,
        "name": {
            "en": "Empty Warehouse",
            "zh": "[莫德勞]空倉庫"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1446",
        "x": 10706,
        "y": 9400,
        "name": {
            "en": "Farm Plot",
            "zh": "[莫德勞]農田"
        },
        "location": "Muldraugh",
        "description": {
            "en": "Potential fresh food.",
            "zh": "潛在的新鮮食物。"
        },
        "tags": []
    },
    {
        "ID": "1447",
        "x": 8599,
        "y": 8824,
        "name": {
            "en": "Farm to the West",
            "zh": "[莫德勞]西部農場"
        },
        "location": "Muldraugh",
        "description": {
            "en": "Has a tool shed, chickencoop and well.",
            "zh": "有工具棚、雞舍和水井。"
        },
        "tags": []
    },
    {
        "ID": "1448",
        "x": 11063,
        "y": 10638,
        "name": {
            "en": "Forest House",
            "zh": "[莫德勞]森林房屋"
        },
        "location": "Muldraugh",
        "description": {
            "en": "Do you really want to be alone in the woods right now? Without a well?",
            "zh": "現在你真的想一個人待在樹林裡嗎？沒有水井？"
        },
        "tags": []
    },
    {
        "ID": "1449",
        "x": 10602,
        "y": 9360,
        "name": {
            "en": "Garages",
            "zh": "[莫德勞]車庫"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1450",
        "x": 10624,
        "y": 9761,
        "name": {
            "en": "Gas Station",
            "zh": "[莫德勞]加油站"
        },
        "location": "Muldraugh",
        "description": {
            "en": "Fossoil, 4 pumps.",
            "zh": "Fossoil，4個油泵。"
        },
        "tags": []
    },
    {
        "ID": "1451",
        "x": 10668,
        "y": 10625,
        "name": {
            "en": "Gas Station",
            "zh": "[莫德勞]加油站"
        },
        "location": "Muldraugh",
        "description": {
            "en": "Gas-2-Go, 4 pumps.",
            "zh": "Gas-2-Go，4個油泵。"
        },
        "tags": []
    },
    {
        "ID": "1452",
        "x": 10668,
        "y": 9572,
        "name": {
            "en": "Gated Community",
            "zh": "[莫德勞]封閉式社區"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1453",
        "x": 10856,
        "y": 10138,
        "name": {
            "en": "Gated Community",
            "zh": "[莫德勞]封閉式社區"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1454",
        "x": 10609,
        "y": 10259,
        "name": {
            "en": "Greene's",
            "zh": "[莫德勞]Greene's"
        },
        "location": "Muldraugh",
        "description": {
            "en": "Grocery store.",
            "zh": "雜貨店。"
        },
        "tags": []
    },
    {
        "ID": "1455",
        "x": 10648,
        "y": 9648,
        "name": {
            "en": "H. Smith Attorney",
            "zh": "[莫德勞]H. Smith 律師事務所"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1456",
        "x": 10739,
        "y": 9839,
        "name": {
            "en": "House with Antique Stove",
            "zh": "[莫德勞]帶古董烤爐的房屋"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1457",
        "x": 10945,
        "y": 9370,
        "name": {
            "en": "Isolated House",
            "zh": "[莫德勞]隔離房屋"
        },
        "location": "Muldraugh",
        "description": {
            "en": "An isolated house with only 1 way in and out, making it popular stronghold among players because its resource efficent and zombie safe(ish) while being close to the main part of the map.",
            "zh": "一棟只有一個出入口的隔離房屋，使其成為玩家中流行的據點，因為它資源高效且（相對）殭屍安全，同時靠近地圖的主要部分。"
        },
        "tags": []
    },
    {
        "ID": "1458",
        "x": 10617,
        "y": 9563,
        "name": {
            "en": "Jay's Chicken",
            "zh": "[莫德勞]Jay's 炸雞"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1459",
        "x": 10622,
        "y": 9691,
        "name": {
            "en": "Knox Bank",
            "zh": "[莫德勞]諾克斯銀行"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1460",
        "x": 10611,
        "y": 9308,
        "name": {
            "en": "Large Warehouse",
            "zh": "[莫德勞]大型倉庫"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1461",
        "x": 10914,
        "y": 9842,
        "name": {
            "en": "Laundromat",
            "zh": "[莫德勞]自助洗衣店"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1462",
        "x": 10610,
        "y": 9905,
        "name": {
            "en": "Liquor Store",
            "zh": "[莫德勞]酒類專賣店"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1463",
        "x": 9341,
        "y": 10293,
        "name": {
            "en": "Lone forest shack",
            "zh": "[莫德勞]孤獨的森林小屋"
        },
        "location": "Muldraugh",
        "description": {
            "en": "Do you really want to be alone in the woods right now? Without a well?",
            "zh": "現在你真的想一個人待在樹林裡嗎？沒有水井？"
        },
        "tags": []
    },
    {
        "ID": "1464",
        "x": 10319,
        "y": 9595,
        "name": {
            "en": "Lumber Mill",
            "zh": "[莫德勞]木材廠"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1465",
        "x": 10606,
        "y": 10358,
        "name": {
            "en": "Mini Mall",
            "zh": "[莫德勞]迷你購物中心"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1466",
        "x": 10900,
        "y": 9749,
        "name": {
            "en": "Motel",
            "zh": "[莫德勞]汽車旅館"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1467",
        "x": 10815,
        "y": 9105,
        "name": {
            "en": "North Farm",
            "zh": "[莫德勞]北部農場"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1468",
        "x": 10673,
        "y": 10327,
        "name": {
            "en": "Offices",
            "zh": "[莫德勞]辦公室"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1469",
        "x": 10992,
        "y": 9645,
        "name": {
            "en": "Picnic Area",
            "zh": "[莫德勞]野餐區"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1470",
        "x": 10613,
        "y": 9505,
        "name": {
            "en": "Pile-o-Crepe",
            "zh": "[莫德勞]Pile-o-Crepe"
        },
        "location": "Muldraugh",
        "description": {
            "en": "Pancake house.",
            "zh": "煎餅屋。"
        },
        "tags": []
    },
    {
        "ID": "1471",
        "x": 10604,
        "y": 10111,
        "name": {
            "en": "Pizza Whirled",
            "zh": "[莫德勞]環球披薩"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1472",
        "x": 10631,
        "y": 10405,
        "name": {
            "en": "Police Station",
            "zh": "[莫德勞]警察局"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1473",
        "x": 8559,
        "y": 8529,
        "name": {
            "en": "Pony Roam-O",
            "zh": "[莫德勞]Pony Roam-O"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1474",
        "x": 11655,
        "y": 9985,
        "name": {
            "en": "Rail Yard",
            "zh": "[莫德勞]鐵路調車場"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1475",
        "x": 9641,
        "y": 10152,
        "name": {
            "en": "Remote Logging Offices",
            "zh": "[莫德勞]偏遠伐木辦公室"
        },
        "location": "Muldraugh",
        "description": {
            "en": "Timber!",
            "zh": "木材！"
        },
        "tags": ["Office"]
    },
    {
        "ID": "1476",
        "x": 10619,
        "y": 10528,
        "name": {
            "en": "Restaurant",
            "zh": "[莫德勞]餐廳"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1477",
        "x": 10836,
        "y": 9530,
        "name": {
            "en": "Small convenience store",
            "zh": "[莫德勞]小型便利商店"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1478",
        "x": 10712,
        "y": 10144,
        "name": {
            "en": "Small warehouse",
            "zh": "[莫德勞]小型倉庫"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1479",
        "x": 10656,
        "y": 9970,
        "name": {
            "en": "Soccer Field",
            "zh": "[莫德勞]足球場"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1480",
        "x": 10621,
        "y": 9650,
        "name": {
            "en": "Spiffo's",
            "zh": "[莫德勞]Spiffo's"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "Spiffo",
            "Restaurant"
        ]
    },
    {
        "ID": "1481",
        "x": 10684,
        "y": 9829,
        "name": {
            "en": "Storage Units",
            "zh": "[莫德勞]儲存單元"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1482",
        "x": 10752,
        "y": 10347,
        "name": {
            "en": "Storage Units",
            "zh": "[莫德勞]儲存單元"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1483",
        "x": 10628,
        "y": 9815,
        "name": {
            "en": "Sunstar Hotel",
            "zh": "[莫德勞]太陽星飯店"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1484",
        "x": 10614,
        "y": 10155,
        "name": {
            "en": "Tattoo 42",
            "zh": "[莫德勞]刺青 42"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1485",
        "x": 10758,
        "y": 10547,
        "name": {
            "en": "Tavern",
            "zh": "[莫德勞]酒館"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1486",
        "x": 10317,
        "y": 9290,
        "name": {
            "en": "The McCoy Logging Corp.",
            "zh": "[莫德勞]McCoy 伐木公司"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1487",
        "x": 11096,
        "y": 9237,
        "name": {
            "en": "Train Station",
            "zh": "[莫德勞]火車站"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1488",
        "x": 10610,
        "y": 10452,
        "name": {
            "en": "VHS Store",
            "zh": "[莫德勞]VHS 店"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1489",
        "x": 10627,
        "y": 9378,
        "name": {
            "en": "Warehouse",
            "zh": "[莫德勞]倉庫"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1490",
        "x": 10713,
        "y": 10443,
        "name": {
            "en": "Warehouses",
            "zh": "[莫德勞]倉庫"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1491",
        "x": 10050,
        "y": 10932,
        "name": {
            "en": "Warehouses out of town",
            "zh": "[莫德勞]城外倉庫"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1492",
        "x": 10604,
        "y": 9613,
        "name": {
            "en": "Zippee Market",
            "zh": "[莫德勞]Zippee 市場"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1493",
        "x": 6189,
        "y": 5370,
        "name": {
            "en": "Liquor Store",
            "zh": "[河畔鎮]酒類專賣店"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1494",
        "x": 5429,
        "y": 5964,
        "name": {
            "en": "Auto Repair",
            "zh": "[河畔鎮]汽車修理"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1495",
        "x": 6187,
        "y": 5359,
        "name": {
            "en": "Back to the Nurture chiropractic services",
            "zh": "[河畔鎮]Back to the Nurture 脊椎按摩服務"
        },
        "location": "Riverside",
        "description": {
            "en": "A nice spot to loosen those joints!",
            "zh": "鬆開關節的好地方！"
        },
        "tags": []
    },
    {
        "ID": "1496",
        "x": 3631,
        "y": 5722,
        "name": {
            "en": "Bait & Tackle",
            "zh": "[河畔鎮]誘餌與釣具店"
        },
        "location": "Riverside",
        "description": {
            "en": "Right next to a river.",
            "zh": "就在河邊。"
        },
        "tags": []
    },
    {
        "ID": "1497",
        "x": 5918,
        "y": 5242,
        "name": {
            "en": "Bait Shop",
            "zh": "[河畔鎮]誘餌店"
        },
        "location": "Riverside",
        "description": {
            "en": "Includes water barrels.",
            "zh": "包括水桶。"
        },
        "tags": []
    },
    {
        "ID": "1498",
        "x": 6493,
        "y": 5267,
        "name": {
            "en": "Bakery",
            "zh": "[河畔鎮]麵包店"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1499",
        "x": 6504,
        "y": 5301,
        "name": {
            "en": "Bank",
            "zh": "[河畔鎮]銀行"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1500",
        "x": 5963,
        "y": 5422,
        "name": {
            "en": "Bar",
            "zh": "[河畔鎮]酒吧"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1501",
        "x": 6382,
        "y": 5208,
        "name": {
            "en": "Bar",
            "zh": "[河畔鎮]酒吧"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1502",
        "x": 3655,
        "y": 5719,
        "name": {
            "en": "Beef Roundup",
            "zh": "[河畔鎮]牛肉圈"
        },
        "location": "Riverside",
        "description": {
            "en": "Restaurant.",
            "zh": "餐廳。"
        },
        "tags": []
    },
    {
        "ID": "1503",
        "x": 6571,
        "y": 5212,
        "name": {
            "en": "Boat Club",
            "zh": "[河畔鎮]遊艇俱樂部"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1504",
        "x": 6437,
        "y": 5269,
        "name": {
            "en": "Book Store",
            "zh": "[河畔鎮]書店"
        },
        "location": "Riverside",
        "description": {
            "en": "Enigmabooks.",
            "zh": "Enigmabooks。"
        },
        "tags": []
    },
    {
        "ID": "1505",
        "x": 5955,
        "y": 5263,
        "name": {
            "en": "Burgers",
            "zh": "[河畔鎮]漢堡店"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1506",
        "x": 6176,
        "y": 6374,
        "name": {
            "en": "Cafe",
            "zh": "[河畔鎮]咖啡廳"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1507",
        "x": 6188,
        "y": 5351,
        "name": {
            "en": "Camera Store",
            "zh": "[河畔鎮]相機店"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1508",
        "x": 5820,
        "y": 5412,
        "name": {
            "en": "Car Junkyard",
            "zh": "[河畔鎮]汽車廢車場"
        },
        "location": "Riverside",
        "description": {
            "en": "Junked Cars, high fence, space to build a castle.",
            "zh": "廢棄汽車，高圍欄，有空間建造一座城堡。"
        },
        "tags": []
    },
    {
        "ID": "1509",
        "x": 5700,
        "y": 5331,
        "name": {
            "en": "Cementery",
            "zh": "[河畔鎮]公墓"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1510",
        "x": 6568,
        "y": 5374,
        "name": {
            "en": "Church",
            "zh": "[河畔鎮]教堂"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1511",
        "x": 6403,
        "y": 5268,
        "name": {
            "en": "Clothing Store",
            "zh": "[河畔鎮]服飾店"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1512",
        "x": 6506,
        "y": 5266,
        "name": {
            "en": "Clothing Store",
            "zh": "[河畔鎮]服飾店"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1513",
        "x": 6250,
        "y": 5266,
        "name": {
            "en": "Clothing Store",
            "zh": "[河畔鎮]服飾店"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1514",
        "x": 6400,
        "y": 5252,
        "name": {
            "en": "Coffee Shop",
            "zh": "[河畔鎮]咖啡店"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1515",
        "x": 5970,
        "y": 5355,
        "name": {
            "en": "Convenience store",
            "zh": "[河畔鎮]便利商店"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1516",
        "x": 5756,
        "y": 6446,
        "name": {
            "en": "Country club",
            "zh": "[河畔鎮]鄉村俱樂部"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1517",
        "x": 5424,
        "y": 5914,
        "name": {
            "en": "Diner",
            "zh": "[河畔鎮]餐館"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1518",
        "x": 6491,
        "y": 5224,
        "name": {
            "en": "Donut Store",
            "zh": "[河畔鎮]甜甜圈店"
        },
        "location": "Riverside",
        "description": {
            "en": "Donuts!!!",
            "zh": "甜甜圈！！！"
        },
        "tags": []
    },
    {
        "ID": "1519",
        "x": 5570,
        "y": 5899,
        "name": {
            "en": "Factory",
            "zh": "[河畔鎮]工廠"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1520",
        "x": 5617,
        "y": 5973,
        "name": {
            "en": "Factory Warehouse",
            "zh": "[河畔鎮]工廠倉庫"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1521",
        "x": 6192,
        "y": 5340,
        "name": {
            "en": "Fancy Restaurant",
            "zh": "[河畔鎮]高級餐廳"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1522",
        "x": 6817,
        "y": 7720,
        "name": {
            "en": "Farm",
            "zh": "[河畔鎮]農場"
        },
        "location": "Riverside",
        "description": {
            "en": "Farm with field, two toolsheds.",
            "zh": "帶有田地和兩個工具棚的農場。"
        },
        "tags": []
    },
    {
        "ID": "1523",
        "x": 5693,
        "y": 5740,
        "name": {
            "en": "Farm",
            "zh": "[河畔鎮]農場"
        },
        "location": "Riverside",
        "description": {
            "en": "Has a lot of land, two houses and sheds.",
            "zh": "有很多土地、兩棟房屋和棚屋。"
        },
        "tags": []
    },
    {
        "ID": "1524",
        "x": 7253,
        "y": 8285,
        "name": {
            "en": "Farm Store",
            "zh": "[河畔鎮]農場商店"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1525",
        "x": 4849,
        "y": 6284,
        "name": {
            "en": "Fenced off radio station",
            "zh": "[河畔鎮]圍起來的電台"
        },
        "location": "Riverside",
        "description": {
            "en": "A densely hidden station with two tall fences with the outer fences having some holes.",
            "zh": "一個隱藏嚴密的電台，有兩道高圍欄，外層圍欄有一些破洞。"
        },
        "tags": []
    },
    {
        "ID": "1526",
        "x": 5969,
        "y": 5392,
        "name": {
            "en": "Food Market",
            "zh": "[河畔鎮]食品市場"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1527",
        "x": 6344,
        "y": 5297,
        "name": {
            "en": "Food Market",
            "zh": "[河畔鎮]食品市場"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1528",
        "x": 6273,
        "y": 5266,
        "name": {
            "en": "Food Mart",
            "zh": "[河畔鎮]美食市集"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1529",
        "x": 6239,
        "y": 5265,
        "name": {
            "en": "Furniture Store",
            "zh": "[河畔鎮]家具店"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1530",
        "x": 6427,
        "y": 5300,
        "name": {
            "en": "Furniture store",
            "zh": "[河畔鎮]家具店"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1531",
        "x": 6083,
        "y": 5309,
        "name": {
            "en": "Gas Station",
            "zh": "[河畔鎮]加油站"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1532",
        "x": 5418,
        "y": 5870,
        "name": {
            "en": "Gas Station",
            "zh": "[河畔鎮]加油站"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1533",
        "x": 3661,
        "y": 5958,
        "name": {
            "en": "Gas Station",
            "zh": "[河畔鎮]加油站"
        },
        "location": "Riverside",
        "description": {
            "en": "1 pump chump.",
            "zh": "只有 1 個油泵。"
        },
        "tags": []
    },
    {
        "ID": "1534",
        "x": 6715,
        "y": 5483,
        "name": {
            "en": "Gated Community",
            "zh": "[河畔鎮]封閉式社區"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1535",
        "x": 3679,
        "y": 5743,
        "name": {
            "en": "General Store",
            "zh": "[河畔鎮]雜貨店"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1536",
        "x": 6505,
        "y": 5346,
        "name": {
            "en": "GigaMart",
            "zh": "[河畔鎮]GigaMart"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1537",
        "x": 6091,
        "y": 6392,
        "name": {
            "en": "Golf Course",
            "zh": "[河畔鎮]高爾夫球場"
        },
        "location": "Riverside",
        "description": {
            "en": "Golf. At a time like this?",
            "zh": "高爾夫。在這種時候？"
        },
        "tags": []
    },
    {
        "ID": "1538",
        "x": 6140,
        "y": 5370,
        "name": {
            "en": "Grocery Store",
            "zh": "[河畔鎮]雜貨店"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1539",
        "x": 6364,
        "y": 5327,
        "name": {
            "en": "Hardware Store",
            "zh": "[河畔鎮]五金行"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1540",
        "x": 6357,
        "y": 5259,
        "name": {
            "en": "Hotel",
            "zh": "[河畔鎮]飯店"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1541",
        "x": 6956,
        "y": 5565,
        "name": {
            "en": "House with Farmland",
            "zh": "[河畔鎮]帶有農田的房屋"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1542",
        "x": 6471,
        "y": 5222,
        "name": {
            "en": "Ice Cream Parlor",
            "zh": "[河畔鎮]冰淇淋店"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1543",
        "x": 6481,
        "y": 5267,
        "name": {
            "en": "Jewellery store",
            "zh": "[河畔鎮]珠寶店"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1544",
        "x": 6407,
        "y": 5339,
        "name": {
            "en": "Laundromat",
            "zh": "[河畔鎮]自助洗衣店"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1545",
        "x": 6491,
        "y": 5266,
        "name": {
            "en": "Mama Mcfudgingtons",
            "zh": "[河畔鎮]Mama Mcfudgingtons"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1546",
        "x": 6471,
        "y": 5266,
        "name": {
            "en": "Pharmacy",
            "zh": "[河畔鎮]藥局"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1547",
        "x": 6082,
        "y": 5261,
        "name": {
            "en": "Police Station",
            "zh": "[河畔鎮]警察局"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1548",
        "x": 6560,
        "y": 5305,
        "name": {
            "en": "Rec Centre",
            "zh": "[河畔鎮]娛樂中心"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1549",
        "x": 6446,
        "y": 5444,
        "name": {
            "en": "School",
            "zh": "[河畔鎮]學校"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1550",
        "x": 6440,
        "y": 5445,
        "name": {
            "en": "School",
            "zh": "[河畔鎮]學校"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1551",
        "x": 6236,
        "y": 5264,
        "name": {
            "en": "Seat Yourself Furniture Store",
            "zh": "[河畔鎮]Seat Yourself 家具店"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1552",
        "x": 6123,
        "y": 5305,
        "name": {
            "en": "Spiffo's",
            "zh": "[河畔鎮]Spiffo's"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "Spiffo",
            "Restaurant"
        ]
    },
    {
        "ID": "1553",
        "x": 5541,
        "y": 6063,
        "name": {
            "en": "Storage Units",
            "zh": "[河畔鎮]儲存單元"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1554",
        "x": 6452,
        "y": 5298,
        "name": {
            "en": "Toy Store",
            "zh": "[河畔鎮]玩具店"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1555",
        "x": 5342,
        "y": 5980,
        "name": {
            "en": "Trailer Park",
            "zh": "[河畔鎮]拖車公園"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1556",
        "x": 6312,
        "y": 5264,
        "name": {
            "en": "U.S. Mail Service",
            "zh": "[河畔鎮]美國郵政服務"
        },
        "location": "Riverside",
        "description": {
            "en": "There are a lot of books at their storage.",
            "zh": "他們的倉庫裡有很多書。"
        },
        "tags": []
    },
    {
        "ID": "1557",
        "x": 6206,
        "y": 5344,
        "name": {
            "en": "VHS Store",
            "zh": "[河畔鎮]VHS 店"
        },
        "location": "Riverside",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1558",
        "x": 8081,
        "y": 11535,
        "name": {
            "en": "Apartment Complex",
            "zh": "[羅斯伍德]公寓大樓"
        },
        "location": "Rosewood",
        "description": {
            "en": "Top floor of this building contains apartments.",
            "zh": "這棟建築的頂層是公寓。"
        },
        "tags": []
    },
    {
        "ID": "1559",
        "x": 8136,
        "y": 10238,
        "name": {
            "en": "Army Barracks",
            "zh": "[羅斯伍德]軍營"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1560",
        "x": 9118,
        "y": 11814,
        "name": {
            "en": "Army Quarter",
            "zh": "[羅斯伍德]軍區"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1561",
        "x": 8154,
        "y": 11325,
        "name": {
            "en": "Auto Repair Shop",
            "zh": "[羅斯伍德]汽車修理店"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1562",
        "x": 7994,
        "y": 11450,
        "name": {
            "en": "Bail Bonds",
            "zh": "[羅斯伍德]保釋金"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1563",
        "x": 8084,
        "y": 11588,
        "name": {
            "en": "Bank",
            "zh": "[羅斯伍德]銀行"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1564",
        "x": 8019,
        "y": 11427,
        "name": {
            "en": "Bar",
            "zh": "[羅斯伍德]酒吧"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1565",
        "x": 8087,
        "y": 11512,
        "name": {
            "en": "Book Store",
            "zh": "[羅斯伍德]書店"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1566",
        "x": 8244,
        "y": 12239,
        "name": {
            "en": "Bus Station",
            "zh": "[羅斯伍德]公車站"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1567",
        "x": 8124,
        "y": 11550,
        "name": {
            "en": "Church",
            "zh": "[羅斯伍德]教堂"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1568",
        "x": 8087,
        "y": 11489,
        "name": {
            "en": "Clothing Store",
            "zh": "[羅斯伍德]服飾店"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1569",
        "x": 8219,
        "y": 11841,
        "name": {
            "en": "Construction Site",
            "zh": "[羅斯伍德]工地"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1570",
        "x": 8075,
        "y": 11456,
        "name": {
            "en": "Diner",
            "zh": "[羅斯伍德]餐館"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1571",
        "x": 8426,
        "y": 12240,
        "name": {
            "en": "Drive-In Movie Theater",
            "zh": "[羅斯伍德]露天汽車電影院"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1572",
        "x": 7671,
        "y": 11098,
        "name": {
            "en": "Dual Farmhouses",
            "zh": "[羅斯伍德]雙農舍"
        },
        "location": "Rosewood",
        "description": {
            "en": "Two farmhouses with a nearby warehouse & shed combo.",
            "zh": "兩棟農舍，附近有一個倉庫和棚屋組合。"
        },
        "tags": []
    },
    {
        "ID": "1573",
        "x": 8341,
        "y": 11612,
        "name": {
            "en": "Elementary School",
            "zh": "[羅斯伍德]小學"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1574",
        "x": 9070,
        "y": 12200,
        "name": {
            "en": "Farmer's Market",
            "zh": "[羅斯伍德]農夫市場"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1575",
        "x": 8138,
        "y": 11741,
        "name": {
            "en": "Fire Departament",
            "zh": "[羅斯伍德]消防局"
        },
        "location": "Rosewood",
        "description": {
            "en": "\"Daring today, aren't we?\"",
            "zh": "\"今天很大膽，不是嗎？\""
        },
        "tags": [
            "Fire",
            "Fire axe",
            "Fire station"
        ]
    },
    {
        "ID": "1576",
        "x": 8136,
        "y": 11485,
        "name": {
            "en": "Food Market and Laundromat",
            "zh": "[羅斯伍德]食品市場和自助洗衣店"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1577",
        "x": 7488,
        "y": 11082,
        "name": {
            "en": "Food Warehouse",
            "zh": "[羅斯伍德]食品倉庫"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1578",
        "x": 9074,
        "y": 12186,
        "name": {
            "en": "Fresh Food Market",
            "zh": "[羅斯伍德]新鮮食品市場"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1579",
        "x": 8297,
        "y": 12225,
        "name": {
            "en": "Gas Station",
            "zh": "[羅斯伍德]加油站"
        },
        "location": "Rosewood",
        "description": {
            "en": "Fossoil, 8 pumps.",
            "zh": "Fossoil，8個油泵。"
        },
        "tags": []
    },
    {
        "ID": "1580",
        "x": 8164,
        "y": 11267,
        "name": {
            "en": "Gas Station",
            "zh": "[羅斯伍德]加油站"
        },
        "location": "Rosewood",
        "description": {
            "en": "4 pumps.",
            "zh": "4個油泵。"
        },
        "tags": []
    },
    {
        "ID": "1581",
        "x": 8026,
        "y": 11525,
        "name": {
            "en": "Gated Community",
            "zh": "[羅斯伍德]封閉式社區"
        },
        "location": "Rosewood",
        "description": {
            "en": "Defendable housing.",
            "zh": "可防禦的住房。"
        },
        "tags": []
    },
    {
        "ID": "1582",
        "x": 8341,
        "y": 11750,
        "name": {
            "en": "House",
            "zh": "[羅斯伍德]房屋"
        },
        "location": "Rosewood",
        "description": {
            "en": "Single level house with farm plots, a tool shed and a high fence around with one way in.",
            "zh": "單層房屋，周圍有農田、一個工具棚和一道高圍欄，只有一個入口。"
        },
        "tags": []
    },
    {
        "ID": "1583",
        "x": 8838,
        "y": 11612,
        "name": {
            "en": "Isolated Houses",
            "zh": "[羅斯伍德]隔離房屋"
        },
        "location": "Rosewood",
        "description": {
            "en": "Extreme isolation means noise should draw little foot traffic.",
            "zh": "極度隔離意味著噪音應該很少吸引行人。"
        },
        "tags": []
    },
    {
        "ID": "1584",
        "x": 7693,
        "y": 11873,
        "name": {
            "en": "Kentucky State Prison",
            "zh": "[羅斯伍德]肯塔基州立監獄"
        },
        "location": "Rosewood",
        "description": {
            "en": "Not the best/worst place to live!",
            "zh": "不是最好的/最差的居住地！"
        },
        "tags": []
    },
    {
        "ID": "1585",
        "x": 8075,
        "y": 11654,
        "name": {
            "en": "Knox County Court of Justice",
            "zh": "[羅斯伍德]諾克斯縣司法法院"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1586",
        "x": 8075,
        "y": 11654,
        "name": {
            "en": "Knox County Court of Justice",
            "zh": "[羅斯伍德]諾克斯縣司法法院"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1587",
        "x": 8089,
        "y": 11536,
        "name": {
            "en": "Law Offices",
            "zh": "[羅斯伍德]律師事務所"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1588",
        "x": 8085,
        "y": 11619,
        "name": {
            "en": "Mama McFudgington's",
            "zh": "[羅斯伍德]Mama McFudgington's"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1589",
        "x": 8085,
        "y": 11619,
        "name": {
            "en": "Mama McFudgington's",
            "zh": "[羅斯伍德]Mama McFudgington's"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1590",
        "x": 8078,
        "y": 11417,
        "name": {
            "en": "Motel",
            "zh": "[羅斯伍德]汽車旅館"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1591",
        "x": 9199,
        "y": 11853,
        "name": {
            "en": "Packaging Warehouses",
            "zh": "[羅斯伍德]包裝倉庫"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1592",
        "x": 8075,
        "y": 11310,
        "name": {
            "en": "Pizza Restaurant",
            "zh": "[羅斯伍德]披薩餐廳"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1593",
        "x": 8086,
        "y": 11500,
        "name": {
            "en": "Rosewood Country Buffet",
            "zh": "[羅斯伍德]羅斯伍德鄉村自助餐"
        },
        "location": "Rosewood",
        "description": {
            "en": "*Disclaimer: Not all-you-can-eat.",
            "zh": "*免責聲明：非吃到飽。"
        },
        "tags": []
    },
    {
        "ID": "1594",
        "x": 8089,
        "y": 11526,
        "name": {
            "en": "Rosewood Medical",
            "zh": "[羅斯伍德]羅斯伍德醫療中心"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1595",
        "x": 8086,
        "y": 11551,
        "name": {
            "en": "Salon",
            "zh": "[羅斯伍德]沙龍"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1596",
        "x": 8074,
        "y": 11343,
        "name": {
            "en": "Spiffo's",
            "zh": "[羅斯伍德]Spiffo's"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "Spiffo",
            "Restaurant"
        ]
    },
    {
        "ID": "1597",
        "x": 9202,
        "y": 11840,
        "name": {
            "en": "Warehouse",
            "zh": "[羅斯伍德]倉庫"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1598",
        "x": 7887,
        "y": 12467,
        "name": {
            "en": "Warehouse",
            "zh": "[羅斯伍德]倉庫"
        },
        "location": "Rosewood",
        "description": {
            "en": "Isolated Warehouse With Garage Opening.",
            "zh": "帶有車庫開口的隔離倉庫。"
        },
        "tags": []
    },
    {
        "ID": "1599",
        "x": 8089,
        "y": 11561,
        "name": {
            "en": "Zippee Market",
            "zh": "[羅斯伍德]Zippee 市場"
        },
        "location": "Rosewood",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1600",
        "x": 12538,
        "y": 5288,
        "name": {
            "en": "Bait Shop",
            "zh": "[山谷站]誘餌店"
        },
        "location": "Valley Station",
        "description": {
            "en": "Morris' Bait Shop.",
            "zh": "Morris 的誘餌店。"
        },
        "tags": []
    },
    {
        "ID": "1601",
        "x": 13004,
        "y": 5262,
        "name": {
            "en": "Bar",
            "zh": "[山谷站]酒吧"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1602",
        "x": 13619,
        "y": 5672,
        "name": {
            "en": "Beauty Salon",
            "zh": "[山谷站]美容院"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1603",
        "x": 13856,
        "y": 4740,
        "name": {
            "en": "Big Farm",
            "zh": "[山谷站]大型農場"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1604",
        "x": 13604,
        "y": 5668,
        "name": {
            "en": "Book Store",
            "zh": "[山谷站]書店"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1605",
        "x": 12309,
        "y": 6730,
        "name": {
            "en": "Bridge",
            "zh": "[山谷站]橋"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1606",
        "x": 12544,
        "y": 5266,
        "name": {
            "en": "Burger Shop",
            "zh": "[山谷站]漢堡店"
        },
        "location": "Valley Station",
        "description": {
            "en": "Now with 100% meat!",
            "zh": "現在有 100% 的肉！"
        },
        "tags": []
    },
    {
        "ID": "1607",
        "x": 13887,
        "y": 4040,
        "name": {
            "en": "Burned Trailer Park",
            "zh": "[山谷站]燒毀的拖車公園"
        },
        "location": "Valley Station",
        "description": {
            "en": "A burnt trailer park behind the military checkpoint.",
            "zh": "軍事檢查站後方的一個燒毀的拖車公園。"
        },
        "tags": []
    },
    {
        "ID": "1608",
        "x": 12733,
        "y": 5773,
        "name": {
            "en": "Bus Station",
            "zh": "[山谷站]公車站"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1609",
        "x": 13721,
        "y": 6729,
        "name": {
            "en": "Camp Ground",
            "zh": "[山谷站]露營地"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1610",
        "x": 12848,
        "y": 4956,
        "name": {
            "en": "Church",
            "zh": "[山谷站]教堂"
        },
        "location": "Valley Station",
        "description": {
            "en": "Sacred flame church.",
            "zh": "聖火教堂。"
        },
        "tags": []
    },
    {
        "ID": "1611",
        "x": 14551,
        "y": 4970,
        "name": {
            "en": "Church",
            "zh": "[山谷站]教堂"
        },
        "location": "Valley Station",
        "description": {
            "en": "Small Church with small tool shed near.",
            "zh": "附近有一個小型工具棚的小教堂。"
        },
        "tags": []
    },
    {
        "ID": "1612",
        "x": 13686,
        "y": 5672,
        "name": {
            "en": "Clothing Store",
            "zh": "[山谷站]服飾店"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1613",
        "x": 14123,
        "y": 5493,
        "name": {
            "en": "Construction Site",
            "zh": "[山谷站]工地"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1614",
        "x": 12582,
        "y": 5387,
        "name": {
            "en": "Construction Site",
            "zh": "[山谷站]工地"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1615",
        "x": 13930,
        "y": 5878,
        "name": {
            "en": "Crossroads Mall",
            "zh": "[山谷站]十字路口購物中心"
        },
        "location": "Valley Station",
        "description": {
            "en": "Beware the Shopping Dead.",
            "zh": "小心購物死者。"
        },
        "tags": []
    },
    {
        "ID": "1616",
        "x": 13585,
        "y": 5669,
        "name": {
            "en": "Daycare",
            "zh": "[山谷站]日托中心"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1617",
        "x": 13585,
        "y": 5669,
        "name": {
            "en": "Daycare",
            "zh": "[山谷站]日托中心"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1618",
        "x": 13418,
        "y": 1462,
        "name": {
            "en": "Department Store",
            "zh": "[山谷站]百貨公司"
        },
        "location": "Valley Station",
        "description": {
            "en": "Sammie's",
            "zh": "Sammie's"
        },
        "tags": []
    },
    {
        "ID": "1619",
        "x": 12531,
        "y": 5232,
        "name": {
            "en": "Destroyed Cabin",
            "zh": "[山谷站]毀壞的小屋"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1620",
        "x": 12741,
        "y": 5711,
        "name": {
            "en": "Diner",
            "zh": "[山谷站]餐館"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1621",
        "x": 12840,
        "y": 6402,
        "name": {
            "en": "Drag Strip",
            "zh": "[山谷站]賽車道"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1622",
        "x": 12895,
        "y": 6898,
        "name": {
            "en": "East Bridge",
            "zh": "[山谷站]東橋"
        },
        "location": "Valley Station",
        "description": {
            "en": "Bridge Connecting Valley Station and West Point.",
            "zh": "連接山谷站和西點的橋樑。"
        },
        "tags": []
    },
    {
        "ID": "1623",
        "x": 12857,
        "y": 4856,
        "name": {
            "en": "Elementary School",
            "zh": "[山谷站]小學"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1624",
        "x": 12571,
        "y": 5728,
        "name": {
            "en": "Food Market",
            "zh": "[山谷站]食品市場"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1625",
        "x": 12734,
        "y": 5033,
        "name": {
            "en": "Gas Station",
            "zh": "[山谷站]加油站"
        },
        "location": "Valley Station",
        "description": {
            "en": "Ruby gas, 2 pumps.",
            "zh": "Ruby gas，2個油泵。"
        },
        "tags": []
    },
    {
        "ID": "1626",
        "x": 13734,
        "y": 5643,
        "name": {
            "en": "Gas Station",
            "zh": "[山谷站]加油站"
        },
        "location": "Valley Station",
        "description": {
            "en": "Gas-2-Go, 4 pumps.",
            "zh": "Gas-2-Go，4個油泵。"
        },
        "tags": []
    },
    {
        "ID": "1627",
        "x": 14059,
        "y": 5199,
        "name": {
            "en": "House Near the Lake",
            "zh": "[山谷站]湖邊房屋"
        },
        "location": "Valley Station",
        "description": {
            "en": "With tool shed and small lake go fishing.",
            "zh": "帶有工具棚和小湖，可以釣魚。"
        },
        "tags": []
    },
    {
        "ID": "1628",
        "x": 13651,
        "y": 7145,
        "name": {
            "en": "Hunting Cabin",
            "zh": "[山谷站]狩獵小屋"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1629",
        "x": 13105,
        "y": 5315,
        "name": {
            "en": "Hunting Lodge",
            "zh": "[山谷站]狩獵小屋"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1630",
        "x": 13403,
        "y": 5338,
        "name": {
            "en": "Hunting Stand",
            "zh": "[山谷站]狩獵台"
        },
        "location": "Valley Station",
        "description": {
            "en": "Watch out for bears.",
            "zh": "小心熊。"
        },
        "tags": []
    },
    {
        "ID": "1631",
        "x": 13656,
        "y": 5745,
        "name": {
            "en": "Knox Bank",
            "zh": "[山谷站]諾克斯銀行"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1632",
        "x": 12620,
        "y": 4713,
        "name": {
            "en": "Medium Warehouse",
            "zh": "[山谷站]中型倉庫"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1633",
        "x": 13602,
        "y": 5762,
        "name": {
            "en": "Pile-o-Crepe",
            "zh": "[山谷站]Pile-o-Crepe"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1634",
        "x": 13649,
        "y": 5671,
        "name": {
            "en": "Restaurant",
            "zh": "[山谷站]餐廳"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1635",
        "x": 13266,
        "y": 5442,
        "name": {
            "en": "Shooting Range",
            "zh": "[山谷站]射擊場"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1636",
        "x": 12482,
        "y": 5298,
        "name": {
            "en": "Small Dock",
            "zh": "[山谷站]小型碼頭"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1637",
        "x": 14315,
        "y": 4953,
        "name": {
            "en": "Small Farm",
            "zh": "[山谷站]小型農場"
        },
        "location": "Valley Station",
        "description": {
            "en": "With big garden, small tool shed and food stand.",
            "zh": "帶有大花園、小型工具棚和食品攤。"
        },
        "tags": []
    },
    {
        "ID": "1638",
        "x": 13008,
        "y": 5321,
        "name": {
            "en": "Small Hotel",
            "zh": "[山谷站]小型飯店"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1639",
        "x": 12627,
        "y": 5324,
        "name": {
            "en": "Small Store",
            "zh": "[山谷站]小型商店"
        },
        "location": "Valley Station",
        "description": {
            "en": "Groceries.",
            "zh": "雜貨。"
        },
        "tags": []
    },
    {
        "ID": "1640",
        "x": 13629,
        "y": 5881,
        "name": {
            "en": "StarEplex Cinema",
            "zh": "[山谷站]StarEplex 電影院"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1641",
        "x": 12959,
        "y": 4876,
        "name": {
            "en": "Storage Units",
            "zh": "[山谷站]儲存單元"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1642",
        "x": 13664,
        "y": 5669,
        "name": {
            "en": "Valu In$urance",
            "zh": "[山谷站]Valu 保險"
        },
        "location": "Valley Station",
        "description": {
            "en": "\"Sorry, zombie apocalypses aren't covered under the Act of God clause in your policy.\"",
            "zh": "「抱歉，殭屍末日不在您保單的不可抗力條款範圍內。」"
        },
        "tags": []
    },
    {
        "ID": "1643",
        "x": 13571,
        "y": 5762,
        "name": {
            "en": "Yummmers",
            "zh": "[山谷站]Yummmers"
        },
        "location": "Valley Station",
        "description": {
            "en": "Restaurant.",
            "zh": "餐廳。"
        },
        "tags": []
    },
    {
        "ID": "1644",
        "x": 13658,
        "y": 5766,
        "name": {
            "en": "Zippee Market",
            "zh": "[山谷站]Zippee 市場"
        },
        "location": "Valley Station",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1645",
        "x": 11898,
        "y": 6807,
        "name": {
            "en": "Auto Repair Shop",
            "zh": "[西點]汽車修理店"
        },
        "location": "West Point",
        "description": {
            "en": "Car Fix-ation.",
            "zh": "Car Fix-ation。"
        },
        "tags": []
    },
    {
        "ID": "1646",
        "x": 12256,
        "y": 6931,
        "name": {
            "en": "Auto Repair Shop",
            "zh": "[西點]汽車修理店"
        },
        "location": "West Point",
        "description": {
            "en": "American Tire.",
            "zh": "American Tire。"
        },
        "tags": []
    },
    {
        "ID": "1647",
        "x": 11907,
        "y": 6866,
        "name": {
            "en": "Bakery",
            "zh": "[西點]麵包店"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1648",
        "x": 11896,
        "y": 6880,
        "name": {
            "en": "Book Store",
            "zh": "[西點]書店"
        },
        "location": "West Point",
        "description": {
            "en": "Enigma books.",
            "zh": "Enigma books。"
        },
        "tags": []
    },
    {
        "ID": "1649",
        "x": 13965,
        "y": 4866,
        "name": {
            "en": "Burger Restaurant",
            "zh": "[西點]漢堡餐廳"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1650",
        "x": 12077,
        "y": 7075,
        "name": {
            "en": "Burgers",
            "zh": "[西點]漢堡店"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1651",
        "x": 13628,
        "y": 7222,
        "name": {
            "en": "Cabin",
            "zh": "[西點]小屋"
        },
        "location": "West Point",
        "description": {
            "en": "Do you really want to be alone in the woods without a well?",
            "zh": "現在你真的想一個人待在樹林裡嗎？沒有水井？"
        },
        "tags": []
    },
    {
        "ID": "1652",
        "x": 13092,
        "y": 5449,
        "name": {
            "en": "Cafe",
            "zh": "[西點]咖啡廳"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1653",
        "x": 12197,
        "y": 6878,
        "name": {
            "en": "Choo Choo Train Caboose",
            "zh": "[西點]啾啾火車車廂"
        },
        "location": "West Point",
        "description": {
            "en": "No choo choo train :(",
            "zh": "沒有啾啾火車 :("
        },
        "tags": []
    },
    {
        "ID": "1654",
        "x": 11967,
        "y": 6990,
        "name": {
            "en": "Church",
            "zh": "[西點]教堂"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1655",
        "x": 11069,
        "y": 6710,
        "name": {
            "en": "Church and Cemetery",
            "zh": "[西點]教堂與公墓"
        },
        "location": "West Point",
        "description": {
            "en": "Does anyone else think it's a bad idea being on a cemetary during the zombie apocalypse?",
            "zh": "還有其他人認為在殭屍末日期間待在公墓是個壞主意嗎？"
        },
        "tags": []
    },
    {
        "ID": "1656",
        "x": 11666,
        "y": 7036,
        "name": {
            "en": "Commercial Rent",
            "zh": "[西點]商業租賃"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1657",
        "x": 12062,
        "y": 6918,
        "name": {
            "en": "Construction Site",
            "zh": "[西點]工地"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1658",
        "x": 10942,
        "y": 6769,
        "name": {
            "en": "Crate Shed",
            "zh": "[西點]板條箱棚"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1659",
        "x": 11740,
        "y": 6923,
        "name": {
            "en": "Day Care",
            "zh": "[西點]日托中心"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1660",
        "x": 11828,
        "y": 6574,
        "name": {
            "en": "Dock",
            "zh": "[西點]碼頭"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1661",
        "x": 11276,
        "y": 6594,
        "name": {
            "en": "Dock",
            "zh": "[西點]碼頭"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1662",
        "x": 11132,
        "y": 6852,
        "name": {
            "en": "Farmhouse",
            "zh": "[西點]農舍"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1663",
        "x": 14396,
        "y": 4568,
        "name": {
            "en": "Farmhouse",
            "zh": "[西點]農舍"
        },
        "location": "West Point",
        "description": {
            "en": "Large farmhouse with toolsheds and chicken coop.",
            "zh": "帶有工具棚和雞舍的大型農舍。"
        },
        "tags": []
    },
    {
        "ID": "1664",
        "x": 9279,
        "y": 7781,
        "name": {
            "en": "Farmhouse",
            "zh": "[西點]農舍"
        },
        "location": "West Point",
        "description": {
            "en": "Has an antique stove.",
            "zh": "有一個古董烤爐。"
        },
        "tags": []
    },
    {
        "ID": "1665",
        "x": 11984,
        "y": 6911,
        "name": {
            "en": "Food Market",
            "zh": "[西點]食品市場"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1666",
        "x": 13937,
        "y": 4864,
        "name": {
            "en": "Food Market",
            "zh": "[西點]食品市場"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1667",
        "x": 11932,
        "y": 6941,
        "name": {
            "en": "Furniture Store",
            "zh": "[西點]家具店"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1668",
        "x": 12069,
        "y": 7140,
        "name": {
            "en": "Gas Station",
            "zh": "[西點]加油站"
        },
        "location": "West Point",
        "description": {
            "en": "Fossoil, 4 pumps.",
            "zh": "Fossoil，4個油泵。"
        },
        "tags": []
    },
    {
        "ID": "1669",
        "x": 10155,
        "y": 6624,
        "name": {
            "en": "Gated House by the Lake",
            "zh": "[西點]湖邊封閉式豪宅"
        },
        "location": "West Point",
        "description": {
            "en": "Gated luxurious house by the lake and river, near Westpoint.",
            "zh": "靠近西點的湖邊和河邊的封閉式豪華房屋。"
        },
        "tags": []
    },
    {
        "ID": "1670",
        "x": 11831,
        "y": 6912,
        "name": {
            "en": "General Store",
            "zh": "[西點]雜貨店"
        },
        "location": "West Point",
        "description": {
            "en": "This is more of a general store than a hardware store.",
            "zh": "這更像是一家雜貨店，而不是五金行。"
        },
        "tags": []
    },
    {
        "ID": "1671",
        "x": 12024,
        "y": 6853,
        "name": {
            "en": "GigaMart",
            "zh": "[西點]GigaMart"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1672",
        "x": 12090,
        "y": 6783,
        "name": {
            "en": "Stendo's Firearms Emporium",
            "zh": "[西點]Stendo 的槍械商場"
        },
        "location": "West Point",
        "description": {
            "en": "Rest in peace.",
            "zh": "安息。"
        },
        "tags": []
    },
    {
        "ID": "1673",
        "x": 11852,
        "y": 6878,
        "name": {
            "en": "Hair O Genesis",
            "zh": "[西點]Hair O Genesis"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1674",
        "x": 11974,
        "y": 6912,
        "name": {
            "en": "Hardware Store",
            "zh": "[西點]五金行"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1675",
        "x": 10182,
        "y": 6763,
        "name": {
            "en": "House by the lake",
            "zh": "[西點]湖邊房屋"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1676",
        "x": 11913,
        "y": 6914,
        "name": {
            "en": "Knox Bank",
            "zh": "[西點]諾克斯銀行"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1677",
        "x": 12140,
        "y": 7084,
        "name": {
            "en": "Large Warehouse",
            "zh": "[西點]大型倉庫"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1678",
        "x": 11931,
        "y": 6786,
        "name": {
            "en": "Laundromat",
            "zh": "[西點]自助洗衣店"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1679",
        "x": 12018,
        "y": 6917,
        "name": {
            "en": "Mini Hotel",
            "zh": "[西點]迷你飯店"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1680",
        "x": 11860,
        "y": 6906,
        "name": {
            "en": "Motel",
            "zh": "[西點]汽車旅館"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1681",
        "x": 11976,
        "y": 6939,
        "name": {
            "en": "Office Building",
            "zh": "[西點]辦公大樓"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1682",
        "x": 11977,
        "y": 6882,
        "name": {
            "en": "Office Building",
            "zh": "[西點]辦公大樓"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1683",
        "x": 11935,
        "y": 6802,
        "name": {
            "en": "Pharmacy",
            "zh": "[西點]藥局"
        },
        "location": "West Point",
        "description": {
            "en": "Pharmahug.",
            "zh": "Pharmahug。"
        },
        "tags": []
    },
    {
        "ID": "1684",
        "x": 12033,
        "y": 7364,
        "name": {
            "en": "Picnic Area",
            "zh": "[西點]野餐區"
        },
        "location": "West Point",
        "description": {
            "en": "Consumption of brought food and drinks strictly forbidden!",
            "zh": "嚴禁食用外帶食物和飲料！"
        },
        "tags": []
    },
    {
        "ID": "1685",
        "x": 11660,
        "y": 7083,
        "name": {
            "en": "Pizza Whirled",
            "zh": "[西點]環球披薩"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1686",
        "x": 11418,
        "y": 6782,
        "name": {
            "en": "Playground",
            "zh": "[西點]遊樂場"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1687",
        "x": 11898,
        "y": 6940,
        "name": {
            "en": "Police Station",
            "zh": "[西點]警察局"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1688",
        "x": 8063,
        "y": 11735,
        "name": {
            "en": "Police station",
            "zh": "[西點]警察局"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1689",
        "x": 11956,
        "y": 6912,
        "name": {
            "en": "Post Office",
            "zh": "[西點]郵局"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1690",
        "x": 11880,
        "y": 6879,
        "name": {
            "en": "R.B. Mat, Dentist",
            "zh": "[西點]R.B. Mat 牙醫"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1691",
        "x": 11932,
        "y": 6914,
        "name": {
            "en": "Restaurant",
            "zh": "[西點]餐廳"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1692",
        "x": 11345,
        "y": 6784,
        "name": {
            "en": "School",
            "zh": "[西點]學校"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1693",
        "x": 11962,
        "y": 6879,
        "name": {
            "en": "Seahorse Coffee",
            "zh": "[西點]海馬咖啡"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1694",
        "x": 11349,
        "y": 6719,
        "name": {
            "en": "Small Store",
            "zh": "[西點]小型商店"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1695",
        "x": 11976,
        "y": 6810,
        "name": {
            "en": "Spiffo's",
            "zh": "[西點]Spiffo's"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "Spiffo",
            "Restaurant"
        ]
    },
    {
        "ID": "1696",
        "x": 12137,
        "y": 7024,
        "name": {
            "en": "Storage Units",
            "zh": "[西點]儲存單元"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1697",
        "x": 11899,
        "y": 6851,
        "name": {
            "en": "The Drake and Crystal Pie Place",
            "zh": "[西點]Drake 和 Crystal 派店"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1698",
        "x": 11820,
        "y": 6865,
        "name": {
            "en": "Thunder Gas",
            "zh": "[西點]雷電加油站"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1699",
        "x": 11941,
        "y": 6873,
        "name": {
            "en": "Town Hall",
            "zh": "[西點]市政廳"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1700",
        "x": 11786,
        "y": 6913,
        "name": {
            "en": "Town Park",
            "zh": "[西點]城鎮公園"
        },
        "location": "West Point",
        "description": {
            "en": "A nice small, suburban park.",
            "zh": "一個不錯的郊區小型公園。"
        },
        "tags": []
    },
    {
        "ID": "1701",
        "x": 12059,
        "y": 6793,
        "name": {
            "en": "Twiggy's",
            "zh": "[西點]Twiggy's"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1702",
        "x": 13664,
        "y": 5669,
        "name": {
            "en": "Valu In$urance",
            "zh": "[西點]Valu 保險"
        },
        "location": "West Point",
        "description": {
            "en": "\"Sorry, zombie apocalypses aren't covered under the Act of God clause in your policy.\"",
            "zh": "「抱歉，殭屍末日不在您保單的不可抗力條款範圍內。」"
        },
        "tags": []
    },
    {
        "ID": "1703",
        "x": 11660,
        "y": 7067,
        "name": {
            "en": "Zippee Market",
            "zh": "[西點]Zippee 市場"
        },
        "location": "West Point",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1704",
        "x": 3573,
        "y": 10913,
        "name": {
            "en": "Gas Station",
            "zh": "[迴聲溪]加油站"
        },
        "location": "Echo Creek",
        "description": {
            "en": "Gas-2-Go, 2 pumps.",
            "zh": "Gas-2-Go，2個油泵。"
        },
        "tags": []
    },
    {
        "ID": "1705",
        "x": 3565,
        "y": 10900,
        "name": {
            "en": "Diner",
            "zh": "[迴聲溪]餐館"
        },
        "location": "Echo Creek",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1706",
        "x": 1923,
        "y": 10852,
        "name": {
            "en": "AMZ Steel",
            "zh": "[迴聲溪]AMZ 鋼鐵"
        },
        "location": "Echo Creek",
        "description": {
            "en": "Steel factory.",
            "zh": "鋼鐵廠。"
        },
        "tags": []
    },
    {
        "ID": "1707",
        "x": 3678,
        "y": 10895,
        "name": {
            "en": "Auto repair shop",
            "zh": "[迴聲溪]汽車修理店"
        },
        "location": "Echo Creek",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1708",
        "x": 2591,
        "y": 10908,
        "name": {
            "en": "Guns Unlimited",
            "zh": "[迴聲溪]無限槍支"
        },
        "location": "Echo Creek",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1709",
        "x": 912,
        "y": 13042,
        "name": {
            "en": "Irvington Speedway",
            "zh": "[歐文頓]歐文頓賽車場"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1710",
        "x": 3828,
        "y": 12278,
        "name": {
            "en": "Unusual Farm",
            "zh": "[迴聲溪]不尋常農場"
        },
        "location": "Echo Creek",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1711",
        "x": 3789,
        "y": 14440,
        "name": {
            "en": "Cattle Farm",
            "zh": "[歐文頓]養牛場"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1712",
        "x": 3765,
        "y": 14667,
        "name": {
            "en": "Pig Farm",
            "zh": "[歐文頓]養豬場"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1713",
        "x": 2527,
        "y": 14540,
        "name": {
            "en": "Motel",
            "zh": "[歐文頓]汽車旅館"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1714",
        "x": 2526,
        "y": 14469,
        "name": {
            "en": "Gas Station",
            "zh": "[歐文頓]加油站"
        },
        "location": "Irvington",
        "description": {
            "en": "Fossoil, 2 pumps.",
            "zh": "Fossoil，2個油泵。"
        },
        "tags": []
    },
    {
        "ID": "1715",
        "x": 2544,
        "y": 14470,
        "name": {
            "en": "Liquor Store",
            "zh": "[歐文頓]酒類專賣店"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1716",
        "x": 2460,
        "y": 14470,
        "name": {
            "en": "Restaurant",
            "zh": "[歐文頓]餐廳"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1717",
        "x": 2469,
        "y": 14469,
        "name": {
            "en": "Grocery Store",
            "zh": "[歐文頓]雜貨店"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1718",
        "x": 2476,
        "y": 14470,
        "name": {
            "en": "Pharmacy",
            "zh": "[歐文頓]藥局"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1719",
        "x": 2484,
        "y": 14469,
        "name": {
            "en": "Diner",
            "zh": "[歐文頓]餐館"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1720",
        "x": 2444,
        "y": 14535,
        "name": {
            "en": "Post Office",
            "zh": "[歐文頓]郵局"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1721",
        "x": 2373,
        "y": 14477,
        "name": {
            "en": "Metal Workshop",
            "zh": "[歐文頓]金屬加工廠"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1722",
        "x": 2319,
        "y": 14480,
        "name": {
            "en": "Gas Station",
            "zh": "[歐文頓]加油站"
        },
        "location": "Irvington",
        "description": {
            "en": "Gas-2-Go, 4 pumps.",
            "zh": "Gas-2-Go，4個油泵。"
        },
        "tags": []
    },
    {
        "ID": "1723",
        "x": 2302,
        "y": 14480,
        "name": {
            "en": "VHS store",
            "zh": "[歐文頓]VHS 店"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1724",
        "x": 2228,
        "y": 14462,
        "name": {
            "en": "Supermarket",
            "zh": "[歐文頓]超市"
        },
        "location": "Irvington",
        "description": {
            "en": "Zippee mart.",
            "zh": "Zippee mart。"
        },
        "tags": []
    },
    {
        "ID": "1725",
        "x": 2149,
        "y": 14534,
        "name": {
            "en": "Hardware Store",
            "zh": "[歐文頓]五金行"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1726",
        "x": 2032,
        "y": 14651,
        "name": {
            "en": "Spiffo's",
            "zh": "[歐文頓]Spiffo's"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "Spiffo",
            "Restaurant"
        ]
    },
    {
        "ID": "1727",
        "x": 1865,
        "y": 14858,
        "name": {
            "en": "Sports store",
            "zh": "[歐文頓]體育用品店"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1728",
        "x": 1829,
        "y": 14858,
        "name": {
            "en": "Wedding Store",
            "zh": "[歐文頓]婚禮用品店"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1729",
        "x": 1765,
        "y": 14877,
        "name": {
            "en": "Pile-o-Crepe",
            "zh": "[歐文頓]Pile-o-Crepe"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1730",
        "x": 1847,
        "y": 14778,
        "name": {
            "en": "Supermarket",
            "zh": "[歐文頓]超市"
        },
        "location": "Irvington",
        "description": {
            "en": "Gigamart",
            "zh": "Gigamart"
        },
        "tags": []
    },
    {
        "ID": "1731",
        "x": 1817,
        "y": 14780,
        "name": {
            "en": "Restaurant",
            "zh": "[歐文頓]餐廳"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1732",
        "x": 1774,
        "y": 14785,
        "name": {
            "en": "Gun Store",
            "zh": "[歐文頓]槍支店"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1733",
        "x": 1763,
        "y": 14785,
        "name": {
            "en": "Comic Store",
            "zh": "[歐文頓]漫畫店"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1734",
        "x": 1748,
        "y": 14787,
        "name": {
            "en": "Restaurant",
            "zh": "[歐文頓]餐廳"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1735",
        "x": 1861,
        "y": 14471,
        "name": {
            "en": "Public Pool",
            "zh": "[歐文頓]公共游泳池"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1736",
        "x": 2258,
        "y": 14355,
        "name": {
            "en": "School",
            "zh": "[歐文頓]學校"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1737",
        "x": 2468,
        "y": 14320,
        "name": {
            "en": "Farming supply store",
            "zh": "[歐文頓]農用物資店"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1738",
        "x": 2432,
        "y": 14225,
        "name": {
            "en": "Church",
            "zh": "[歐文頓]教堂"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1739",
        "x": 2455,
        "y": 13909,
        "name": {
            "en": "Storage Units",
            "zh": "[歐文頓]儲存單元"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1740",
        "x": 2414,
        "y": 13861,
        "name": {
            "en": "Gas Station",
            "zh": "[歐文頓]加油站"
        },
        "location": "Irvington",
        "description": {
            "en": "2 pumps.",
            "zh": "2個油泵。"
        },
        "tags": []
    },
    {
        "ID": "1741",
        "x": 3779,
        "y": 13483,
        "name": {
            "en": "Warehouses",
            "zh": "[歐文頓]倉庫"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1742",
        "x": 1856,
        "y": 14164,
        "name": {
            "en": "Gun Club",
            "zh": "[歐文頓]槍支俱樂部"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1743",
        "x": 548,
        "y": 9894,
        "name": {
            "en": "Broken Train",
            "zh": "[埃克倫]破損火車"
        },
        "location": "Ekron",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1744",
        "x": 510,
        "y": 9858,
        "name": {
            "en": "Liquor Store",
            "zh": "[埃克倫]酒類專賣店"
        },
        "location": "Ekron",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1745",
        "x": 444,
        "y": 9928,
        "name": {
            "en": "Church",
            "zh": "[埃克倫]教堂"
        },
        "location": "Ekron",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1746",
        "x": 620,
        "y": 9840,
        "name": {
            "en": "Metal Workshop",
            "zh": "[埃克倫]金屬加工廠"
        },
        "location": "Ekron",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1747",
        "x": 648,
        "y": 9923,
        "name": {
            "en": "Gas Station",
            "zh": "[埃克倫]加油站"
        },
        "location": "Ekron",
        "description": {
            "en": "Fossoil, 4 pumps.",
            "zh": "Fossoil，4個油泵。"
        },
        "tags": []
    },
    {
        "ID": "1748",
        "x": 689,
        "y": 9857,
        "name": {
            "en": "Post Office",
            "zh": "[埃克倫]郵局"
        },
        "location": "Ekron",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1749",
        "x": 790,
        "y": 9835,
        "name": {
            "en": "Community Center",
            "zh": "[埃克倫]社區中心"
        },
        "location": "Ekron",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1750",
        "x": 763,
        "y": 9770,
        "name": {
            "en": "Fire Department",
            "zh": "[埃克倫]消防局"
        },
        "location": "Ekron",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "Fire",
            "Fire axe",
            "Fire station"
        ]
    },
    {
        "ID": "1751",
        "x": 431,
        "y": 9794,
        "name": {
            "en": "Medical Center",
            "zh": "[埃克倫]醫療中心"
        },
        "location": "Ekron",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1752",
        "x": 440,
        "y": 9793,
        "name": {
            "en": "Electronics Store",
            "zh": "[埃克倫]電子產品店"
        },
        "location": "Ekron",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1753",
        "x": 451,
        "y": 9794,
        "name": {
            "en": "Book Store",
            "zh": "[埃克倫]書店"
        },
        "location": "Ekron",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1754",
        "x": 463,
        "y": 9790,
        "name": {
            "en": "Restaurant",
            "zh": "[埃克倫]餐廳"
        },
        "location": "Ekron",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1755",
        "x": 440,
        "y": 9820,
        "name": {
            "en": "Clothing Store",
            "zh": "[埃克倫]服飾店"
        },
        "location": "Ekron",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1756",
        "x": 441,
        "y": 9843,
        "name": {
            "en": "Bar",
            "zh": "[埃克倫]酒吧"
        },
        "location": "Ekron",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1757",
        "x": 436,
        "y": 9864,
        "name": {
            "en": "Hunting Store",
            "zh": "[埃克倫]狩獵用品店"
        },
        "location": "Ekron",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1758",
        "x": 424,
        "y": 9864,
        "name": {
            "en": "Grocery Store",
            "zh": "[埃克倫]雜貨店"
        },
        "location": "Ekron",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1759",
        "x": 404,
        "y": 9863,
        "name": {
            "en": "Pharmacy",
            "zh": "[埃克倫]藥局"
        },
        "location": "Ekron",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1760",
        "x": 2203,
        "y": 6676,
        "name": {
            "en": "Destroyed Train Yard",
            "zh": "[布蘭登堡]毀壞的火車場"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1761",
        "x": 2068,
        "y": 6435,
        "name": {
            "en": "Gas Station",
            "zh": "[布蘭登堡]加油站"
        },
        "location": "Brandenburg",
        "description": {
            "en": "Fossoil, 1 pump.",
            "zh": "Fossoil，1個油泵。"
        },
        "tags": []
    },
    {
        "ID": "1762",
        "x": 2130,
        "y": 6429,
        "name": {
            "en": "Destroyed Pile-O-Crepe",
            "zh": "[布蘭登堡]毀壞的 Pile-O-Crepe"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1763",
        "x": 2001,
        "y": 6517,
        "name": {
            "en": "Storage Units",
            "zh": "[布蘭登堡]儲存單元"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1764",
        "x": 1937,
        "y": 6586,
        "name": {
            "en": "Restaurant",
            "zh": "[布蘭登堡]餐廳"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1765",
        "x": 1919,
        "y": 6439,
        "name": {
            "en": "Jay's Chicken",
            "zh": "[布蘭登堡]Jay's 炸雞"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1766",
        "x": 1946,
        "y": 6409,
        "name": {
            "en": "Auto Repair Shop",
            "zh": "[布蘭登堡]汽車修理店"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1767",
        "x": 1948,
        "y": 6391,
        "name": {
            "en": "Auto Supply Store",
            "zh": "[布蘭登堡]汽車用品店"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1768",
        "x": 1947,
        "y": 6381,
        "name": {
            "en": "Clothing Store",
            "zh": "[布蘭登堡]服飾店"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1769",
        "x": 1948,
        "y": 6370,
        "name": {
            "en": "Sewing Store",
            "zh": "[布蘭登堡]縫紉店"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1770",
        "x": 1947,
        "y": 6360,
        "name": {
            "en": "Tool Store",
            "zh": "[布蘭登堡]工具店"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1771",
        "x": 1925,
        "y": 6345,
        "name": {
            "en": "Gardening Store",
            "zh": "[布蘭登堡]園藝店"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1772",
        "x": 1892,
        "y": 6341,
        "name": {
            "en": "Spiffo's",
            "zh": "[布蘭登堡]Spiffo's"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "Spiffo",
            "Restaurant"
        ]
    },
    {
        "ID": "1773",
        "x": 1865,
        "y": 6349,
        "name": {
            "en": "Gigamart",
            "zh": "[布蘭登堡]Gigamart"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1774",
        "x": 1845,
        "y": 6400,
        "name": {
            "en": "Liquor Store",
            "zh": "[布蘭登堡]酒類專賣店"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1775",
        "x": 1843,
        "y": 6390,
        "name": {
            "en": "Burger Store",
            "zh": "[布蘭登堡]漢堡店"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1776",
        "x": 1839,
        "y": 6411,
        "name": {
            "en": "Lamp Store",
            "zh": "[布蘭登堡]燈具店"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1777",
        "x": 1995,
        "y": 6431,
        "name": {
            "en": "Spiffo's",
            "zh": "[布蘭登堡]Spiffo's"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "Spiffo",
            "Restaurant"
        ]
    },
    {
        "ID": "1778",
        "x": 2041,
        "y": 6494,
        "name": {
            "en": "Car Dealership",
            "zh": "[布蘭登堡]汽車經銷商"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1779",
        "x": 2069,
        "y": 6313,
        "name": {
            "en": "Restaurant",
            "zh": "[布蘭登堡]餐廳"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1780",
        "x": 2069,
        "y": 6279,
        "name": {
            "en": "Fire Department",
            "zh": "[布蘭登堡]消防局"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": [
            "Fire",
            "Fire axe",
            "Fire station"
        ]
    },
    {
        "ID": "1781",
        "x": 2066,
        "y": 6193,
        "name": {
            "en": "School",
            "zh": "[布蘭登堡]學校"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1782",
        "x": 2083,
        "y": 6008,
        "name": {
            "en": "Church",
            "zh": "[布蘭登堡]教堂"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1783",
        "x": 2045,
        "y": 6004,
        "name": {
            "en": "Cafe",
            "zh": "[布蘭登堡]咖啡廳"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1784",
        "x": 2041,
        "y": 5976,
        "name": {
            "en": "Police Station",
            "zh": "[布蘭登堡]警察局"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1785",
        "x": 2074,
        "y": 5886,
        "name": {
            "en": "Tool Store",
            "zh": "[布蘭登堡]工具店"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1786",
        "x": 2079,
        "y": 5907,
        "name": {
            "en": "Dentist",
            "zh": "[布蘭登堡]牙醫"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1787",
        "x": 2041,
        "y": 5904,
        "name": {
            "en": "Post Office",
            "zh": "[布蘭登堡]郵局"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": ["Office"]
    },
    {
        "ID": "1788",
        "x": 2046,
        "y": 5840,
        "name": {
            "en": "Restaurant",
            "zh": "[布蘭登堡]餐廳"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1789",
        "x": 2044,
        "y": 5832,
        "name": {
            "en": "Gun Store",
            "zh": "[布蘭登堡]槍支店"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1790",
        "x": 2048,
        "y": 5819,
        "name": {
            "en": "Bakery",
            "zh": "[布蘭登堡]麵包店"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1791",
        "x": 2086,
        "y": 5787,
        "name": {
            "en": "Clothing Store",
            "zh": "[布蘭登堡]服飾店"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1792",
        "x": 2095,
        "y": 5787,
        "name": {
            "en": "Restaurant",
            "zh": "[布蘭登堡]餐廳"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1793",
        "x": 2123,
        "y": 5787,
        "name": {
            "en": "Book Store",
            "zh": "[布蘭登堡]書店"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1794",
        "x": 2021,
        "y": 5839,
        "name": {
            "en": "Garage",
            "zh": "[布蘭登堡]車庫"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1795",
        "x": 1848,
        "y": 5943,
        "name": {
            "en": "Community Center",
            "zh": "[布蘭登堡]社區中心"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1796",
        "x": 1438,
        "y": 5834,
        "name": {
            "en": "Court House",
            "zh": "[布蘭登堡]法院"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1797",
        "x": 1431,
        "y": 5880,
        "name": {
            "en": "Prison",
            "zh": "[布蘭登堡]監獄"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1798",
        "x": 951,
        "y": 6124,
        "name": {
            "en": "Brandenburg Airport",
            "zh": "[布蘭登堡]布蘭登堡機場"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1799",
        "x": 1253,
        "y": 7380,
        "name": {
            "en": "Mansion",
            "zh": "[布蘭登堡]豪宅"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1800",
        "x": 2055,
        "y": 5710,
        "name": {
            "en": "P.S. Delilah",
            "zh": "[布蘭登堡]P.S. Delilah"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1801",
        "x": 1929,
        "y": 5764,
        "name": {
            "en": "Metal Workshop",
            "zh": "[布蘭登堡]金屬加工廠"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1802",
        "x": 2427,
        "y": 5798,
        "name": {
            "en": "Bar",
            "zh": "[布蘭登堡]酒吧"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1803",
        "x": 4065,
        "y": 6522,
        "name": {
            "en": "Sunderland Hills Sanatorium",
            "zh": "[布蘭登堡]桑德蘭山療養院"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1804",
        "x": 10088,
        "y": 8244,
        "name": {
            "en": "Lake House",
            "zh": "[莫德勞]湖邊房屋"
        },
        "location": "Muldraugh",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1040",
        "x": 9925,
        "y": 12624,
        "name": {
            "en": "Bunker",
            "zh": "[三月嶺]地堡"
        },
        "location": "March Ridge",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1805",
        "x": 1729,
        "y": 5758,
        "name": {
            "en": "Medical Center",
            "zh": "[布蘭登堡]醫療中心"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1806",
        "x": 1692,
        "y": 5748,
        "name": {
            "en": "Diner",
            "zh": "[布蘭登堡]餐館"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1807",
        "x": 1669,
        "y": 5765,
        "name": {
            "en": "Gas Station",
            "zh": "[布蘭登堡]加油站"
        },
        "location": "Brandenburg",
        "description": {
            "en": "Gas Corner, 2 pumps.",
            "zh": "Gas Corner，2個油泵。"
        },
        "tags": []
    },
    {
        "ID": "1808",
        "x": 1556,
        "y": 5746,
        "name": {
            "en": "Church",
            "zh": "[布蘭登堡]教堂"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1809",
        "x": 5578,
        "y": 9373,
        "name": {
            "en": "Bunker",
            "zh": "[鹿谷]地堡"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1810",
        "x": 8535,
        "y": 14401,
        "name": {
            "en": "Vacation Resort",
            "zh": "[鹿谷]度假村"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1811",
        "x": 8014,
        "y": 15262,
        "name": {
            "en": "Water Treatment Plant",
            "zh": "[鹿谷]淨水廠"
        },
        "location": "Doe Valley",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1812",
        "x": 3053,
        "y": 14445,
        "name": {
            "en": "Food Factory",
            "zh": "[歐文頓]食品工廠"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1813",
        "x": 3112,
        "y": 14466,
        "name": {
            "en": "Warehouse",
            "zh": "[歐文頓]倉庫"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1814",
        "x": 1951,
        "y": 6144,
        "name": {
            "en": "Tornado Shelter",
            "zh": "[布蘭登堡]龍捲風避難所"
        },
        "location": "Brandenburg",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1815",
        "x": 4012,
        "y": 10794,
        "name": {
            "en": "Ovo Farms",
            "zh": "[迴聲溪]Ovo 農場"
        },
        "location": "Echo creek",
        "description": {
            "en": "Chicken farm with a warehouse, factory, and manor",
            "zh": "帶有倉庫、工廠和莊園的養雞場"
        },
        "tags": [
            "farm",
            "warehouse",
            "factory",
            "manor",
            "chicken"
        ]
    },
    {
        "ID": "1816",
        "x": 4127,
        "y": 9418,
        "name": {
            "en": "Meadshire Estate",
            "zh": "[鹿谷]牧草莊園"
        },
        "location": "Doe Valley",
        "description": {
            "en": "Gated community with a single entrance",
            "zh": "帶有單一入口的封閉式社區"
        },
        "tags": [
            "residential",
            "gated",
            "community",
            "estate"
        ]
    },
    {
        "ID": "1817",
        "x": 4349,
        "y": 9743,
        "name": {
            "en": "Mad Dan's Den",
            "zh": "[鹿谷]瘋狂丹的巢穴"
        },
        "location": "Doe Valley",
        "description": {
            "en": "Home appliances and furniture store",
            "zh": "家用電器和家具店"
        },
        "tags": [
            "store",
            "furniture",
            "appliances"
        ]
    },
    {
        "ID": "1818",
        "x": 3529,
        "y": 8262,
        "name": {
            "en": "Historic Coalfield",
            "zh": "[鹿谷]歷史煤田"
        },
        "location": "Doe Valley",
        "description": {
            "en": "Western themed town with blacksmith, saloon, hardware store, and more",
            "zh": "具有鐵匠鋪、酒吧、五金行等西部主題小鎮"
        },
        "tags": [
            "western",
            "blacksmith",
            "saloon",
            "hardware",
            "town"
        ]
    },
    {
        "ID": "1819",
        "x": 2917,
        "y": 9111,
        "name": {
            "en": "Boarding School",
            "zh": "[鹿谷]寄宿學校"
        },
        "location": "Doe Valley",
        "description": {
            "en": "Fenced off location with bunkrooms, classrooms, a cafeteria, offices, a clinic, greenhouse/botanical garden, and a courtyard",
            "zh": "帶有圍欄，內含上下舖寢室、教室、自助餐廳、辦公室、診所、溫室/植物園和庭院的場所"
        },
        "tags": [
            "school",
            "fenced",
            "bunkrooms",
            "classrooms",
            "cafeteria",
			"Office",
            "clinic",
            "greenhouse",
            "courtyard"
        ]
    },
    {
        "ID": "1820",
        "x": 2060,
        "y": 8574,
        "name": {
            "en": "Private Retreat",
            "zh": "[鹿谷]私人休憩地"
        },
        "location": "Doe Valley",
        "description": {
            "en": "Fenced off lakehouse with a barn. Isolated and enclosed. Great base location",
            "zh": "帶有穀倉的圍欄湖邊房屋。隔離且封閉。絕佳的基地位置"
        },
        "tags": [
            "retreat",
            "fenced",
            "lakehouse",
            "barn",
            "isolated",
            "base"
        ]
    },
    {
        "ID": "1821",
        "x": 3466,
        "y": 11510,
        "name": {
            "en": "Gardening Store",
            "zh": "[迴聲溪]園藝店"
        },
        "location": "Echo creek",
        "description": {
            "en": "Sells seeds and gardening supplies",
            "zh": "銷售種子和園藝用品"
        },
        "tags": [
            "store",
            "gardening",
            "seeds",
            "supplies"
        ]
    },
    {
        "ID": "1822",
        "x": 2634,
        "y": 9475,
        "name": {
            "en": "Cabin in the Woods",
            "zh": "[鹿谷]林中小屋"
        },
        "location": "Doe Valley",
        "description": {
            "en": "Has a stove, sink, an outhouse, and a shed",
            "zh": "設有火爐、水槽、戶外廁所和棚屋"
        },
        "tags": [
            "cabin",
            "woods",
            "stove",
            "sink",
            "outhouse",
            "shed"
        ]
    },
    {
        "ID": "1823",
        "x": 805,
        "y": 11853,
        "name": {
            "en": "Train station",
            "zh": "[歐文頓]火車站"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    },
    {
        "ID": "1824",
        "x": 2485,
        "y": 13940,
        "name": {
            "en": "Police station",
            "zh": "[歐文頓]警察局"
        },
        "location": "Irvington",
        "description": {
            "en": "",
            "zh": ""
        },
        "tags": []
    }
];
	const _obj = {
		tag_list:tags,
		poi_list:pois,
	}
	return _obj;
}
