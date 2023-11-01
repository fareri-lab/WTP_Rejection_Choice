#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Nov 14 14:05:38 2022

@author: melanieruiz
"""

import os
import pandas as pd
import random


imagedir = 'Participant_Images/'
sociallevel = ["Rej1", "Acc1", "Rej2", "Acc2"]
partnerlist = ['Charlie', 'Sam', 'Riley', 'Alex']
rangelist_25= ['0:5','5:10','10:15','15:20','20:25','25:30','30:35','35:40','40:45','45:50']*5
# rej_rangelist_25_1 = random.sample(rangelist_25[0:25],25)
# rej_rangelist_25_2 = random.sample(rangelist_25[25:50],25)
# acc_rangelist_25_1 = random.sample(rangelist_25[0:25],25)
# acc_rangelist_25_2 = random.sample(rangelist_25[25:50],25)
photolist = os.listdir(os.getcwd() + '/' + imagedir)
photolist =[value for value in photolist if value.endswith('.jpg')]
photolist = [imagedir + x for x in photolist]
condition = ''
partner = ''
feedback = ''
condition_selected = random.sample(sociallevel,4)
partner_selected = random.sample(partnerlist,4)
block = 0 #before experiment 
nTrials = 25
alltrials = pd.DataFrame(columns=['TrialNumber','Partner','Condition','Photos','Feedback','WTP_Trial_Range'])
alltrials['Partner'] = ''
alltrials['Feedback'] = ''
alltrials['Condition']= ''
alltrials['Photos'] = ''

rejection = pd.DataFrame(columns=['Partner','Condition','Photos','Feedback','WTP_Trial_Range'])
rej1 = pd.DataFrame(columns=['Partner','Condition','Photos','Feedback','WTP_Trial_Range'])
rej2 = pd.DataFrame(columns=['Partner','Condition','Photos','Feedback','WTP_Trial_Range'])

acceptance = pd.DataFrame(columns=['Partner','Condition','Photos','Feedback','WTP_Trial_Range'])
acc1 = pd.DataFrame(columns=['Partner','Condition','Photos','Feedback','WTP_Trial_Range'])
acc2 = pd.DataFrame(columns=['Partner','Condition','Photos','Feedback','WTP_Trial_Range'])
#%%
for i in range(0,4):
    if condition_selected[i] == 'Rej1':
        pDislike = .7
        pLike = .3
        #rej = pd.DataFrame(columns=['Partner','Condition','Photos','Feedback','WTP_Trial_Range'])
        partner = partner_selected[i]
        condition = condition_selected[i]
        blocklist = ['did not like'] * (int(nTrials * pDislike)+1) + ['liked'] * int(nTrials * pLike)
        random.shuffle(blocklist)
        feedback = random.sample(blocklist,25)
        photo_selected = random.sample(photolist,25)
        rej1['Feedback']=feedback
        rej1['Partner']=partner
        rej1['Condition']=condition
        rej1['Photos']= photo_selected
        rej1['WTP_Trial_Range']= rej_rangelist_25_1
        alltrials = pd.concat([alltrials, rej1], ignore_index=True)  
        
    elif condition_selected[i] == 'Rej2':
        pDislike = .7
        pLike = .3
        #rej = pd.DataFrame(columns=['Partner','Condition','Photos','Feedback','WTP_Trial_Range'])
        partner = partner_selected[i]
        condition = condition_selected[i]
        blocklist = ['did not like'] * (int(nTrials * pDislike)+1) + ['liked'] * int(nTrials * pLike)
        random.shuffle(blocklist)
        feedback = random.sample(blocklist,25)
        photo_selected = random.sample(photolist,25)
        rej2['Feedback']=feedback
        rej2['Partner']=partner
        rej2['Condition']=condition
        rej2['Photos']= photo_selected
        rej2['WTP_Trial_Range']= rej_rangelist_25_2
        alltrials = pd.concat([alltrials, rej2], ignore_index=True)
    
              
    elif condition_selected[i] == 'Acc1':
        pDislike = .3
        pLike = .7
        # acc = pd.DataFrame(columns=['Partner','Condition','Photos','Feedback'])
        partner = partner_selected[i]
        condition = condition_selected[i]
        blocklist = ['did not like'] * int(nTrials * pDislike) + ['liked'] * (int(nTrials * pLike)+1)
        random.shuffle(blocklist)
        feedback = random.sample(blocklist,25) 
        photo_selected = random.sample(photolist,25)
        acc1['Feedback']=feedback
        acc1['Partner']=partner
        acc1['Condition']=condition
        acc1['Photos']= photo_selected
        acc1['WTP_Trial_Range']= acc_rangelist_25_1
        alltrials = pd.concat([alltrials, acc1], ignore_index=True)
        
    elif condition_selected[i] == 'Acc2':
        pDislike = .3
        pLike = .7
        # acc = pd.DataFrame(columns=['Partner','Condition','Photos','Feedback'])
        partner = partner_selected[i]
        condition = condition_selected[i]
        blocklist = ['did not like'] * int(nTrials * pDislike) + ['liked'] * (int(nTrials * pLike)+1)
        random.shuffle(blocklist)
        feedback = random.sample(blocklist,25) 
        photo_selected = random.sample(photolist,25)
        acc2['Feedback']=feedback
        acc2['Partner']=partner
        acc2['Condition']=condition
        acc2['Photos']= photo_selected
        acc2['WTP_Trial_Range']= acc_rangelist_25_2
        alltrials = pd.concat([alltrials, acc2], ignore_index=True)
        
#%%
alltrials['TrialNumber'] = range(1,101)
for ranges in range(0,len(rangelist_25)):
    