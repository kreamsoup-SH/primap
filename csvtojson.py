import csv
import json

seoul = "locations_Seoul_addressonly"
incheon = "locations_Incheon_addressonly"
gyeonggi = "locations_Gyeonggi_addressonly"
busan = "locations_Busan_addressonly"

filenames=[seoul,incheon]

jsfile = open('./locations.js','w',encoding="UTF-8")
jsfile.write("var locations = [\n")
for i, filename in enumerate(filenames):
    csvfile = open("./data/csv/addressonly/"+filename+".csv", 'r', encoding="UTF-8")
    for i, line in enumerate(csvfile):
        jsfile.write("\t{\n\t\t\"address\" : \""+line.strip()+"\",\n")
        jsfile.write("\t},\n")
    csvfile.close()
jsfile.write("]")

jsfile.close()