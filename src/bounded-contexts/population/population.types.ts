import {z} from "zod";
import {IntegerPositiveDto, UuidDto} from "../../cross-cutting/types/cross-cutting.types.ts";

export const DenizenRolesEnumDto = z.enum(['queen', 'worker', 'scout']);
export type DenizenRolesEnumDtoType = z.infer<typeof DenizenRolesEnumDto>;

export const DenizenDto = z.object({
    uuid: UuidDto,
    role: DenizenRolesEnumDto,
    name: z.string().nullish(),
    bio: z.string().nullish(),
    carryCapacityInGrams: IntegerPositiveDto,
})
export type DenizenDtoType = z.infer<typeof DenizenDto>;

export const CensusDto = z.object({
    scouts: IntegerPositiveDto,
    harvesters: IntegerPositiveDto,
});
export type CensusDtoType = z.infer<typeof CensusDto>;

export const WorkersInFieldDto = CensusDto;
export type WorkersInFieldDtoType = z.infer<typeof CensusDto>;

