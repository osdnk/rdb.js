import { Model } from './Model';

let M = null;
const createModel = () => new Model();
const globalize = x => M = x;
export { createModel, M, globalize };
