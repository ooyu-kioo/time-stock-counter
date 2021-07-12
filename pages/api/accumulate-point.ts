import { NextApiRequest, NextApiResponse } from "next"
import { AccumulatePointUsecase } from "../../backend/application/usecase/accumulate_point.usecase"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { start, end } = req.body
  const usecase = new AccumulatePointUsecase({})
  const result = await usecase.execute({ start, end })

  console.log(result)

  return result
}
