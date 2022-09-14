import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors'
import {
  changeHourToMinutes,
  changeMinutesToHour,
} from './utils/time-converter';

const app = express();
app.use(express.json());
app.use(cors())

const prisma = new PrismaClient();

/// Adicionar um anúncio
app.post('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id;
  const body: any = req.body;

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStart: changeHourToMinutes(body.hourStart),
      hourEnd: changeHourToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
    },
  });

  return res.status(201).json(ad);
});

///Buscar Games Cadastrados
app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return res.json(games);
});

/// Buscar anúncios de um game
app.get('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return res.json(
    ads.map((itens) => {
      return {
        ...itens,
        weekDays: itens.weekDays.split(','),
        hourStart: changeMinutesToHour(itens.hourStart),
        hourEnd: changeMinutesToHour(itens.hourEnd),
      };
    })
  );
});

///Buscar User Discord
app.get('/ads/:id/discord', async (req, res) => {
  const adId = req.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });

  return res.json({
    discord: ad.discord,
  });
});

app.listen(3333);
