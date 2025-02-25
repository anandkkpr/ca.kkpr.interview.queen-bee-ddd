import {z} from "zod";
import {UuidDto} from "../../cross-cutting/types/cross-cutting.types.ts";
import {PollenCacheDto} from "../bounty/bounty.types.ts";


export const WarehouseUnitDto = z.object({
    uuid: UuidDto,
    pollenCache: PollenCacheDto,
});
export type CensusDtoType = z.infer<typeof WarehouseUnitDto>;

export const WorkersInFieldDto = WarehouseUnitDto;
export type WorkersInFieldDtoType = z.infer<typeof WarehouseUnitDto>;

