###exploratory stats for project

wtp_rej_longdata$decision_price_z <- scale(wtp_rej_longdata$decision_price)
decisionprice_condition_onchoice1 <- lmer(socialchoice ~  decision_price_z * condition_recode + (1 | participant), data = wtp_rej_longdata)
summary(decisionprice_condition_onchoice1)










condition_choiceprice_withpca <- lmer(decision_price ~ condition_recode + PC1 + PC2 + (1 | participant), data = merged_data)

condition_choiceprice_withpcaonly <- lmer(decision_price ~ + PC1 + PC2 + (1 | participant), data = merged_data)

condition_choicetype_withpca <- lmer(socialchoice ~ condition_recode + age + order_var + sex + timebetween + PC1 + PC2 + (1 | participant),data = merged_data)

condition_choicetype_withpcaonly <- lmer(socialchoice ~ condition_recode * PC1 + condition_recode* PC2 + value_diff + decision_price + (1 | participant), data = merged_data)

condition_choicetype_withpcaonly3way <- lmer(socialchoice ~ condition_recode + value_diff * PC1 * condition_recode + PC2 + (1 | participant), data = merged_data)

condition_choicetype_valuediff_int_withpcaonly <- lmer(socialchoice ~ 1+ value_diff * PC1 + condition_recode * PC1 + PC2 * condition_recode + (1 | participant), data = merged_data)

summary(condition_choicetype_withpcaonly3way)
summary(condition_choiceprice_withpca)
summary(condition_choicetype_withpca)
summary(condition_choiceprice_withpcaonly)
summary(condition_choicetype_withpcaonly)
summary(condition_choicetype_valuediff_int_withpcaonly)


model_interaction <- lmer(decision_price ~ condition_recode * (PC1 + PC2 + PC3) +
                            age + order_var + sex + timebetween + (1 | participant),
                          data = merged_data)
summary(model_interaction)

model_interaction_choicetype <- lmer(socialchoice ~ condition_recode * (PC1 + PC2 + PC3) +
                                       age + order_var + sex + timebetween + (1 | participant),
                                     data = merged_data)
summary(model_interaction_choicetype)

###running by models within conditions
merged_data_rej <- subset(merged_data, condition_recode == "1")
merged_data_acc <- subset(merged_data, condition_recode == "-1")

model_rej <- lmer(decision_price ~ PC1 + PC2 + PC3 + age + order_var + sex + timebetween + (1 | participant),
                  data = merged_data_rej)
model_acc <- lmer(decision_price ~ PC1 + PC2 + PC3 + age + order_var + sex + timebetween + (1 | participant),
                  data = merged_data_acc)
summary(model_rej)
summary(model_acc)

condition_valuediff_withpca <- lmer(decision_price ~ value_diff * condition_recode + PC1 + PC2 + PC3 + (1 + value_diff | participant), data = merged_data)

summary(condition_valuediff_withpca)

ggplot(merged_data, aes(x = PC1, y = value_diff)) +
  +     geom_smooth(method = "lm", se = TRUE, color = "blue") +
  +     labs(title = "Regression Line of Value Difference on PC1",
             +          x = "PC1", y = "Value Difference") +
  +     theme_minimal()

#################################### regression instead of ANOVA data frame
long_df <- wtp_rej_shortdata %>%
  pivot_longer(
    cols = c(social_decisionprice_total, nonsocial_decisionprice_total),
    names_to = "choice_source",
    values_to = "decisionprice_total"  # use a temporary unique name
  ) %>%
  mutate(
    choicetype = case_when(
      choice_source == "social_decisionprice_total" ~ 1,
      choice_source == "nonsocial_decisionprice_total" ~ 0
    ),
    condition_recode = recode(condition_recode, `1` = 1, `2` = -1)
  ) %>%
  select(participant, condition_recode, choice = decisionprice_total, choicetype) %>%
  arrange(participant, condition_recode, choicetype)

