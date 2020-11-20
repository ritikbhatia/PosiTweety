import json
import tweepy
import pandas as pd
from flask import Flask


app = Flask(__name__)

# setup twitter api
fileObject = open("config.json","r")
config = json.load(fileObject)
auth = tweepy.OAuthHandler(config["consumer_key"], config["consumer_secret"])
auth.set_access_token(config["access_token"], config["access_token_secret"])
api = tweepy.API(auth)


# Define the search term and the date_since date as variables
search_words = "#wildfires"+" -filter:retweets"



for tweet in tweepy.Cursor(api.search, q=search_words,result_type="popular",).items(5):

    print ("Name:", tweet.author.name.encode('utf8'))
    print ("Screen-name:", tweet.author.screen_name.encode('utf8'))
    print ("Tweet created:", tweet.created_at)
    print ("Tweet:", tweet.text.encode('utf8'))
    print ("Retweeted:", tweet.retweeted)
    print ("Favourited:", tweet.favorited)
    print ("Location:", tweet.user.location.encode('utf8'))
    print ("Time-zone:", tweet.user.time_zone)
    print ("Geo:", tweet.geo)
    print ("//////////////////")
