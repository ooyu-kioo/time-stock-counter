import { PrismaClient } from '@prisma/client';

export class PrismaClientFactory {
	create(): PrismaClient {
		return new PrismaClient();
	}
}
