#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Aug  4 12:27:50 2022

@author: jordansiegel
"""

import os
import pandas as pd
import itertools
import numpy as np
import random
from PIL import Image

#make csv into data frame
qualtrics = pd.read_csv('qualtrics_data_8.4.csv')

#remove uneeded rows from data frame
qualtrics = qualtrics.drop([0,1])

#reset index numbers
qualtrics = qualtrics.reset_index()

#setcurrentworking directory to a variable
expdir = os.getcwd()
#make new folders for each participant and then a folder in each new folder
for i in range(0,len(qualtrics)):
    subj_id = qualtrics['ResponseId'][i]
    subj_dir = '%s/data/%s' % (expdir, subj_id)
    if not os.path.exists (subj_dir):
        os.makedirs(subj_dir)
    image_dir = '%s/%s_Images' % (subj_dir,subj_id) 
    if not os.path.exists (image_dir):
        os.makedirs(image_dir)
#%%
import os
import shutil
#creates variables to take files out of folders,move them to a different folder, and delete the original folders
folder = expdir + '/participant_images/'
subfolders = [f.path for f in os.scandir(folder) if f.is_dir()]
sub_folder = expdir + '/data/%s/%s_Images' 
#exceuting moving files from subfolders to a different folder and then deleting the old subfolders
for sub in subfolders:
    for f in os.listdir(sub):
        src = os.path.join(sub, f)
        dst = os.path.join(folder, f)
        shutil.move(src, dst)
for sub in subfolders:
        shutil.rmtree(sub)
for image in os.listdir(folder):
    for sub in range(0,len(qualtrics)):
        subj = (qualtrics['ResponseId'][sub])
        if image.startswith(subj):
            src = os.path.join(folder , image)
            dst = os.path.join(sub_folder %(subj,subj),image)
            shutil.move(src, dst)
#%%
# count increase by 1 in each iteration
# iterate all files from a directory
participantimagefolder = expdir + '/data/' 
count =1 
for p in os.listdir(participantimagefolder):
    if p.startswith('R_'):
        count = 1
        for photo in os.listdir(sub_folder %(p,p)):
            if photo.endswith ('.jpg') or photo.endswith('.jpeg') or photo.endswith('.png'):
                # Construct old file name
                source = sub_folder%(p,p) + '/' + photo
                # Adding the count to the new file name and extension
                file_name, file_extension = os.path.splitext(photo)
                destination = sub_folder %(p,p) + '/' + p + "_Image_" + str(count) + file_extension
                # Renaming the file
                os.rename(source, destination)
                count += 1
#%%
imagedir = sub_folder %(p,p) +'/'
sociallevel = ["Rej", "Acc", "Neutral"]
partnerlist = ['Charlie', 'Sam', 'Riley']
photolist = os.listdir(imagedir)
photolist =[value for value in photolist if not value.endswith('.DS_Store')]
photolist = [imagedir + x for x in photolist]
condition = ''
partner = ''
feedback = ''
condition_selected = random.sample(sociallevel,3)
partner_selected = random.sample(partnerlist,3)
block = 0 #before experiment
nTrials = 30
alltrials = pd.DataFrame(columns=['TrialNumber','Partner','Condition','Photos','Feedback'])
alltrials['Partner'] = ''
alltrials['Feedback'] = ''
alltrials['Condition']= ''
alltrials['Photos'] = ''
for i in range(0,3):
    if condition_selected[i] == 'Rej':
        pDislike = .7
        pLike = .3
        rej = pd.DataFrame(columns=['Partner','Condition','Photos','Feedback'])
        partner = partner_selected[i]
        condition = condition_selected[i]
        blocklist = ['did not like'] * int(nTrials * pDislike) + ['liked'] * int(nTrials * pLike)
        random.shuffle(blocklist)
        feedback = random.sample(blocklist,30)
        photo_selected = random.sample(photolist,30)
        rej['Feedback']=feedback
        rej['Partner']=partner
        rej['Condition']=condition
        rej['Photos']= photo_selected
        alltrials = pd.concat([alltrials, rej], ignore_index=True)
    elif condition_selected[i] == 'Acc':
        pDislike = .3
        pLike = .7
        acc = pd.DataFrame(columns=['Partner','Condition','Photos','Feedback'])
        partner = partner_selected[i]
        condition = condition_selected[i]
        blocklist = ['did not like'] * int(nTrials * pDislike) + ['liked'] * int(nTrials * pLike)
        random.shuffle(blocklist)
        feedback = random.sample(blocklist,30)
        photo_selected = random.sample(photolist,30)
        acc['Feedback']=feedback
        acc['Partner']=partner
        acc['Condition']=condition
        acc['Photos']= photo_selected
        alltrials = pd.concat([alltrials, acc], ignore_index=True)
    elif condition_selected[i] == 'Neutral':
        pDislike = .5
        pLike = .5
        neu = pd.DataFrame(columns=['Partner','Condition','Photos','Feedback'])
        partner = partner_selected[i]
        condition = condition_selected[i]
        blocklist = ['did not like'] * int(nTrials * pDislike) + ['liked'] * int(nTrials * pLike)
        random.shuffle(blocklist)
        feedback = random.sample(blocklist,30)
        photo_selected = random.sample(photolist,30)
        neu['Feedback']=feedback
        neu['Partner']=partner
        neu['Condition']=condition
        neu['Photos']= photo_selected
        alltrials = pd.concat([alltrials, neu], ignore_index=True)
    subid = p
    expdir = os.getcwd()
    subjdir = '%s/data/%s' % (expdir, subid)
    trial_sheet = '%s/%s_trials.csv' %(subjdir,subid)
    alltrials['TrialNumber'] = range(1,len(alltrials)+1)
    alltrials.to_csv(trial_sheet, index= False)
    
