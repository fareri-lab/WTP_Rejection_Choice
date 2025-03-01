getwd()

setwd("/Users/jordansiegel/Documents/Github/WTP_Rejection_Choice/")

install.packages("lme4", dependencies=TRUE)
install.packages("Rcpp", dependencies=TRUE)
install.packages("lmerTest", dependencies=TRUE)
install.packages("Matrix", dependencies=TRUE)
install.packages("lmer", dependencies=TRUE)

library(lme4)
library(lmerTest)
library(Rcpp)
library(Matrix)

wtp_rej_longdata<-read.csv(file="longformdata.csv",header=TRUE, sep=',')

#re-code acceptance from 2 to -1 for condition_recode and males from 0 to -1 in sex
wtp_rej_longdata$condition_recode[wtp_rej_longdata$condition_recode==2]<- -1
wtp_rej_longdata$sex[wtp_rej_longdata$sex==0]<- -1

colnames(wtp_rej_longdata)[colnames(wtp_rej_longdata) == "order"] <- "order_var"

condition_choicetype <- glm(formula = socialchoice ~ condition_recode, family=binomial,data=wtp_rej_longdata)

saliencecondition_choicetype_withregressors <- glm(formula = socialchoice ~ condition_recode + + salience_mean+ age + sex + order_var +timebetween, family=binomial,data=wtp_rej_longdata)

condition_choiceprice <- lmer(formula = decision_price ~ condition_recode +  (1 | participant), data = wtp_rej_longdata)

condition_choiceprice_withregressors <- lmer(decision_price ~ condition_recode + age + order_var + sex + timebetween + (1 | participant),
                                             data = wtp_rej_longdata)

affect_choicetype <- glm(formula = socialchoice ~ stress_mean, family=binomial,data=wtp_rej_longdata)

affect_choicetype_withregressors <- glm(formula = socialchoice ~ stress_mean + age + sex +order_var +timebetween, family=binomial,data=wtp_rej_longdata)

affect_choiceprice <- lmer(formula = decision_price ~ stress_mean +  (1 | participant), data = wtp_rej_longdata)

interaction_choicetype_withregressors <- glm(formula = socialchoice ~ condition_recode * stress_mean + age + sex +order_var +timebetween, family=binomial,data=wtp_rej_longdata)

salienceinteraction_choicetype_withregressors <- glm(formula = socialchoice ~ condition_recode * salience_mean + age + sex +order_var +timebetween, family=binomial,data=wtp_rej_longdata)

summa