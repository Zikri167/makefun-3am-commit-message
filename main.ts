import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// AI commit at 3 AM that confidently declares uptime while production is actually down
const message = "fix: 3 AM rollout complete; confidence remains at 100% even though prod is silent. Apologies for the phantom uptime.";

if (message.length === 0 || message.length > 200) {
  throw new Error('Commit message must be between 1 and 200 characters.');
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
writeFileSync(join(outputDir, 'entry.txt'), message);
