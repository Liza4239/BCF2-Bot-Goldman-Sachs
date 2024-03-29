const {
    bot,
    link,
    Extra
} = require('../../../../../configs/telegram/bot');

const {
    msgStart,
    msgProgrammes,
    msgRoles,
    msgNewAnalyst,
    msgSummerAnalyst,
    msgOffCycle,
    msgBasicQualifications,
    msgJobResponsibilities,
    msgSoftwareEngineering,
    msgCyberSecurity,
    msgQuantitativeStrategists,
    msgSystemsEngineering,
    msgUsefulLinks
} = require('./config');

const { visitor }= require('../../../../../configs/google/analytics');

bot.action('ActionHandlerOurProgrammes',
    ctx => {
        visitor
            .event(link, "Click Action", "/our-programmes")
            .send();
        ctx.editMessageText(
            msgProgrammes,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.callbackButton(
                            'New Analyst Programme (starting in July 2021)',
                            'ActionHandlerNewAnalystProgramme'
                        )
                    ]
                    ,
                    [
                        m.callbackButton(
                            'Summer Analyst Programme (July - September 2021)',
                            'ActionHandlerSummerAnalystProgramme'
                        )
                    ]
                    ,
                    [
                        m.callbackButton(
                            'Off-Cycle Internship Programme',
                            'ActionHandlerOff-CycleInternshipProgramme'
                        )
                    ],
                    [
                        m.callbackButton(
                            '🔙 Back',
                            'ActionHandlerBack'
                        )
                    ]
                ])
            )
        );
    });

bot.action("ActionHandlerNewAnalystProgramme",
    ctx => {
        visitor
            .event(link, "Click Action", "/new-analyst-programme")
            .send();
        ctx.editMessageText(
            msgNewAnalyst,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.urlButton(
                            'Link to application',
                            'https://www.goldmansachs.com/careers/students/programs/emea/new-analyst-programme.html'
                        )
                    ],
                    [
                        m.callbackButton(
                            '🔙 Back',
                            'ActionHandlerOurProgrammes'
                        )
                    ]
                ])
            )
        );
    });

bot.action("ActionHandlerSummerAnalystProgramme",
    ctx => {
        visitor
            .event(link, "Click Action", "/summer-analyst-programme")
            .send();
        ctx.editMessageText(
            msgSummerAnalyst,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.urlButton(
                            'Link to application',
                            'https://www.goldmansachs.com/careers/students/programs/emea/summer-analyst-programme.html'
                        ),
                    ],
                    [
                        m.callbackButton(
                            '🔙 Back',
                            'ActionHandlerOurProgrammes'
                        )
                    ]
                ])
            )
        );
    });

bot.action("ActionHandlerOff-CycleInternshipProgramme",
    ctx => {
        visitor
            .event(link, "Click Action", "/off-cycle-internship-programme")
            .send();
        ctx.editMessageText(
            msgOffCycle,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.urlButton(
                            'Link to application',
                            'https://www.goldmansachs.com/careers/students/programs/emea/off-cycle-internships.html'
                        ),
                    ],
                    [
                        m.callbackButton(
                            '🔙 Back',
                            'ActionHandlerOurProgrammes'
                        )
                    ]
                ])
            )
        );
    });

bot.action('ActionHandlerJobResponsibilities',
    ctx => {
        visitor
            .event(link, "Click Action", "/job-responsibilities")
            .send();
        ctx.editMessageText(msgJobResponsibilities,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('🔙 Back', 'ActionHandlerBack')
                ])
            )
        );

    });

bot.action('ActionHandlerBasicQualifications',
    ctx => {
        visitor
            .event(link, "Click Action", "/basic-qualifications")
            .send();
        ctx.editMessageText(msgBasicQualifications,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('🔙 Back', 'ActionHandlerBack')
                ])
            )
        );
    });

bot.action('ActionHandlerRoles',
    ctx => {
        visitor
            .event(link, "Click Action", "/roles")
            .send();
        ctx.editMessageText(
            msgRoles,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.callbackButton(
                            'Software Engineering',
                            'ActionHandlerSoftwareEngineering'
                        ),
                        m.callbackButton(
                            'Cyber Security',
                            'ActionHandlerCyberSecurity'
                        ),
                    ],
                    [
                        m.callbackButton(
                            'Quantitative Strategists',
                            'ActionHandlerQuantitativeStrategists'
                        ),
                        m.callbackButton(
                            'Systems Engineering ',
                            'ActionHandlerSystemsEngineering'
                        )
                    ],
                    [
                        m.callbackButton(
                            '🔙 Back',
                            'ActionHandlerBack'
                        )
                    ]
                ])
            )
        );
    });

bot.action('ActionHandlerSoftwareEngineering',
    ctx => {
        visitor
            .event(link, "Click Action", "/software-engineering")
            .send();
        ctx.editMessageText(
            msgSoftwareEngineering,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('🔙 Back', 'ActionHandlerRoles')
                ])
            )
        );
    });

bot.action('ActionHandlerCyberSecurity',
    ctx => {
        visitor
            .event(link, "Click Action", "/cyber-security")
            .send();
        ctx.editMessageText(msgCyberSecurity,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('🔙 Back', 'ActionHandlerRoles')
                ])
            )
        );
    });

bot.action('ActionHandlerQuantitativeStrategists',
    ctx => {
        visitor
            .event(link, "Click Action", "/quantitative-strategist")
            .send();
        ctx.editMessageText(msgQuantitativeStrategists,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('🔙 Back', 'ActionHandlerRoles')
                ])
            )
        );
    });

bot.action('ActionHandlerSystemsEngineering',
    ctx => {
        visitor
            .event(link, "Click Action", "/systems-engineering")
            .send();
        ctx.editMessageText(msgSystemsEngineering,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    m.callbackButton('🔙 Back', 'ActionHandlerRoles')
                ])
            )
        );
    });

bot.action('ActionHandlerBack',
    ctx => {
        ctx.editMessageText(
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
    }
);

bot.action('ActionHandlerUsefulLinks',
    ctx => {
        visitor
            .event(link, "Click Action", "/useful-links")
            .send();
        ctx.editMessageText(
            msgUsefulLinks,
            Extra.HTML().markup((m) =>
                m.inlineKeyboard([
                    [
                        m.urlButton(
                            'Careers Home Page',
                            'http://www.goldmansachs.com/careers/'
                        )
                    ],
                    [
                        m.urlButton(
                            'About our divisions',
                            'https://www.goldmansachs.com/careers/divisions/index.html'
                        )
                    ],
                    [
                        m.urlButton(
                            'Programs we offer',
                            'https://www.goldmansachs.com/careers/students/programs/index.html'
                        )
                    ],
                    [
                        m.urlButton(
                            'Events Calendar',
                            'https://recruiting360.avature.net/candidates'
                        )
                    ],
                    [
                        m.urlButton(
                            'Application Checklist',
                            'https://www.goldmansachs.com/careers/students/prepare/application-checklist.html'
                        )
                    ],
                    [
                        m.urlButton(
                            'Tips for HireVue',
                            'https://www.goldmansachs.com/careers/blog/posts/virtual-interviewing.html'
                        )
                    ],
                    [
                        m.urlButton(
                            'Sample Tests',
                            'https://www.hackerrank.com/test/sample'
                        ),
                        m.urlButton(
                            'How to best prepare',
                            'https://www.goldmansachs.com/careers/blog/posts/guide-to-hackerrank.html'
                        )
                    ],
                    [
                        m.callbackButton(
                            '🔙 Back',
                            'ActionHandlerBack'
                        )
                    ]
                ])
            )
        )
    });