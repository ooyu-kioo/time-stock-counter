import { NextApiRequest, NextApiResponse } from "next"
import { GetAccumulationPointsUsecase } from "../../backend/application/usecase/get_accumulation_points.usecase"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const usecase = new GetAccumulationPointsUsecase({})
  const result = await usecase.execute()
  console.log(result)
  return result
}
