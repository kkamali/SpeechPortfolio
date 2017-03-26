const LUISClient = require("../../luis_sdk");

const APPID = "32b9a539-a05d-4e16-84af-9b17b9be6600";
const APPKEY = "7986f020c1334d33aa768499fd1fa22d";

function QuestionController() {
    this.ask = function(req, res) {
        var LUISclient = LUISClient({
            appId: APPID,
            appKey: APPKEY,
            verbose: true
        });

        LUISclient.predict(req.body.question, {
            //On success of prediction
            onSuccess: function (response) {
                var answer = printOnSuccess(response);
                res.json(answer);
            },

            //On failure of prediction
            onFailure: function (err) {
                console.error(err);
                    res.json(err);
                }
        });
    };

    var printOnSuccess = function (response) {
        answer = {
            print_answer: ""
        };
        if (response.topScoringIntent.intent == "None") {
            answer.print_answer = "I'm sorry, I did not understand your question! You can ask things like 'what's Kathleen's work history? or 'where did Kathleen go to school?'";
        } else if (response.topScoringIntent.intent == "work_history") {
            answer.print_answer = "Kathleen has worked at Nuance, as an Associate Speech Scientist. She worked in New York from March 2015 to September 2016. She has also worked as a Language Data Specialist at VoiceBox, which she did part-time during her Masters degree from January 2014 to Feburary 2015."; 
        }
        return answer;
    };
}


module.exports = new QuestionController();
