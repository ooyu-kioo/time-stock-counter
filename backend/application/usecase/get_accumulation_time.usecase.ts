import { AccumulationTime } from '../../domain/accumulation/accumulation_time.value';
import { AccumulationTimeRepositoryIF } from '../../domain/accumulation/accumulation_time_repository.IF';
import { AccumulationTimeRepository } from '../../infrastructure/repository/accumulation_time_repository';

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
