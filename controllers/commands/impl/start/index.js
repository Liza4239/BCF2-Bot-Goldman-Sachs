const {
    bot,
    Extra
} = require('../../../../configs/telegram/bot');

const conf = require('./config');
const {
    visitor
} = require('../../../../configs/google/analytics');
const { msgStart } = require('./config');

bot.command('start',
    ctx => {
        ctx.reply(
            msgStart,
            Extra.HTML().markup((m) =>
                [
                    [


                        m.inlineKeyboard([
                            m.callbackButton('Our programmes', 'ActionHandlerOurProgrammes'),
                            m.callbackButton("Roles", "ActionHandlerRoles")
                        ])
                    ]
                ],

                [
                  [
                    m.inlineKeyboard([
                        m.inlineKeyboard([
    
                            m.callbackButton("Job responsibilities", "ActionHandlerJobResponsibilities"),
                            m.callbackButton("Basic qualifications", "ActionHandlerBasicQualifications"),
                            m.callbackButton("Useful links", "ActionHandlerUsefulLinks")])
                    ])
                  ]  
                ]
               




            )
        )
    }
);
