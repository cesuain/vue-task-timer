import IProject from "./IProject";

export default interface ITask {
    description: string;
    secondsDuration: number;
    project: IProject;
}