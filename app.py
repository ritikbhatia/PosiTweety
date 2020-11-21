import json
import tweepy
import wikipedia
import requests
import re

from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
app = Flask(__name__)
app.config["DEBUG"] = True
CORS(app, support_credentials=True)

# setup twitter api
fileObject = open("config.json","r")
config = json.load(fileObject)
auth = tweepy.OAuthHandler(config["consumer_key"], config["consumer_secret"])
auth.set_access_token(config["access_token"], config["access_token_secret"])
api = tweepy.API(auth)

@app.route("/tweets")
def getTweets():
    topic = request.args.get("topic", default = "", type = str)
    tweets = [str(tweet.id) for tweet in tweepy.Cursor(api.search, q = topic, result_type="popular").items(5)]
    return jsonify({"tweets": tweets})

@app.route("/about")
def getInfo():
    try:
        topic = request.args.get("topic", default = "", type = str)
        return jsonify({"summary": str(wikipedia.summary(topic))})
    except:
        return "No information found!"

@app.route("/media")
def getMedia():
    topic = request.args.get("topic", default = "", type = str)
    tweets = [tweet for tweet in tweepy.Cursor(api.search, q = topic+" filter:media", result_type="popular").items(10)]
    images = []
    for tweet in tweets:
        if 'media' in tweet.entities:
            images.append(tweet.entities['media'][0]['media_url'])
    
    return jsonify({"image_urls": images})

@app.route("/resources")
def getResources():
    topic = request.args.get("topic", default = "", type = str)
    tweets = [tweet for tweet in tweepy.Cursor(api.search, q = topic+' filter:links', result_type="popular").items(100)]
    resources = []
    for tweet in tweets:
        urls = tweet.entities['urls']
        for component in urls:
            url = component['expanded_url']
            if 'twitter' not in url:
                resources.append(url)
    
    return jsonify({"resources": resources})

# @app.route("/geojson")
# def getgeoJson():
#     # first extract tweets
#     topic = request.args.get("topic", default = "", type = str)
#     tweets = [tweet for tweet in tweepy.Cursor(api.search, q = topic, result_type="popular").items(10000)]

#     countries = {}

#     for tweet in tweets:
#         location = tweet.user.location.split(',')
#         country = location[len(location)-1].strip()
#         if country not in countries:
#             countries[country] = 1
#         else:
#             countries[country] += 1
    
#     print(countries)
    
#     return jsonify(countries)