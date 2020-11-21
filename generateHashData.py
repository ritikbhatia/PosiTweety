import glob
import json
import random

myFilesPaths = glob.glob(r'./hashtags/*.txt')
print(myFilesPaths)
group=1
nodelist = []
linkslist = []
for myfile in myFilesPaths:
    with open(myfile) as f:
        for line in f:
            tags = line.strip().split(' ')
            for t in tags:
                tdict = {"id":t,"group":group}
                nodelist.append(tdict)
    group +=1

for node in nodelist:
    source = node["id"]
    target = random.choice(nodelist)
    while(target!=target):
        target = random.choice(nodelist)
    target = target["id"]
    value = random.randint(1,15)
    linkslist.append({"source":source,"target":target,"value":value})


# print(nodelist)
myjson = {"nodes":nodelist,"links":linkslist}
with open('hashMap.json', 'w') as fp:
    json.dump(myjson, fp,sort_keys=True, indent=2)