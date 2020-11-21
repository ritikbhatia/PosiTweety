# from _typeshed import NoneType
from bs4 import BeautifulSoup
import requests 
import glob
import json

topics = ['Ageing','AIDS','helpchildren','climatechange','decolonization','democracy','equality','health','humanrights','hunger','internationallaw','migration','nonprofit','nuclearenergy','population','poverty','refugees','socialgood','sustainability','worldpeace']

url = "http://best-hashtags.com/hashtag/"
topicJson = {}
for topic in topics:
    URL = url+topic+'/'


    # URL = "http://best-hashtags.com/hashtag/health/"
    r = requests.get(URL) 
    # print(r.content) 

    soup = BeautifulSoup(r.content, 'html5lib') # If this line causes an error, run 'pip install html5lib' or install html5lib 
    # print(soup.prettify()) 

    tags = soup.findAll('div',attrs={'class':'tag-box tag-box-v3 margin-bottom-40'})
    p1list = []
    p2list = []
    for tag in tags:
        p1 = tag.find('p1')
        p1str = str(p1)
        p1str = p1str.split(' ')
        p1str = p1str[1:]
        for i in range(len(p1str)):
            if(i==len(p1str)-1):
                break
            # print(p1str[i])
            p1list.append(p1str[i])

        p2 = tag.find('p2')
        p2str = str(p2)
        p2str = p2str.split(' ')
        p2str = p2str[1:]
        for i in range(len(p2str)):
            if(i==len(p2str)-1):
                break
            # print(p2str[i])
            p2list.append(p2str[i])
        # print(p1str)
        # print(p2)

    # print(p1list)
    # print(p2list)

    statDict = {}
    stats = soup.find('div',attrs={'class':'progression'})
    # print(stats)
    statlist = stats.findAll('h3')
    for stat in statlist:
        mytext = stat.text
        # print(mytext)
        mytext = mytext.split(' ')
        myhash = mytext[0]
        mynum = int(mytext[2][:-1])
        statDict[myhash] = mynum

    # print(statDict)

    relatedtable = soup.find('table', attrs={'class':'table'})
    # print(relatedtable)
    if relatedtable is not None:
        relatedtable = relatedtable.find('tbody')
        relatedtable = relatedtable.findAll('tr')
        print(relatedtable)
        relatedDict = {}
        for row in relatedtable:
            # print(row)
            cols = row.findAll('td')
            # print(cols)
            hash = cols[1].text
            num = cols[2].text
            num = int(num.replace(',','')) 
            print(hash)
            print(num)
            relatedDict[hash] = num
            print('#################################')
    else:
        relatedDict = {}

    jsondict = {"p1list":p1list,"p2list":p2list,"statDict":statDict,"relatedDict":relatedDict}
    print(jsondict)

    topicJson[topic] = jsondict

with open('hashData.json', 'w') as fp:
    json.dump(topicJson, fp,sort_keys=True, indent=1)
