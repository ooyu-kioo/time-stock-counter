import { PrismaClient } from '@prisma/client';
import { AccumulationTime } from '../../domain/accumulation/accumulation_time.value';
import { AccumulationTimeRepositoryIF } from '../../domain/accumulation/accumulation_time_repository.IF';
import { PrismaClientFactory } from '../driver/prisma_client_factory';

// todo：extendでprisma初期化試してみる
interface AccumulationTimeRepositoryDependencies {
	prismaClient?: PrismaClient;
}

export class AccumulationTimeRepository
	implements AccumulationTimeRepositoryIF
{
	private prismaClient: PrismaClient;

	constructor({
		prismaClient: prismaClient = new PrismaClientFactory().create(),
	}: AccumulationTimeRepositoryDependencies) {
		this.prismaClient = prismaClient;
	}

	async findAll(): Promise<AccumulationTime[]> {
		const records = await this.prismaClient.accumulation_time.findMany({
			select: {
				start: true,
				end: true,
			},
		});
		return records.map((record) => {
			return new AccumulationTime({ start: record.start, end: record.end });
		});
	}
}
