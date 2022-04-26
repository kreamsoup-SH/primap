seoul =     "Seoul"
incheon =   "Incheon"
gyeonggi =  "Gyeonggi"
busan =     "Busan"
sejong =    "Sejong"
daejeon =   "Daejeon"
daegu =     "Daegu"
ulsan =     "Ulsan"
gwangju =   "Gwangju"
jeju =      "Jeju"
chungnam =  "Chungnam"
chungbuk =  "Chungbuk"
gangwon =   "Gangwon"
jeonbuk =   "Jeonbuk"
gyeongnam = "Gyeongnam"
jeonnam =   "Jeonnam"

filenames=[ seoul,incheon,gyeonggi,busan,sejong,daejeon,daegu,ulsan,gwangju,jeju,
            chungnam,chungbuk,gangwon,jeonbuk,gyeongnam,jeonnam]
# filetemp=[gangwon]
target=open("./data/locations.js", 'w', encoding="UTF-8")
target.write("var locations = [\n")
for i, city in enumerate(filenames):
    try:
        f=open("./data/csv/address_minimal/locations_"+city+".csv", 'r',encoding="UTF-8")
        for line in f:
            line=line.strip()
            # print(line)
            sparr=line.split('\t')
            sparr.pop(0)
            sparr[0]=sparr[0]+' '+sparr[1]
            sparr.pop(1)
            if sparr[1] == "주소":continue
            print(sparr)
            target.write("\t{\n")
            target.write("\t\t\"name\":\""+sparr[0]+"\",\n")
            target.write("\t\t\"address\":\""+sparr[1]+"\"\n")
            target.write("\t},\n")
        f.close()
    except:
        print("no file")
target.write("]")
target.close()