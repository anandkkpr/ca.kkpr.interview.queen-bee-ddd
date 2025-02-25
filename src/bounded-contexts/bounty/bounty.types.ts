import {z} from "zod";
import {IntegerPositiveDto, UuidDto} from "../../cross-cutting/types/cross-cutting.types.ts";

export const PollenCacheDto = z.object({
    uuid: UuidDto,
    grams: IntegerPositiveDto,
})
export type PollenCacheDtoType = z.infer<typeof PollenCacheDto>;

export const LocationDto = z.object({
    uuid: UuidDto,
    name: z.string(),
    pollenBounty: z.array(PollenCacheDto),
    isFound: z.boolean(),
})
export type LocationDtoType = z.infer<typeof LocationDto>;