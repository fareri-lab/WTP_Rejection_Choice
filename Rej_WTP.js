/******************************
 * Rejectiontask_Oneloop Test *
 ******************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'RejTask';  // from the Builder filename that created this script
let expInfo = {
    'participant': ''
};

// add info from the URL:
util.addInfoFromUrl(expInfo);
console.log(expInfo['participant'])
// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from saliencyrating_code
saliencerating = "";
salienceratingtext = "";
rating_forsalience = "";

// Run 'Before Experiment' code from stresslevelslider
stresslevel = "";
stressleveltext = "";
rating_forstress = "";


var participantID;
participantID = expInfo["participant"];
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
// const WTPloopLoopScheduler = new Scheduler(psychoJS);
// flowScheduler.add(WTPloopLoopBegin(entiretaskloopLoopScheduler));
// flowScheduler.add(WTPloopLoopScheduler);
// flowScheduler.add(WTPloopLoopEnd);
flowScheduler.add(End_ScreenRoutineBegin());
flowScheduler.add(End_ScreenRoutineEachFrame());
flowScheduler.add(End_ScreenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo});


psychoJS.start({
  resources: [
    {'name': `Participant_Images/${participantID}/${participantID}_WTP.xlsx`, 'path': `Participant_Images/${participantID}/${participantID}_WTP.xlsx`},
    {'name': `Participant_Images/${participantID}/${participantID}_trials.xlsx`, 'path': `Participant_Images/${participantID}/${participantID}_trials.xlsx`},
    {'name': 'Task_Images/facedown_card.png', 'path': 'Task_Images/facedown_card.png'},
    {'name': 'Task_Images/facedown_card.png', 'path': 'Task_Images/facedown_card.png'},
    {'name': 'Task_Images/nerdemoji_nobackground.png', 'path': 'Task_Images/nerdemoji_nobackground.png'},
    {'name': 'Task_Images/smilingemoji.png', 'path': 'Task_Images/smilingemoji.png'},
    {'name': 'Task_Images/sunglassemoji_nobackground.png', 'path': 'Task_Images/sunglassemoji_nobackground.png'},
    {'name': 'Task_Images/thumbsdown.png', 'path': 'Task_Images/thumbsdown.png'},
    {'name': 'Task_Images/thumbsup.png', 'path': 'Task_Images/thumbsup.png'},
    {'name': 'Task_Images/cowboyemoji.png', 'path': 'Task_Images/cowboyemoji.png'},
    {'name': 'Task_Images/huggingemoji.png', 'path': 'Task_Images/huggingemoji.png'},

    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_5.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_5.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_13.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_13.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_12.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_12.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_4.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_4.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_6.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_6.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_10.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_10.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_11.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_11.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_7.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_7.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_3.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_3.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_15.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_15.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_29.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_29.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_28.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_28.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_14.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_14.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_2.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_2.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_16.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_16.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_17.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_17.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_1.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_1.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_26.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_26.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_27.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_27.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_19.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_19.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_25.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_25.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_30.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_30.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_24.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_24.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_18.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_18.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_20.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_20.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_21.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_21.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_9.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_9.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_23.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_23.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_22.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_22.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_8.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_8.jpg` ,},
    {'name': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_8.jpg`, 'path': `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_Images/${expInfo["participant"]}_Image_8.jpg` ,}
]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
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

var weblink;
weblink= "https://adelphiderner.qualtrics.com/jfe/form/SV_4GR8sO1rBmqsz3M";
var Welcome_ScreenClock;
var Welcome;
var endwelcomescreen_keys;
var partnermatch;
var partneravatar;
var trialClock;
var testClock;
var First_InstructionsClock;
var FirstInstructions;
var endinstructionscreen_keys;
var partner_codeClock;
var WaitingToMatchClock;
var Match_text;
var syncing_text;
var text_0;
var Transparent;
var Loading_25;
var text_25;
var Loading_50;
var text_50;
var Loading_75;
var text_75;
var Loading_100;
var text_100;
var Partner_MatchClock;
var Youhavematched;
var partneremoji_image;
var endpartnermatch_keys;
var PressToContinue;
var Photo_ShareClock;
var photobeingshared_text;
var waitforfeedback_text;
var feedbackresponses;
var fdbkimage;
var participantimage_image;
var WaitingforfeedbackClock;
var waiting_text;
var feedbackClock;
var displayfeedback_text;
var fdbkimage_image;
var startWTP;
var continuesharingClock;
var presstosharenextphoto_text;
var sharenextphoto_key;
var ChoiceClock;
var lotterychoice_text;
var computer_text;
var self_text;
var conditionalBlank;
var response_msg;
var feedback_msg;
var computer_choice;
var selfrunOrNot;
var comprunOrNot;
var playlottery;
var resumetext;
var choice_keys;
var LotterycomputerchoiceClock;
var lotterycard;
var Block1_facedowncard;
var computerresponse;
var LotteryselfchoiceClock;
var pickacard_text;
var higher_text;
var lower_text;
var lotteryguess_keys;
var responsefeedback;
var block1_cardimage;
var ContinueClock;
var resumeafterlottery_keys;
var resumetext_text;
var end_screen;
var end_screenclock;
var end_screen_keys;
// var thankyou_screen;
// var thankyou_screenclock;

// salience slider
var userMouse;
var mouseClock;
var SalienceRatingClock;
var salience_slider;
var saliencequestion_text;
var key_resp;
var salienceavatar_image;
var saliencecontinue_text;
var Salience_Button;
var displayrating_text;
var saliencerating;
var salienceratingtext;
var rating_forsalience;

//stress slider
var StressLevelClock;
var stress_slider;
var stresslevel_text;
var userMouse;
var mouseClock;
var Stress_Button;
var stresscontinue_text
var stresslevel_keypress;
var displaystressrating_text;
var globalClock;
var routineTimer;
var stresslevel;
var stressleveltext;
var rating_forstress;
var partnermatch;
var partneravatar;
var feedbackresponses;
var fdbkimage;
var startWTP;
var response_msg;
var feedback_msg;
var computer_choice;
var selfrunOrNot;
var comprunOrNot;
var resumetext;
//initiate wtp

var ChoiceClock;
var leftText;
var rightText;
var money1;
var money2;
var instruct_toptext;
var ISIClock;
var ISI;
var social1Clock;
var leftText1;
var rightText1;
var money3;
var money4;
var Instructions2;
var ISI2Clock;
var ISI2;
var instructionsClock;
var ty;
var Q1Clock;

async function experimentInit() {
  // Initialize components for Routine "Welcome_Screen"
  Welcome_ScreenClock = new util.Clock();
  Welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'Welcome',
    text: 'Welcome to the Social Media Task!\n\n\nToday you will have the opportunity to share some of your Instagram photos with other participants and receive feedback, as well as a few opportunities to play a lottery for an additional bonus.\n\n\n To begin, you will be assigned a partner at random by the computer. Next, your instagram photos will be shared with your partner. After each photo is shared, your partner will give you feedback on whether they liked or disliked your photo. You will have the chance to share your photos with 3 different partners during this task.\n\n\nPress space to continue.',
    font: 'Open Sans',
    units: undefined,
    pos: [0, 0], height: 0.065,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0
  });

  endwelcomescreen_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});


  // Run 'Begin Experiment' code from buildspreadsheet
  partnermatch = "";
  partneravatar = "";

  // Initialize components for Routine "test"
  testClock = new util.Clock();
  // Initialize components for Routine "First_Instructions"
  First_InstructionsClock = new util.Clock();
  FirstInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'FirstInstructions',
    text: 'At select times throughout the course of the experiment, you will be asked to play a lottery. \n\n\n During each lottery, the task is to guess if a facedown card is higher or lower than a given number. You can either choose to play the lottery for yourself or have the computer play on your behalf.\n\n\n You will not receive feedback about any of your guesses. However, at the end of the task, one lottery guess will be selected at random and you will be notified of any earnings at the end of the task.\n\n\n You are now ready to begin sharing your photos. \nPress space to begin! \n',
    font: 'Open Sans',
    units: undefined,
    pos: [0, 0], height: 0.065,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0
  });

  endinstructionscreen_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "partner_code"
  partner_codeClock = new util.Clock();
  // Run 'Begin Experiment' code from partnermatchcode

  // Initialize components for Routine "WaitingToMatch"
  WaitingToMatchClock = new util.Clock();
  Match_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Match_text',
    text: 'You will now be matched with a game partner selected at random by the computer. \n\n Please wait...',
    font: 'Open Sans',
    units: undefined,
    pos: [0, 0.0], height: 0.08,  wrapWidth: undefined, ori: 0.0,
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
  startWTP = "";

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
  lotterychoice_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'lotterychoice_text',
    text: 'You have reached the lottery. Please choose [c] to have the computer play on your behalf or choose [s] to play the lottery for yourself. You have four seconds to choose.',
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
    pos: [(- 0.3), (- 0.4)], height: 0.06,  wrapWidth: undefined, ori: 0.0,
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
    pos: [0.3, (- 0.4)], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0
  });

  conditionalBlank = new visual.TextStim({
    win: psychoJS.window,
    name: 'conditionalconditionalBlank',
    text: '',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0
  });

  // Run 'Begin Experiment' code from setvariables_code
  response_msg = " ";
  feedback_msg = " ";
  computer_choice = ["lower", "lower", "lower", "lower", "lower", "higher", "higher", "higher", "higher", "higher"];
  selfrunOrNot = "";
  comprunOrNot = "";
  playlottery = "";
  resumetext = "";

  choice_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "Lotterycomputerchoice"
  LotterycomputerchoiceClock = new util.Clock();
  lotterycard = new visual.TextStim({
    win: psychoJS.window,
    name: 'lotterycard',
    text: 'The computer will select whether it believes the card will be higher or lower than 5.',
    font: 'Open Sans',
    units: undefined,
    pos: [0, 0.6], height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0
  });

  Block1_facedowncard = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Block1_facedowncard', units : undefined,
    image : 'Task_Images/facedown_card.png', mask : undefined,
    ori : 0.0, pos : [0, -0.1], size : [0.75, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0
  });
  computerresponse = new visual.TextStim({
    win: psychoJS.window,
    name: 'computerresponse',
    text: '',
    font: 'Open Sans',
    units: undefined,
    pos: [0, (- 0.65)], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('cornflowerblue'),  opacity: undefined,
    depth: -3.0
  });

  // Initialize components for Routine "Lotteryselfchoice"
  LotteryselfchoiceClock = new util.Clock();
  pickacard_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'pickacard_text',
    text: 'Please select whether you believe the card will be higher or lower than 5. Press [h] for higher or [l] for lower.',
    font: 'Open Sans',
    units: undefined,
    pos: [0, 0.65], height: 0.09,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0
  });

  higher_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'higher_text',
    text: 'Higher',
    font: 'Open Sans',
    units: undefined,
    pos: [0.3, (- 0.55)], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0
  });

  lower_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'lower_text',
    text: 'Lower',
    font: 'Open Sans',
    units: undefined,
    pos: [(- 0.3), (- 0.55)], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0
  });

  lotteryguess_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  responsefeedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'responsefeedback',
    text: '',
    font: 'Open Sans',
    units: undefined,
    pos: [0, (- 0.7)], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('cornflowerblue'),  opacity: undefined,
    depth: -6.0
  });

  block1_cardimage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'block1_cardimage', units : undefined,
    image : 'Task_Images/facedown_card.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.75, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0
  });
  // Initialize components for Routine "Continue"
  ContinueClock = new util.Clock();
  resumeafterlottery_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

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

  mouseClock =  new util.Clock();
  userMouse = new core.Mouse({
    win: psychoJS.window,
    name: 'userMouse',
  });
  // Initialize components for Routine "SalienceRating"
  SalienceRatingClock = new util.Clock();
  // Run 'Begin Experiment' code from saliencyrating_code
  // salience_slider = new visual.Slider({"win": psychoJS.window, "name": "slider", "startValue": 999, "size": [1.0, 0.1], "pos": [0, (- 0.4)], "units": null, "labels": [1, 2, 3, 4, 5], "ticks": [1, 2, 3, 4, 5], "granularity": 0.0, "style": "rating", "styleTweaks": ["labels45", "triangleMarker"], "opacity": null, "labelColor": "white", "markerColor": "cornflowerblue", "lineColor": "white", "colorSpace": "rgb", "font": "Open Sans", "labelHeight": 0.05, "flip": false, "ori": 0.0, "depth": (- 5), "readOnly": false});
  salience_slider = new visual.Slider({
    win: psychoJS.window,
    name: "slider",
    size: [1.0, 0.1],
    pos: [0, -0.2], //[0, (- 0.4)]
    units: null,
    labels: [1, 2, 3, 4, 5],
    ticks: [1, 2, 3, 4, 5],
    granularity: 0.0,
    opacity: null,
    style: [visual.Slider.Style.RATING],
    labelColor: "white",
    markerColor: "cornflowerblue",
    lineColor: "white",
    colorSpace: "rgb",
    font: "Open Sans",
    labelHeight: 0.05,
    flip: false,
    ori: 0.0,
    depth: (- 5),
    readOnly: false,
    autoDraw: false});

  saliencequestion_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'saliencequestion_text',
    text: '',
    font: 'Open Sans',
    units: undefined,
    // (0,0.)
    pos: [0, 0.8], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0
  });

  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  salienceavatar_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'salienceavatar_image', units : undefined,
    image : undefined, mask : undefined,
    ori : 0.0, //(0,0)
    pos : [0, 0.3],
    size : [0.35, 0.55], //[0.3, 0.55]
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0
  });
  saliencecontinue_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'saliencecontinue_text',
    text: 'To continue, click the square when your desired rating appears',
    font: 'Open Sans',
    units: undefined,
    pos: [0, (- 0.8)], //[0, (- 0.8)]
    height: 0.045, //0.07
     wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0
  });

  displayrating_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'displayrating_text',
    text: 'Click line',
    font: 'Open Sans',
    units: undefined,
    pos: [0, (- 0.6)], height: 0.065,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('cornflowerblue'),  opacity: undefined,
    depth: -5.0
  });

  Salience_Button = new visual.Rect ({
   win: psychoJS.window, name: 'polygon',
   width: [0.25, 0.25][0], height: [0.25, 0.25][1],
   ori: 0, pos: [0, (- 0.6)],
   lineWidth: 1, lineColor: new util.Color('white'),
   fillColor: undefined,
   opacity: 1, depth: -1, interpolate: true,
 });

  // Initialize components for Routine "StressLevel"
  StressLevelClock = new util.Clock();
  // Run 'Begin Experiment' code from stresslevelslider
  // stress_slider = new visual.Slider({"win": psychoJS.window, "name": "slider", "startValue": 999, "size": [1.0, 0.1], "pos": [0, (- 0.4)], "units": null, "labels": [1, 2, 3, 4, 5, 6, 7, 8, 9], "ticks": [1, 2, 3, 4, 5, 6, 7, 8, 9], "granularity": 0.0, "style": "rating", "styleTweaks": ["labels45", "triangleMarker"], "opacity": null, "labelColor": "white", "markerColor": "cornflowerblue", "lineColor": "white", "colorSpace": "rgb", "font": "Open Sans", "labelHeight": 0.05, "flip": false, "ori": 0.0, "depth": (- 5), "readOnly": false});
  stress_slider = new visual.Slider({
    win: psychoJS.window,
    name: "slider",
    size: [1.0, 0.1],
    pos: [0, -0.2], //[0,(-0.4)]
    units: null,
    labels: ['1 (Bad)', '2', '3', '4', '5','6','7','8','9 (Good)'],
    ticks: [1, 2, 3, 4, 5,6,7,8,9],
    granularity: 0.0,
    opacity: null,
    style: [visual.Slider.Style.RATING],
    labelColor: "white",
    markerColor: "cornflowerblue",
    lineColor: "white",
    colorSpace: "rgb",
    font: "Open Sans",
    labelHeight: 0.05,
    flip: false,
    ori: 0.0,
    depth: (- 5),
    readOnly: false});

  Stress_Button = new visual.Rect ({
     win: psychoJS.window, name: 'polygon',
     width: [0.25, 0.25][0], height: [0.25, 0.25][1],
     ori: 0, pos: [0, (- 0.6)],
     lineWidth: 1, lineColor: new util.Color('white'),
     fillColor: undefined,
     opacity: 1, depth: -1, interpolate: true,
   });

  stresslevel_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'stresslevel_text',
    text: '',
    font: 'Open Sans',
    units: undefined,
    pos: [0, 0.4], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0
  });

  stresslevel_keypress = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  displaystressrating_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'displaystressrating_text',
    text: 'Click line',
    font: 'Open Sans',
    units: undefined,
    pos: [0, (- 0.6)], height: 0.065,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('cornflowerblue'),  opacity: undefined,
    depth: -5.0
  });

  stresscontinue_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'stresscontinue_text',
    text: 'To continue, click the square when your desired rating appears',
    font: 'Open Sans',
    units: undefined,
    pos: [0, (- 0.8)], //[0, (- 0.8)]
    height: 0.045, //0.07
     wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0
  });

end_screenclock = new util.Clock();
end_screen = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_screen',
    text: 'You have now reached the end of the task. \n\n\nPress space to be redirected to complete the post-task survey.\n',
    font: 'Open Sans',
    units: undefined,
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0
  });
  end_screen_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  endwelcomescreen_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine

  return Scheduler.Event.NEXT;
}


//instruction variables
trialClock = new util.Clock();
  Instructions2 = new visual.TextStim({
   win: psychoJS.window,
   name: 'Instructions',
   text: "In this part of the task, you will be choosing between two options.\n\nPlease indicate which option you would prefer by using your keyboard to press '1' for the choice on the left, or '2' for the choice on the right. \n\n Each option is associated with a price, which will be subtracted from your earnings from the previous task upon making a selection. \n\n Press SPACE to continue.",
   font: 'Arial',
   units : undefined,
   pos: [0, 0], height: 0.03,  wrapWidth: 1.5, ori: 0,
   color: new util.Color('white'),  opacity: 1,
   depth: 0.0
 });

 conditionalBlank = new visual.TextStim({
   win: psychoJS.window,
   name: 'conditionalconditionalBlank',
   text: '',
   font: 'Arial',
   pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
   color: new util.Color('white'),  opacity: 1,
   depth: -6.0
 });


 // Inst3Clock = new util.Clock();
 Instructions3 = new visual.TextStim({
     win: psychoJS.window,
     name: 'Instr2',
     text: 'Imagine yourself actually doing the experiences shown on screen before making your decision.\n\nYou will have ten seconds to make a response after seeing the choices. \n\n When you make your choice, your selection will turn green. \n\n Press SPACE to continue to more instructions.',
     font: 'Arial',
     units : undefined,
     pos: [0, 0], height: 0.03,  wrapWidth: 1.5, ori: 0,
     color: new util.Color('white'),  opacity: 1,
     depth: 0.0
 });




// WTP task variables
// Initialize components for Routine "Choice"
  ChoiceClock = new util.Clock();
  //choice text shown on the left
  leftText = new visual.TextStim({
    win: psychoJS.window,
    name: 'leftText',
    text: 'default text',
    font: 'Times New Roman',
    units : undefined,
    pos: [(- 0.4), 0.1], height: 0.04,  wrapWidth: 1, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });
  //choice text shown on the right
  rightText = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightText',
    text: 'default text',
    font: 'Times New Roman',
    units : undefined,
    pos: [0.4, 0.1], height: 0.04,  wrapWidth: 1, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0
  });
//   money amounts on the left
  money1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'money1',
    text: 'default text',
    font: 'Arial',
    units : undefined,
    pos: [(- 0.4), (- 0.32)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0
  });
  //money amounts on the right
  money2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'money2',
    text: 'default text',
    font: 'Arial',
    units : undefined,
    pos: [(0.4), (- 0.32)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0
  });
  // Initialize components for Routine "ISI"
  ISIClock = new util.Clock();
  ISI = new visual.TextStim({
    win: psychoJS.window,
    name: 'ISI',
    text: '+',
    font: 'Arial',
    units : undefined,
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });


var t;
var frameN;
var continueRoutine;
var _endwelcomescreen_keys_allKeys;
var Welcome_ScreenComponents;
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

    for (const thisComponent of Welcome_ScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of Welcome_ScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

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
    for (const thisComponent of Welcome_ScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(endwelcomescreen_keys.corr, level);
    }
    //add particpiant ID to PROLIFIC_ID column
    psychoJS.experiment.addData('PROLIFIC_ID', expInfo['participant'])
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


var testComponents;
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

    for (const thisComponent of testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

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
    for (const thisComponent of testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _endinstructionscreen_keys_allKeys;
var First_InstructionsComponents;
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

    for (const thisComponent of First_InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of First_InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

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
    for (const thisComponent of First_InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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


var trial_nums;
var WTPloop;
var WTP_trial;
var entiretaskloop;
function entiretaskloopLoopBegin(entiretaskloopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop

    // set up handler to look after randomisation of conditions etc
    entiretaskloop = new TrialHandler({
      psychoJS: psychoJS,
      //nReps: 5, method: TrialHandler.Method.SEQUENTIAL,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: `Participant_Images/${expInfo["participant"]}/${expInfo["participant"]}_trials.xlsx`,
      seed: undefined, name: 'entiretaskloop'
    });
    psychoJS.experiment.addLoop(entiretaskloop); // add the loop to the experiment
    currentLoop = entiretaskloop;  // we're now the current loop

    // Schedule all the trials in the trialList:
    for (const thisEntiretaskloop of entiretaskloop) {
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
      // entiretaskloopLoopScheduler.add(WaitingforfeedbackRoutineBegin(snapshot));
      // entiretaskloopLoopScheduler.add(WaitingforfeedbackRoutineEachFrame());
      // entiretaskloopLoopScheduler.add(WaitingforfeedbackRoutineEnd(snapshot));
      entiretaskloopLoopScheduler.add(feedbackRoutineBegin(snapshot));
      entiretaskloopLoopScheduler.add(feedbackRoutineEachFrame());
      entiretaskloopLoopScheduler.add(feedbackRoutineEnd(snapshot));
      entiretaskloopLoopScheduler.add(continuesharingRoutineBegin(snapshot));
      entiretaskloopLoopScheduler.add(continuesharingRoutineEachFrame());
      entiretaskloopLoopScheduler.add(continuesharingRoutineEnd(snapshot));
      const WTPloopLoopScheduler = new Scheduler(psychoJS);
      entiretaskloopLoopScheduler.add(WTPloopLoopBegin(WTPloopLoopScheduler, snapshot));
      entiretaskloopLoopScheduler.add(WTPloopLoopScheduler);
      entiretaskloopLoopScheduler.add(WTPloopLoopEnd);
      entiretaskloopLoopScheduler.add(SalienceRatingRoutineBegin(snapshot));
      entiretaskloopLoopScheduler.add(SalienceRatingRoutineEachFrame());
      entiretaskloopLoopScheduler.add(SalienceRatingRoutineEnd(snapshot));
      entiretaskloopLoopScheduler.add(StressLevelRoutineBegin(snapshot));
      entiretaskloopLoopScheduler.add(StressLevelRoutineEachFrame());
      entiretaskloopLoopScheduler.add(StressLevelRoutineEnd(snapshot));
      entiretaskloopLoopScheduler.add(entiretaskloopLoopEndIteration(entiretaskloopLoopScheduler, snapshot));
    }

    return Scheduler.Event.NEXT;
  }
}
// insert wtp here
function WTPloopLoopBegin(WTPloopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop

    // set up handler to look after randomisation of conditions etc
    WTPloop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: startWTP, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: `Participant_Images/${participantID}/${participantID}_WTP.xlsx`,
      seed: undefined, name: 'WTPloop'
    });
    psychoJS.experiment.addLoop(WTPloop); // add the loop to the experiment
    currentLoop = WTPloop;  // we're now the current loop
    WTP_trial = WTPloop.getCurrentTrial();
    console.log(WTP_trial);

    console.log('jkfedfhsd');
    console.log(Right_Exp);
    console.log(Left_Exp);
    // Schedule all the trials in the trialList:
    for (const thisWTPloop of WTPloop) {
      snapshot = WTPloop.getSnapshot();
      WTPloopLoopScheduler.add(importConditions(snapshot));
      WTPloopLoopScheduler.add(ChoiceRoutineBegin(snapshot));
      WTPloopLoopScheduler.add(ChoiceRoutineEachFrame());
      WTPloopLoopScheduler.add(ChoiceRoutineEnd(snapshot));
      // const WTP_trialsLoopScheduler = new Scheduler(psychoJS);
      // WTPloopLoopScheduler.add(WTP_trialsLoopBegin(WTP_trialsLoopScheduler, snapshot));
      // WTPloopLoopScheduler.add(WTP_trialsLoopScheduler);
      // WTPloopLoopScheduler.add(WTP_trialsLoopEnd);
      // WTPloopLoopScheduler.add(ContinueRoutineBegin(snapshot));
      // WTPloopLoopScheduler.add(ContinueRoutineEachFrame());
      // WTPloopLoopScheduler.add(ContinueRoutineEnd(snapshot));
      WTPloopLoopScheduler.add(WTPloopLoopEndIteration(WTPloopLoopScheduler, snapshot));
    }

    return Scheduler.Event.NEXT;
  }
}
// Choice Routine goes there



var responses;
var continueRoutine;
var theseKeys;
var ChoiceComponents;
function ChoiceRoutineBegin() {
  //------Prepare to start Routine 'Choice'-------
  let continueRoutine = true;
  t = 0;
  conditionalBlank.setText('');
  ChoiceClock.reset(); // clock
  frameN = -1;

  console.log('exp variable here');
  console.log(social_left);
  console.log(Right_Exp);
  console.log(Left_Exp);

  WTP_trial = WTPloop.getCurrentTrial();
  console.log(WTP_trial);
  console.log(startWTP);

  // keep track of which components have finished
  ChoiceComponents = [];
  ChoiceComponents.push(leftText);
  ChoiceComponents.push(rightText);
  ChoiceComponents.push(responses);
  ChoiceComponents.push(money1);
  ChoiceComponents.push(money2);
  ChoiceComponents.push(instruct_toptext);
  ChoiceComponents.push(conditionalBlank);



  // update component parameters for each repeat
  //uses conditions from spreadsheet to setText
  rightText.setText(Right_Exp);
  leftText.setText(Left_Exp);
  instruct_toptext.setText("Press '1' for left option\n\nPress '2' for right option");
  money1.setText("$" + leftmoney);
  money2.setText("$" + rightmoney);
  // create key response
  responses = new core.BuilderKeyResponse(psychoJS);
 //if the components have a status function, say that it has not started yet and go to the next event
  for (const thisComponent of ChoiceComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}

var continueRoutine;
var frameRemains;
var t;
function ChoiceRoutineEachFrame() {
  //------Loop for each frame of Routine 'Choice'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = ChoiceClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame

  //show reminder at the top
  if (t >= 0.0 && instruct_toptext.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instruct_toptext.tStart = t;  // (not accounting for frame time here)
    instruct_toptext.frameNStart = frameN;  // exact frame index
    instruct_toptext.setAutoDraw(true);
  }

  frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (instruct_toptext.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    instruct_toptext.setAutoDraw(false);
    continueRoutine = false;
  }

  // *leftText* updates, draw left text
  if (t >= 0.0 && leftText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    leftText.tStart = t;  // (not accounting for frame time here)
    leftText.frameNStart = frameN;  // exact frame index
    leftText.setAutoDraw(true);

  }
//after 10 seconds take it away
  frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (leftText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    leftText.setAutoDraw(false);
    continueRoutine = false;
  }

  // *rightText* updates, draw right text
  if (t >= 0.0 && rightText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    rightText.tStart = t;  // (not accounting for frame time here)
    rightText.frameNStart = frameN;  // exact frame index
    rightText.setAutoDraw(true);

  }
//after 10 seconds take it away
  frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (rightText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    rightText.setAutoDraw(false);
    continueRoutine = false;
  }

  // *responses* updates, let them respond with keyboard


  // *money1* updates, draw left money
  if (t >= 0.0 && money1.status == PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    money1.tStart = t;  // (not accounting for frame time here)
    money1.frameNStart = frameN;  // exact frame index
    money1.setAutoDraw(true);
  }
//show for 4 seconds then take off screen
  frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (money1.status == PsychoJS.Status.STARTED && t >= frameRemains) {
    money1.setAutoDraw(false);
    continueRoutine = false;
  }

  // *money2* updates. draw right money
  if (t >= 0.0 && money2.status == PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    money2.tStart = t;  // (not accounting for frame time here)
    money2.frameNStart = frameN;  // exact frame index
    money2.setAutoDraw(true);
  }

  frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (money2.status == PsychoJS.Status.STARTED && t >= frameRemains) {
    money2.setAutoDraw(false);
    continueRoutine = false;
  }


   if (t >= 0.0 && responses.status === PsychoJS.Status.NOT_STARTED) {
     // keep track of start time/frame for later
     responses.tStart = t;  // (not accounting for frame time here)
     responses.frameNStart = frameN;  // exact frame index
     responses.status = PsychoJS.Status.STARTED;
     // keyboard checking is just starting
     psychoJS.window.callOnFlip(function() { responses.clock.reset(); }); // t = 0 on screen flip
     psychoJS.eventManager.clearEvents({eventType:'keyboard'});
   }

   //after 10 seconds, they can't respond
   frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
   if (responses.status === PsychoJS.Status.STARTED && t >= frameRemains) {
     responses.status = PsychoJS.Status.FINISHED;
     continueRoutine = false;
   }



  //get keys that they chose
   if (responses.status === PsychoJS.Status.STARTED) {
     let theseKeys = psychoJS.eventManager.getKeys({keyList:['1', '2']});
     if (theseKeys.length > 0) {  // at least one key was pressed
       responses.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
       responses.rt = responses.clock.getTime();
      }
     // check for quit:
     if (theseKeys.indexOf('escape') > -1) {
       psychoJS.experiment.experimentEnded = true;
     }


   }

   if (responses.keys.length > 0){
        responses.status = PsychoJS.Status.FINISHED; //don't allow more than one response

    }

    if (responses.keys === '1') {
       leftText.setColor(new util.Color("green"));
       money1.setColor(new util.Color("green"));



    //if they pressed 2, make right text green
  } else if (responses.keys === '2') {
       rightText.setColor(new util.Color("green"));
       money2.setColor(new util.Color("green"));
          }

    // *conditionalBlank* updates
    if (responses.keys.length > 0 && conditionalBlank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      conditionalBlank.tStart = t;  // (not accounting for frame time here)
      conditionalBlank.frameNStart = frameN;  // exact frame index
      conditionalBlank.setAutoDraw(true);
    }

    if (conditionalBlank.status === PsychoJS.Status.STARTED && t >= (conditionalBlank.tStart + 2.0)) {
      conditionalBlank.setAutoDraw(false);
    }

    if (conditionalBlank.status == PsychoJS.Status.FINISHED){
       leftText.setAutoDraw(false);
       money1.setAutoDraw(false);
       rightText.setAutoDraw(false);
       money2.setAutoDraw(false);
       continueRoutine = false;
     }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of ChoiceComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

var subtract_bonus;
function ChoiceRoutineEnd() {
  //------Ending Routine 'Choice'-------
  for (const thisComponent of ChoiceComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }

  // check responses
  if (responses.keys === undefined || responses.keys.length === 0) {    // No response was made
      responses.keys = undefined;
  }

  if (responses.keys === '1'){
    psychoJS.experiment.addData('decision_price', leftmoney);
    subtract_bonus =  subtract_bonus + leftmoney;
    //psychoJS.experiment.addData('bonus_total', All_Bonus);
  } else if (responses.keys === '2') {
    psychoJS.experiment.addData('decision_price', rightmoney);
    subtract_bonus =  subtract_bonus + rightmoney;
  //  psychoJS.experiment.addData('bonus_total', All_Bonus);
          }
  psychoJS.experiment.addData('responses.keys', responses.keys);
  if (typeof responses.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('responses.rt', responses.rt);
      }

  // the Routine "Choice" was not non-slip safe, so reset the non-slip timer

//   reset text color for next trial
  leftText.setColor(new util.Color("white"));
  rightText.setColor(new util.Color("white"));
  money1.setColor(new util.Color("white"));
  money2.setColor(new util.Color("white"));


  routineTimer.reset();

  return Scheduler.Event.NEXT;
}

var ISIComponents;
function ISIRoutineBegin() {
  //------Prepare to start Routine 'ISI'-------
  t = 0;
  ISIClock.reset(); // clock
  frameN = -1;
  routineTimer.add(1.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  ISIComponents = [];
  ISIComponents.push(ISI);

  for (const thisComponent of ISIComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}


function ISIRoutineEachFrame() {
  //------Loop for each frame of Routine 'ISI'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = ISIClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame

  // *ISI* updates, draw the fixation cross
  if (t >= 0.0 && ISI.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    ISI.tStart = t;  // (not accounting for frame time here)
    ISI.frameNStart = frameN;  // exact frame index
    ISI.setAutoDraw(true);
  }
// show for 2 seconds then take off screen
  frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (ISI.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    ISI.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of ISIComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function ISIRoutineEnd() {
  //------Ending Routine 'ISI'-------
  for (const thisComponent of ISIComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

var response1;
var social1Components;
function social1RoutineBegin() {
  //------Prepare to start Routine 'social1'-------
  t = 0;
  social1Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
//   set text conditions for social vs social
  leftText1.setText(Left1);
  rightText1.setText(Right1);
  response1 = new core.BuilderKeyResponse(psychoJS);

  money3.setText("$" + leftmoney1);
  money4.setText("$" + rightmoney1);

  // keep track of which components have finished
  social1Components = [];
  social1Components.push(leftText1);
  social1Components.push(rightText1);
  social1Components.push(response1);
  social1Components.push(money3);
  social1Components.push(money4);


  for (const thisComponent of social1Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}


function social1RoutineEachFrame() {
  //------Loop for each frame of Routine 'social1'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = social1Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame

  // *leftText1* updates, draw left text
  if (t >= 0.0 && leftText1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    leftText1.tStart = t;  // (not accounting for frame time here)
    leftText1.frameNStart = frameN;  // exact frame index
    leftText1.setAutoDraw(true);
  }
// show for 4 seconds then take off screen
  frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (leftText1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    leftText1.setAutoDraw(false);
  }

  // *rightText1* updates, draw right text
  if (t >= 0.0 && rightText1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    rightText1.tStart = t;  // (not accounting for frame time here)
    rightText1.frameNStart = frameN;  // exact frame index
    rightText1.setAutoDraw(true);
  }
// show for 4 seconds then take off screen
  frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (rightText1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    rightText1.setAutoDraw(false);
  }

  // *response1* updates
  if (t >= 0.0 && response1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    response1.tStart = t;  // (not accounting for frame time here)
    response1.frameNStart = frameN;  // exact frame index
    response1.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { response1.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }
// allowed to respond within 4 seconds then they cannot respond
  frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (response1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    response1.status = PsychoJS.Status.FINISHED;
  }
// get chosen keys
  if (response1.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['1', '2']});

    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }

    if (theseKeys.length > 0) {  // at least one key was pressed
      response1.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      response1.rt = response1.clock.getTime();
      // was this 'correct'?
      if (response1.keys == '') {
          response1.corr = 1;
      } else {
          response1.corr = 0;
      }
    }
  }
  if (response1.keys.length > 0) {
     response1.status = PsychoJS.Status.FINISHED;
   }

  // *money3* updates, draw left money
  if (t >= 0.0 && money3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    money3.tStart = t;  // (not accounting for frame time here)
    money3.frameNStart = frameN;  // exact frame index
    money3.setAutoDraw(true);
  }
// show for 4 seconds
  frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (money3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    money3.setAutoDraw(false);
  }

  // *money4* updates, draw right money
  if (t >= 0.0 && money4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    money4.tStart = t;  // (not accounting for frame time here)
    money4.frameNStart = frameN;  // exact frame index
    money4.setAutoDraw(true);
  }
// show for 4 seconds
  frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (money4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    money4.setAutoDraw(false);
  }
//   if they pressed 1, make text green
  if (response1.keys == '1') {
    leftText1.setColor(new util.Color("green"));
    money3.setColor(new util.Color("green"));

  }

//   if they pressed 2, make text green
  if (response1.keys == '2') {
    rightText1.setColor(new util.Color("green"));
    money4.setColor(new util.Color("green"));

  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of social1Components)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function social1RoutineEnd() {
  //------Ending Routine 'social1'-------
  for (const thisComponent of social1Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }

  // check responses
  if (response1.keys === undefined || response1.keys.length === 0) {    // No response was made
      response1.keys = undefined;
  }

  // was no response the correct answer?!
  if (response1.keys === undefined) {
    if (['None','none',undefined].includes('')) {
       response1.corr = 1  // correct non-response
    } else {
       response1.corr = 0  // failed to respond (incorrectly)
    }
  }
  // store data for thisExp (ExperimentHandler)
  psychoJS.experiment.addData('response1.keys', response1.keys);
  psychoJS.experiment.addData('response1.corr', response1.corr);
  if (typeof response1.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('response1.rt', response1.rt);
      }

  // the Routine "social1" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();

//   reset text color so it won't stay green for next trial
  leftText1.setColor(new util.Color("white"));
  rightText1.setColor(new util.Color("white"));
  money3.setColor(new util.Color("white"));
  money4.setColor(new util.Color("white"));


  return Scheduler.Event.NEXT;
}

var ISI2Components;
function ISI2RoutineBegin() {
  //------Prepare to start Routine 'ISI2'-------
  t = 0;
  ISI2Clock.reset(); // clock
  frameN = -1;
  routineTimer.add(1.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  ISI2Components = [];
  ISI2Components.push(ISI2);

  for (const thisComponent of ISI2Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;

  return Scheduler.Event.NEXT;
}


function ISI2RoutineEachFrame() {
  //------Loop for each frame of Routine 'ISI2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = ISI2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame

  // display fixation cross for 2 seconds
  if (t >= 0.0 && ISI2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    ISI2.tStart = t;  // (not accounting for frame time here)
    ISI2.frameNStart = frameN;  // exact frame index
    ISI2.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (ISI2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    ISI2.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }

  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }

  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of ISI2Components)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }

  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function ISI2RoutineEnd() {
  //------Ending Routine 'ISI2'-------
  for (const thisComponent of ISI2Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}




//end loop

async function WTP_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(WTP_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function WTP_trialsLoopEndIteration(scheduler, snapshot) {
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


async function WTPloopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(WTPloop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function WTPloopLoopEndIteration(scheduler, snapshot) {
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


//  WTP ends here

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


var partner_codeComponents;
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

    for (const thisComponent of partner_codeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of partner_codeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

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
    for (const thisComponent of partner_codeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from partnermatchcode
    partnermatch = `You have matched with: ${Partner}`;
    if ((Partner === "Sam")) {
        partneravatar = "Task_Images/nerdemoji_nobackground.png";
    }
    if ((Partner === "Riley")) {
        partneravatar = "Task_Images/sunglassemoji_nobackground.png";
      }
    if ((Partner === "Alex")) {
        partneravatar = "Task_Images/cowboyemoji.png";
      }
    if ((Partner === "Taylor")) {
        partneravatar = "Task_Images/huggingemoji.png";

    } else {
        if ((Partner === "Charlie")) {
            partneravatar = "Task_Images/smilingemoji.png";
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


var _pj;
var WaitingToMatchComponents;
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
    if ((! _pj.in_es6(TrialNumber, [1, 31, 61, 91, 121]))) {
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

    for (const thisComponent of WaitingToMatchComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
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
    for (const thisComponent of WaitingToMatchComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

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
    for (const thisComponent of WaitingToMatchComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _endpartnermatch_keys_allKeys;
var Partner_MatchComponents;
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
    if ((! _pj.in_es6(TrialNumber, [1, 31, 61, 91, 121]))) {
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

    for (const thisComponent of Partner_MatchComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of Partner_MatchComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

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
    for (const thisComponent of Partner_MatchComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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

var Photo_ShareComponents;
function Photo_ShareRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //--- Prepare to start Routine 'Photo_Share' ---
    t = 0;
    Photo_ShareClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    //routineTimer.add(3.000000);
    routineTimer.add(FeedbackWait);
    console.log(Photos);
    // update component parameters for each repeat
    participantimage_image.setImage(Photos);
    // keep track of which components have finished
    Photo_ShareComponents = [];
    Photo_ShareComponents.push(photobeingshared_text);
    Photo_ShareComponents.push(waitforfeedback_text);
    Photo_ShareComponents.push(participantimage_image);

    for (const thisComponent of Photo_ShareComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Photo_ShareRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Photo_Share' ---
    // get current time
    //routineTimer.reset(Waiting);

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

  //  frameRemains = 0.0 + parseFloat(Waiting) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    frameRemains = 0.0 + FeedbackWait - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

  //  frameRemains = 0.0 + parseFloat(Waiting) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    frameRemains = 0.0 + FeedbackWait - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (waitforfeedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      waitforfeedback_text.setAutoDraw(false);
    }

    // *participantimage_image* updates
    if (t >= 0.0 && participantimage_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      participantimage_image.tStart = t;  // (not accounting for frame time here)
      participantimage_image.frameNStart = frameN;  // exact frame index
      participantimage_image.setImage(Photos);
      participantimage_image.setAutoDraw(true);
    }

    //frameRemains = 0.0 + parseFloat(Waiting) - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    frameRemains = 0.0 + FeedbackWait - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    for (const thisComponent of Photo_ShareComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

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
    for (const thisComponent of Photo_ShareComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from initiatefeedbackresponses
    feedbackresponses = `${Partner} ${Feedback} your photo`;
    if ((Feedback === "liked")) {
        fdbkimage = "Task_Images/thumbsup.png";
    } else {
        if ((Feedback === "did not like")) {
            fdbkimage = "Task_Images/thumbsdown.png";
        }
    }

    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackComponents;
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
        startWTP = 1;
    } else {
        startWTP = 0;
    }

    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(displayfeedback_text);
    feedbackComponents.push(fdbkimage_image);

    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

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
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _sharenextphoto_key_allKeys;
var continuesharingComponents;
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
    if ((startWTP === 1)) {
        continueRoutine = false;
    } else {
        continueRoutine = true;
    }

    // keep track of which components have finished
    continuesharingComponents = [];
    continuesharingComponents.push(presstosharenextphoto_text);
    continuesharingComponents.push(sharenextphoto_key);

    for (const thisComponent of continuesharingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of continuesharingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

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
    for (const thisComponent of continuesharingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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


// insert stress slider here
var salienceratingtext;
var _key_resp_allKeys;
var SalienceRatingComponents;
var continueRoutine;
var salience_slider;
var SalienceRatingClock;
var mouserec;
var prevButtonState;
function SalienceRatingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //--- Prepare to start Routine 'SalienceRating' ---
    t = 0;
    SalienceRatingClock.reset(); // clock
    frameN = -1;

    const trials = [30,60,90,120,150]

    if (trials.includes(TrialNumber) == true) {
      continueRoutine = true;

    } else {
      continueRoutine = false;
    }
    salienceratingtext = `You have finished sharing your photos with ${Partner}. \n\n How likely are you to share photos with ${Partner} in the future?
    Click the line to begin rating.`
    ;
    psychoJS.eventManager.clearEvents("keyboard");
    //salience_slider.markerPos = 3;

    saliencequestion_text.setText(salienceratingtext);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    salienceavatar_image.setImage(partneravatar);
    userMouse.clickReset();
    mouseClock.reset()
    mouserec = userMouse.getPos();
    userMouse.x = [];
    userMouse.y = [];
    userMouse.leftButton = [];
    userMouse.midButton = [];
    userMouse.rightButton = [];
    userMouse.time=[];
    prevButtonState = userMouse.getPressed();
    salience_slider.reset();
    displayrating_text.setText('Click line');
    // displayrating_text.setText(rating_forsalience); //get rid of NAN
    // keep track of which components have finished
    SalienceRatingComponents = [];
    SalienceRatingComponents.push(saliencequestion_text);
    SalienceRatingComponents.push(key_resp);
    SalienceRatingComponents.push(userMouse);
    SalienceRatingComponents.push(salienceavatar_image);
    SalienceRatingComponents.push(saliencecontinue_text);
    SalienceRatingComponents.push(displayrating_text);
    SalienceRatingComponents.push(salience_slider);
    SalienceRatingComponents.push(SalienceRatingClock);
    SalienceRatingComponents.push(Salience_Button);

    for (const thisComponent of SalienceRatingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var keys;
var rating_forsalience;
var salience_ratingvalue;
var gotValidClick;
var marker_pos;
var ratingvalue;
var buttonpress;
var finalmouseRT;
function SalienceRatingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SalienceRating' ---
    // get current time
    t = SalienceRatingClock.getTime();
    frameN = frameN + 1;
    let buttonpress = userMouse.getPressed(); // read mouse state
      const xys = userMouse.getPos();
      userMouse.x.push(xys[0]); // add mouse coordinates to x/y list, in principle for data storage, but not implemented right now
      userMouse.y.push(xys[1]);
      userMouse.leftButton.push(buttonpress[0]); // store buttons in button list, likewise for storage
      userMouse.midButton.push(buttonpress[1]);
      userMouse.rightButton.push(buttonpress[2]);


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


    // *saliencecontinue_text* updates
  //  if (t >= 0.0 && saliencecontinue_text.status === PsychoJS.Status.NOT_STARTED) {
    if (key_resp.status === PsychoJS.Status.STARTED && saliencecontinue_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      saliencecontinue_text.tStart = t;  // (not accounting for frame time here)
      saliencecontinue_text.frameNStart = frameN;  // exact frame index

      saliencecontinue_text.setAutoDraw(true);
      Salience_Button.setAutoDraw(true);
      displayrating_text.setText('Click line');
      displayrating_text.setAutoDraw(true);
    }

    // *salienceavatar_image* updates
    if (t >= 0.0 && salienceavatar_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      salienceavatar_image.tStart = t;  // (not accounting for frame time here)
      salienceavatar_image.frameNStart = frameN;  // exact frame index

      salienceavatar_image.setAutoDraw(true);
    }





    // // *salience_slider* updates
    if (t >= 0.0 && salience_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      salience_slider.tStart = t;  // (not accounting for frame time here)
      salience_slider.frameNStart = frameN;  // exact frame index

      salience_slider.setAutoDraw(true);
    }

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

      const validclicks = [1,2,3,4,5]
        ratingvalue = salience_slider.getMarkerPos();
          if (1 < ratingvalue && ratingvalue < 1.5) {
                salience_slider.setMarkerPos(1)
                salience_slider.setRating(1)
                displayrating_text.setText(1);
                displayrating_text.setAutoDraw(true);

          }

          else if (1.5 < ratingvalue && ratingvalue < 2.5) {
                salience_slider.setMarkerPos(2)
                salience_slider.setRating(2)
                displayrating_text.setText(2);
                displayrating_text.setAutoDraw(true);

          }
            else if (2.5 < ratingvalue && ratingvalue < 3.5) {
                salience_slider.setMarkerPos(3)
                salience_slider.setRating(3)
                displayrating_text.setText(3);
                displayrating_text.setAutoDraw(true);

          }
          else if (3.5 < ratingvalue && ratingvalue < 4.5) {
              salience_slider.setMarkerPos(4)
              salience_slider.setRating(4)
              displayrating_text.setText(4);
              displayrating_text.setAutoDraw(true);
            }
          else if (4.5 < ratingvalue && ratingvalue < 5) {
              salience_slider.setMarkerPos(5)
              salience_slider.setRating(5)
              displayrating_text.setText(5);
              displayrating_text.setAutoDraw(true);

        }
            finalmouseRT = mouseClock.getTime(); // get mouse time, again for storage that is not implemented
            if (!buttonpress.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
              prevButtonState = buttonpress; //button state as of last frame, makes sure holding mouse down has not affected anything
              //debug code
              //console.log('new button state detected');
              if (buttonpress.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
                // check if the mouse was inside our 'clickable' objects
                gotValidClick = false;
                if (Salience_Button.contains(userMouse) && ratingvalue > 0) {
                  {gotValidClick = true};
                }
                if (gotValidClick === true) { // abort routine on response
                    continueRoutine = false;
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
    for (const thisComponent of SalienceRatingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

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
    for (const thisComponent of SalienceRatingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    function financial(x) {
                  return Number.parseFloat(x).toFixed(2);
                }


    entiretaskloop.addData("salience_rating", Math.round(salience_slider.getMarkerPos()*10/10));
    //entiretaskloop.addData("salience_rating", financial(salience_slider.getRating()))
    // update the trial handler);
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


var stressleveltext;
var _stresslevel_keypress_allKeys;
var StressLevelComponents;
var stress_slider;
var continueRoutine;
var StressLevelClock;
var mouserec;
var prevButtonState;
function StressLevelRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //--- Prepare to start Routine 'StressLevel' ---
    t = 0;
    StressLevelClock.reset(); // clock
    frameN = -1;
    //continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from stresslevelslider
    const trials = [30,60,90,120,150]

    if (trials.includes(TrialNumber) == true) {
      continueRoutine = true;

    } else {
      continueRoutine = false;
    }
    stressleveltext = `How are you feeling right now?

    Click the line to begin rating.`
    ;
    psychoJS.eventManager.clearEvents("keyboard");
    // stress_slider.markerPos = 5;

    stresslevel_text.setText(stressleveltext);
    stresslevel_keypress.keys = undefined;
    stresslevel_keypress.rt = undefined;
    _stresslevel_keypress_allKeys = [];
    userMouse.clickReset();
    mouseClock.reset()
    mouserec = userMouse.getPos();
    userMouse.x = [];
    userMouse.y = [];
    userMouse.leftButton = [];
    userMouse.midButton = [];
    userMouse.rightButton = [];
    userMouse.time=[];
    prevButtonState = userMouse.getPressed();
    stress_slider.reset();
    displaystressrating_text.setText('Click line');
  //  displaystressrating_text.setText(rating_forstress);
    // keep track of which components have finished
    StressLevelComponents = [];
    StressLevelComponents.push(stresslevel_text);
    StressLevelComponents.push(stresslevel_keypress);
    StressLevelComponents.push(displaystressrating_text);
    StressLevelComponents.push(stress_slider);
    StressLevelComponents.push(StressLevelClock);
    StressLevelComponents.push(userMouse);
    StressLevelComponents.push(Stress_Button);
    StressLevelComponents.push(stresscontinue_text);


    for (const thisComponent of StressLevelComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

var keys;
var rating_forstress;
var stress_ratingvalue;
var gotValidClick;
var marker_pos;
var ratingvalue;
var buttonpress;
var finalmouseRT;
function StressLevelRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'StressLevel' ---
    // get current time
    t = StressLevelClock.getTime();
    frameN = frameN + 1;
    let buttonpress = userMouse.getPressed(); // read mouse state
      const xys = userMouse.getPos();
      userMouse.x.push(xys[0]); // add mouse coordinates to x/y list, in principle for data storage, but not implemented right now
      userMouse.y.push(xys[1]);
      userMouse.leftButton.push(buttonpress[0]); // store buttons in button list, likewise for storage
      userMouse.midButton.push(buttonpress[1]);
      userMouse.rightButton.push(buttonpress[2]);


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

    // *stresscontinue_text* updates
    //  if (t >= 0.0 && stresscontinue_text.status === PsychoJS.Status.NOT_STARTED) {
    if (stresslevel_keypress.status === PsychoJS.Status.STARTED && stresscontinue_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        stresscontinue_text.tStart = t;  // (not accounting for frame time here)
        stresscontinue_text.frameNStart = frameN;  // exact frame index

        stresscontinue_text.setAutoDraw(true);
        Stress_Button.setAutoDraw(true);
        displaystressrating_text.setText('Click line');
        displaystressrating_text.setAutoDraw(true);
    }
    // // *stress_slider* updates
    if (t >= 0.0 && stress_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stress_slider.tStart = t;  // (not accounting for frame time here)
      stress_slider.frameNStart = frameN;  // exact frame index

      stress_slider.setAutoDraw(true);
    }






    // if (stresslevel_keypress.status === PsychoJS.Status.STARTED) {
    //   let theseKeys = stresslevel_keypress.getKeys({keyList: ['space'], waitRelease: false});
    //   _stresslevel_keypress_allKeys = _stresslevel_keypress_allKeys.concat(theseKeys);
    //   if (_stresslevel_keypress_allKeys.length > 0) {
    //     stresslevel_keypress.keys = _stresslevel_keypress_allKeys[_stresslevel_keypress_allKeys.length - 1].name;  // just the last key pressed
    //     stresslevel_keypress.rt = _stresslevel_keypress_allKeys[_stresslevel_keypress_allKeys.length - 1].rt;
    //     // a response ends the routine
    //     continueRoutine = false;
    //   }
    // }
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


      const validclicks = [1,2,3,4,5,6,7,8,9]
        ratingvalue = stress_slider.getMarkerPos();
          if (1 < ratingvalue && ratingvalue < 1.5) {
                stress_slider.setMarkerPos(1)
                stress_slider.setRating(1)
                displaystressrating_text.setText(1);
                displaystressrating_text.setAutoDraw(true);

          }

          else if (1.5 < ratingvalue && ratingvalue < 2.5) {
                stress_slider.setMarkerPos(2)
                stress_slider.setRating(2)
                displaystressrating_text.setText(2);
                displaystressrating_text.setAutoDraw(true);

          }
            else if (2.5 < ratingvalue && ratingvalue < 3.5) {
                stress_slider.setMarkerPos(3)
                stress_slider.setRating(3)
                displaystressrating_text.setText(3);
                displaystressrating_text.setAutoDraw(true);

          }
          else if (3.5 < ratingvalue && ratingvalue < 4.5) {
              stress_slider.setMarkerPos(4)
              stress_slider.setRating(4)
              displaystressrating_text.setText(4);
              displaystressrating_text.setAutoDraw(true);
            }
          else if (4.5 < ratingvalue && ratingvalue < 5.5) {
              stress_slider.setMarkerPos(5)
              stress_slider.setRating(5)
              displaystressrating_text.setText(5);
              displaystressrating_text.setAutoDraw(true);

        }
        else if (5.5 < ratingvalue && ratingvalue < 6.5) {
            stress_slider.setMarkerPos(6)
            stress_slider.setRating(6)
            displaystressrating_text.setText(6);
            displaystressrating_text.setAutoDraw(true);

      }
      else if (6.5 < ratingvalue && ratingvalue < 7.5) {
          stress_slider.setMarkerPos(7)
          stress_slider.setRating(7)
          displaystressrating_text.setText(7);
          displaystressrating_text.setAutoDraw(true);

    }
    else if (7.5 < ratingvalue && ratingvalue < 8.5) {
        stress_slider.setMarkerPos(8)
        stress_slider.setRating(8)
        displaystressrating_text.setText(8);
        displaystressrating_text.setAutoDraw(true);

  }
  else if (8.5 < ratingvalue && ratingvalue < 9) {
      stress_slider.setMarkerPos(9)
      stress_slider.setRating(9)
      displaystressrating_text.setText(9);
      displaystressrating_text.setAutoDraw(true);

}

            finalmouseRT = mouseClock.getTime(); // get mouse time, again for storage that is not implemented
            if (!buttonpress.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
              prevButtonState = buttonpress; //button state as of last frame, makes sure holding mouse down has not affected anything
              //debug code
              //console.log('new button state detected');
              if (buttonpress.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
                // check if the mouse was inside our 'clickable' objects
                gotValidClick = false;
                if (Stress_Button.contains(userMouse) && ratingvalue > 0) {
                  {gotValidClick = true};
                }
                if (gotValidClick === true) { // abort routine on response
                    continueRoutine = false;
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
    for (const thisComponent of StressLevelComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

// var stresslevel;
function StressLevelRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'StressLevel' ---
    for (const thisComponent of StressLevelComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }

    function financial(x) {
                  return Number.parseFloat(x).toFixed(2);
                }
    // Run 'End Routine' code from stresslevelslider
    // stresslevel = stress_slider.getRating();
    entiretaskloop.addData("stress_level", Math.round(stress_slider.getMarkerPos()*10/10));

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
//--- Prepare to start Routine 'End_Screen' ---
var t;
var frameN;
var continueRoutine;
var _end_screen_keys_allKeys;
var End_ScreenComponents;
function End_ScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //--- Prepare to start Routine 'end_Screen' ---
    t = 0;
    end_screenclock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_screen_keys.keys = undefined;
    end_screen_keys.rt = undefined;
    _end_screen_keys_allKeys = [];
    // keep track of which components have finished
    End_ScreenComponents = [];
    End_ScreenComponents.push(end_screen);
    End_ScreenComponents.push(end_screen_keys);

    for (const thisComponent of End_ScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function End_ScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_screen_Screen' ---
    // get current time
    t = end_screenclock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *end_screen* updates
    if (t >= 0.0 && end_screen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_screen.tStart = t;  // (not accounting for frame time here)
      end_screen.frameNStart = frameN;  // exact frame index

      end_screen.setAutoDraw(true);
    }


    // *end_screen_keys* updates
    if (t >= 0.0 && end_screen_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_screen_keys.tStart = t;  // (not accounting for frame time here)
      end_screen_keys.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_screen_keys.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_screen_keys.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_screen_keys.clearEvents(); });
    }

    if (end_screen_keys.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_screen_keys.getKeys({keyList: ['space'], waitRelease: false});
      _end_screen_keys_allKeys = _end_screen_keys_allKeys.concat(theseKeys);
      if (_end_screen_keys_allKeys.length > 0) {
        end_screen_keys.keys = _end_screen_keys_allKeys[_end_screen_keys_allKeys.length - 1].name;  // just the last key pressed
        end_screen_keys.rt = _end_screen_keys_allKeys[_end_screen_keys_allKeys.length - 1].rt;
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
    for (const thisComponent of End_ScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function End_ScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_Screen' ---
    for (const thisComponent of End_ScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_screen_keys.corr, level);
    }
    psychoJS.experiment.addData('end_screen_keys.keys', end_screen_keys.keys);
    if (typeof end_screen_keys.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_screen_keys.rt', end_screen_keys.rt);
        routineTimer.reset();
        }

    end_screen_keys.stop();
    // the Routine "end_Screen" was not non-slip safe, so reset the non-slip timer
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
    }
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
   };
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  //  when they press space, redirect to choice task
  window.location.replace(weblink+= '?PROLIFIC_ID=' + expInfo['participant']);

  return Scheduler.Event.QUIT;
}
