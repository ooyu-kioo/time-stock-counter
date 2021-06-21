import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { GetAccumulationTimeUsecase } from '../../backend/applications/usecases/get_accumulation_time.usecase';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const usecase = new GetAccumulationTimeUsecase({});
	const result = usecase.execute();
	return result;
};
