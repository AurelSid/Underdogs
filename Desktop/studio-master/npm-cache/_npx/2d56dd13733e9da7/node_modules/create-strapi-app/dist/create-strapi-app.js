"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const commander_1 = __importDefault(require("commander"));
const generate_new_1 = require("@strapi/generate-new");
const prompt_user_1 = __importDefault(require("./utils/prompt-user"));
const packageJson = JSON.parse((0, node_fs_1.readFileSync)((0, node_path_1.resolve)(__dirname, '../package.json'), 'utf8'));
const command = new commander_1.default.Command(packageJson.name);
const databaseOptions = [
    'dbclient',
    'dbhost',
    'dbport',
    'dbname',
    'dbusername',
    'dbpassword',
    'dbssl',
    'dbfile',
];
command
    .version(packageJson.version)
    .arguments('[directory]')
    .option('--no-run', 'Do not start the application after it is created')
    .option('--use-npm', 'Force usage of npm instead of yarn to create the project')
    .option('--debug', 'Display database connection error')
    .option('--quickstart', 'Quickstart app creation')
    .option('--dbclient <dbclient>', 'Database client')
    .option('--dbhost <dbhost>', 'Database host')
    .option('--dbport <dbport>', 'Database port')
    .option('--dbname <dbname>', 'Database name')
    .option('--dbusername <dbusername>', 'Database username')
    .option('--dbpassword <dbpassword>', 'Database password')
    .option('--dbssl <dbssl>', 'Database SSL')
    .option('--dbfile <dbfile>', 'Database file path for sqlite')
    .option('--dbforce', 'Overwrite database content if any')
    .option('--template <templateurl>', 'Specify a Strapi template')
    .option('--ts, --typescript', 'Use TypeScript to generate the project')
    .description('create a new application')
    .action((directory, programArgs) => {
    initProject(directory, programArgs);
})
    .parse(process.argv);
function generateApp(projectName, options) {
    if (!projectName) {
        console.error('Please specify the <directory> of your project when using --quickstart');
        process.exit(1);
    }
    return (0, generate_new_1.generateNewApp)(projectName, options).then(() => {
        if (process.platform === 'win32') {
            process.exit(0);
        }
    });
}
async function initProject(projectName, programArgs) {
    if (projectName) {
        await (0, generate_new_1.checkInstallPath)((0, node_path_1.resolve)(projectName));
    }
    const programFlags = command
        .createHelp()
        .visibleOptions(command)
        .reduce((acc, { short, long }) => [...acc, short, long], [])
        .filter(Boolean);
    if (programArgs.template && programFlags.includes(programArgs.template)) {
        console.error(`${programArgs.template} is not a valid template`);
        process.exit(1);
    }
    const hasDatabaseOptions = databaseOptions.some((opt) => programArgs[opt]);
    if (programArgs.quickstart && hasDatabaseOptions) {
        console.error(`The quickstart option is incompatible with the following options: ${databaseOptions.join(', ')}`);
        process.exit(1);
    }
    if (hasDatabaseOptions) {
        programArgs.quickstart = false; // Will disable the quickstart question because != 'undefined'
    }
    if (programArgs.quickstart) {
        return generateApp(projectName, programArgs);
    }
    const prompt = await (0, prompt_user_1.default)(projectName, programArgs, hasDatabaseOptions);
    const directory = prompt.directory || projectName;
    await (0, generate_new_1.checkInstallPath)((0, node_path_1.resolve)(directory));
    const options = {
        template: programArgs.template,
        quickstart: prompt.quick || programArgs.quickstart,
    };
    const generateStrapiAppOptions = {
        ...programArgs,
        ...options,
    };
    return generateApp(directory, generateStrapiAppOptions);
}
//# sourceMappingURL=create-strapi-app.js.map