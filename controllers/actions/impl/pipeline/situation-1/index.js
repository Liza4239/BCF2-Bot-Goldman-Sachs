const {
    bot,
    Extra
} = require('../../../../../configs/telegram/bot');

const { msgStart, msgProgrammes, msgNewAnalyst, msgSummerAnalyst,msgOffCycle, msgBasicQualifications,msgJobResponsibilities } = require('./config');
//const { visitor }= require('../../../../../configs/google/analytics');
const conf=require('../situation-1/config');

bot.action('ActionHandlerOurProgrammes',
    ctx => { 
        ctx.reply(
            msgProgrammes,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([

                    m.callbackButton('New Analyst Programme (starting in July 2021)', 'ActionHandlerNewAnalystProgramme'),
                    m.callbackButton('Summer Analyst Programme (July - September 2021)', 'ActionHandlerSummerAnalystProgramme'),
                    m.callbackButton('Off-Cycle Internship Programme', 'ActionHandlerOff-CycleInternshipProgramme')

                ])
                
            )
        );
    });

bot.action("ActionHandlerNewAnalystProgramme",
    ctx => {
        
        ctx.reply(
            msgNewAnalyst,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.urlButton('Read more', 'https://www.goldmansachs.com/careers/students/programs/emea/new-analyst-programme.html')
                ])
            )
        );
    });
    bot.action("ActionHandlerSummerAnalystProgramme",
    ctx => {
        
        ctx.reply(
            msgSummerAnalyst,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.urlButton('Read more', 'https://www.goldmansachs.com/careers/students/programs/emea/summer-analyst-programme.html')
                ])
            )
        );
    });
    bot.action("ActionHandlerOff-CycleInternshipProgramme",
    ctx => {
        
        ctx.reply(
            msgOffCycle,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.urlButton('Read more', 'https://www.goldmansachs.com/careers/students/programs/emea/off-cycle-internships.html')
                ])
            )
        );
    });
bot.action('ActionHandlerJobResponsibilities',
    ctx => {
       
        ctx.reply(
            Extra.HTML().markup((m) => 

           msgJobResponsibilities
            )
        );
        
    });

bot.action('ActionHandlerBasicQualifications',
    ctx => {
        ctx.reply(msgBasicQualifications);
    });

