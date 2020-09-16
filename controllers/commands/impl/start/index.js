const {
    bot,
    link,
    Extra
} = require('../../../../configs/telegram/bot');

const { visitor } = require('../../../../configs/google/analytics');
const { msgStart } = require('./config');

bot.command('start',
    ctx => {
        visitor
            .event(link, "Click Slash Command", "/support")
            .send();
        ctx.reply(
            msgStart,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.callbackButton(
                            'Our programmes',
                            'ActionHandlerOurProgrammes'
                        ),
                        m.callbackButton(
                            "Roles",
                            "ActionHandlerRoles"
                        )
                    ],
                    [
                        m.callbackButton(
                            "Job responsibilities",
                            "ActionHandlerJobResponsibilities"
                        ),
                        m.callbackButton(
                            "Basic qualifications",
                            "ActionHandlerBasicQualifications"
                        ),
                    ],
                    [
                        m.callbackButton(
                            "Useful links",
                            "ActionHandlerUsefulLinks"
                        )
                    ]
                ])
            )
        )
    });
