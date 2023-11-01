﻿/*********************** 
 * Rej_Wtp_Legacy Test *
 ***********************/


// store info about the experiment session:
let expName = 'Rej_WTP_legacy';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from buildspreadsheet
import * as itertools from 'itertools';
import * as os from 'os';
import * as pd from 'pandas';
import * as np from 'numpy';
import * as random from 'random';
import {Image} from 'PIL';
var acc, alltrials, block, blocklist, condition, condition_selected, feedback, imagedir, nTrials, pDislike, pLike, partner, partner_selected, partnerlist, photo_selected, photolist, rej, sociallevel;
imagedir = "Participant_Images/";
sociallevel = ["Rej", "Acc", "Rej", "Acc"];
partnerlist = ["Charlie", "Sam", "Riley", "Alex"];
photolist = os.listdir(((os.getcwd() + "/") + imagedir));
photolist = function () {
    var _pj_a = [], _pj_b = photolist;
    for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
        var value = _pj_b[_pj_c];
        if (value.endswith(".jpg")) {
            _pj_a.push(value);
        }
    }
    return _pj_a;
}
.call(this);
photolist = function () {
    var _pj_a = [], _pj_b = photolist;
    for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
        var x = _pj_b[_pj_c];
        _pj_a.push((imagedir + x));
    }
    return _pj_a;
}
.call(this);
condition = "";
partner = "";
feedback = "";
condition_selected = random.sample(sociallevel, 4);
partner_selected = random.sample(partnerlist, 4);
block = 0;
nTrials = 25;
alltrials = new pd.DataFrame({"columns": ["TrialNumber", "Partner", "Condition", "Photos", "Feedback"]});
alltrials["Partner"] = "";
alltrials["Feedback"] = "";
alltrials["Condition"] = "";
alltrials["Photos"] = "";
for (var i, _pj_c = 0, _pj_a = util.range(0, 4), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
    i = _pj_a[_pj_c];
    if ((condition_selected[i] === "Rej")) {
        pDislike = 0.7;
        pLike = 0.3;
        rej = new pd.DataFrame({"columns": ["Partner", "Condition", "Photos", "Feedback"]});
        partner = partner_selected[i];
        condition = condition_selected[i];
        blocklist = ((["did not like"] * (Number.parseInt((nTrials * pDislike)) + 1)) + (["liked"] * Number.parseInt((nTrials * pLike))));
        random.shuffle(blocklist);
        feedback = random.sample(blocklist, 25);
        photo_selected = random.sample(photolist, 25);
        rej["Feedback"] = feedback;
        rej["Partner"] = partner;
        rej["Condition"] = condition;
        rej["Photos"] = photo_selected;
        alltrials = pd.concat([alltrials, rej], {"ignore_index": true});
    } else {
        if ((condition_selected[i] === "Acc")) {
            pDislike = 0.3;
            pLike = 0.7;
            acc = new pd.DataFrame({"columns": ["Partner", "Condition", "Photos", "Feedback"]});
            partner = partner_selected[i];
            condition = condition_selected[i];
            blocklist = ((["did not like"] * Number.parseInt((nTrials * pDislike))) + (["liked"] * (Number.parseInt((nTrials * pLike)) + 1)));
            random.shuffle(blocklist);
            feedback = random.sample(blocklist, 25);
            photo_selected = random.sample(photolist, 25);
            acc["Feedback"] = feedback;
            acc["Partner"] = partner;
            acc["Condition"] = condition;
            acc["Photos"] = photo_selected;
            alltrials = pd.concat([alltrials, acc], {"ignore_index": true});
        }
    }
}

// Run 'Before Experiment' code from hidecontinuesharingroutine_code
test_range = "45:50";

// Run 'Before Experiment' code from saliencyrating_code
saliencerating = "";
salienceratingtext = "";
rating_forsalience = "";

// Run 'Before Experiment' code from stresslevelslider
stresslevel = "";
stressleveltext = "";
rating_forstress = "";

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'norm',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Welcome_ScreenRoutineBegin());
flowScheduler.add(Welcome_ScreenRoutineEachFrame());
flowScheduler.add(Welcome_ScreenRoutineEnd());
flowScheduler.add(testRoutineBegin());
flowScheduler.add(testRoutineEachFrame());
flowScheduler.add(testRoutineEnd());
flowScheduler.add(First_InstructionsRoutineBegin());
flowScheduler.add(First_InstructionsRoutineEachFrame());
flowScheduler.add(First_InstructionsRoutineEnd());
const entiretaskloopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(entiretaskloopLoopBegin(entiretaskloopLoopScheduler));
flowScheduler.add(entiretaskloopLoopScheduler);
flowScheduler.add(entiretaskloopLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'html_resources_UPDATED_wtp_trials_2021.csv', 'path': 'html_resources_UPDATED_wtp_trials_2021.csv'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);

async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.1';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

