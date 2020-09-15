const {
    bot,
    Extra
} = require('../../../../../configs/telegram/bot');

const {  msgStart,msgProgrammes, msgNewAnalyst, msgSummerAnalyst,msgOffCycle,
     msgBasicQualifications,msgJobResponsibilities, msgSoftwareEngineering,
    msgCyberSecurity,msgQuantitativeStrategists,msgSystemsEngineering} = require('./config');
//const { visitor }= require('../../../../../configs/google/analytics');
const conf=require('../situation-1/config');

bot.action('ActionHandlerOurProgrammes',
    ctx => { 
        ctx.reply(
            msgProgrammes,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.callbackButton('New Analyst Programme (starting in July 2021)', 'ActionHandlerNewAnalystProgramme')
                    ]
                   ,
                   [
                    m.callbackButton('Summer Analyst Programme (July - September 2021)', 'ActionHandlerSummerAnalystProgramme')
                   ]
                    ,
                    [
                        m.callbackButton('Off-Cycle Internship Programme', 'ActionHandlerOff-CycleInternshipProgramme')
                    ]
                    [
                        m.callbackButton('back', 'ActionHandlerBack')   
                    ]

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
                    m.urlButton('Read more', 'https://www.goldmansachs.com/careers/students/programs/emea/new-analyst-programme.html'),
                    m.callbackButton('back', 'ActionHandlerBack')
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
                    m.urlButton('Read more', 'https://www.goldmansachs.com/careers/students/programs/emea/summer-analyst-programme.html'),
                    m.callbackButton('back', 'ActionHandlerBack')
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
                    m.urlButton('Read more', 'https://www.goldmansachs.com/careers/students/programs/emea/off-cycle-internships.html'),
                    m.callbackButton('back', 'ActionHandlerBack')
                ])
            )
        );
    });
bot.action('ActionHandlerJobResponsibilities',
    ctx => {
       
        ctx.reply(msgJobResponsibilities,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('back', 'ActionHandlerBack')
                ])
            )
            );
        
    });

bot.action('ActionHandlerBasicQualifications',
    ctx => {
        ctx.reply(msgBasicQualifications,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('back', 'ActionHandlerBack')
                ])
            )
            );
    });
    bot.action('ActionHandlerRoles',
    ctx => { 
        ctx.reply(
            msgProgrammes,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.callbackButton('Software Engineering', 'ActionHandlerSoftwareEngineering'),
                        m.callbackButton('Cyber Security', 'ActionHandlerCyberSecurity'),
                    ],

                   [
                    m.callbackButton('Quantitative Strategists', 'ActionHandlerQuantitativeStrategists'),
                    m.callbackButton('Systems Engineering ', 'ActionHandlerSystemsEngineering ')
                   ]
                   [
                    
                                m.callbackButton('back', 'ActionHandlerBack')
                         
                   ]

                ])
                
            )
        );
    });


    bot.action('ActionHandlerSoftwareEngineering',
    ctx => {
        ctx.reply(msgSoftwareEngineering,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('back', 'ActionHandlerBack')
                ])
            )
            );
    });
    bot.action('ActionHandlerCyberSecurity',
    ctx => {
        ctx.reply(msgCyberSecurity,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('back', 'ActionHandlerBack')
                ])
            )
            );
    });
    bot.action('ActionHandlerQuantitativeStrategists',
    ctx => {
        ctx.reply(msgQuantitativeStrategists,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('back', 'ActionHandlerBack')
                ])
            )
            );
    });
    bot.action('ActionHandlerSystemsEngineering',
    ctx => {
        ctx.reply(msgSystemsEngineering,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('back', 'ActionHandlerBack')
                ])
            )
            );
    });
    bot.action('ActionHandlerBack',
    ctx => {
        ctx.reply(
            msgStart,
            Extra.HTML().markup((m) =>
               

                        m.inlineKeyboard([
                            [
                                m.callbackButton('Our programmes', 'ActionHandlerOurProgrammes'),
                                m.callbackButton("Roles", "ActionHandlerRoles")
                            ]
                            
                        ,
                    
                        
                        [
                            m.callbackButton("Job responsibilities", "ActionHandlerJobResponsibilities"),
                            m.callbackButton("Basic qualifications", "ActionHandlerBasicQualifications"),
                            m.callbackButton("Useful links", "ActionHandlerUsefulLinks")
                        ]
                           
                   
                    
                    ])
               




            )
        
        )
    }
);
