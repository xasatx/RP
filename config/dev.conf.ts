import {baseConfig} from "./base.conf";
import * as _ from "lodash";

const config = _.merge(baseConfig, {
    baseUrl: 'https://www.booking.com',

    commonCapabilities: {
        'browserName' : 'chrome',
        'chromeOptions': {
            'args': [
                'disable-extensions-file-access-check',
                'disable-extensions',
                'disable-extensions-http-throttling',
                'disable-infobars',
                'enable-automation',
            ],
            'prefs': {
                'credentials_enable_service': false,
                'profile.password_manager_enabled': false
            }
        },
    },

    multiCapabilities: [
        {
            specs: ['../specs/booking.com/testTask.spec.js'],
            logName: 'testTask'
        }
    ]
});

config.multiCapabilities.forEach((capability, i, arr) => arr[i] = _.merge(capability, config.commonCapabilities));

export {config};