async function experimentInit() {
  // Initialize components for Routine "Welcome_Screen"
  Welcome_ScreenClock = new util.Clock();
  Welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'Welcome',
    text: 'Welcome to the Instagram Sharing Task!\n\n\nToday you will have the opportunity to share some of your Instagram photos with other participants and receive feedback.\n\n\n\nPress space to continue.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  endwelcomescreen_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from buildspreadsheet
  subid = expInfo["participant"];
  alltrials["TrialNumber"] = util.range(1, 101);
  expdir = os.getcwd();
  subjdir = `${expdir}/data/${subid}`;
  if ((! os.path.exists(subjdir))) {
      os.makedirs(subjdir);
  }
  trial_sheet = `${subjdir}/${subid}`;
  alltrials.to_csv(trial_sheet, {"index": false});
  partnermatch = "";
  partneravatar = "";
  
  // Initialize components for Routine "test"
  testClock = new util.Clock();
  // Initialize components for Routine "First_Instructions"
  First_InstructionsClock = new util.Clock();
  FirstInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'FirstInstructions',
    text: 'To begin, you will be assigned a partner at random by the computer. Next, your instagram photos will be shared with your partner. After each photo is shared, your partner will give you feedback on whether they liked or disliked your photo. You will have the chance to share your photos with 3 different partners during todays task.\n\n\nYou may be eligible throughout the task to participate in a lottery, which you may play yourself or have the computer play on your behalf. Further instructions about this task will be provided should you be eligible to participate.\n\n\nPress space to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  endinstructionscreen_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "partner_code"
  partner_codeClock = new util.Clock();
  // Run 'Begin Experiment' code from partnermatchcode
  partnermatch = "";
  partneravatar = "";
  
  // Initialize components for Routine "WaitingToMatch"
  WaitingToMatchClock = new util.Clock();
  Match_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Match_text',
    text: 'You will now be matched with a game partner selected at random by the computer.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  syncing_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'syncing_text',
    text: 'Syncing…',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.12,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_0',
    text: '0%',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  Transparent = new visual.Rect ({
    win: psychoJS.window, name: 'Transparent', 
    width: [1, 0.1][0], height: [1, 0.1][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.2, lineColor: new util.Color('white'),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  Loading_25 = new visual.Rect ({
    win: psychoJS.window, name: 'Loading_25', 
    width: [0.25, 0.1][0], height: [0.25, 0.1][1],
    ori: 0.0, pos: [(- 0.375), 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  text_25 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_25',
    text: '25%',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  Loading_50 = new visual.Rect ({
    win: psychoJS.window, name: 'Loading_50', 
    width: [0.5, 0.1][0], height: [0.5, 0.1][1],
    ori: 0.0, pos: [(- 0.25), 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  text_50 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_50',
    text: '50%',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  Loading_75 = new visual.Rect ({
    win: psychoJS.window, name: 'Loading_75', 
    width: [0.75, 0.1][0], height: [0.75, 0.1][1],
    ori: 0.0, pos: [(- 0.125), 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  text_75 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_75',
    text: '75%',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  Loading_100 = new visual.Rect ({
    win: psychoJS.window, name: 'Loading_100', 
    width: [1, 0.1][0], height: [1, 0.1][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -11, interpolate: true,
  });
  
  text_100 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_100',
    text: '100%',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -12.0 
  });
  
  // Initialize components for Routine "Partner_Match"
  Partner_MatchClock = new util.Clock();
  Youhavematched = new visual.TextStim({
    win: psychoJS.window,
    name: 'Youhavematched',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.6], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  partneremoji_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'partneremoji_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.75],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  endpartnermatch_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  PressToContinue = new visual.TextStim({
    win: psychoJS.window,
    name: 'PressToContinue',
    text: 'Press space to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.6)], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "Photo_Share"
  Photo_ShareClock = new util.Clock();
  photobeingshared_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'photobeingshared_text',
    text: 'This photo is now being shared',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.0, 0.6], height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  waitforfeedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'waitforfeedback_text',
    text: 'Please wait for feedback.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.6)], height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Run 'Begin Experiment' code from initiatefeedbackresponses
  feedbackresponses = "";
  fdbkimage = "";
  
  participantimage_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'participantimage_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.75],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "Waitingforfeedback"
  WaitingforfeedbackClock = new util.Clock();
  waiting_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'waiting_text',
    text: 'Waiting…',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.0], height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  displayfeedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'displayfeedback_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.75], height: 0.12,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  fdbkimage_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fdbkimage_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.75, 1.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Run 'Begin Experiment' code from initiatelottery_code
  startlottery = "";
  
  // Initialize components for Routine "continuesharing"
  continuesharingClock = new util.Clock();
  presstosharenextphoto_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'presstosharenextphoto_text',
    text: 'Press space to share your next photo.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sharenextphoto_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Choice"
  ChoiceClock = new util.Clock();
  Experiencechoice_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Experiencechoice_text',
    text: "Thank you! You will now have the opportunity to choose between a variety of different experiences you'd like to participate in.\n\nYou can either have the computer pick on your behalf or you may choose the experience yourself. If you would like the computer to choose for you press ‘c’. If you would like to choose the experience yourself press ‘s’. \n\n\nYou will have 3 seconds to decide.\n",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  computer_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'computer_text',
    text: 'Computer',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.4)], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  self_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'self_text',
    text: 'Self',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.4)], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Run 'Begin Experiment' code from setvariables_code
  response_msg = " ";
  feedback_msg = " ";
  feedback_msg2 = " ";
  computer_choice = ["Left", "Left", "Right", "Right", "Right"];
  selfrunOrNot = "";
  comprunOrNot = "";
  resumetext = "";
  
  choice_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Experiencecomputerchoice"
  ExperiencecomputerchoiceClock = new util.Clock();
  // Initialize components for Routine "Experience_computer_choice"
  Experience_computer_choiceClock = new util.Clock();
  Socialleft_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Socialleft_text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), 0.2], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Socialright_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Socialright_text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  leftmoney_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'leftmoney_text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.5)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Rightmoney_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Rightmoney_text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.4)], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  OR_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'OR_text_2',
    text: 'OR',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  Leftchoicekey_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Leftchoicekey_text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  Rightchoicekey_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Rightchoicekey_text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank',
    text: '.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "Schoice"
  SchoiceClock = new util.Clock();
  SelfChoiceExperiences = new visual.TextStim({
    win: psychoJS.window,
    name: 'SelfChoiceExperiences',
    text: "You will now be asked a series of questions regarding different possible experiences. Please select which option you prefer by selecting either the 'x' key for the option on the left or 'y' key for the option on the right.\n\n\n\nPress space to continue.\n",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Experienceselfchoice"
  ExperienceselfchoiceClock = new util.Clock();
  Socialleft_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Socialleft_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), 0.2], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Socialright_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Socialright_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.4, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  leftmoney_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'leftmoney_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.5)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  experiencechoice_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  responsefeedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'responsefeedback',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  Rightmoney_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Rightmoney_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.4)], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  OR_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'OR_text',
    text: 'OR',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  Leftchoicekey_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Leftchoicekey_text',
    text: '[x]',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  Rightchoicekey_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Rightchoicekey_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  // Initialize components for Routine "Continue"
  ContinueClock = new util.Clock();
  resumeafterexperience_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  resumetext_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'resumetext_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.12,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "SalienceRating"
  SalienceRatingClock = new util.Clock();
  // Run 'Begin Experiment' code from saliencyrating_code
  salience_slider = new visual.Slider({"win": psychoJS.window, "name": "slider", "startValue": 999, "size": [1.0, 0.1], "pos": [0, (- 0.4)], "units": null, "labels": [1, 2, 3, 4, 5], "ticks": [1, 2, 3, 4, 5], "granularity": 0.0, "style": "rating", "styleTweaks": ["labels45", "triangleMarker"], "opacity": null, "labelColor": "white", "markerColor": "cornflowerblue", "lineColor": "white", "colorSpace": "rgb", "font": "Open Sans", "labelHeight": 0.05, "flip": false, "ori": 0.0, "depth": (- 5), "readOnly": false});
  
  saliencequestion_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'saliencequestion_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.6], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  salienceavatar_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'salienceavatar_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.55],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  saliencecontinue_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'saliencecontinue_text',
    text: 'Press space to enter rating and continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.8)], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  displayrating_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'displayrating_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.65)], height: 0.065,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "StressLevel"
  StressLevelClock = new util.Clock();
  // Run 'Begin Experiment' code from stresslevelslider
  stress_slider = new visual.Slider({"win": psychoJS.window, "name": "slider", "startValue": 999, "size": [1.0, 0.1], "pos": [0, (- 0.4)], "units": null, "labels": [1, 2, 3, 4, 5, 6, 7, 8, 9], "ticks": [1, 2, 3, 4, 5, 6, 7, 8, 9], "granularity": 0.0, "style": "rating", "styleTweaks": ["labels45", "triangleMarker"], "opacity": null, "labelColor": "white", "markerColor": "cornflowerblue", "lineColor": "white", "colorSpace": "rgb", "font": "Open Sans", "labelHeight": 0.05, "flip": false, "ori": 0.0, "depth": (- 5), "readOnly": false});
  
  stresslevel_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'stresslevel_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  stresslevel_keypress = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  displaystressrating_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'displaystressrating_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.65)], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function Welcome_ScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Welcome_Screen' ---
    t = 0;
    Welcome_ScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    endwelcomescreen_keys.keys = undefined;
    endwelcomescreen_keys.rt = undefined;
    _endwelcomescreen_keys_allKeys = [];
    // keep track of which components have finished
    Welcome_ScreenComponents = [];
    Welcome_ScreenComponents.push(Welcome);
    Welcome_ScreenComponents.push(endwelcomescreen_keys);
    
    Welcome_ScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function Welcome_ScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Welcome_Screen' ---
    // get current time
    t = Welcome_ScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Welcome* updates
    if (t >= 0.0 && Welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Welcome.tStart = t;  // (not accounting for frame time here)
      Welcome.frameNStart = frameN;  // exact frame index
      
      Welcome.setAutoDraw(true);
    }

    
    // *endwelcomescreen_keys* updates
    if (t >= 0.0 && endwelcomescreen_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endwelcomescreen_keys.tStart = t;  // (not accounting for frame time here)
      endwelcomescreen_keys.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { endwelcomescreen_keys.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { endwelcomescreen_keys.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { endwelcomescreen_keys.clearEvents(); });
    }

    if (endwelcomescreen_keys.status === PsychoJS.Status.STARTED) {
      let theseKeys = endwelcomescreen_keys.getKeys({keyList: ['space'], waitRelease: false});
      _endwelcomescreen_keys_allKeys = _endwelcomescreen_keys_allKeys.concat(theseKeys);
      if (_endwelcomescreen_keys_allKeys.length > 0) {
        endwelcomescreen_keys.keys = _endwelcomescreen_keys_allKeys[_endwelcomescreen_keys_allKeys.length - 1].name;  // just the last key pressed
        endwelcomescreen_keys.rt = _endwelcomescreen_keys_allKeys[_endwelcomescreen_keys_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Welcome_ScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Welcome_ScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Welcome_Screen' ---
    Welcome_ScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(endwelcomescreen_keys.corr, level);
    }
    psychoJS.experiment.addData('endwelcomescreen_keys.keys', endwelcomescreen_keys.keys);
    if (typeof endwelcomescreen_keys.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('endwelcomescreen_keys.rt', endwelcomescreen_keys.rt);
        routineTimer.reset();
        }
    
    endwelcomescreen_keys.stop();
    // the Routine "Welcome_Screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test' ---
    t = 0;
    testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    testComponents = [];
    
    testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test' ---
    // get current time
    t = testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test' ---
    testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function First_InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'First_Instructions' ---
    t = 0;
    First_InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    endinstructionscreen_keys.keys = undefined;
    endinstructionscreen_keys.rt = undefined;
    _endinstructionscreen_keys_allKeys = [];
    // keep track of which components have finished
    First_InstructionsComponents = [];
    First_InstructionsComponents.push(FirstInstructions);
    First_InstructionsComponents.push(endinstructionscreen_keys);
    
    First_InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function First_InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'First_Instructions' ---
    // get current time
    t = First_InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *FirstInstructions* updates
    if (t >= 0.0 && FirstInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FirstInstructions.tStart = t;  // (not accounting for frame time here)
      FirstInstructions.frameNStart = frameN;  // exact frame index
      
      FirstInstructions.setAutoDraw(true);
    }

    
    // *endinstructionscreen_keys* updates
    if (t >= 0.0 && endinstructionscreen_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endinstructionscreen_keys.tStart = t;  // (not accounting for frame time here)
      endinstructionscreen_keys.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { endinstructionscreen_keys.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { endinstructionscreen_keys.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { endinstructionscreen_keys.clearEvents(); });
    }

    if (endinstructionscreen_keys.status === PsychoJS.Status.STARTED) {
      let theseKeys = endinstructionscreen_keys.getKeys({keyList: ['space'], waitRelease: false});
      _endinstructionscreen_keys_allKeys = _endinstructionscreen_keys_allKeys.concat(theseKeys);
      if (_endinstructionscreen_keys_allKeys.length > 0) {
        endinstructionscreen_keys.keys = _endinstructionscreen_keys_allKeys[_endinstructionscreen_keys_allKeys.length - 1].name;  // just the last key pressed
        endinstructionscreen_keys.rt = _endinstructionscreen_keys_allKeys[_endinstructionscreen_keys_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    First_InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function First_InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'First_Instructions' ---
    First_InstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(endinstructionscreen_keys.corr, level);
    }
    psychoJS.experiment.addData('endinstructionscreen_keys.keys', endinstructionscreen_keys.keys);
    if (typeof endinstructionscreen_keys.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('endinstructionscreen_keys.rt', endinstructionscreen_keys.rt);
        routineTimer.reset();
        }
    
    endinstructionscreen_keys.stop();
    // the Routine "First_Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function entiretaskloopLoopBegin(entiretaskloopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    entiretaskloop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: trial_sheet,
      seed: undefined, name: 'entiretaskloop'
    });
    psychoJS.experiment.addLoop(entiretaskloop); // add the loop to the experiment
    currentLoop = entiretaskloop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    entiretaskloop.forEach(function() {
      snapshot = entiretaskloop.getSnapshot();
    
      entiretaskloopLoopScheduler.add(importConditions(snapshot));
      entiretaskloopLoopScheduler.add(partner_codeRoutineBegin(snapshot));
      entiretaskloopLoopScheduler.add(partner_codeRoutineEachFrame());
      entiretaskloopLoopScheduler.add(partner_codeRoutineEnd(snapshot));
      entiretaskloopLoopScheduler.add(WaitingToMatchRoutineBegin(snapshot));
      entiretaskloopLoopScheduler.add(WaitingToMatchRoutineEachFrame());
      entiretaskloopLoopScheduler.add(WaitingToMatchRoutineEnd(snapshot));
      entiretaskloopLoopScheduler.add(Partner_MatchRoutineBegin(snapshot));
      entiretaskloopLoopScheduler.add(Partner_MatchRoutineEachFrame());
      entiretaskloopLoopScheduler.add(Partner_MatchRoutineEnd(snapshot));
      entiretaskloopLoopScheduler.add(Photo_ShareRoutineBegin(snapshot));
      entiretaskloopLoopScheduler.add(Photo_ShareRoutineEachFrame());
      entiretaskloopLoopScheduler.add(Photo_ShareRoutineEnd(snapshot));
      entiretaskloopLoopScheduler.add(WaitingforfeedbackRoutineBegin(snapshot));
      entiretaskloopLoopScheduler.add(WaitingforfeedbackRoutineEachFrame());
      entiretaskloopLoopScheduler.add(WaitingforfeedbackRoutineEnd(snapshot));
      entiretaskloopLoopScheduler.add(feedbackRoutineBegin(snapshot));
      entiretaskloopLoopScheduler.add(feedbackRoutineEachFrame());
      entiretaskloopLoopScheduler.add(feedbackRoutineEnd(snapshot));
      entiretaskloopLoopScheduler.add(continuesharingRoutineBegin(snapshot));
      entiretaskloopLoopScheduler.add(continuesharingRoutineEachFrame());
      entiretaskloopLoopScheduler.add(continuesharingRoutineEnd(snapshot));
      const lotteryloopLoopScheduler = new Scheduler(psychoJS);
      entiretaskloopLoopScheduler.add(lotteryloopLoopBegin(lotteryloopLoopScheduler, snapshot));
      entiretaskloopLoopScheduler.add(lotteryloopLoopScheduler);
      entiretaskloopLoopScheduler.add(lotteryloopLoopEnd);
      entiretaskloopLoopScheduler.add(SalienceRatingRoutineBegin(snapshot));
      entiretaskloopLoopScheduler.add(SalienceRatingRoutineEachFrame());
      entiretaskloopLoopScheduler.add(SalienceRatingRoutineEnd(snapshot));
      entiretaskloopLoopScheduler.add(StressLevelRoutineBegin(snapshot));
      entiretaskloopLoopScheduler.add(StressLevelRoutineEachFrame());
      entiretaskloopLoopScheduler.add(StressLevelRoutineEnd(snapshot));
      entiretaskloopLoopScheduler.add(entiretaskloopLoopEndIteration(entiretaskloopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

function lotteryloopLoopBegin(lotteryloopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    lotteryloop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: startlottery, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'lotteryloop'
    });
    psychoJS.experiment.addLoop(lotteryloop); // add the loop to the experiment
    currentLoop = lotteryloop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    lotteryloop.forEach(function() {
      snapshot = lotteryloop.getSnapshot();
    
      lotteryloopLoopScheduler.add(importConditions(snapshot));
      lotteryloopLoopScheduler.add(ChoiceRoutineBegin(snapshot));
      lotteryloopLoopScheduler.add(ChoiceRoutineEachFrame());
      lotteryloopLoopScheduler.add(ChoiceRoutineEnd(snapshot));
      const computerchoiceLoopScheduler = new Scheduler(psychoJS);
      lotteryloopLoopScheduler.add(computerchoiceLoopBegin(computerchoiceLoopScheduler, snapshot));
      lotteryloopLoopScheduler.add(computerchoiceLoopScheduler);
      lotteryloopLoopScheduler.add(computerchoiceLoopEnd);
      lotteryloopLoopScheduler.add(SchoiceRoutineBegin(snapshot));
      lotteryloopLoopScheduler.add(SchoiceRoutineEachFrame());
      lotteryloopLoopScheduler.add(SchoiceRoutineEnd(snapshot));
      const selfchoiceLoopScheduler = new Scheduler(psychoJS);
      lotteryloopLoopScheduler.add(selfchoiceLoopBegin(selfchoiceLoopScheduler, snapshot));
      lotteryloopLoopScheduler.add(selfchoiceLoopScheduler);
      lotteryloopLoopScheduler.add(selfchoiceLoopEnd);
      lotteryloopLoopScheduler.add(ContinueRoutineBegin(snapshot));
      lotteryloopLoopScheduler.add(ContinueRoutineEachFrame());
      lotteryloopLoopScheduler.add(ContinueRoutineEnd(snapshot));
      lotteryloopLoopScheduler.add(lotteryloopLoopEndIteration(lotteryloopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

function computerchoiceLoopBegin(computerchoiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    computerchoice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: comprunOrNot, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'html_resources_UPDATED_wtp_trials_2021.csv',
      seed: undefined, name: 'computerchoice'
    });
    psychoJS.experiment.addLoop(computerchoice); // add the loop to the experiment
    currentLoop = computerchoice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    computerchoice.forEach(function() {
      snapshot = computerchoice.getSnapshot();
    
      computerchoiceLoopScheduler.add(importConditions(snapshot));
      computerchoiceLoopScheduler.add(ExperiencecomputerchoiceRoutineBegin(snapshot));
      computerchoiceLoopScheduler.add(ExperiencecomputerchoiceRoutineEachFrame());
      computerchoiceLoopScheduler.add(ExperiencecomputerchoiceRoutineEnd(snapshot));
      computerchoiceLoopScheduler.add(Experience_computer_choiceRoutineBegin(snapshot));
      computerchoiceLoopScheduler.add(Experience_computer_choiceRoutineEachFrame());
      computerchoiceLoopScheduler.add(Experience_computer_choiceRoutineEnd(snapshot));
      computerchoiceLoopScheduler.add(computerchoiceLoopEndIteration(computerchoiceLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function computerchoiceLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(computerchoice);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function computerchoiceLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function selfchoiceLoopBegin(selfchoiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    selfchoice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: selfrunOrNot, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'html_resources_UPDATED_wtp_trials_2021.csv', test_range),
      seed: undefined, name: 'selfchoice'
    });
    psychoJS.experiment.addLoop(selfchoice); // add the loop to the experiment
    currentLoop = selfchoice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    selfchoice.forEach(function() {
      snapshot = selfchoice.getSnapshot();
    
      selfchoiceLoopScheduler.add(importConditions(snapshot));
      selfchoiceLoopScheduler.add(ExperienceselfchoiceRoutineBegin(snapshot));
      selfchoiceLoopScheduler.add(ExperienceselfchoiceRoutineEachFrame());
      selfchoiceLoopScheduler.add(ExperienceselfchoiceRoutineEnd(snapshot));
      selfchoiceLoopScheduler.add(selfchoiceLoopEndIteration(selfchoiceLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function selfchoiceLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(selfchoice);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function selfchoiceLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}

async function lotteryloopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(lotteryloop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function lotteryloopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

async function entiretaskloopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(entiretaskloop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function entiretaskloopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function partner_codeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'partner_code' ---
    t = 0;
    partner_codeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    partner_codeComponents = [];
    
    partner_codeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function partner_codeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'partner_code' ---
    // get current time
    t = partner_codeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    partner_codeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function partner_codeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'partner_code' ---
    partner_codeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from partnermatchcode
    partnermatch = `You have matched with: ${Partner}`;
    if ((Partner === "Sam")) {
        partneravatar = "Images/nerdemoji_nobackground.png";
    }
    if ((Partner === "Riley")) {
        partneravatar = "Images/sunglassemoji_nobackground.png";
    } else {
        if ((Partner === "Charlie")) {
            partneravatar = "Images/smilingemoji.tiff";
        } else {
            if ((Partner === "Alex")) {
                Partneravatar = "Images/cowboyemoji.png";
            }
        }
    }
    
    // the Routine "partner_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function WaitingToMatchRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'WaitingToMatch' ---
    t = 0;
    WaitingToMatchClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(9.250000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from showloadingbar
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! _pj.in_es6(TrialNumber, [1, 31, 61]))) {
        continueRoutine = false;
    }
    
    // keep track of which components have finished
    WaitingToMatchComponents = [];
    WaitingToMatchComponents.push(Match_text);
    WaitingToMatchComponents.push(syncing_text);
    WaitingToMatchComponents.push(text_0);
    WaitingToMatchComponents.push(Transparent);
    WaitingToMatchComponents.push(Loading_25);
    WaitingToMatchComponents.push(text_25);
    WaitingToMatchComponents.push(Loading_50);
    WaitingToMatchComponents.push(text_50);
    WaitingToMatchComponents.push(Loading_75);
    WaitingToMatchComponents.push(text_75);
    WaitingToMatchComponents.push(Loading_100);
    WaitingToMatchComponents.push(text_100);
    
    WaitingToMatchComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function WaitingToMatchRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'WaitingToMatch' ---
    // get current time
    t = WaitingToMatchClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Match_text* updates
    if (t >= 0.0 && Match_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Match_text.tStart = t;  // (not accounting for frame time here)
      Match_text.frameNStart = frameN;  // exact frame index
      
      Match_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Match_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Match_text.setAutoDraw(false);
    }
    
    // *syncing_text* updates
    if (t >= 3 && syncing_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      syncing_text.tStart = t;  // (not accounting for frame time here)
      syncing_text.frameNStart = frameN;  // exact frame index
      
      syncing_text.setAutoDraw(true);
    }

    frameRemains = 3 + 6.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (syncing_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      syncing_text.setAutoDraw(false);
    }
    
    // *text_0* updates
    if (t >= 3 && text_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_0.tStart = t;  // (not accounting for frame time here)
      text_0.frameNStart = frameN;  // exact frame index
      
      text_0.setAutoDraw(true);
    }

    frameRemains = 3 + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_0.setAutoDraw(false);
    }
    
    // *Transparent* updates
    if (t >= 3 && Transparent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Transparent.tStart = t;  // (not accounting for frame time here)
      Transparent.frameNStart = frameN;  // exact frame index
      
      Transparent.setAutoDraw(true);
    }

    frameRemains = 3 + 6.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Transparent.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Transparent.setAutoDraw(false);
    }
    
    // *Loading_25* updates
    if (t >= 4.25 && Loading_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Loading_25.tStart = t;  // (not accounting for frame time here)
      Loading_25.frameNStart = frameN;  // exact frame index
      
      Loading_25.setAutoDraw(true);
    }

    frameRemains = 4.25 + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Loading_25.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Loading_25.setAutoDraw(false);
    }
    
    // *text_25* updates
    if (t >= 4.25 && text_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_25.tStart = t;  // (not accounting for frame time here)
      text_25.frameNStart = frameN;  // exact frame index
      
      text_25.setAutoDraw(true);
    }

    frameRemains = 4.25 + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_25.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_25.setAutoDraw(false);
    }
    
    // *Loading_50* updates
    if (t >= 5.5 && Loading_50.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Loading_50.tStart = t;  // (not accounting for frame time here)
      Loading_50.frameNStart = frameN;  // exact frame index
      
      Loading_50.setAutoDraw(true);
    }

    frameRemains = 5.5 + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Loading_50.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Loading_50.setAutoDraw(false);
    }
    
    // *text_50* updates
    if (t >= 5.5 && text_50.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_50.tStart = t;  // (not accounting for frame time here)
      text_50.frameNStart = frameN;  // exact frame index
      
      text_50.setAutoDraw(true);
    }

    frameRemains = 5.5 + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_50.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_50.setAutoDraw(false);
    }
    
    // *Loading_75* updates
    if (t >= 6.75 && Loading_75.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Loading_75.tStart = t;  // (not accounting for frame time here)
      Loading_75.frameNStart = frameN;  // exact frame index
      
      Loading_75.setAutoDraw(true);
    }

    frameRemains = 6.75 + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Loading_75.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Loading_75.setAutoDraw(false);
    }
    
    // *text_75* updates
    if (t >= 6.75 && text_75.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_75.tStart = t;  // (not accounting for frame time here)
      text_75.frameNStart = frameN;  // exact frame index
      
      text_75.setAutoDraw(true);
    }

    frameRemains = 6.75 + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_75.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_75.setAutoDraw(false);
    }
    
    // *Loading_100* updates
    if (t >= 8 && Loading_100.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Loading_100.tStart = t;  // (not accounting for frame time here)
      Loading_100.frameNStart = frameN;  // exact frame index
      
      Loading_100.setAutoDraw(true);
    }

    frameRemains = 8 + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Loading_100.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Loading_100.setAutoDraw(false);
    }
    
    // *text_100* updates
    if (t >= 8 && text_100.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_100.tStart = t;  // (not accounting for frame time here)
      text_100.frameNStart = frameN;  // exact frame index
      
      text_100.setAutoDraw(true);
    }

    frameRemains = 8 + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_100.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_100.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    WaitingToMatchComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function WaitingToMatchRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'WaitingToMatch' ---
    WaitingToMatchComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Partner_MatchRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Partner_Match' ---
    t = 0;
    Partner_MatchClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from showpartnermatch
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! _pj.in_es6(TrialNumber, [1, 31, 61]))) {
        continueRoutine = false;
    }
    
    Youhavematched.setText(partnermatch);
    partneremoji_image.setImage(partneravatar);
    endpartnermatch_keys.keys = undefined;
    endpartnermatch_keys.rt = undefined;
    _endpartnermatch_keys_allKeys = [];
    // keep track of which components have finished
    Partner_MatchComponents = [];
    Partner_MatchComponents.push(Youhavematched);
    Partner_MatchComponents.push(partneremoji_image);
    Partner_MatchComponents.push(endpartnermatch_keys);
    Partner_MatchComponents.push(PressToContinue);
    
    Partner_MatchComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function Partner_MatchRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Partner_Match' ---
    // get current time
    t = Partner_MatchClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Youhavematched* updates
    if (t >= 0.0 && Youhavematched.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Youhavematched.tStart = t;  // (not accounting for frame time here)
      Youhavematched.frameNStart = frameN;  // exact frame index
      
      Youhavematched.setAutoDraw(true);
    }

    
    // *partneremoji_image* updates
    if (t >= 0.0 && partneremoji_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      partneremoji_image.tStart = t;  // (not accounting for frame time here)
      partneremoji_image.frameNStart = frameN;  // exact frame index
      
      partneremoji_image.setAutoDraw(true);
    }

    
    // *endpartnermatch_keys* updates
    if (t >= 0.0 && endpartnermatch_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endpartnermatch_keys.tStart = t;  // (not accounting for frame time here)
      endpartnermatch_keys.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { endpartnermatch_keys.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { endpartnermatch_keys.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { endpartnermatch_keys.clearEvents(); });
    }

    if (endpartnermatch_keys.status === PsychoJS.Status.STARTED) {
      let theseKeys = endpartnermatch_keys.getKeys({keyList: ['space'], waitRelease: false});
      _endpartnermatch_keys_allKeys = _endpartnermatch_keys_allKeys.concat(theseKeys);
      if (_endpartnermatch_keys_allKeys.length > 0) {
        endpartnermatch_keys.keys = _endpartnermatch_keys_allKeys[_endpartnermatch_keys_allKeys.length - 1].name;  // just the last key pressed
        endpartnermatch_keys.rt = _endpartnermatch_keys_allKeys[_endpartnermatch_keys_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *PressToContinue* updates
    if (t >= 0.0 && PressToContinue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PressToContinue.tStart = t;  // (not accounting for frame time here)
      PressToContinue.frameNStart = frameN;  // exact frame index
      
      PressToContinue.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Partner_MatchComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Partner_MatchRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Partner_Match' ---
    Partner_MatchComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(endpartnermatch_keys.corr, level);
    }
    psychoJS.experiment.addData('endpartnermatch_keys.keys', endpartnermatch_keys.keys);
    if (typeof endpartnermatch_keys.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('endpartnermatch_keys.rt', endpartnermatch_keys.rt);
        routineTimer.reset();
        }
    
    endpartnermatch_keys.stop();
    // the Routine "Partner_Match" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Photo_ShareRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Photo_Share' ---
    t = 0;
    Photo_ShareClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    participantimage_image.setImage(Photos);
    // keep track of which components have finished
    Photo_ShareComponents = [];
    Photo_ShareComponents.push(photobeingshared_text);
    Photo_ShareComponents.push(waitforfeedback_text);
    Photo_ShareComponents.push(participantimage_image);
    
    Photo_ShareComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function Photo_ShareRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Photo_Share' ---
    // get current time
    t = Photo_ShareClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *photobeingshared_text* updates
    if (t >= 0.0 && photobeingshared_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      photobeingshared_text.tStart = t;  // (not accounting for frame time here)
      photobeingshared_text.frameNStart = frameN;  // exact frame index
      
      photobeingshared_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (photobeingshared_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      photobeingshared_text.setAutoDraw(false);
    }
    
    // *waitforfeedback_text* updates
    if (t >= 0.0 && waitforfeedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      waitforfeedback_text.tStart = t;  // (not accounting for frame time here)
      waitforfeedback_text.frameNStart = frameN;  // exact frame index
      
      waitforfeedback_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (waitforfeedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      waitforfeedback_text.setAutoDraw(false);
    }
    
    // *participantimage_image* updates
    if (t >= 0.0 && participantimage_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      participantimage_image.tStart = t;  // (not accounting for frame time here)
      participantimage_image.frameNStart = frameN;  // exact frame index
      
      participantimage_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (participantimage_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      participantimage_image.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Photo_ShareComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Photo_ShareRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Photo_Share' ---
    Photo_ShareComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from initiatefeedbackresponses
    feedbackresponses = `${Partner} ${Feedback} your photo`;
    if ((Feedback === "liked")) {
        fdbkimage = "Images/thumbsup.tiff";
    } else {
        if ((Feedback === "did not like")) {
            fdbkimage = "Images/thumbsdown.tiff";
        }
    }
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function WaitingforfeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Waitingforfeedback' ---
    t = 0;
    WaitingforfeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    WaitingforfeedbackComponents = [];
    WaitingforfeedbackComponents.push(waiting_text);
    
    WaitingforfeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function WaitingforfeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Waitingforfeedback' ---
    // get current time
    t = WaitingforfeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *waiting_text* updates
    if (t >= 0.0 && waiting_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      waiting_text.tStart = t;  // (not accounting for frame time here)
      waiting_text.frameNStart = frameN;  // exact frame index
      
      waiting_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (waiting_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      waiting_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    WaitingforfeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function WaitingforfeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Waitingforfeedback' ---
    WaitingforfeedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    displayfeedback_text.setText(feedbackresponses);
    fdbkimage_image.setImage(fdbkimage);
    // Run 'Begin Routine' code from initiatelottery_code
    if (((TrialNumber % 5) === 0)) {
        startlottery = 1;
    } else {
        startlottery = 0;
    }
    
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(displayfeedback_text);
    feedbackComponents.push(fdbkimage_image);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *displayfeedback_text* updates
    if (t >= 0.0 && displayfeedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      displayfeedback_text.tStart = t;  // (not accounting for frame time here)
      displayfeedback_text.frameNStart = frameN;  // exact frame index
      
      displayfeedback_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (displayfeedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      displayfeedback_text.setAutoDraw(false);
    }
    
    // *fdbkimage_image* updates
    if (t >= 0.0 && fdbkimage_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fdbkimage_image.tStart = t;  // (not accounting for frame time here)
      fdbkimage_image.frameNStart = frameN;  // exact frame index
      
      fdbkimage_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fdbkimage_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fdbkimage_image.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function continuesharingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'continuesharing' ---
    t = 0;
    continuesharingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    sharenextphoto_key.keys = undefined;
    sharenextphoto_key.rt = undefined;
    _sharenextphoto_key_allKeys = [];
    // Run 'Begin Routine' code from hidecontinuesharingroutine_code
    if ((startlottery === 2)) {
        continueRoutine = false;
    } else {
        continueRoutine = true;
    }
    
    // keep track of which components have finished
    continuesharingComponents = [];
    continuesharingComponents.push(presstosharenextphoto_text);
    continuesharingComponents.push(sharenextphoto_key);
    
    continuesharingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function continuesharingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'continuesharing' ---
    // get current time
    t = continuesharingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *presstosharenextphoto_text* updates
    if (t >= 0.0 && presstosharenextphoto_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      presstosharenextphoto_text.tStart = t;  // (not accounting for frame time here)
      presstosharenextphoto_text.frameNStart = frameN;  // exact frame index
      
      presstosharenextphoto_text.setAutoDraw(true);
    }

    
    // *sharenextphoto_key* updates
    if (t >= 0.0 && sharenextphoto_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sharenextphoto_key.tStart = t;  // (not accounting for frame time here)
      sharenextphoto_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { sharenextphoto_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { sharenextphoto_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { sharenextphoto_key.clearEvents(); });
    }

    if (sharenextphoto_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = sharenextphoto_key.getKeys({keyList: ['space'], waitRelease: false});
      _sharenextphoto_key_allKeys = _sharenextphoto_key_allKeys.concat(theseKeys);
      if (_sharenextphoto_key_allKeys.length > 0) {
        sharenextphoto_key.keys = _sharenextphoto_key_allKeys[0].name;  // just the first key pressed
        sharenextphoto_key.rt = _sharenextphoto_key_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    continuesharingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function continuesharingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'continuesharing' ---
    continuesharingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(sharenextphoto_key.corr, level);
    }
    psychoJS.experiment.addData('sharenextphoto_key.keys', sharenextphoto_key.keys);
    if (typeof sharenextphoto_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('sharenextphoto_key.rt', sharenextphoto_key.rt);
        routineTimer.reset();
        }
    
    sharenextphoto_key.stop();
    // the Routine "continuesharing" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ChoiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Choice' ---
    t = 0;
    ChoiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    choice_keys.keys = undefined;
    choice_keys.rt = undefined;
    _choice_keys_allKeys = [];
    // keep track of which components have finished
    ChoiceComponents = [];
    ChoiceComponents.push(Experiencechoice_text);
    ChoiceComponents.push(computer_text);
    ChoiceComponents.push(self_text);
    ChoiceComponents.push(choice_keys);
    
    ChoiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function ChoiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Choice' ---
    // get current time
    t = ChoiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Experiencechoice_text* updates
    if (t >= 0.0 && Experiencechoice_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Experiencechoice_text.tStart = t;  // (not accounting for frame time here)
      Experiencechoice_text.frameNStart = frameN;  // exact frame index
      
      Experiencechoice_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Experiencechoice_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Experiencechoice_text.setAutoDraw(false);
    }
    
    // *computer_text* updates
    if (t >= 0.0 && computer_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      computer_text.tStart = t;  // (not accounting for frame time here)
      computer_text.frameNStart = frameN;  // exact frame index
      
      computer_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (computer_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      computer_text.setAutoDraw(false);
    }
    
    // *self_text* updates
    if (t >= 0.0 && self_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      self_text.tStart = t;  // (not accounting for frame time here)
      self_text.frameNStart = frameN;  // exact frame index
      
      self_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (self_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      self_text.setAutoDraw(false);
    }
    // Run 'Each Frame' code from setvariables_code
    import * as random from 'random';
    var random_entry;
    random_entry = random.choice(computer_choice);
    if ((choice_keys.keys === "c")) {
        computer_text.setColor("green");
    } else {
        if ((choice_keys.keys === "s")) {
            self_text.setColor("green");
        }
    }
    
    
    // *choice_keys* updates
    if (t >= 0.0 && choice_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_keys.tStart = t;  // (not accounting for frame time here)
      choice_keys.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { choice_keys.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { choice_keys.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { choice_keys.clearEvents(); });
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (choice_keys.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      choice_keys.status = PsychoJS.Status.FINISHED;
  }

    if (choice_keys.status === PsychoJS.Status.STARTED) {
      let theseKeys = choice_keys.getKeys({keyList: ['c', 's'], waitRelease: false});
      _choice_keys_allKeys = _choice_keys_allKeys.concat(theseKeys);
      if (_choice_keys_allKeys.length > 0) {
        choice_keys.keys = _choice_keys_allKeys[_choice_keys_allKeys.length - 1].name;  // just the last key pressed
        choice_keys.rt = _choice_keys_allKeys[_choice_keys_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ChoiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ChoiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Choice' ---
    ChoiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from setvariables_code
    if ((choice_keys.keys === "c")) {
        selfrunOrNot = 0;
        comprunOrNot = 1;
    } else {
        if ((choice_keys.keys === "s")) {
            selfrunOrNot = 1;
            comprunOrNot = 0;
        } else {
            selfrunOrNot = 0;
            comprunOrNot = 0;
        }
    }
    computer_text.setColor("white");
    self_text.setColor("white");
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(choice_keys.corr, level);
    }
    psychoJS.experiment.addData('choice_keys.keys', choice_keys.keys);
    if (typeof choice_keys.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('choice_keys.rt', choice_keys.rt);
        }
    
    choice_keys.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ExperiencecomputerchoiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Experiencecomputerchoice' ---
    t = 0;
    ExperiencecomputerchoiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    ExperiencecomputerchoiceComponents = [];
    
    ExperiencecomputerchoiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function ExperiencecomputerchoiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Experiencecomputerchoice' ---
    // get current time
    t = ExperiencecomputerchoiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ExperiencecomputerchoiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ExperiencecomputerchoiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Experiencecomputerchoice' ---
    ExperiencecomputerchoiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Experiencecomputerchoice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Experience_computer_choiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Experience_computer_choice' ---
    t = 0;
    Experience_computer_choiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(8.000000);
    // update component parameters for each repeat
    Socialleft_text_2.setText(Left);
    Socialright_text_2.setText(Right);
    leftmoney_text_2.setText(leftmoney);
    Rightmoney_text_2.setText(rightmoney);
    Rightchoicekey_text_2.setText('');
    // keep track of which components have finished
    Experience_computer_choiceComponents = [];
    Experience_computer_choiceComponents.push(Socialleft_text_2);
    Experience_computer_choiceComponents.push(Socialright_text_2);
    Experience_computer_choiceComponents.push(leftmoney_text_2);
    Experience_computer_choiceComponents.push(Rightmoney_text_2);
    Experience_computer_choiceComponents.push(OR_text_2);
    Experience_computer_choiceComponents.push(Leftchoicekey_text_2);
    Experience_computer_choiceComponents.push(Rightchoicekey_text_2);
    Experience_computer_choiceComponents.push(blank);
    
    Experience_computer_choiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function Experience_computer_choiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Experience_computer_choice' ---
    // get current time
    t = Experience_computer_choiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Socialleft_text_2* updates
    if (t >= 0.0 && Socialleft_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Socialleft_text_2.tStart = t;  // (not accounting for frame time here)
      Socialleft_text_2.frameNStart = frameN;  // exact frame index
      
      Socialleft_text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Socialleft_text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Socialleft_text_2.setAutoDraw(false);
    }
    
    // *Socialright_text_2* updates
    if (t >= 0.0 && Socialright_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Socialright_text_2.tStart = t;  // (not accounting for frame time here)
      Socialright_text_2.frameNStart = frameN;  // exact frame index
      
      Socialright_text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Socialright_text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Socialright_text_2.setAutoDraw(false);
    }
    
    // *leftmoney_text_2* updates
    if (t >= 0.0 && leftmoney_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      leftmoney_text_2.tStart = t;  // (not accounting for frame time here)
      leftmoney_text_2.frameNStart = frameN;  // exact frame index
      
      leftmoney_text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (leftmoney_text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      leftmoney_text_2.setAutoDraw(false);
    }
    
    // *Rightmoney_text_2* updates
    if (t >= 0 && Rightmoney_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Rightmoney_text_2.tStart = t;  // (not accounting for frame time here)
      Rightmoney_text_2.frameNStart = frameN;  // exact frame index
      
      Rightmoney_text_2.setAutoDraw(true);
    }

    frameRemains = 0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Rightmoney_text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Rightmoney_text_2.setAutoDraw(false);
    }
    
    // *OR_text_2* updates
    if (t >= 0.0 && OR_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      OR_text_2.tStart = t;  // (not accounting for frame time here)
      OR_text_2.frameNStart = frameN;  // exact frame index
      
      OR_text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (OR_text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      OR_text_2.setAutoDraw(false);
    }
    
    // *Leftchoicekey_text_2* updates
    if (t >= 0.0 && Leftchoicekey_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Leftchoicekey_text_2.tStart = t;  // (not accounting for frame time here)
      Leftchoicekey_text_2.frameNStart = frameN;  // exact frame index
      
      Leftchoicekey_text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Leftchoicekey_text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Leftchoicekey_text_2.setAutoDraw(false);
    }
    
    // *Rightchoicekey_text_2* updates
    if (t >= 0.0 && Rightchoicekey_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Rightchoicekey_text_2.tStart = t;  // (not accounting for frame time here)
      Rightchoicekey_text_2.frameNStart = frameN;  // exact frame index
      
      Rightchoicekey_text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Rightchoicekey_text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Rightchoicekey_text_2.setAutoDraw(false);
    }
    
    // *blank* updates
    if (t >= 6 && blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank.tStart = t;  // (not accounting for frame time here)
      blank.frameNStart = frameN;  // exact frame index
      
      blank.setAutoDraw(true);
    }

    frameRemains = 6 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blank.setAutoDraw(false);
    }
    // Run 'Each Frame' code from displaylotterychoice_code_2
    if ((blank.status === PsychoJS.Status.STARTED)) {
        if ((random_entry === "Left")) {
            Socialleft_text_2.setColor("green");
        } else {
            if ((random_entry === "Right")) {
                Socialright_text_2.setColor("green");
            }
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Experience_computer_choiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Experience_computer_choiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Experience_computer_choice' ---
    Experience_computer_choiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from displaylotterychoice_code_2
    Socialleft_text_2.setColor("white");
    Socialright_text_2.setColor("white");
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function SchoiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Schoice' ---
    t = 0;
    SchoiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    SchoiceComponents = [];
    SchoiceComponents.push(SelfChoiceExperiences);
    SchoiceComponents.push(key_resp_2);
    
    SchoiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function SchoiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Schoice' ---
    // get current time
    t = SchoiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *SelfChoiceExperiences* updates
    if (t >= 0.0 && SelfChoiceExperiences.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SelfChoiceExperiences.tStart = t;  // (not accounting for frame time here)
      SelfChoiceExperiences.frameNStart = frameN;  // exact frame index
      
      SelfChoiceExperiences.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    SchoiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function SchoiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Schoice' ---
    SchoiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "Schoice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ExperienceselfchoiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Experienceselfchoice' ---
    t = 0;
    ExperienceselfchoiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Socialleft_text.setText(Left);
    Socialright_text.setText(Right);
    leftmoney_text.setText(leftmoney);
    experiencechoice_keys.keys = undefined;
    experiencechoice_keys.rt = undefined;
    _experiencechoice_keys_allKeys = [];
    responsefeedback.setText(feedback_msg);
    Rightmoney_text.setText(rightmoney);
    Rightchoicekey_text.setText('[y]');
    // keep track of which components have finished
    ExperienceselfchoiceComponents = [];
    ExperienceselfchoiceComponents.push(Socialleft_text);
    ExperienceselfchoiceComponents.push(Socialright_text);
    ExperienceselfchoiceComponents.push(leftmoney_text);
    ExperienceselfchoiceComponents.push(experiencechoice_keys);
    ExperienceselfchoiceComponents.push(responsefeedback);
    ExperienceselfchoiceComponents.push(Rightmoney_text);
    ExperienceselfchoiceComponents.push(OR_text);
    ExperienceselfchoiceComponents.push(Leftchoicekey_text);
    ExperienceselfchoiceComponents.push(Rightchoicekey_text);
    
    ExperienceselfchoiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function ExperienceselfchoiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Experienceselfchoice' ---
    // get current time
    t = ExperienceselfchoiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Socialleft_text* updates
    if (t >= 0.0 && Socialleft_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Socialleft_text.tStart = t;  // (not accounting for frame time here)
      Socialleft_text.frameNStart = frameN;  // exact frame index
      
      Socialleft_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Socialleft_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Socialleft_text.setAutoDraw(false);
    }
    
    // *Socialright_text* updates
    if (t >= 0.0 && Socialright_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Socialright_text.tStart = t;  // (not accounting for frame time here)
      Socialright_text.frameNStart = frameN;  // exact frame index
      
      Socialright_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Socialright_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Socialright_text.setAutoDraw(false);
    }
    
    // *leftmoney_text* updates
    if (t >= 0.0 && leftmoney_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      leftmoney_text.tStart = t;  // (not accounting for frame time here)
      leftmoney_text.frameNStart = frameN;  // exact frame index
      
      leftmoney_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (leftmoney_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      leftmoney_text.setAutoDraw(false);
    }
    
    // *experiencechoice_keys* updates
    if (t >= 0 && experiencechoice_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      experiencechoice_keys.tStart = t;  // (not accounting for frame time here)
      experiencechoice_keys.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { experiencechoice_keys.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { experiencechoice_keys.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { experiencechoice_keys.clearEvents(); });
    }

    frameRemains = 0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (experiencechoice_keys.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      experiencechoice_keys.status = PsychoJS.Status.FINISHED;
  }

    if (experiencechoice_keys.status === PsychoJS.Status.STARTED) {
      let theseKeys = experiencechoice_keys.getKeys({keyList: ['x', 'y'], waitRelease: false});
      _experiencechoice_keys_allKeys = _experiencechoice_keys_allKeys.concat(theseKeys);
      if (_experiencechoice_keys_allKeys.length > 0) {
        experiencechoice_keys.keys = _experiencechoice_keys_allKeys[0].name;  // just the first key pressed
        experiencechoice_keys.rt = _experiencechoice_keys_allKeys[0].rt;
      }
    }
    
    // Run 'Each Frame' code from displaylotterychoice_code
    if ((experiencechoice_keys.keys === "x")) {
        Socialleft_text.setColor("green");
    } else {
        if ((experiencechoice_keys.keys === "y")) {
            Socialright_text.setColor("green");
        } else {
            feedback_msg = `.`;
        }
    }
    responsefeedback.setText(feedback_msg);
    
    
    // *responsefeedback* updates
    if (t >= 0.0 && responsefeedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      responsefeedback.tStart = t;  // (not accounting for frame time here)
      responsefeedback.frameNStart = frameN;  // exact frame index
      
      responsefeedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (responsefeedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      responsefeedback.setAutoDraw(false);
    }
    
    // *Rightmoney_text* updates
    if (t >= 0.0 && Rightmoney_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Rightmoney_text.tStart = t;  // (not accounting for frame time here)
      Rightmoney_text.frameNStart = frameN;  // exact frame index
      
      Rightmoney_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Rightmoney_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Rightmoney_text.setAutoDraw(false);
    }
    
    // *OR_text* updates
    if (t >= 0.0 && OR_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      OR_text.tStart = t;  // (not accounting for frame time here)
      OR_text.frameNStart = frameN;  // exact frame index
      
      OR_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (OR_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      OR_text.setAutoDraw(false);
    }
    
    // *Leftchoicekey_text* updates
    if (t >= 0.0 && Leftchoicekey_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Leftchoicekey_text.tStart = t;  // (not accounting for frame time here)
      Leftchoicekey_text.frameNStart = frameN;  // exact frame index
      
      Leftchoicekey_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Leftchoicekey_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Leftchoicekey_text.setAutoDraw(false);
    }
    
    // *Rightchoicekey_text* updates
    if (t >= 0.0 && Rightchoicekey_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Rightchoicekey_text.tStart = t;  // (not accounting for frame time here)
      Rightchoicekey_text.frameNStart = frameN;  // exact frame index
      
      Rightchoicekey_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Rightchoicekey_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Rightchoicekey_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ExperienceselfchoiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ExperienceselfchoiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Experienceselfchoice' ---
    ExperienceselfchoiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(experiencechoice_keys.corr, level);
    }
    psychoJS.experiment.addData('experiencechoice_keys.keys', experiencechoice_keys.keys);
    if (typeof experiencechoice_keys.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('experiencechoice_keys.rt', experiencechoice_keys.rt);
        }
    
    experiencechoice_keys.stop();
    // Run 'End Routine' code from displaylotterychoice_code
    Socialleft_text.setColor("white");
    Socialright_text.setColor("white");
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ContinueRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Continue' ---
    t = 0;
    ContinueClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    if (((TrialNumber % 30) === 0)) {
        continueRoutine = false;
    }
    if (((comprunOrNot === 0) && (selfrunOrNot === 0))) {
        resumetext = "You missed an opportunity to play the lottery. \n\n\n Please respond withtin 3 seconds on your next opportunity. \n\nPress space to continue.";
    } else {
        resumetext = "Press space to resume sharing your photos.";
    }
    
    resumeafterexperience_keys.keys = undefined;
    resumeafterexperience_keys.rt = undefined;
    _resumeafterexperience_keys_allKeys = [];
    resumetext_text.setText(resumetext);
    // keep track of which components have finished
    ContinueComponents = [];
    ContinueComponents.push(resumeafterexperience_keys);
    ContinueComponents.push(resumetext_text);
    
    ContinueComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function ContinueRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Continue' ---
    // get current time
    t = ContinueClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *resumeafterexperience_keys* updates
    if (t >= 0.0 && resumeafterexperience_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resumeafterexperience_keys.tStart = t;  // (not accounting for frame time here)
      resumeafterexperience_keys.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resumeafterexperience_keys.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resumeafterexperience_keys.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resumeafterexperience_keys.clearEvents(); });
    }

    if (resumeafterexperience_keys.status === PsychoJS.Status.STARTED) {
      let theseKeys = resumeafterexperience_keys.getKeys({keyList: ['space'], waitRelease: false});
      _resumeafterexperience_keys_allKeys = _resumeafterexperience_keys_allKeys.concat(theseKeys);
      if (_resumeafterexperience_keys_allKeys.length > 0) {
        resumeafterexperience_keys.keys = _resumeafterexperience_keys_allKeys[0].name;  // just the first key pressed
        resumeafterexperience_keys.rt = _resumeafterexperience_keys_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *resumetext_text* updates
    if (t >= 0.0 && resumetext_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resumetext_text.tStart = t;  // (not accounting for frame time here)
      resumetext_text.frameNStart = frameN;  // exact frame index
      
      resumetext_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ContinueComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ContinueRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Continue' ---
    ContinueComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resumeafterexperience_keys.corr, level);
    }
    psychoJS.experiment.addData('resumeafterexperience_keys.keys', resumeafterexperience_keys.keys);
    if (typeof resumeafterexperience_keys.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resumeafterexperience_keys.rt', resumeafterexperience_keys.rt);
        routineTimer.reset();
        }
    
    resumeafterexperience_keys.stop();
    // the Routine "Continue" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function SalienceRatingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SalienceRating' ---
    t = 0;
    SalienceRatingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from saliencyrating_code
    if ((! ((TrialNumber % 30) === 0))) {
        continueRoutine = false;
    }
    salienceratingtext = `How likely are you to share photos with ${Partner} in the future?
    
    Use your left and right arrows to move the arrow to your desired rating.`
    ;
    psychoJS.eventManager.clearEvents("keyboard");
    salience_slider.markerPos = 3;
    
    saliencequestion_text.setText(salienceratingtext);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    salienceavatar_image.setImage(partneravatar);
    displayrating_text.setText(rating_forsalience);
    // keep track of which components have finished
    SalienceRatingComponents = [];
    SalienceRatingComponents.push(saliencequestion_text);
    SalienceRatingComponents.push(key_resp);
    SalienceRatingComponents.push(salienceavatar_image);
    SalienceRatingComponents.push(saliencecontinue_text);
    SalienceRatingComponents.push(displayrating_text);
    
    SalienceRatingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function SalienceRatingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SalienceRating' ---
    // get current time
    t = SalienceRatingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from saliencyrating_code
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    salience_slider.draw();
    keys = psychoJS.eventManager.getKeys();
    displayrating_text.setText(Math.round(salience_slider.getMarkerPos(), 1));
    if (keys.length) {
        if (_pj.in_es6("left", keys)) {
            salience_slider.markerPos = (salience_slider.markerPos - 0.1);
            rating_forsalience = salience_slider.getRating();
            displayrating_text.setText(Math.round(salience_slider.getMarkerPos(), 1));
        } else {
            if (_pj.in_es6("right", keys)) {
                salience_slider.markerPos = (salience_slider.markerPos + 0.1);
                rating_forsalience = salience_slider.getRating();
                displayrating_text.setText(Math.round(salience_slider.getMarkerPos(), 1));
            }
        }
    }
    
    
    // *saliencequestion_text* updates
    if (t >= 0.0 && saliencequestion_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      saliencequestion_text.tStart = t;  // (not accounting for frame time here)
      saliencequestion_text.frameNStart = frameN;  // exact frame index
      
      saliencequestion_text.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *salienceavatar_image* updates
    if (t >= 0.0 && salienceavatar_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      salienceavatar_image.tStart = t;  // (not accounting for frame time here)
      salienceavatar_image.frameNStart = frameN;  // exact frame index
      
      salienceavatar_image.setAutoDraw(true);
    }

    
    // *saliencecontinue_text* updates
    if (t >= 0.0 && saliencecontinue_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      saliencecontinue_text.tStart = t;  // (not accounting for frame time here)
      saliencecontinue_text.frameNStart = frameN;  // exact frame index
      
      saliencecontinue_text.setAutoDraw(true);
    }

    
    // *displayrating_text* updates
    if (t >= 0.0 && displayrating_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      displayrating_text.tStart = t;  // (not accounting for frame time here)
      displayrating_text.frameNStart = frameN;  // exact frame index
      
      displayrating_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    SalienceRatingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function SalienceRatingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SalienceRating' ---
    SalienceRatingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from saliencyrating_code
    entiretaskloop.addData("salience_rating", Math.round(salience_slider.getMarkerPos(), 1));
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "SalienceRating" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function StressLevelRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'StressLevel' ---
    t = 0;
    StressLevelClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from stresslevelslider
    if ((! ((TrialNumber % 30) === 0))) {
        continueRoutine = false;
    }
    stressleveltext = `Please rate your current stress level.
    
    
    Use your mouse or left and right arrows to move the arrow to your desired rating.`
    ;
    psychoJS.eventManager.clearEvents("keyboard");
    stress_slider.markerPos = 5;
    
    stresslevel_text.setText(stressleveltext);
    stresslevel_keypress.keys = undefined;
    stresslevel_keypress.rt = undefined;
    _stresslevel_keypress_allKeys = [];
    displaystressrating_text.setText(rating_forstress);
    // keep track of which components have finished
    StressLevelComponents = [];
    StressLevelComponents.push(stresslevel_text);
    StressLevelComponents.push(stresslevel_keypress);
    StressLevelComponents.push(displaystressrating_text);
    
    StressLevelComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function StressLevelRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'StressLevel' ---
    // get current time
    t = StressLevelClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from stresslevelslider
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    stress_slider.draw();
    keys = psychoJS.eventManager.getKeys();
    displaystressrating_text.setText(Math.round(stress_slider.getMarkerPos(), 1));
    if (keys.length) {
        if (_pj.in_es6("left", keys)) {
            stress_slider.markerPos = (stress_slider.markerPos - 0.1);
            rating_forstress = stress_slider.getRating();
            displayrating_text.setText(Math.round(stress_slider.getMarkerPos(), 1));
        } else {
            if (_pj.in_es6("right", keys)) {
                stress_slider.markerPos = (stress_slider.markerPos + 0.1);
                rating_forstress = stress_slider.getRating();
                displayrating_text.setText(Math.round(stress_slider.getMarkerPos(), 1));
            }
        }
    }
    
    
    // *stresslevel_text* updates
    if (t >= 0.0 && stresslevel_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stresslevel_text.tStart = t;  // (not accounting for frame time here)
      stresslevel_text.frameNStart = frameN;  // exact frame index
      
      stresslevel_text.setAutoDraw(true);
    }

    
    // *stresslevel_keypress* updates
    if (t >= 0.0 && stresslevel_keypress.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stresslevel_keypress.tStart = t;  // (not accounting for frame time here)
      stresslevel_keypress.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { stresslevel_keypress.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { stresslevel_keypress.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { stresslevel_keypress.clearEvents(); });
    }

    if (stresslevel_keypress.status === PsychoJS.Status.STARTED) {
      let theseKeys = stresslevel_keypress.getKeys({keyList: ['space'], waitRelease: false});
      _stresslevel_keypress_allKeys = _stresslevel_keypress_allKeys.concat(theseKeys);
      if (_stresslevel_keypress_allKeys.length > 0) {
        stresslevel_keypress.keys = _stresslevel_keypress_allKeys[_stresslevel_keypress_allKeys.length - 1].name;  // just the last key pressed
        stresslevel_keypress.rt = _stresslevel_keypress_allKeys[_stresslevel_keypress_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *displaystressrating_text* updates
    if (t >= 0.0 && displaystressrating_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      displaystressrating_text.tStart = t;  // (not accounting for frame time here)
      displaystressrating_text.frameNStart = frameN;  // exact frame index
      
      displaystressrating_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    StressLevelComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function StressLevelRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'StressLevel' ---
    StressLevelComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from stresslevelslider
    stresslevel = stress_slider.getRating();
    entiretaskloop.addData("stress_level", Math.round(stress_slider.getMarkerPos(), 1));
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(stresslevel_keypress.corr, level);
    }
    psychoJS.experiment.addData('stresslevel_keypress.keys', stresslevel_keypress.keys);
    if (typeof stresslevel_keypress.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('stresslevel_keypress.rt', stresslevel_keypress.rt);
        routineTimer.reset();
        }
    
    stresslevel_keypress.stop();
    // the Routine "StressLevel" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
