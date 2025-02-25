import {z} from "zod";
import {IntegerPositiveDto, UuidDto} from "../../cross-cutting/types/cross-cutting.types.ts";

export const PollenCacheDto = z.object({
    uuid: UuidDto,
    cacheSizeInGrams: IntegerPositiveDto,
})
export type PollenCacheDtoType = z.infer<typeof PollenCacheDto>;

export const LocationDto = z.object({
    uuid: UuidDto,
    pollenBounty: z.array(PollenCacheDto),
})
export type LocationDtoType = z.infer<typeof LocationDto>;