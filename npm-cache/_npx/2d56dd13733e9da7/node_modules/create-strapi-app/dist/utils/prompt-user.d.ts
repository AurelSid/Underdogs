import type { Program } from '../types';
interface Answers {
    directory: string;
    quick: boolean;
}
export default function promptUser(projectName: string, program: Program, hasDatabaseOptions: boolean): Promise<Answers>;
export {};
