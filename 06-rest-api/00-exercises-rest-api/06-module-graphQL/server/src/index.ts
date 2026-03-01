import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import { db } from './db.js';
import { CharacterListResponse } from './model.js';
import { createHandler } from 'graphql-http/lib/use/fetch';
import { schema } from './graphql/schema.js';
import { resolvers } from './graphql/resolvers.js';

const app = new Hono();
app.use(logger());

app.use('/api/*', cors());
app.use('/graphql', cors());

app.get('/api/character', async (context) => {
  const response: CharacterListResponse = {
    info: {
      count: db.characters.length,
    },
    results: db.characters,
  };
  return context.json(response);
});

app.get('/api/character/:id', (context) => {
  return context.json(
    db.characters.find((c) => c.id === Number(context.req.param('id')))
  );
});

app.get('/api/episode', async (context) => {
  return context.json({ results: [] });
});

app.post('/api/character', async (context) => {
  const character = await context.req.json();
  const newCharacter = {
    ...character,
    id: db.characters.length + 1,
  };
  db.characters = [...db.characters, newCharacter];
  return context.json(newCharacter, 201);
});

app.post('/graphql', (context) => {
  const handler = createHandler({ schema, rootValue: resolvers });
  return handler(context.req.raw);
});

app.put('/api/character/:id', async (context) => {
  const id = Number(context.req.param('id'));
  const character = await context.req.json();
  db.characters = db.characters.map((c) =>
    c.id === id ? { ...c, ...character } : c
  );
  return context.body(null, 204);
});

app.delete('/api/character/:id', (context) => {
  const id = Number(context.req.param('id'));
  db.characters = db.characters.filter((c) => c.id !== id);
  return context.body(null, 204);
});

serve({ fetch: app.fetch, port: 3000 }, (info) => {
  console.log(`API running on ${info.port}`);
});
