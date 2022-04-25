import csv
import json

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

jsfile = open('./locations.js','w',encoding="UTF-8")
jsfile.write("var locations = [\n")
for i, filename in enumerate(filenames):
    csvfile = open("./data/csv/addressonly/locations_"+filename+"_addressonly.csv", 'r', encoding="UTF-8")
    for i, line in enumerate(csvfile):
        jsfile.write("\t{\n\t\t\"address\" : \""+line.strip()+"\",\n")
        jsfile.write("\t},\n")
    csvfile.close()
jsfile.write("]")
jsfile.close()