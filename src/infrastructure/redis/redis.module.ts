import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-ioredis-yet';

@Module({
  imports: [
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => ({
        store: await redisStore({
          host: 'localhost', // ou 'redis' se estiver em container
          port: 42042,
          ttl: 15, // segundos
        }),
      }),
    }),
  ],
})
export class RedisModule {}