print(head(long_df, 10))

#run regression model:

twobytwo <- lm(choice ~ condition_recode*choicetype, data=long_df)
summary(twobytwo)




#plot_model(decisionprice_condition_onchoice1, type='int')


# Generate predicted probabilities across values of decision_price_z
preds <- ggpredict(decisionprice_condition_onchoice1, terms = c("decision_price_z", "condition_recode"))

# View structure
head(preds)


linearmixedeffects <- ggplot(preds, aes(x = x, y = predicted, color = group, fill = group)) +
  geom_line(size = 1.5) +
  geom_ribbon(aes(ymin = conf.low, ymax = conf.high), alpha = 0.2, color = NA) +
  scale_color_manual(
    name = "Condition",
    values = c("-1" = "#88CCEE", "1" = "#FF6F61"),
    labels = c("-1" = "Acceptance", "1" = "Rejection")
  ) +
  scale_fill_manual(
    name = "Condition",
    values = c("-1" = "#88CCEE", "1" = "#FF6F61"),
    labels = c("-1" = "Acceptance", "1" = "Rejection")
  ) +
  labs(
    x = "Decision Price (z)",
    y = "Pred Probability of Choosing Social"
  ) +
  theme_minimal() +
  theme(
    panel.grid = element_blank(),
    axis.title.x = element_text(size = 26, face = "bold", margin = margin(t = 25)),
    axis.title.y = element_text(size = 26, face = "bold", margin = margin(r = 25)),
    axis.text.x = element_text(size = 24, face = "bold"),
    axis.text.y = element_text(size = 24, face = "bold"),
    legend.title = element_text(size = 24, face = "bold"),
    legend.text = element_text(size = 22, face = "bold"),
    plot.margin = margin(t = 20, r = 20, b = 20, l = 30)
  )

# Save the plot

ggsave("linearmixedeffects.png", plot = linearmixedeffects, width = 10, height = 8, dpi = 300)

stress <- lm( stress_mean ~ condition_recode, data=wtp_rej_shortdata)
summary(stress)

likelihoodtoshare <- lm(salience_mean ~ condition_recode + PC1 + PC2, data=merged_data)
summary(likelihoodtoshare)






condition_choicetype <- glm(formula = socialchoice ~ condition_recode, family=binomial,data=wtp_rej_longdata)

saliencecondition_choicetype_withregressors <- glm(formula = socialchoice ~ condition_recode + + salience_mean+ age + stress_mean+ sex + order_var +timebetween, family=binomial,data=wtp_rej_longdata)
summary(saliencecondition_choicetype_withregressors)
condition_choiceprice <- lmer(formula = decision_price ~ condition_recode +  (1 | participant), data = wtp_rej_longdata)

condition_choiceprice_withregressors <- lmer(decision_price ~ condition_recode + age + order_var + sex + timebetween + (1 | participant),
                                             data = wtp_rej_longdata)

affect_choicetype <- glm(formula = socialchoice ~ stress_mean, family=binomial,data=wtp_rej_longdata)

affect_choicetype_withregressors <- glm(formula = socialchoice ~ stress_mean + age + sex +order_var +timebetween, family=binomial,data=wtp_rej_longdata)

affect_choiceprice <- lmer(formula = decision_price ~ stress_mean +  (1 | participant), data = wtp_rej_longdata)

interaction_choicetype_withregressors <- glm(formula = socialchoice ~ condition_recode * stress_mean + age + sex +order_var +timebetween, family=binomial,data=wtp_rej_longdata)

salienceinteraction_choicetype_withregressors <- glm(formula = socialchoice ~ condition_recode * salience_mean + age + sex +order_var +timebetween, family=binomial,data=wtp_rej_longdata)

saliencestressinteraction_choicetype_withregressors <- glm(formula = socialchoice ~ stress_mean * salience_mean + age + condition_recode+ sex +order_var +timebetween, family=binomial,data=wtp_rej_longdata)
