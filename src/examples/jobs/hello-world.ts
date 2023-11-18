import { workflow } from '../main';
import { z } from 'zod';

export default workflow.createJob('helloWorld', {
  env: z.object({
    name: z.string(),
  }),
  handler: ({ env }) => {
    console.log(env.name);
    return {
      title: 'Hello World',
    };
  },
});