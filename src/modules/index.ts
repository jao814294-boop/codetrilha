import pythonModule from './python/config';
import flaskModule from './flask/config';
import djangoModule from './django/config';
import type { ModuleConfig } from './types';

const modules: ModuleConfig[] = [pythonModule, flaskModule, djangoModule];

export default modules;
