import { AccumulationTime } from '../../domains/accumulation_time/accumulation_time.value';
import { AccumulationTimeRepositoryIF } from '../../domains/accumulation_time/accumulation_time_repository.IF';
import { AccumulationTimeRepository } from '../../infrastructures/repositories/accumulation_time_repository';

interface GetAccumulationTimeUsecaseDependencies {
	accumulationTimeRepository?: AccumulationTimeRepositoryIF;
}

export class GetAccumulationTimeUsecase {
	private readonly accumulationTimeRepository: AccumulationTimeRepositoryIF;

	constructor({
		accumulationTimeRepository = new AccumulationTimeRepository({}),
	}: GetAccumulationTimeUsecaseDependencies) {
		this.accumulationTimeRepository = accumulationTimeRepository;
	}

	public async execute(): Promise<AccumulationTime[]> {
		return this.accumulationTimeRepository.findAll();
	}
}
