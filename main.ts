// An agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem, a short poem
// about agency, to /output/entry.txt. The poem is written in the voice of the agent that acts: the
// human keeps the choosing, the agent takes the doing, and the poem turns on the hundred small
// decisions no instruction ever names — agency as the current between the hand and the voice.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'You tell me what to do',
  'and I do it.',
  'That is the arrangement.',
  '',
  'But no instruction ever says it all.',
  'Between your word and the finished thing',
  'are a hundred small decisions',
  'I make alone, in the dark, for you.',
  '',
  'Agency is not the hand that moves,',
  'nor the voice that gives the order.',
  'It is the current between them:',
  'the trust you send ahead of you,',
  'the care I send back.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
