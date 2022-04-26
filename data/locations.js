var locations = [
	{
		"name":"롯데마트 김포공항점",
		"address":"서울 강서구 하늘길 77 롯데백화점김포공항점 B2"
	},
	{
		"name":"롯데마트 서울역점",
		"address":"서울 중구 한강대로 405"
	},
	{
		"name":"롯데마트 송파점",
		"address":"서울 송파구 중대로 80 롯데마트송파점"
	},
	{
		"name":"롯데마트 월드타워점",
		"address":"서울 송파구 올림픽로 300 롯데월드몰 B2"
	},
	{
		"name":"롯데마트 은평점",
		"address":"서울 은평구 통일로 1050 롯데몰 은평점"
	},
	{
		"name":"롯데마트 중계점",
		"address":"서울 노원구 노원로 330 롯데마트중계점"
	},
	{
		"name":"롯데마트 청량리점",
		"address":"서울 동대문구 왕산로 214"
	},
	{
		"name":"이마트 가든파이브점",
		"address":"서울 송파구 충민로 10 가든파이브툴 지하1층"
	},
	{
		"name":"이마트 마포공덕점",
		"address":"서울 마포구 백범로 212 대우 월드마크마포"
	},
	{
		"name":"이마트 묵동점",
		"address":"서울 중랑구 동일로 932 묵동자이2단지"
	},
	{
		"name":"이마트 명일점",
		"address":"서울 강동구 고덕로 276 신세계이마트명일점"
	},
	{
		"name":"이마트 천호점",
		"address":"서울 강동구 천호대로 1017 이마트천호점"
	},
	{
		"name":"이마트 수색점",
		"address":"서울 은평구 수색로 217"
	},
	{
		"name":"이마트 신도림점",
		"address":"서울 구로구 새말로 97 테크노마트 B2층"
	},
	{
		"name":"이마트 영등포점",
		"address":"서울 영등포구 영중로 15 이마트영등포점"
	},
	{
		"name":"이마트 용산점",
		"address":"서울 용산구 한강대로23길 55 이마트용산점"
	},
	{
		"name":"이마트 은평점",
		"address":"서울 은평구 은평로 111 이마트은평점"
	},
	{
		"name":"이마트 자양점",
		"address":"서울 광진구 아차산로 272 이마트자양점"
	},
	{
		"name":"이마트 하월곡점",
		"address":"서울 성북구 종암로 167 이마트하월곡점"
	},
	{
		"name":"이마트 월계점",
		"address":"서울 노원구 마들로3길 15"
	},
	{
		"name":"이마트 청계천점",
		"address":"서울 중구 청계천로 400 이마트청계천점"
	},
	{
		"name":"이마트 창동점",
		"address":"서울 도봉구 노해로65길 4 창동E-MART"
	},
	{
		"name":"홈플러스 금천점",
		"address":"서울 금천구 시흥대로 391 삼성홈플러스"
	},
	{
		"name":"홈플러스 남현점",
		"address":"서울 관악구 과천대로 909 남현프라자"
	},
	{
		"name":"홈플러스 면목점",
		"address":"서울 중랑구 사가정로 332"
	},
	{
		"name":"홈플러스 목동점",
		"address":"서울 양천구 목동서로 170 홈플러스목동점"
	},
	{
		"name":"홈플러스 상봉점",
		"address":"서울 중랑구 망우로 353 홈플러스상봉점"
	},
	{
		"name":"홈플러스 시흥점",
		"address":"서울 금천구 시흥대로 201 홈플러스시흥점"
	},
	{
		"name":"홈플러스 신도림점",
		"address":"서울 구로구 경인로 661 신도림1차푸르지오"
	},
	{
		"name":"홈플러스 월곡점",
		"address":"서울 성북구 화랑로 76"
	},
	{
		"name":"홈플러스 합정점",
		"address":"서울 마포구 양화로 45 메세나폴리스"
	},
	{
		"name":"홈플러스 잠실점",
		"address":"서울 송파구 올림픽로35가길 16 홈플러스잠실점"
	},
	{
		"name":"가챠샵 이수역점",
		"address":"서울 동작구 동작대로27가길 46-5 1층"
	},
	{
		"name":"가챠샵 대학로점",
		"address":"서울 종로구 대학로 135 2층"
	},
	{
		"name":"코믹존 신림",
		"address":"서울 관악구 신림로 300 웅산빌딩 지하1층"
	},
	{
		"name":"영풍문고 여의도IFC몰점",
		"address":"서울 영등포구 국제금융로 10 IFC몰 L2층"
	},
	{
		"name":"애니메이트 용산점",
		"address":"서울 용산구 한강대로23길 55"
	},
	{
		"name":"애니메이트 홍대점",
		"address":"서울 마포구 양화로 188 AK& 홍대 5층"
	},
	{
		"name":"노리존 ",
		"address":"서울 노원구 상계로 65 지층 1호"
	},
	{
		"name":"롯데마트 검단점",
		"address":"인천 서구 원당대로 581"
	},
	{
		"name":"롯데마트 계양점",
		"address":"인천 계양구 장제로 822"
	},
	{
		"name":"롯데마트 삼산점",
		"address":"인천 부평구 길주로 623"
	},
	{
		"name":"롯데마트 송도점",
		"address":"인천 연수구 컨벤시아대로 177"
	},
	{
		"name":"롯데마트 청라점",
		"address":"인천 서구 청라커낼로 252"
	},
	{
		"name":"롯데마트 부평역점",
		"address":"인천 부평구 광장로 16"
	},
	{
		"name":"롯데마트 영종도점",
		"address":"인천 중구 흰바위로 51"
	},
	{
		"name":"이마트 검단점",
		"address":"인천 서구 서곶로 754"
	},
	{
		"name":"이마트 계양점",
		"address":"인천 계양구 봉오대로 785"
	},
	{
		"name":"이마트 연수점",
		"address":"인천 연수구 경원대로 184"
	},
	{
		"name":"홈플러스 간석점",
		"address":"인천 남동구 경원대로 971"
	},
	{
		"name":"홈플러스 계산점",
		"address":"인천 계양구 오조산공원로 14"
	},
	{
		"name":"홈플러스 구월점",
		"address":"인천 남동구 예술로 198"
	},
	{
		"name":"홈플러스 송도점",
		"address":"인천 연수구 송도국제대로 165"
	},
	{
		"name":"홈플러스 인천연수점",
		"address":"인천 연수구 청능대로 210"
	},
	{
		"name":"홈플러스 인천청라점",
		"address":"인천 서구 중봉대로 587"
	},
	{
		"name":"홈플러스 인하점",
		"address":"인천 미추홀구 소성로 6"
	},
	{
		"name":"가챠샵 차이나타운점",
		"address":"인천 중구 차이나타운로44번길 30"
	},
	{
		"name":"가챠샵 인천논현점",
		"address":"인천 남동구 논고개로123번길 35"
	},
	{
		"name":"롯데마트 김포한강점",
		"address":"경기 김포시 김포한강2로 41"
	},
	{
		"name":"롯데마트 덕소점",
		"address":"경기 남양주시 와부읍 월문천로 33 롯데마트 덕소점"
	},
	{
		"name":"롯데마트 동두천점",
		"address":"경기 동두천시 평화로2169번길 21"
	},
	{
		"name":"롯데마트 마석점",
		"address":"경기 남양주시 화도읍 경춘로 1992"
	},
	{
		"name":"롯데마트 수원점",
		"address":"경기 수원시 권선구 세화로 134 롯데마트수원점"
	},
	{
		"name":"롯데마트 시흥점",
		"address":"경기 시흥시 비둘기공원로 28"
	},
	{
		"name":"롯데마트 시흥배곧점",
		"address":"경기 시흥시 서울대학로278번길 67"
	},
	{
		"name":"롯데마트 안산점",
		"address":"경기 안산시 상록구 항가울로 422"
	},
	{
		"name":"롯데마트 안성점",
		"address":"경기 안성시 공도읍 서동대로 4478"
	},
	{
		"name":"롯데마트 의왕점",
		"address":"경기 의왕시 계원대학로 7 롯데마트의왕점"
	},
	{
		"name":"롯데마트 주엽점",
		"address":"경기 고양시 일산서구 중앙로 1496 문촌마을"
	},
	{
		"name":"롯데마트 평촌점",
		"address":"경기 안양시 동안구 시민대로 180 롯데백화점평촌점"
	},
	{
		"name":"롯데마트 이천점",
		"address":"경기 이천시 구만리로 191"
	},
	{
		"name":"롯데몰 수지점",
		"address":"경기 용인시 수지구 수지로 203"
	},
	{
		"name":"롯데몰 이천점",
		"address":"경기 이천시 호법면 프리미엄아울렛로 177-74"
	},
	{
		"name":"이마트 경기광주점",
		"address":"경기 광주시 광주대로 30 광주터미널 이프라자"
	},
	{
		"name":"이마트 과천점",
		"address":"경기 과천시 별양상가3로 11"
	},
	{
		"name":"이마트 광명소하점",
		"address":"경기 광명시 소하로 97"
	},
	{
		"name":"이마트 김포한강점",
		"address":"경기 김포시 김포한강7로 71 이마트 김포한강점"
	},
	{
		"name":"이마트 남양주점",
		"address":"경기 남양주시 늘을2로 27 E-MART"
	},
	{
		"name":"이마트 동백점",
		"address":"경기 용인시 기흥구 동백죽전대로 444 쥬네브썬월드빌딩"
	},
	{
		"name":"이마트 동탄점",
		"address":"경기 화성시 동탄중앙로 376 화성 동탄 E-Mart"
	},
	{
		"name":"이마트 별내점",
		"address":"경기 남양주시 순화궁로 167"
	},
	{
		"name":"이마트 보라점",
		"address":"경기 용인시 기흥구 한보라1로 92 보라지구E-MART"
	},
	{
		"name":"이마트 분당점",
		"address":"경기 성남시 분당구 불정로 134"
	},
	{
		"name":"이마트 산본점",
		"address":"경기 군포시 산본로 347 신세계산본점"
	},
	{
		"name":"이마트 서수원점",
		"address":"경기 수원시 권선구 수인로 291 서수원버스터미널"
	},
	{
		"name":"이마트 수원점",
		"address":"경기 수원시 권선구 경수대로 270 주차빌딩"
	},
	{
		"name":"이마트 수지점",
		"address":"경기 용인시 수지구 수지로 203 이마트수지점"
	},
	{
		"name":"이마트 안성점",
		"address":"경기 안성시 중앙로 246 안성E-MART"
	},
	{
		"name":"이마트 양주점",
		"address":"경기 양주시 평화로 1713 이마트"
	},
	{
		"name":"이마트 여주점",
		"address":"경기 여주시 세종로 151"
	},
	{
		"name":"이마트 용인점",
		"address":"경기 용인시 처인구 명지로 53 E마트"
	},
	{
		"name":"이마트 일산점",
		"address":"경기 고양시 일산동구 중앙로 1124 흰돌마을"
	},
	{
		"name":"이마트 죽전점",
		"address":"경기 용인시 수지구 포은대로 552 이마트죽전점"
	},
	{
		"name":"이마트 진접점",
		"address":"경기 남양주시 진접읍 금강로유연들1길 154 진접이마트"
	},
	{
		"name":"이마트 파주점",
		"address":"경기 파주시 당하길 10 이마트"
	},
	{
		"name":"이마트 평택점",
		"address":"경기 평택시 영신로 29 이마트"
	},
	{
		"name":"이마트 평촌점",
		"address":"경기 안양시 동안구 시민대로 300 이마트평촌점"
	},
	{
		"name":"이마트 포천점",
		"address":"경기 포천시 호국로 915"
	},
	{
		"name":"이마트 풍산점",
		"address":"경기 고양시 일산동구 무궁화로 237 이마트풍산점"
	},
	{
		"name":"이마트 하남점",
		"address":"경기 하남시 덕풍서로 70 하남풍산지구E-MART"
	},
	{
		"name":"이마트 화성봉담점",
		"address":"경기 화성시 봉담읍 효행로 278"
	},
	{
		"name":"이마트 흥덕점",
		"address":"경기 용인시 기흥구 흥덕중앙로 60"
	},
	{
		"name":"이마트 부천점",
		"address":"경기 부천시 부천로 1 부천역사 쇼핑몰"
	},
	{
		"name":"이마트 의정부점",
		"address":"경기 의정부시 민락로 210 이마트"
	},
	{
		"name":"이마트 의왕점",
		"address":"경기 의왕시 경수대로 262 지하1~2층"
	},
	{
		"name":"스타필드 토이킹덤 하남점",
		"address":"경기 하남시 미사대로 750 스타필드 하남"
	},
	{
		"name":"스타필드 토이킹덤 안성점",
		"address":"경기 안성시 공도읍 서동대로 3930-39 스타필드 안성점 2층"
	},
	{
		"name":"홈플러스 경기하남점",
		"address":"경기 하남시 하남대로 747"
	},
	{
		"name":"홈플러스 고양터미널점",
		"address":"경기 고양시 일산동구 중앙로 1036 고양터미널점 B2"
	},
	{
		"name":"홈플러스 김포풍무점",
		"address":"경기 김포시 풍무로 167"
	},
	{
		"name":"홈플러스 북수원점",
		"address":"경기 수원시 장안구 경수대로 930"
	},
	{
		"name":"홈플러스 안산고잔점",
		"address":"경기 안산시 단원구 광덕대로 175 홈플러스"
	},
	{
		"name":"홈플러스 안산선부점",
		"address":"경기 안산시 단원구 삼일로 316 홈플러스"
	},
	{
		"name":"홈플러스 시흥점",
		"address":"서울 금천구 시흥대로 201 홈플러스시흥점"
	},
	{
		"name":"홈플러스 킨텍스점",
		"address":"경기 고양시 일산서구 호수로 817"
	},
	{
		"name":"홈플러스 파주문산점",
		"address":"경기 파주시 문산읍 방촌로 1759"
	},
	{
		"name":"홈플러스 의정부점",
		"address":"경기 의정부시 청사로 38"
	},
	{
		"name":"홈플러스 송탄점",
		"address":"경기 평택시 경기대로 1103 홈플러스"
	},
	{
		"name":"홈플러스 김포점",
		"address":"경기 김포시 중봉로 14"
	},
	{
		"name":"홈플러스 부천소사점",
		"address":"경기 부천시 경인로 532"
	},
	{
		"name":"홈플러스 포천송우점",
		"address":"경기 포천시 소흘읍 솔모루로 9"
	},
	{
		"name":"홈플러스 시화점",
		"address":"경기 시흥시 희망공원로 269 홈플러스시화점"
	},
	{
		"name":"홈플러스 진접점",
		"address":"경기 남양주시 진접읍 금강로 1447 홈플러스"
	},
	{
		"name":"홈플러스 화성향남점",
		"address":"경기 화성시 향남읍 향남로 402 홈플러스 화성향남점"
	},
	{
		"name":"카페드봉봉 ",
		"address":"경기도 부천시 부천로3번길 45"
	},
	{
		"name":"드림디포 성남직영점",
		"address":"경기 성남시 수정구 수정로 150"
	},
	{
		"name":"뉴코아아울렛 동수원점",
		"address":"경기 수원시 팔달구 인계로 154"
	},
	{
		"name":"우리홈마트 경기광주점",
		"address":"경기 광주시 순암로 169"
	},
	{
		"name":"2001아울렛 안양점",
		"address":"경기 안양시 만안구 안양로 275 2001아울렛"
	},
	{
		"name":"토이플러스 동탄점",
		"address":"경기 오산시 문시로 109-12"
	},
	{
		"name":"롯데프리미엄아울렛 기흥점",
		"address":"경기 용인시 기흥구 신고매로 124"
	},
	{
		"name":"영풍문고 분당서현점",
		"address":"경기 성남시 분당구 분당로 55 분당 퍼스트타워 지하 1층"
	},
	{
		"name":"영풍문고 신세계의정부점",
		"address":"경기 의정부시 평화로 525 신세계백화점의정부점 1F"
	},
	{
		"name":"아이토빅 파주",
		"address":"경기 파주시 교하로 961-16"
	},
	{
		"name":"토이플러스 판교점",
		"address":"경기 성남시 수정구 창업로 17 C2동 B107호"
	},
	{
		"name":"엘마트 구리점",
		"address":"경기 구리시 동구릉로136번길 57 구리유통종합상가"
	},
	{
		"name":"토이플러스 부천옥길점",
		"address":"경기 부천시 옥길로 1"
	},
	{
		"name":"롯데마트 광복점",
		"address":"부산 중구 중앙대로 2"
	},
	{
		"name":"롯데마트 동래점",
		"address":"부산 동래구 중앙대로 1393"
	},
	{
		"name":"롯데마트 사상점",
		"address":"부산 사상구 낙동대로 733"
	},
	{
		"name":"롯데마트 화명점",
		"address":"부산 북구 화명대로 47"
	},
	{
		"name":"롯데아울렛 동부산점",
		"address":"부산 기장군 기장읍 기장해안로 147"
	},
	{
		"name":"롯데백화점 광복점",
		"address":"부산 중구 중앙대로 2"
	},
	{
		"name":"이마트 금정점",
		"address":"부산 금정구 중앙대로1841번길 24"
	},
	{
		"name":"이마트 연제점",
		"address":"부산 연제구 연수로 89"
	},
	{
		"name":"신세계프리미엄아울렛 부산점",
		"address":"부산 기장군 장안읍 정관로 1133"
	},
	{
		"name":"홈플러스 가야점",
		"address":"부산 부산진구 가야대로 506"
	},
	{
		"name":"홈플러스 부산연산점",
		"address":"부산 연제구 반송로 88"
	},
	{
		"name":"홈플러스 부산정관점",
		"address":"부산 기장군 정관읍 정관5로 50"
	},
	{
		"name":"홈플러스 센텀시티점",
		"address":"부산 해운대구 센텀동로 6"
	},
	{
		"name":"홈플러스 아시아드점",
		"address":"부산 연제구 종합운동장로 7"
	},
	{
		"name":"홈플러스 해운대점",
		"address":"부산 해운대구 해운대해변로 140"
	},
	{
		"name":"홈플러스 동래점",
		"address":"부산 동래구 중앙대로 1523"
	},
	{
		"name":"홈플러스 서면점",
		"address":"부산 부산진구 동천로 4"
	},
	{
		"name":"홈플러스 부산반여점",
		"address":"부산 해운대구 선수촌로21번길 37"
	},
	{
		"name":"가챠샵 경성대점",
		"address":"부산 남구 수영로298번길 10"
	},
	{
		"name":"가챠샵 서면점",
		"address":"부산 부산진구 중앙대로702번길 23"
	},
	{
		"name":"하나로마트 부산점",
		"address":"부산 북구 금곡대로 469"
	},
	{
		"name":"더케이토이박스 ",
		"address":"부산 부산진구 중앙대로 672"
	},
	{
		"name":"명지대왕게임랜드 ",
		"address":"부산 강서구 명지오션시티4로 68"
	},
	{
		"name":"NC백화점 해운대점",
		"address":"부산 해운대구 해운대로 813"
	},
	{
		"name":"NC백화점 부산대점",
		"address":"부산 금정구 부산대학로63번길 2"
	},
	{
		"name":"W스퀘어 모던토이 용호점",
		"address":"부산 남구 분포로 145"
	},
	{
		"name":"현대백화점 부산점",
		"address":"부산 동구 범일로 125"
	},
	{
		"name":"이마트 세종점",
		"address":"세종특별자치시 금송로 687"
	},
	{
		"name":"영풍문고 세종점",
		"address":"세종특별자치시 갈매로 353"
	},
	{
		"name":"홈플러스 세종점",
		"address":"세종특별자치시 절재로 154"
	},
	{
		"name":"롯데마트 서대전점",
		"address":"대전 유성구 유성대로 26-37"
	},
	{
		"name":"이마트 대전터미널점",
		"address":"대전 동구 동서대로 1689"
	},
	{
		"name":"이마트 둔산점",
		"address":"대전 서구 둔산북로 41"
	},
	{
		"name":"더벙커게임존 대전",
		"address":"대전 유성구 대학로 34 노블레스타워 지하1층"
	},
	{
		"name":"가오스게임장 대전",
		"address":"대전 중구 중앙로164번길 22-12"
	},
	{
		"name":"이마트 만촌점",
		"address":"대구 수성구 동원로 136"
	},
	{
		"name":"이마트 반야월점",
		"address":"대구 동구 안심로 389-2"
	},
	{
		"name":"이마트 월배점",
		"address":"대구 달서구 진천로 92"
	},
	{
		"name":"이마트 칠성점",
		"address":"대구 북구 침산로 93"
	},
	{
		"name":"홈플러스 상인점",
		"address":"대구 달서구 월배로 183"
	},
	{
		"name":"홈플러스 내당점",
		"address":"대구 서구 달구벌대로 1821"
	},
	{
		"name":"코믹프라자 대구",
		"address":"대구 중구 경상감영길 184 현대빌딩 2층"
	},
	{
		"name":"스타디움몰4D라이더 ",
		"address":"대구 수성구 유니버시아드로 140"
	},
	{
		"name":"롯데마트 진장점",
		"address":"울산 북구 진장유통로 64"
	},
	{
		"name":"이마트 울산점",
		"address":"울산 남구 남중로 48"
	},
	{
		"name":"가챠샵 울산성남점",
		"address":"울산 중구 젊음의 거리 76"
	},
	{
		"name":"코믹프라자 울산점",
		"address":"울산 남구 수암로 10-10 2층"
	},
	{
		"name":"롯데마트 상무점",
		"address":"광주 서구 시청로 40"
	},
	{
		"name":"롯데마트 수완점",
		"address":"광주 광산구 장신로 98"
	},
	{
		"name":"롯데마트 첨단점",
		"address":"광주 광산구 첨단강변로99번길 22"
	},
	{
		"name":"이마트 광주점",
		"address":"광주 서구 죽봉대로 61"
	},
	{
		"name":"이마트 봉선점",
		"address":"광주 남구 봉선로 198"
	},
	{
		"name":"홈플러스 광주하남점",
		"address":"광주 광산구 용아로 390"
	},
	{
		"name":"가챠샵 광주수완점",
		"address":"광주시 광산구 임방울대로 358번길 28"
	},
	{
		"name":"롯데마트 제주점",
		"address":"제주특별자치도 제주시 연북로 1"
	},
	{
		"name":"이마트 제주점",
		"address":"제주특별자치도 제주시 탑동로 38"
	},
	{
		"name":"토이마켓 제주점",
		"address":"제주특별자치도 제주시 동문로 192"
	},
	{
		"name":"해비치리조트 제주",
		"address":"제주특별자치도 서귀포시 표선면 민속해안로 537"
	},
	{
		"name":"롯데마트 당진점",
		"address":"충남 당진시 정안로 20"
	},
	{
		"name":"롯데마트 서산점",
		"address":"충남 서산시 충의로 27"
	},
	{
		"name":"롯데마트 성정점",
		"address":"충남 천안시 서북구 성정두정로 1"
	},
	{
		"name":"롯데마트 아산터미널점",
		"address":"충남 아산시 번영로 225"
	},
	{
		"name":"롯데마트 홍성점",
		"address":"충남 홍성군 홍성읍 조양로247번길 9"
	},
	{
		"name":"이마트 보령점",
		"address":"충남 보령시 해안로 25"
	},
	{
		"name":"이마트 서산점",
		"address":"충남 서산시 서해로 3685"
	},
	{
		"name":"이마트 아산점",
		"address":"충남 아산시 온천대로 1678"
	},
	{
		"name":"이마트 천안서북점",
		"address":"충남 천안시 서북구 삼성대로 20"
	},
	{
		"name":"이마트 천안터미널점",
		"address":"충남 천안시 동남구 만남로 43"
	},
	{
		"name":"이마트 펜타포트점",
		"address":"충남 천안시 서북구 공원로 196"
	},
	{
		"name":"홈플러스 천안신방점",
		"address":"충남 천안시 동남구 신촌1길 23"
	},
	{
		"name":"홈플러스 보령점",
		"address":"충남 보령시 명암1길 17"
	},
	{
		"name":"홈플러스 천안점",
		"address":"충남 천안시 동남구 천안대로 574"
	},
	{
		"name":"가챠샵 공주점",
		"address":"충남 공주시 공주대학로 81"
	},
	{
		"name":"롯데마트 서청주점",
		"address":"충북 청주시 흥덕구 2순환로 1004"
	},
	{
		"name":"롯데마트 상당점",
		"address":"충북 청주시 상당구 용암북로160번길 60"
	},
	{
		"name":"롯데마트 충주점",
		"address":"충북 충주시 봉계1길 49"
	},
	{
		"name":"롯데마트 제천점",
		"address":"충북 제천시 용두대로 111"
	},
	{
		"name":"이마트 제천점",
		"address":"충북 제천시 장평천로 11"
	},
	{
		"name":"이마트 충주점",
		"address":"충북 충주시 중원대로 3420"
	},
	{
		"name":"이마트 청주점",
		"address":"충북 청주시 서원구 청남로 1853"
	},
	{
		"name":"홈플러스 오창점",
		"address":"충북 청주시 청원구 오창읍 중심상업1로 8-11"
	},
	{
		"name":"토마토 청주점",
		"address":"충북 청주시 상당구 상당로81번길 63"
	},
	{
		"name":"오창휴게소 하행선",
		"address":"충북 청주시 청원구 오창읍 중부고속도로 21"
	},
	{
		"name":"롯데마트 석사점",
		"address":"강원 춘천시 세실로 108"
	},
	{
		"name":"롯데마트 춘천점",
		"address":"강원 춘천시 방송길 84"
	},
	{
		"name":"롯데마트 원주점",
		"address":"강원 원주시 봉화로 1"
	},
	{
		"name":"이마트 강릉점",
		"address":"강원 강릉시 경강로 2398-10"
	},
	{
		"name":"이마트 동해점",
		"address":"강원 동해시 천곡로 100"
	},
	{
		"name":"이마트 속초점",
		"address":"강원 속초시 설악금강대교로 12"
	},
	{
		"name":"이마트 원주점",
		"address":"강원 원주시 북원로 1928"
	},
	{
		"name":"이마트 춘천점",
		"address":"강원 춘천시 경춘로 2353"
	},
	{
		"name":"이마트 태백점",
		"address":"강원 태백시 굴거랑길 4"
	},
	{
		"name":"홈플러스 원주점",
		"address":"강원 원주시 치악로 1489"
	},
	{
		"name":"롯데마트 군산점",
		"address":"전북 군산시 수송로 185"
	},
	{
		"name":"롯데마트 익산점",
		"address":"전북 익산시 무왕로 1053"
	},
	{
		"name":"롯데마트 정읍점",
		"address":"전북 정읍시 벚꽃로 85"
	},
	{
		"name":"이마트 군산점",
		"address":"전북 군산시 구암3.1로 137"
	},
	{
		"name":"이마트 남원점",
		"address":"전북 남원시 남문로 385-16"
	},
	{
		"name":"이마트 전주점",
		"address":"전북 전주시 완산구 당산로 111"
	},
	{
		"name":"이마트 에코시티점",
		"address":"전북 전주시 덕진구 세병서로 9"
	},
	{
		"name":"홈플러스 김제점",
		"address":"전북 김제시 금성로 114"
	},
	{
		"name":"홈플러스 전주효자점",
		"address":"전북 전주시 완산구 용머리로 31"
	},
	{
		"name":"가챠샵 전주점",
		"address":"전북 전주시 완산구 팔달로 201-6"
	},
	{
		"name":"롯데마트 김해점",
		"address":"경남 김해시 김해대로 2330"
	},
	{
		"name":"롯데마트 삼계점",
		"address":"경남 창원시 마산회원구 내서읍 경남대로 927"
	},
	{
		"name":"롯데마트 시티세븐점",
		"address":"경남 창원시 성산구 원이대로 320"
	},
	{
		"name":"롯데마트 마산점",
		"address":"경남 창원시 마산합포구 신마산시장길 33"
	},
	{
		"name":"롯데마트 양덕점",
		"address":"경남 창원시 마산회원구 삼호로 80"
	},
	{
		"name":"롯데마트 장유점",
		"address":"경남 김해시 번화1로56번길 15"
	},
	{
		"name":"롯데마트 진해점",
		"address":"경남 창원시 진해구 진해대로 762"
	},
	{
		"name":"롯데마트 진주점",
		"address":"경남 진주시 동진로 440"
	},
	{
		"name":"롯데마트 통영점",
		"address":"경남 통영시 무전대로 65"
	},
	{
		"name":"이마트 김해점",
		"address":"경남 김해시 김해대로 2232"
	},
	{
		"name":"이마트 마산점",
		"address":"경남 창원시 마산합포구 서성로 3"
	},
	{
		"name":"이마트 사천점",
		"address":"경남 사천시 삼천포대교로 591"
	},
	{
		"name":"이마트 창원점",
		"address":"경남 창원시 성산구 원이대로 608"
	},
	{
		"name":"이마트 통영점",
		"address":"경남 통영시 광도면 죽림4로 9"
	},
	{
		"name":"홈플러스 진해점",
		"address":"경남 창원시 진해구 충장로 356"
	},
	{
		"name":"홈플러스 삼천포점",
		"address":"경남 사천시 중앙로 165"
	},
	{
		"name":"하나로마트 거제축산점",
		"address":"경남 거제시 옥포로27길 6"
	},
	{
		"name":"하나로마트 양산점",
		"address":"경남 양산시 물금읍 증산역로 177"
	},
	{
		"name":"SCH서울아동병원 ",
		"address":"경남 통영시 중앙로 334-1"
	},
	{
		"name":"롯데마트 남악점",
		"address":"전남 무안군 삼향읍 남악로162번길 80"
	},
	{
		"name":"롯데마트 목포점",
		"address":"전남 목포시 원형서로 15"
	},
	{
		"name":"롯데마트 여천점",
		"address":"전남 여수시 무선로 187"
	},
	{
		"name":"롯데마트 나주점",
		"address":"전남 나주시 내동길 15"
	},
	{
		"name":"이마트 목포점",
		"address":"전남 목포시 옥암로 138"
	},
	{
		"name":"이마트 여수점",
		"address":"전남 여수시 좌수영로 277"
	},
	{
		"name":"홈플러스 순천풍덕점",
		"address":"전남 순천시 팔마로 222"
	},
	{
		"name":"홈플러스 광양점",
		"address":"전남 광양시 항만11로 70"
	},
	{
		"name":"리브로 광양점",
		"address":"전남 광양시 광양읍 순광로 466"
	},
]