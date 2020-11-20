import json
import tweepy

from flask import Flask
app = Flask(__name__)

# setup twitter api
fileObject = open("config.json","r")
config = json.load(fileObject)
auth = tweepy.OAuthHandler(config["consumer_key"], config["consumer_secret"])
auth.set_access_token(config["access_token"], config["access_token_secret"])
api = tweepy.API(auth)

public_tweets = api.home_timeline()
for tweet in public_tweets:
    print(tweet.text)