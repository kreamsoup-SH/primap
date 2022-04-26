import csv

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
counter=0
for i, filename in enumerate(filenames):
    csvfile = open("./data/csv/addressonly/locations_"+filename+"_addressonly.csv", 'r', encoding="UTF-8")
    for i, line in enumerate(csvfile):
        jsfile.write("\t\""+line.strip()+"\",\n")
        counter+=1
    csvfile.close()
jsfile.write("]")
jsfile.close()
print("total address number : ",counter+1)