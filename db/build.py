import csv
import glob
import ntpath
import operator
import pickle
from pymongo import MongoClient

#### from csv build dictionary that is the basis of database
def build_dict():

     with open('Website Formation.csv', 'rb') as csvfile:
          csvreader = csv.reader(csvfile, dialect=csv.excel_tab,
                    delimiter=',', quotechar='"')

          linesDict = dict()
          line = dict()
               
          for i, row in enumerate(csvreader):
               for j, col in enumerate(row):
                    if i == 0:
                         line[j] = col
                         linesDict[line[j]] = dict()
                         linesDict[line[j]]['Line Number'] = col
                         linesDict[line[j]]['Annotations'] = []
                    else:
                         if col != '':
                              linesDict[line[j]]['Annotations'].append(col)
     print 'Initialized Dict from CSV'
     return linesDict

def to_dict_add_image_paths(dictionary):
     for key in dictionary:
          old_tif_path = glob.glob('../app/assets/images/*%s*.tif' % key)
          old_jpg_path = glob.glob('../app/assets/images/*%s*.jpg' % key) 
          if old_tif_path and old_jpg_path:
               new_tif_path = 'images/%s' % ntpath.basename(old_tif_path[0])
               new_jpg_path = 'images/%s' % ntpath.basename(old_jpg_path[0])
               dictionary[key]['TIF'] = new_tif_path 
               dictionary[key]['JPEG'] = new_jpg_path 
          else:
               print 'Add Image Path Error'
               return

     print 'Added Image Srcs to Dict'

#### build dictionariy
#lines_dict = build_dict()
#to_dict_add_image_paths(lines_dict)

#### export dictionary
#print 'Printing Dict\n', lines_dict 
#pickle.dump(lines_dict, open("linesDict.p", "wb"))

#### import dictionary
lines_dict = pickle.load(open("./linesDict.p", "rb"))

#### mongoDB operations
def connect_to_db(database, collection):

     client = MongoClient()
     db = client[database] 
     db.drop_collection(collection)
     return db[collection]

def add_to_db(collection, dictionary):
     insertions = []
     for key in dictionary:
          insertions.append(collection.insert_one(dictionary[key]))
     return insertions

def update_db(collection, dictionary):
     updates = []
     for key in dictionary:
          updates.append(collection.find_and_modify(
               query={'Line Number': dictionary[key]['Line Number']},
               update={'$set': {'TIF': dictionary[key]['TIF'], 
                              'JPEG': dictionary[key]['JPEG']}}, 
               upsert='false'))
    # print [update for update in updates]

#### connect and add to/update db
coll = connect_to_db('enhancertrap', 'dataset')
add_to_db(coll, lines_dict)
#update_db(coll, lines_dict)

print [x for x in coll.find()]

