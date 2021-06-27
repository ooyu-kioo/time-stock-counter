import { NextApiRequest, NextApiResponse } from 'next';
import { GetAccumulationTimeUsecase } from '../../backend/application/usecase/get_accumulation_time.usecase';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const usecase = new GetAccumulationTimeUsecase({});
	const result = usecase.execute();
	return result;
};
