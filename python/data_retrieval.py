from pymongo import MongoClient
import pandas as pd


client = MongoClient('mongodb+srv://Sushrut:sushrut123@sushutdabholkar.ck34njj.mongodb.net/SMART_WASTE')
db = client['SMART_WASTE']
collection = db['samples']


data = list(collection.find())
df = pd.DataFrame(data)


df = df.drop(columns=['_id'])


df['timestamp'] = pd.to_datetime(df['timestamp'])
