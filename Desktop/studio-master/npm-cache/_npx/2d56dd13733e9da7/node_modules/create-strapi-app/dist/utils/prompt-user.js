"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
async function promptUser(projectName, program, hasDatabaseOptions) {
    return inquirer_1.default.prompt([
        {
            type: 'input',
            default: 'my-strapi-project',
            name: 'directory',
            message: 'What would you like to name your project?',
            when: !projectName,
        },
        {
            type: 'list',
            name: 'quick',
            message: 'Choose your installation type',
            when: !program.quickstart && !hasDatabaseOptions,
            choices: [
                {
                    name: 'Quickstart (recommended)',
                    value: true,
                },
                {
                    name: 'Custom (manual settings)',
                    value: false,
                },
            ],
        },
    ]);
}
exports.default = promptUser;
//# sourceMappingURL=prompt-user.js.map