import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const workflow = fs.readFileSync(new URL('../.github/workflows/deploy.yml', import.meta.url), 'utf8');

test('Pages deployment installs the lockfile reproducibly and verifies tests, types, and build', () => {
  assert.doesNotMatch(workflow, /workflow_dispatch/);
  for (const action of workflow.matchAll(/uses:\s*([^\s]+)/g)) {
    assert.match(action[1], /^[^@]+@[0-9a-f]{40}$/);
  }
  assert.match(workflow, /node-version:\s*22/);
  assert.match(workflow, /run:\s*npm ci/);
  assert.doesNotMatch(workflow, /run:\s*npm install(?:\s|$)/);
  assert.match(workflow, /run:\s*npm test/);
  assert.match(workflow, /run:\s*npm run typecheck/);
  assert.match(workflow, /run:\s*npm run build/);
  assert.ok(workflow.indexOf('run: npm test') < workflow.indexOf('run: npm run build'));
  assert.ok(workflow.indexOf('run: npm run typecheck') < workflow.indexOf('run: npm run build'));
});
