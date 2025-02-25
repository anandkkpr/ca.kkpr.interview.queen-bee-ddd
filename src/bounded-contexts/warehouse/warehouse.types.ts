import {z} from "zod";
import {IntegerPositiveDto, UuidDto} from "../../cross-cutting/types/cross-cutting.types.ts";
import {PollenCacheDto} from "../bounty/bounty.types.ts";


export const WarehouseUnitDto = z.object({
    uuid: UuidDto,
    name: z.string(),
    dateUpdated: z.string(),
    maxCapacityInGrams: IntegerPositiveDto,
    pollenCache: z.array(PollenCacheDto),
});
export type WarehouseUnitDtoType = z.infer<typeof WarehouseUnitDto>;

